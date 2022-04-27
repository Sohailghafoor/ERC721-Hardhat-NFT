require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "KaeCPFQtKOiCYGur63iWwKRiPgcnN_vE";
const ROPSTEN_PRIVATE_KEY =
  "f4906650aca0e053cf0d5e6347757ffdde15ab3069be8bd487fb8ec33cd3762a";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
      },
      {
        version: "0.6.2",
      }
    ]
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // ehterscan API key, obtain from etherscan.io. allow us to connect with our ether scan account.
    apiKey: "WAVCGUSJ45JQ3YXJIYAQ159Z1GUHCZR675",
  },
};
