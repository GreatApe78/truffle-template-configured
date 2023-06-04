// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @title Template Smart Contract for testing
/// @author Mateus
/// @notice says Hello World!
/// @dev says Hello World!

contract HelloWorld{

    string private message = "Hello World!";


    function sayHelloWorld() external view returns(string memory){
        
        return message;
    
    }
}