//truffle provider
const HDWalletProvider = require("@truffle/hdwallet-provider");

require("dotenv").config();

//Setting up enviromental variables

const FANTOM_TESTNET_RPC = process.env.FANTOM_TESTNET_RPC;
const BINANCE_TESTNET_RPC = process.env.BINANCE_TESTNET_RPC;
const GOERLI_RPC = process.env.GOERLI_RPC;
const RBTC_TESTNET_RPC = process.env.RBTC_TESTNET_RPC;
const TOMOCHAIN_TESTNET_RPC = process.env.TOMOCHAIN_TESTNET_RPC;
const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ganacheGUI: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, GOERLI_RPC),
      network_id: 5,
    },
    fantomTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, FANTOM_TESTNET_RPC),
      network_id: 4002,
    },
    binanceTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, BINANCE_TESTNET_RPC),
      network_id: 97,
    },
    rbtcTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, RBTC_TESTNET_RPC),
      network_id: 31,
    },
    tomoChainTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, TOMOCHAIN_TESTNET_RPC),
      network_id: 89,
    },
  },

  compilers: {
    solc: {
      version: "0.8.2",
    },
  },
};