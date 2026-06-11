// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

interface IRoninVRFCoordinator {
    function requestRandomSeed(
        uint256 callbackGasLimit,
        uint256 gasPrice,
        address consumer,
        address refundAddress
    ) external payable returns (bytes32 reqHash);

    function estimateRequestRandomFee(
        uint256 callbackGasLimit,
        uint256 gasPrice
    ) external view returns (uint256);
}

/**
 * WorldCupAxie
 *
 * User flow:
 * 1. User sends an Axie NFT to this contract with safeTransferFrom.
 * 2. Contract immediately forwards the Axie to RELEASE_ADDRESS.
 * 3. Contract requests VRF randomness.
 * 4. VRF callback mints 1 random country ERC1155 NFT to the original sender.
 *
 * Important:
 * - Keep this contract funded/configured for Ronin VRF before opening mint.
 * - Metadata files should be 1.json ... 48.json.
 * - Token IDs are 1 ... 48, alphabetically ordered countries.
 */
contract WorldCupAxie is ERC1155, IERC721Receiver, Ownable, ReentrancyGuard {
    using Strings for uint256;

    uint256 public constant COUNTRY_COUNT = 48;

    /// @notice Marketplace-friendly collection name.
    string public name;

    /// @notice Marketplace-friendly collection symbol.
    string public symbol;

    address public immutable axieContract;
    address public releaseAddress;

    IRoninVRFCoordinator public vrfCoordinator;
    uint256 public vrfCallbackGasLimit;

    uint64 public mintStart;
    uint64 public mintEnd;

    struct PendingMint {
        address minter;
        uint256 axieTokenId;
    }

    mapping(bytes32 reqHash => PendingMint) public pendingMints;

    event AxieReceived(address indexed minter, uint256 indexed axieTokenId, bytes32 indexed reqHash);
    event CountryMinted(address indexed minter, uint256 indexed countryId, uint256 indexed axieTokenId, bytes32 reqHash);
    event ReleaseAddressUpdated(address indexed oldAddress, address indexed newAddress);
    event VrfConfigUpdated(address coordinator, uint32 callbackGasLimit);
    event MintWindowUpdated(uint64 start, uint64 end);
    event CollectionInfoUpdated(string name, string symbol);

    error MintNotOpen();
    error InvalidAxieContract();
    error InvalidFrom();
    error InvalidReleaseAddress();
    error InvalidVRFCoordinator();
    error InvalidRandomWords();
    error UnknownRequest();

    constructor(
        address initialOwner,
        string memory name_,
        string memory symbol_,
        address axieContract_,
        address releaseAddress_,
        string memory baseUri_,
        address vrfCoordinator_,
        uint256 vrfCallbackGasLimit_,
        uint64 mintStart_,
        uint64 mintEnd_
    ) ERC1155(baseUri_) Ownable(initialOwner) {
        if (bytes(name_).length == 0) revert("empty name");
        if (bytes(symbol_).length == 0) revert("empty symbol");
        if (axieContract_ == address(0)) revert InvalidAxieContract();
        if (releaseAddress_ == address(0)) revert InvalidReleaseAddress();
        if (vrfCoordinator_ == address(0)) revert InvalidVRFCoordinator();
        require(mintStart_ < mintEnd_, "bad mint window");

        name = name_;
        symbol = symbol_;
        axieContract = axieContract_;
        releaseAddress = releaseAddress_;
        vrfCoordinator = IRoninVRFCoordinator(vrfCoordinator_);
        vrfCallbackGasLimit = vrfCallbackGasLimit_;
        mintStart = mintStart_;
        mintEnd = mintEnd_;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        require(tokenId >= 1 && tokenId <= COUNTRY_COUNT, "invalid token id");
        return string.concat(super.uri(tokenId), tokenId.toString(), ".json");
    }

    function onERC721Received(
        address,
        address from,
        uint256 tokenId,
        bytes calldata
    ) external override nonReentrant returns (bytes4) {
        if (block.timestamp < mintStart || block.timestamp > mintEnd) revert MintNotOpen();
        if (msg.sender != axieContract) revert InvalidAxieContract();
        if (from == address(0)) revert InvalidFrom();

        IERC721(axieContract).transferFrom(address(this), releaseAddress, tokenId);

        uint256 fee = estimateVRFFee();
        require(address(this).balance >= fee, "insufficient RON for VRF");

        bytes32 reqHash = vrfCoordinator.requestRandomSeed{value: fee}(
            vrfCallbackGasLimit,
            gasPrice(),
            address(this),
            owner()
        );

        pendingMints[reqHash] = PendingMint({
            minter: from,
            axieTokenId: tokenId
        });

        emit AxieReceived(from, tokenId, reqHash);

        return IERC721Receiver.onERC721Received.selector;
    }

    /**
     * Ronin VRF coordinators normally call the consumer back.
     * If the exact Ronin base class/interface differs, adapt this function name/signature
     * to the official Ronin VRF callback before deployment.
     */
    function rawFulfillRandomSeed(bytes32 reqHash, uint256 randomSeed) external {
        if (msg.sender != address(vrfCoordinator)) revert InvalidVRFCoordinator();

        PendingMint memory pending = pendingMints[reqHash];
        if (pending.minter == address(0)) revert UnknownRequest();

        delete pendingMints[reqHash];

        uint256 countryId = (randomSeed % COUNTRY_COUNT) + 1;
        _mint(pending.minter, countryId, 1, "");

        emit CountryMinted(pending.minter, countryId, pending.axieTokenId, reqHash);
    }



    function setURI(string calldata newuri) external onlyOwner {
        _setURI(newuri);
    }

    function setCollectionInfo(string calldata newName, string calldata newSymbol) external onlyOwner {
        require(bytes(newName).length != 0, "empty name");
        require(bytes(newSymbol).length != 0, "empty symbol");
        name = newName;
        symbol = newSymbol;
        emit CollectionInfoUpdated(newName, newSymbol);
    }

    function setReleaseAddress(address newReleaseAddress) external onlyOwner {
        if (newReleaseAddress == address(0)) revert InvalidReleaseAddress();
        emit ReleaseAddressUpdated(releaseAddress, newReleaseAddress);
        releaseAddress = newReleaseAddress;
    }

    function setMintWindow(uint64 start, uint64 end) external onlyOwner {
        require(start < end, "bad mint window");
        mintStart = start;
        mintEnd = end;
        emit MintWindowUpdated(start, end);
    }

    function gasPrice() public view returns (uint256) {
        return 20e9 + block.basefee * 2;
    }

    function estimateVRFFee() public view returns (uint256) {
        return vrfCoordinator.estimateRequestRandomFee(
            vrfCallbackGasLimit,
            gasPrice()
        );
    }

    receive() external payable {}

    function setVrfConfig(
        address coordinator,
        uint256 callbackGasLimit
    ) external onlyOwner {
        if (coordinator == address(0)) revert InvalidVRFCoordinator();

        vrfCoordinator = IRoninVRFCoordinator(coordinator);
        vrfCallbackGasLimit = callbackGasLimit;

        emit VrfConfigUpdated(
            coordinator,
            uint32(callbackGasLimit)
        );
    }
}
