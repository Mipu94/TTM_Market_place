/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TTM_NFT,
  TTM_NFTInterface,
} from "../../../contracts/TTM.sol/TTM_NFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721EnumerableForbiddenBatchMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ERC721OutOfBoundsIndex",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "giveAway",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600381526020017f54544d00000000000000000000000000000000000000000000000000000000008152506040518060400160405280600f81526020017f544f20544845204d4f4f4e204e4654000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b612bfe806200041b6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a25780639e240785116100715780639e240785146102de578063a22cb4651461030e578063b88d4fde1461032a578063c87b56dd14610346578063e985e9c5146103765761010b565b80634f6ccce7146102305780636352211e1461026057806370a082311461029057806395d89b41146102c05761010b565b806318160ddd116100de57806318160ddd146101aa57806323b872dd146101c85780632f745c59146101e457806342842e0e146102145761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190612043565b6103a6565b604051610137919061208b565b60405180910390f35b6101486103b8565b6040516101559190612136565b60405180910390f35b6101786004803603810190610173919061218e565b61044a565b60405161018591906121fc565b60405180910390f35b6101a860048036038101906101a39190612243565b610466565b005b6101b261047c565b6040516101bf9190612292565b60405180910390f35b6101e260048036038101906101dd91906122ad565b610489565b005b6101fe60048036038101906101f99190612243565b61058b565b60405161020b9190612292565b60405180910390f35b61022e600480360381019061022991906122ad565b610634565b005b61024a6004803603810190610245919061218e565b610654565b6040516102579190612292565b60405180910390f35b61027a6004803603810190610275919061218e565b6106ca565b60405161028791906121fc565b60405180910390f35b6102aa60048036038101906102a59190612300565b6106dc565b6040516102b79190612292565b60405180910390f35b6102c8610796565b6040516102d59190612136565b60405180910390f35b6102f860048036038101906102f39190612300565b610828565b6040516103059190612292565b60405180910390f35b61032860048036038101906103239190612359565b6108c6565b005b610344600480360381019061033f91906124ce565b6108dc565b005b610360600480360381019061035b919061218e565b6108f9565b60405161036d9190612136565b60405180910390f35b610390600480360381019061038b9190612551565b61090b565b60405161039d919061208b565b60405180910390f35b60006103b18261099f565b9050919050565b6060600080546103c7906125c0565b80601f01602080910402602001604051908101604052809291908181526020018280546103f3906125c0565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b600061045582610a19565b5061045f82610aa1565b9050919050565b6104788282610473610ade565b610ae6565b5050565b6000600980549050905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104fb5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016104f291906121fc565b60405180910390fd5b600061050f838361050a610ade565b610af8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610585578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161057c939291906125f1565b60405180910390fd5b50505050565b6000610596836106dc565b82106105db5782826040517fa57d13dc0000000000000000000000000000000000000000000000000000000081526004016105d2929190612628565b60405180910390fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61064f838383604051806020016040528060008152506108dc565b505050565b600061065e61047c565b82106106a4576000826040517fa57d13dc00000000000000000000000000000000000000000000000000000000815260040161069b929190612628565b60405180910390fd5b600982815481106106b8576106b7612651565b5b90600052602060002001549050919050565b60006106d582610a19565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361074f5760006040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161074691906121fc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107a5906125c0565b80601f01602080910402602001604051908101604052809291908181526020018280546107d1906125c0565b801561081e5780601f106107f35761010080835404028352916020019161081e565b820191906000526020600020905b81548152906001019060200180831161080157829003601f168201915b5050505050905090565b600080600b5490506000604051806060016040528060258152602001612ba46025913990506108578483610b0e565b6108618282610b2c565b6001600b600082825461087491906126af565b925050819055506108bc6040518060400160405280600d81526020017f4d494e5420257320746f20257300000000000000000000000000000000000000815250600186610b88565b8192505050919050565b6108d86108d1610ade565b8383610c27565b5050565b6108e7848484610489565b6108f384848484610d96565b50505050565b606061090482610f4d565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a125750610a1182611060565b5b9050919050565b600080610a25836110c1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a9857826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610a8f9190612292565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610af383838360016110fe565b505050565b6000610b058484846112c3565b90509392505050565b610b288282604051806020016040528060008152506113e0565b5050565b80600660008481526020019081526020016000209081610b4c919061288f565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051610b7c9190612292565b60405180910390a15050565b610c22838383604051602401610ba093929190612961565b6040516020818303038152906040527f1c7ec448000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113fc565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c9857816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610c8f91906121fc565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d89919061208b565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115610f47578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610dda610ade565b8685856040518563ffffffff1660e01b8152600401610dfc94939291906129f4565b6020604051808303816000875af1925050508015610e3857506040513d601f19601f82011682018060405250810190610e359190612a55565b60015b610ebc573d8060008114610e68576040519150601f19603f3d011682016040523d82523d6000602084013e610e6d565b606091505b506000815103610eb457836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610eab91906121fc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610f4557836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f3c91906121fc565b60405180910390fd5b505b50505050565b6060610f5882610a19565b506000600660008481526020019081526020016000208054610f79906125c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa5906125c0565b8015610ff25780601f10610fc757610100808354040283529160200191610ff2565b820191906000526020600020905b815481529060010190602001808311610fd557829003601f168201915b505050505090506000611003611416565b9050600081510361101857819250505061105b565b60008251111561104d578082604051602001611035929190612abe565b6040516020818303038152906040529250505061105b565b6110568461142d565b925050505b919050565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806110ba57506110b982611496565b5b9050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806111375750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561126b57600061114784610a19565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156111b257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156111c557506111c3818461090b565b155b1561120757826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016111fe91906121fc565b60405180910390fd5b811561126957838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000806112d1858585611578565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036113155761131084611792565b611354565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113535761135281856117db565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611396576113918461193c565b6113d5565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113d4576113d38585611a0d565b5b5b809150509392505050565b6113ea8383611a98565b6113f76000848484610d96565b505050565b6114138161140b611b91611bb2565b63ffffffff16565b50565b606060405180602001604052806000815250905090565b606061143882610a19565b506000611443611416565b90506000815111611463576040518060200160405280600081525061148e565b8061146d84611bbd565b60405160200161147e929190612abe565b6040516020818303038152906040525b915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061156157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611571575061157082611c8b565b5b9050919050565b600080611584846110c1565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146115c6576115c5818486611cf5565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611657576116086000856000806110fe565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146116da576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600980549050600a600083815260200190815260200160002081905550600981908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006117e6836106dc565b90506000600860008481526020019081526020016000205490508181146118cb576000600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816008600083815260200190815260200160002081905550505b6008600084815260200190815260200160002060009055600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b600060016009805490506119509190612ae2565b90506000600a60008481526020019081526020016000205490506000600983815481106119805761197f612651565b5b9060005260206000200154905080600983815481106119a2576119a1612651565b5b906000526020600020018190555081600a600083815260200190815260200160002081905550600a60008581526020019081526020016000206000905560098054806119f1576119f0612b16565b5b6001900381819060005260206000200160009055905550505050565b60006001611a1a846106dc565b611a249190612ae2565b905081600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806008600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b0a5760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611b0191906121fc565b60405180910390fd5b6000611b1883836000610af8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611b8c5760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611b8391906121fc565b60405180910390fd5b505050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b611fcd819050919050565b606060006001611bcc84611db9565b01905060008167ffffffffffffffff811115611beb57611bea6123a3565b5b6040519080825280601f01601f191660200182016040528015611c1d5781602001600182028036833780820191505090505b509050600082602001820190505b600115611c80578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611c7457611c73612b45565b5b04945060008503611c2b575b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611d00838383611f0c565b611db457600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d7557806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611d6c9190612292565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611dab929190612628565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611e17577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611e0d57611e0c612b45565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611e54576d04ee2d6d415b85acef81000000008381611e4a57611e49612b45565b5b0492506020810190505b662386f26fc100008310611e8357662386f26fc100008381611e7957611e78612b45565b5b0492506010810190505b6305f5e1008310611eac576305f5e1008381611ea257611ea1612b45565b5b0492506008810190505b6127108310611ed1576127108381611ec757611ec6612b45565b5b0492506004810190505b60648310611ef45760648381611eea57611ee9612b45565b5b0492506002810190505b600a8310611f03576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611fc457508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611f855750611f84848461090b565b5b80611fc357508273ffffffffffffffffffffffffffffffffffffffff16611fab83610aa1565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b611fd5612b74565b565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61202081611feb565b811461202b57600080fd5b50565b60008135905061203d81612017565b92915050565b60006020828403121561205957612058611fe1565b5b60006120678482850161202e565b91505092915050565b60008115159050919050565b61208581612070565b82525050565b60006020820190506120a0600083018461207c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156120e05780820151818401526020810190506120c5565b60008484015250505050565b6000601f19601f8301169050919050565b6000612108826120a6565b61211281856120b1565b93506121228185602086016120c2565b61212b816120ec565b840191505092915050565b6000602082019050818103600083015261215081846120fd565b905092915050565b6000819050919050565b61216b81612158565b811461217657600080fd5b50565b60008135905061218881612162565b92915050565b6000602082840312156121a4576121a3611fe1565b5b60006121b284828501612179565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006121e6826121bb565b9050919050565b6121f6816121db565b82525050565b600060208201905061221160008301846121ed565b92915050565b612220816121db565b811461222b57600080fd5b50565b60008135905061223d81612217565b92915050565b6000806040838503121561225a57612259611fe1565b5b60006122688582860161222e565b925050602061227985828601612179565b9150509250929050565b61228c81612158565b82525050565b60006020820190506122a76000830184612283565b92915050565b6000806000606084860312156122c6576122c5611fe1565b5b60006122d48682870161222e565b93505060206122e58682870161222e565b92505060406122f686828701612179565b9150509250925092565b60006020828403121561231657612315611fe1565b5b60006123248482850161222e565b91505092915050565b61233681612070565b811461234157600080fd5b50565b6000813590506123538161232d565b92915050565b600080604083850312156123705761236f611fe1565b5b600061237e8582860161222e565b925050602061238f85828601612344565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6123db826120ec565b810181811067ffffffffffffffff821117156123fa576123f96123a3565b5b80604052505050565b600061240d611fd7565b905061241982826123d2565b919050565b600067ffffffffffffffff821115612439576124386123a3565b5b612442826120ec565b9050602081019050919050565b82818337600083830152505050565b600061247161246c8461241e565b612403565b90508281526020810184848401111561248d5761248c61239e565b5b61249884828561244f565b509392505050565b600082601f8301126124b5576124b4612399565b5b81356124c584826020860161245e565b91505092915050565b600080600080608085870312156124e8576124e7611fe1565b5b60006124f68782880161222e565b94505060206125078782880161222e565b935050604061251887828801612179565b925050606085013567ffffffffffffffff81111561253957612538611fe6565b5b612545878288016124a0565b91505092959194509250565b6000806040838503121561256857612567611fe1565b5b60006125768582860161222e565b92505060206125878582860161222e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125d857607f821691505b6020821081036125eb576125ea612591565b5b50919050565b600060608201905061260660008301866121ed565b6126136020830185612283565b61262060408301846121ed565b949350505050565b600060408201905061263d60008301856121ed565b61264a6020830184612283565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006126ba82612158565b91506126c583612158565b92508282019050808211156126dd576126dc612680565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612708565b61274f8683612708565b95508019841693508086168417925050509392505050565b6000819050919050565b600061278c61278761278284612158565b612767565b612158565b9050919050565b6000819050919050565b6127a683612771565b6127ba6127b282612793565b848454612715565b825550505050565b600090565b6127cf6127c2565b6127da81848461279d565b505050565b5b818110156127fe576127f36000826127c7565b6001810190506127e0565b5050565b601f82111561284357612814816126e3565b61281d846126f8565b8101602085101561282c578190505b612840612838856126f8565b8301826127df565b50505b505050565b600082821c905092915050565b600061286660001984600802612848565b1980831691505092915050565b600061287f8383612855565b9150826002028217905092915050565b612898826120a6565b67ffffffffffffffff8111156128b1576128b06123a3565b5b6128bb82546125c0565b6128c6828285612802565b600060209050601f8311600181146128f957600084156128e7578287015190505b6128f18582612873565b865550612959565b601f198416612907866126e3565b60005b8281101561292f5784890151825560018201915060208501945060208101905061290a565b8683101561294c5784890151612948601f891682612855565b8355505b6001600288020188555050505b505050505050565b6000606082019050818103600083015261297b81866120fd565b905061298a6020830185612283565b61299760408301846121ed565b949350505050565b600081519050919050565b600082825260208201905092915050565b60006129c68261299f565b6129d081856129aa565b93506129e08185602086016120c2565b6129e9816120ec565b840191505092915050565b6000608082019050612a0960008301876121ed565b612a1660208301866121ed565b612a236040830185612283565b8181036060830152612a3581846129bb565b905095945050505050565b600081519050612a4f81612017565b92915050565b600060208284031215612a6b57612a6a611fe1565b5b6000612a7984828501612a40565b91505092915050565b600081905092915050565b6000612a98826120a6565b612aa28185612a82565b9350612ab28185602086016120c2565b80840191505092915050565b6000612aca8285612a8d565b9150612ad68284612a8d565b91508190509392505050565b6000612aed82612158565b9150612af883612158565b9250828203905081811115612b1057612b0f612680565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe68747470733a2f2f776562332e65762e696f2f6e66742f536f756c41525f33382e6a736f6ea26469706673582212202558351bc5caf575c98d69b54aa88fa60735c4e5b7f87294a4150f3de7a15fb864736f6c63430008180033";

type TTM_NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TTM_NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TTM_NFT__factory extends ContractFactory {
  constructor(...args: TTM_NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TTM_NFT> {
    return super.deploy(overrides || {}) as Promise<TTM_NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TTM_NFT {
    return super.attach(address) as TTM_NFT;
  }
  override connect(signer: Signer): TTM_NFT__factory {
    return super.connect(signer) as TTM_NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TTM_NFTInterface {
    return new utils.Interface(_abi) as TTM_NFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TTM_NFT {
    return new Contract(address, _abi, signerOrProvider) as TTM_NFT;
  }
}
