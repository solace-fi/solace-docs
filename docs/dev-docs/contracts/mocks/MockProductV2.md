Mock product for testing purposes.


## Functions
### setPrice
```solidity
  function setPrice(
  ) external
```




### setPolicyExpiration
```solidity
  function setPolicyExpiration(
    uint256 policyID,
    uint40 expirationBlock
  ) external
```
Sets a policy's expiration block.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID to set expiration for.
|`expirationBlock` | uint40 | The new expiration block for the policy.

### _buyPolicy
```solidity
  function _buyPolicy(
    address policyholder,
    uint256 coverAmount,
    uint40 blocks,
    bytes positionDescription
  ) external returns (uint256 policyID)
```
Purchases and mints a policy on the behalf of the policyholder.
User will need to pay **ETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Holder of the position to cover.
|`coverAmount` | uint256 | The value to cover in **ETH**. Will only cover up to the appraised value.
|`blocks` | uint40 | The length (in blocks) for policy.
|`positionDescription` | bytes | The byte encoded description of the covered position(s).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The ID of newly created policy.
