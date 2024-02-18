//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

//counters
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    uint256 public listingPrice;

    constructor(uint256 _listingPrice) {
        listingPrice = _listingPrice;
    }

    struct Item {
        address nftContract;
        uint256 tokenId;
        address payable seller;
        uint256 price;
        bool sold;
    }

    Item[] public items;

    function listNft(
        address nftContract,
        uint256 _tokenId,
        uint256 price
    ) public payable nonReentrant returns (uint256) {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );
        uint256 itemId = _itemIds.current();
        items.push(
            Item(nftContract, _tokenId, payable(msg.sender), price, false)
        );
        ERC721(nftContract).transferFrom(msg.sender, address(this), _tokenId);
        _itemIds.increment();
        return itemId;
    }

    function delistNft(uint256 itemId) public {
        Item storage item = items[itemId];
        require(msg.sender == item.seller, "You are not the seller");
        require(item.sold == false, "Item is already sold");

        ERC721(item.nftContract).transferFrom(
            address(this),
            msg.sender,
            item.tokenId
        );
        delete items[itemId];
    }

    function changeNFTPrice(uint256 itemId, uint256 price) public {
        Item storage item = items[itemId];
        require(msg.sender == item.seller, "You are not the seller");
        item.price = price;
    }

    function fetchItems() public view returns (Item[] memory) {
        return items;
    }

    function fetchAnItem(uint256 itemId) public view returns (Item memory) {
        Item memory item = items[itemId];
        return item;
    }

    function buyNft(uint256 itemId) public payable nonReentrant {
        Item storage item = items[itemId];
        require(item.sold == false, "Item is already sold");
        require(msg.value == item.price, "Price is not correct");

        item.sold = true;
        payable(item.seller).transfer(msg.value);
        ERC721(item.nftContract).transferFrom(
            address(this),
            msg.sender,
            item.tokenId
        );
    }
}
