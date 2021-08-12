Describes NFT token policy product descriptor. 
It is inspired from Uniswap(V3)[`NonfungibleTokenPositionDescriptor`](https://docs.uniswap.org/protocol/reference/periphery/NonfungibleTokenPositionDescriptor).


## Functions
### tokenURI
```solidity
  function tokenURI(
  ) external returns (string)
```
Produces the URI describing a particular policy `product` for a given `policy id`.
    @param _policyManager The policy manager to retrieve policy info to produce URI descriptor.
    @param _policyID The id of the policy for which to produce a description.
    @return descriptor The URI of the ERC721-compliant metadata.



