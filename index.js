'use strict'

const Web3 = require('web3');
const web3 = new Web3("http://localhost:7545");

// const address = "0x0b4B7b82F54C5B1b0fB052BCA1823eD8f45F67Fb";

// web3.eth.getBalance(address, (err, wei) => {
//     balance = web3.utils.fromWei(wei, 'ether');
//     console.log(balance);
// });

// web3.eth.getAccounts(console.log);

// web3.eth.accounts.create();
let privateKey1 = '0xf396777e4a6940b780efa627e2bc34d4a856a9f8ebfbaece223f6980a8b292c6';
let privateKey2 = '0x8910972f10f72e9dea8ab58bb76f60d4e5a66c5a731eecc63a03a5ea47cc2f64';
// web3.eth.accounts.privateKeyToAccount(privateKey);

// web3.eth.accounts.signTransaction({
//     to: '0x3DbC333e461a4DC89dD08D9B6d283992666D2aD1',
//     value: '10',
//     gas: 21000
// }, privateKey1).then((tx) => {
//     web3.eth.sendTransaction(tx, console.log);
// });

/* {
    messageHash: '0x10dc3e9cc8570d15bed7f867868c57ca1ed4ec33563d92bf068c6bfaf32dc74c',
    v: '0x0a95',
    r: '0xc562e9f1476fc18e5a199351c644b0780f436837a0aad65878fd1f9b7032340c',
    s: '0x44444349d31b9bd39a44e99527c4080e5efa5edd65c055d70d91c9473e3b875f',
    rawTransaction: '0xf866808504a817c800825208943dbc333e461a4dc89dd08d9b6d283992666d2ad10a80820a95a0c562e9f1476fc18e5a199351c644b0780f436837a0aad65878fd1f9b7032340ca044444349d31b9bd39a44e99527c4080e5efa5edd65c055d70d91c9473e3b875f',
    transactionHash: '0xc5e7bf85f6ff940080b13871d392ed1f6df34008a47f19985d512391e2e400bb'
} */

// web3.eth.accounts.recoverTransaction('0xf866808504a817c800825208943dbc333e461a4dc89dd08d9b6d283992666d2ad10a80820a95a0c562e9f1476fc18e5a199351c644b0780f436837a0aad65878fd1f9b7032340ca044444349d31b9bd39a44e99527c4080e5efa5edd65c055d70d91c9473e3b875f');

// web3.eth.accounts.wallet.create(1);

web3.eth.sendTransaction({
    from: '0x4a51900D431c2b01EA8Fe46529a35F6bDbC958C4',
    to: '0x470AE0e1c32Fb2bD1a9e1462F407f0a6DeD034a0',
    gas: 21000,
    value: web3.utils.toWei('0.01', "ether"),
}).then(console.log);