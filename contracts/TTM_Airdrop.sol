// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TTM_Airdrop is Ownable {

    uint256 public gasValue = 0.006 ether;
    mapping (address => uint8) claimers;
    IERC20 public erc20Token;
    uint256 public airdropTokenAmount;
    address public finDepartmentWallet;
    bool public allowPublicMint;

    constructor(
        address _erc20Token,
        uint256 _airdropTokenAmount,
        address _finDepartmentWallet
    )  Ownable(_msgSender()) {
        erc20Token = IERC20(_erc20Token);
        airdropTokenAmount = _airdropTokenAmount;
        finDepartmentWallet = _finDepartmentWallet;
        allowPublicMint = false;
    }
    
    // public mint
    function mint() external payable {
        require(allowPublicMint == true, "Not allowed public mint");
        require(msg.value >= gasValue, "Insufficient funds sent");
        // check balance of erc20Token in this account is enough to airdrop
        require(
            erc20Token.balanceOf(address(this)) >= airdropTokenAmount,
            "Insufficient token amount in the contract"
        );
        require(claimers[msg.sender] < 5, "You can only claim 5 times");

        // transfer taxvalue from sender to finwallet
        payable(finDepartmentWallet).transfer(msg.value);
        erc20Token.transfer(msg.sender, airdropTokenAmount);
        uint8 count = claimers[msg.sender];
        count++;
        claimers[msg.sender] = count;
    }

    // getback
    function getback(uint256 amount) external payable onlyOwner {
        // check balance of erc20Token in this account is enough to transfer back
        require(
            erc20Token.balanceOf(address(this)) >= amount,
            "Insufficient token amount in the contract"
        );

        erc20Token.transfer(finDepartmentWallet, amount);
    }

    function setAllowPublicMint(bool value) external onlyOwner {
        allowPublicMint = value;
    }

    function setGasValue(uint256 _gasValue) external onlyOwner {
        gasValue = _gasValue;
    }

    function setFinWallet(address _finDepartmentWallet) external onlyOwner {
        finDepartmentWallet = _finDepartmentWallet;
    }

    function setAirdropAmount(uint256 _airdropTokenAmount) external onlyOwner {
        airdropTokenAmount = _airdropTokenAmount;
    }

    function getMintedCount(address _address) external view returns (uint8) {
        return claimers[_address];
    }
}