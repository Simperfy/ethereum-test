const Web3 = require('web3');
const web3 = new Web3("http://localhost:7545");

const  address1 = '0x4a51900D431c2b01EA8Fe46529a35F6bDbC958C4';
const  address2 = '0x470AE0e1c32Fb2bD1a9e1462F407f0a6DeD034a0';

web3.eth.sendTransaction({
    from: address1,
    to : address2,
    gas: 21000,
    value: web3.utils.toWei('0.01', "ether"),
}).then(console.log);
