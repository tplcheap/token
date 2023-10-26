# Token Contract

## set .env
```
ABI_DIR="./build/"
SCAN_API_KEY=""
PRIVATE_KEY=""
TEST_PRIVATE_KEY=""
MATIC_MAINNET_ALCHEMY_API_KEY=""
MATIC_MUMBAI_ALCHEMY_API_KEY=""
```

## Installing
npm install

## compile
npx truffle compile

## migrate
npx truffle migrate --network mainnet

## verify contract
npx truffle run verify Token@{contract_address} --network mainnet
