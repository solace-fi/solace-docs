The **LiquityProduct** can be used to purchase coverage for **Liquity** positions.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address troveManager_,
    uint40 minPeriod_,
    uint40 maxPeriod_
  ) public
```
Constructs the LiquityProduct.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`policyManager_` | contract IPolicyManager | The [`PolicyManager`](../PolicyManager) contract.
|`registry_` | contract IRegistry | The [`Registry`](../Registry) contract.
|`troveManager_` | address | The Liquity trove manager.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.

### isValidPositionDescription
```solidity
  function isValidPositionDescription(
    bytes positionDescription
  ) public returns (bool isValid)
```
Determines if the byte encoded description of a position(s) is valid.
The description will only make sense in context of the product.

This function should be overwritten in inheriting Product contracts.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`positionDescription` | bytes | The description to validate.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isValid`| bytes | True if is valid.
### troveManager
```solidity
  function troveManager(
  ) external returns (address troveManager_)
```
Liquity Trove Manager.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`troveManager_`|  | The trove manager address.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address troveManager_
  ) public
```
Changes the covered platform.
The function should be used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`troveManager_` | address | The new Liquity Trove Manager.

