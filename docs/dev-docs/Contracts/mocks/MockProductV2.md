<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockProductV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

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
    uint256 coverLimit,
    uint40 blocks,
    bytes positionDescription,
    address riskStrategy
  ) external returns (uint256 policyID)
```
Purchases and mints a policy on the behalf of the policyholder.
User will need to pay **USD**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Holder of the position to cover.
|`coverLimit` | uint256 | The value to cover in **USD**. Will only cover up to the appraised value.
|`blocks` | uint40 | The length (in blocks) for policy.
|`positionDescription` | bytes | The byte encoded description of the covered position(s).
|`riskStrategy` | address | The risk strategy of the covered product.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| uint256 | The ID of newly created policy.
