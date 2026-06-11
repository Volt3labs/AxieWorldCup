# Audit Notes - WorldCupAxie

Date: 2026-06-11
Scope: `contracts/WorldCupAxie.sol`
Type: lightweight manual review, not a formal audit.

## Changes made in this revision

- Added ERC1155 marketplace-friendly `name()` and `symbol()` public getters.
- Added constructor parameters `name_` and `symbol_`.
- Added `setCollectionInfo()` owner function.
- Added `InvalidRandomWords()` guard for empty VRF callback arrays.
- Updated deploy script and `.env.example` with collection name and symbol.

## Current collection identity

Default values in `scripts/deploy.js`:

- Name: `World Cup Axie Countries`
- Symbol: `WCAXIE`

These can be changed in `.env`:

```env
COLLECTION_NAME=World Cup Axie Countries
COLLECTION_SYMBOL=WCAXIE
```

## Review summary

### Pass

- Axie NFT source is restricted to the configured Axie contract.
- Minting is only triggered by receiving an Axie through ERC721 `safeTransferFrom`.
- Received Axie is forwarded directly to `releaseAddress`.
- VRF callback is restricted to the configured VRF coordinator.
- Reentrancy guard is applied to the ERC721 receiver path.
- Mint window is enforced.
- ERC1155 tokens remain transferable by default.
- Token IDs are constrained to `1..48` in `uri()`.

### Important deployment checks

1. **Ronin VRF interface must be confirmed before mainnet.**  
   The current contract uses a generic `requestRandomWords` / `rawFulfillRandomWords` shape. If Ronin VRF requires a base consumer contract or a different callback signature, adapt before deployment.

2. **VRF subscription must be funded and authorized.**  
   If VRF request fails, the whole Axie deposit transaction reverts. That is safer than accepting Axies without minting.

3. **Release wallet must be correct.**  
   Axies are immediately forwarded to `releaseAddress`. There is no withdrawal function for Axies because the contract should not custody them.

4. **Operator restriction is intentional.**  
   `operator == from` means the Axie holder must send directly from their own wallet. Marketplace/proxy/operator transfers will revert.

5. **Unlimited minting is supported.**  
   Each successful Axie deposit mints one ERC1155 country token with random ID `1..48`. There is no max supply per country.

## Residual risks

- If VRF is unavailable or misconfigured, users cannot mint.
- If a VRF request is accepted but never fulfilled, a user has already released the Axie and the ERC1155 mint remains pending. Test this on Saigon before opening mainnet.
- ERC1155 marketplaces may show only the base collection name unless they read individual metadata names.
- No emergency mint function is included, per current request.

## Recommended tests before mainnet

- Send one real/test Axie to the contract during mint window.
- Confirm it forwards to the release address.
- Confirm VRF callback mints one ERC1155 token to the sender.
- Confirm `name()` returns `World Cup Axie Countries` or your custom name.
- Confirm `symbol()` returns `WCAXIE` or your custom symbol.
- Confirm ERC1155 transfer works after mint.
- Confirm deposits revert outside the mint window.
- Confirm non-Axie ERC721 transfers revert.
