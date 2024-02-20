// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract TTM_NFT is ERC721URIStorage, Ownable {
    uint256 public totalMinted = 0;
    uint256 public mintingPrice = 3 ether;
    uint256 public totalNFT = 300;

    struct Image {
        string uri;
    }
    uint256[] public mintedTokens;
    address nftMarketPlaceAddress;

    constructor(
        address _nftMarketPlaceAddress
    ) ERC721("TO THE MOON NFT", "TTM_NFT") {
        nftMarketPlaceAddress = _nftMarketPlaceAddress;
    }

    function mint(uint256 _tokenId, string memory _tokenURI) external payable {
        require(msg.value >= mintingPrice, "Insufficient funds sent");
        require(totalMinted < totalNFT, "All NFTs have been minted");
        require(!_exists(_tokenId), "Token already exists");

        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        setApprovalForAll(nftMarketPlaceAddress, true);
        mintedTokens.push(_tokenId);
        totalMinted++;
    }

    function setMintingPrice(uint256 _mintingPrice) external onlyOwner {
        mintingPrice = _mintingPrice;
    }

    function getAllMintedTokens() external view returns (uint256[] memory) {
        return mintedTokens;
    }
}
