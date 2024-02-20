// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";
import "./Ownable.sol";
import "hardhat/console.sol";

contract TTM_NFT is ERC721, Ownable {
    uint256 public nextTokenId = 0;

    struct Image {
        string uri;
        uint256 price;
    }
    address nftMarketPlaceAddress;
    mapping(uint256 => Image) public images;

    constructor(
        address _nftMarketPlaceAddress
    ) ERC721("TO THE MOON NFT", "TTM_NFT") {
        nftMarketPlaceAddress = _nftMarketPlaceAddress;
    }

    function mint(
        address to,
        string memory uri,
        uint256 price
    ) external onlyOwner {
        _safeMint(to, nextTokenId);
        images[nextTokenId] = Image(uri, price);
        nextTokenId++;
        setApprovalForAll(nftMarketPlaceAddress, true);
        console.log(" ===> Minted ntf to address ", to);
    }

    function setImagePrice(uint256 tokenId, uint256 price) external onlyOwner {
        images[tokenId].price = price;
    }

    function buyImage(uint256 tokenId) external payable {
        require(_exists(tokenId), "Token does not exist");
        require(msg.value >= images[tokenId].price, "Insufficient funds sent");

        address seller = ownerOf(tokenId);
        payable(seller).transfer(msg.value);
        _transfer(seller, msg.sender, tokenId);
    }
}
