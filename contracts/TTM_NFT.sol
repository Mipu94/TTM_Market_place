// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract TTM_NFT is ERC721 {
    uint256 public nextTokenId = 0;
    uint256 public mintingPrice = 3 ether;

    struct Image {
        string uri;
    }
    address nftMarketPlaceAddress;
    mapping(uint256 => Image) public images;

    constructor(
        address _nftMarketPlaceAddress
    ) ERC721("TO THE MOON NFT", "TTM_NFT") {
        nftMarketPlaceAddress = _nftMarketPlaceAddress;
    }

    function mint(address to, string memory uri) external payable {
        require(msg.value >= mintingPrice, "Insufficient funds sent");
        _safeMint(to, nextTokenId);
        images[nextTokenId] = Image(uri);
        nextTokenId++;
        setApprovalForAll(nftMarketPlaceAddress, true);
    }

    // function setImagePrice(uint256 tokenId, uint256 price) external onlyOwner {
    //     images[tokenId].price = price;
    // }

    // function buyImage(uint256 tokenId) external payable {
    //     require(_exists(tokenId), "Token does not exist");
    //     require(msg.value >= images[tokenId].price, "Insufficient funds sent");

    //     address seller = ownerOf(tokenId);
    //     payable(seller).transfer(msg.value);
    //     _transfer(seller, msg.sender, tokenId);
    // }
}
