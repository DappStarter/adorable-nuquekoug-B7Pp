require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember solid imitate private food thank'; 
let testAccounts = [
"0xf5ef6dfc4990868e356cb1b08b8d8aed5b8a973f5937f6fefb8d06d1a4f99cb8",
"0x24e6d53ec2e8ea8ed3c7a9506a5721e873be613d560dc56d9283468869613081",
"0x7f9c299aca640cf7bc163727753d0aa4436edead6d1aafeab9f81d5a1877e310",
"0x49e05e346d94da71ff9204e40f3697068c521f7676636e5887b681c0f291a908",
"0x5dde75052fd702d022a76985b97044c821b306cbdd0180e2c0ae44d631e8da17",
"0x0ab7a45c54bdc65969c054b148722c09bbf4a1f4bb737777eaaf3654d69e8a1e",
"0xea7f410ea4f7e05ca29c08b3100b8b566d1318b21281dc82ce6e70eeb7b74b4d",
"0xc0580245d48074e25eb491e9e3b30f45a22d549e6e11876563752536dd419b5b",
"0x7ecea01e6b7b149c7fc5e1ca71bf09e109ab5d49cf990769afd5cf3b993e9074",
"0xc1cb900ba2df3e7c3a895b38fb0218a70d231f8f7edee044f556fdbf8ec661a4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

