# Dev Blockchain

```sh
npm install -f
```

start hardhat network

```sh
npx hardhat node
```

run test files in ./test

```sh
npx hardhat node
```

deploy contract to localhost:

config file: hardhat.config.ts

deploy script: scripts/deploy.js

```sh
npx hardhat run scripts/deploy.ts --network localhost
```

# Start dapp

1. instal metamask

```sh
cd app
npm install -f
npm run dev
```

# faucet to an address

```sh
  npx hardhat --network localhost faucet <your address>
```

# Docker

updating

# Info

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Coinbase Wallet](https://www.coinbase.com/wallet) or [Metamask](https://metamask.io) installed and listening to
`localhost 8545`.

## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Writing and compiling contracts](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/setting-up-the-environment/)
- [Testing Contracts](https://hardhat.org/tutorial/testing-contracts/)
- [Setting up your wallet](https://hardhat.org/tutorial/boilerplate-project#how-to-use-it)
- [Hardhat's full documentation](https://hardhat.org/docs/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).

## What's Included?

This repository uses our recommended hardhat setup, by using our [`@nomicfoundation/hardhat-toolbox`](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox). When you use this plugin, you'll be able to:

- Deploy and interact with your contracts using [ethers.js](https://docs.ethers.io/v5/) and the [`hardhat-ethers`](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers) plugin.
- Test your contracts with [Mocha](https://mochajs.org/), [Chai](https://chaijs.com/) and our own [Hardhat Chai Matchers](https://hardhat.org/hardhat-chai-matchers) plugin.
- Interact with Hardhat Network with our [Hardhat Network Helpers](https://hardhat.org/hardhat-network-helpers).
- Verify the source code of your contracts with the [hardhat-etherscan](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan) plugin.
- Get metrics on the gas used by your contracts with the [hardhat-gas-reporter](https://github.com/cgewecke/hardhat-gas-reporter) plugin.
- Measure your tests coverage with [solidity-coverage](https://github.com/sc-forks/solidity-coverage).

This project also includes [a sample frontend/Dapp](./frontend), which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Clear activity tab data`.

## Setting up your editor

[Hardhat for Visual Studio Code](https://hardhat.org/hardhat-vscode) is the official Hardhat extension that adds advanced support for Solidity to VSCode. If you use Visual Studio Code, give it a try!

## Getting help and updates

If you need help with this project, or with Hardhat in general, please read [this guide](https://hardhat.org/hardhat-runner/docs/guides/getting-help) to learn where and how to get it.

For the latest news about Hardhat, [follow us on Twitter](https://twitter.com/HardhatHQ), and don't forget to star [our GitHub repository](https://github.com/NomicFoundation/hardhat)!

**Happy _building_!**
