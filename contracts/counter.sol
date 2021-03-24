// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.3;

contract Counter {
    uint public counter = 1;
    
    function incrementCount() public {
        counter += 1;
    }
    
    function getValue() public pure returns(uint){
        uint value = 100;
        return value;
    }
}