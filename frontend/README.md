# World Cup Axie Frontend

Simple Next.js app for the World Cup Axie ERC-1155 collection.

## Pages

- `/` homepage
  - horizontal slider of all 48 country images
  - process explanation
  - Axie gift form using `safeTransferFrom(from, collectionContract, axieId)`

- `/inventory`
  - address input
  - queries `balanceOfBatch(address, ids 1..48)`
  - displays owned country NFTs

## Setup

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Fill:

```bash
NEXT_PUBLIC_COLLECTION_ADDRESS=0xYourDeployedERC1155Contract
NEXT_PUBLIC_IMAGE_BASE_URL=https://ipfs.io/ipfs/YOUR_IMAGES_FOLDER_CID
```

For Ronin mainnet:

```bash
NEXT_PUBLIC_CHAIN_ID=2020
NEXT_PUBLIC_RONIN_RPC=https://api.roninchain.com/rpc
```

For Saigon testnet, replace with Saigon chain/RPC values.

## Image naming

The app expects:

```text
1.png ... 48.png
```

matching the alphabetical token IDs.
