Describes NFT token policy product descriptor. It is inspired from Uniswap(V3)[`NonfungibleTokenPositionDescriptor`](https://docs.uniswap.org/protocol/reference/periphery/NonfungibleTokenPositionDescriptor).


## Functions

### **tokenURI**
```solidity
function tokenURI(
  IPolicyManager _policyManager,
  uint256 _policyID
) external returns (string) 
```

Produces the URI describing a particular policy product for a given policy id.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_policyManager` | contract IPolicyManager | The policy manager to retrieve policy info to produce URI descriptor.
|`_policyID` | uint256 | The id of the policy for which to produce a description.

#### Return Values
| Type | Description                                             |
| ----- | ------------------------------------------------------ |
|string | URI of the ERC721-compliant metadata.