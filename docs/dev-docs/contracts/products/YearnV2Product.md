


## Functions
### constructor
```solidity
  function constructor(
  ) public
```




### appraisePosition
```solidity
  function appraisePosition(
  ) public returns (uint256 positionAmount)
```




### submitClaim
```solidity
  function submitClaim(
    uint256 policyID,
    uint256 amountOut,
    uint256 deadline,
    bytes signature
  ) external
```
Submits a claim.
Can only submit one claim per policy.
Must be signed by an authorized signer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy that suffered a loss.
|`amountOut` | uint256 | The amount the user will receive in ETH.
|`deadline` | uint256 | Transaction must execute before this timestamp.
|`signature` | bytes | Signature from the signer.

### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address _coveredPlatform
  ) public
```
Changes the covered platform.
Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coveredPlatform` | address | The platform to cover.

### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.




