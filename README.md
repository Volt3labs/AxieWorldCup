# Ronin World Cup Axie Contract Folder

Hardhat 3-style project for Ronin/Saigon deployment and Sourcify verification.

## Install

```bash
npm install
cp .env.example .env
```

Fill `.env`.

## Metadata

1. Put images in `images/` as `1.png` ... `48.png`.
2. Upload `images/` folder to IPFS.
3. Generate metadata:

```bash
node scripts/build-metadata.js <IMAGES_CID>
```

4. Upload `metadata/` folder to IPFS.
5. Set `.env`:

```bash
BASE_URI=ipfs://<METADATA_CID>/
```

## Compile

```bash
npm run compile
```

Sourcify can verify using Hardhat build-info at:

```text
artifacts/build-info/<hash>.json
```

## Deploy

Saigon testnet:

```bash
npm run deploy:saigon
```

Ronin mainnet:

```bash
npm run deploy:ronin
```

## Sourcify verify

After deploy:

```bash
npx hardhat verify --network saigon --verifier sourcify <CONTRACT_ADDRESS> <constructor args...>
```

Alternative: upload `artifacts/build-info/<hash>.json` in the Sourcify UI.

## Chain IDs

- Ronin mainnet: `2020`
- Saigon testnet: `2021`

## Important VRF note

`contracts/WorldCupAxie.sol` includes a generic Ronin VRF coordinator interface. Before mainnet deployment, confirm the exact Ronin VRF callback function and request parameters from the Ronin VRF docs/dashboard. If Ronin requires inheriting a specific consumer base contract, replace the interface/callback section accordingly.

## Collection name

The ERC1155 exposes marketplace-friendly:

```solidity
name()
symbol()
```

Defaults in `scripts/deploy.js`:

```text
World Cup Axie Countries
WCAXIE
```

Override in `.env`:

```env
COLLECTION_NAME=World Cup Axie Countries
COLLECTION_SYMBOL=WCAXIE
```

## Audit notes

See `AUDIT.md` before mainnet deployment.

## Frontend

A simple Next.js app is included in `frontend/`.

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Set:

```bash
NEXT_PUBLIC_COLLECTION_ADDRESS=0xYourDeployedERC1155Contract
NEXT_PUBLIC_IMAGE_BASE_URL=https://ipfs.io/ipfs/YOUR_IMAGES_FOLDER_CID
```

Pages:

- `/` homepage with country slider and Axie gift flow
- `/inventory` wallet/address inventory query using ERC-1155 `balanceOfBatch`
