Produces a string containing the data URI for a JSON metadata string of a policy.
It is inspired from Uniswap V3 [`NonfungibleTokenPositionDescriptor`](https://docs.uniswap.org/protocol/reference/periphery/NonfungibleTokenPositionDescriptor).


## Functions
### tokenURI
```solidity
  function tokenURI(
    contract IPolicyManager policyManager,
    uint256 policyID
  ) external returns (string description)
```
Produces the URI describing a particular policy `product` for a given `policy id`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager` | contract IPolicyManager | The policy manager to retrieve policy info to produce URI descriptor.
|`policyID` | uint256 | The ID of the policy for which to produce a description.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`description`| contract IPolicyManager | The URI of the ERC721-compliant metadata.
