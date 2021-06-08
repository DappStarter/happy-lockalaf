require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strategy dash misery history hockey arctic metal genre'; 
let testAccounts = [
"0x919ac4a73f0a4d1dbe289c8e8bb39f9a47aa7b0a4a9785f4df0cd91a31bec2bd",
"0x896bb3ed622cd79169123dff5abe3a0b172f86a5b51426ea153f4d2e17efa3de",
"0x0d7dd4fd4e9d52bc260d79333636bcfead2df83f60e7a8bf048ada3b8f4d9727",
"0x70b5e4bb238c48d7438ffc6fdcef15773f9d14df82d3cf4a64f89fd49c414a97",
"0xcb1bd64a8067840f16efa233a6679a774ab0c0557e7b4a6835c931872c10646d",
"0xb37fc2fffcd5ae1d9d9a95b155e56c49e742eb23b594abd1e496b1774c7424fe",
"0x8ca786fc22fb4113e6c79cdd3aa957e898999346cc88bb1c8be09807e39ee02c",
"0x452ac24cfaf5b4f1c37743cf5e8da0f856b51b671c35fdd80d0a39cbcb53c79a",
"0x314920c8b849c7ee69c73da762f72b8526e3c11f2a5cb93c82d36d466cdc93f6",
"0x584717acf59d4316bb5be83480f0344d7eb94f7618f089488c2a2311aa4ae4e6"
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

