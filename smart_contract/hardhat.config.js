//https://eth-ropsten.alchemyapi.io/v2/unN7XPlE9c7M2FpMoNYu8i8fmCNN72yy

require('@nomiclabs/hardhat-waffle')//plugin to build smart contract tests

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/unN7XPlE9c7M2FpMoNYu8i8fmCNN72yy',
      accounts:[ 'b666da058954db8cbaa72691aed3884b723f522b95e67ddd9974e66056676f65' ]
    }
  }
}