// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract TTM is ERC20, ERC20Burnable, Ownable, ERC20Permit, ERC20Capped {
    uint256 public capacity = 1000000000000 * 10**(decimals());

    constructor(address initialOwner) 
        ERC20("To The Moon", "TTM")
        Ownable(initialOwner)
        ERC20Permit("To The Moon")
        ERC20Capped(capacity)
    {
        _mint(initialOwner, capacity);
    }

    // The following functions are overrides required by Solidity.

 
}