const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      // gas: 8e6,
      gasPrice: 0x01,
      network_id: "*",       // Any network (default: none)
    },

    mainnet: {
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY,
        `https://polygon-mainnet.g.alchemy.com/v2/${process.env.MATIC_MAINNET_ALCHEMY_API_KEY}`
      ),
      network_id: 137,
      networkCheckTimeout: 1000000000,
      gasPrice: 300000000000, // 300 gwei
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 50000,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true
    },

    mumbai: {
      provider: () => new HDWalletProvider(
        process.env.TEST_PRIVATE_KEY,
        `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MATIC_MUMBAI_ALCHEMY_API_KEY}`
      ),
      network_id: 80001,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      }
      //  evmVersion: "byzantium"
      // }
    }
  },

  db: {
    enabled: false
  },

  plugins: [
    "truffle-plugin-verify"
  ],

  verify: {
    proxy: {
      host: '127.0.0.1',
      port: '8889'
    }
  },

  api_keys: {
    polygonscan: process.env.SCAN_API_KEY
  },
};
