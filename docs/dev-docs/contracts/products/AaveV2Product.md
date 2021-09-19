The **AaveV2** product can be used to purchase coverage for **AaveV2** positions.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address dataProvider_,
    uint40 minPeriod_,
    uint40 maxPeriod_
  ) public
```
Constructs the AaveV2Product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`policyManager_` | contract IPolicyManager | The [`PolicyManager`](../PolicyManager) contract.
|`registry_` | contract IRegistry | The [`Registry`](../Registry) contract.
|`dataProvider_` | address | Aave protocol data provider address.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.

### aaveDataProvider
```solidity
  function aaveDataProvider(
  ) external returns (address dataProvider_)
```
Aave's Data Provider.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`dataProvider_`|  | The data provider.
### isValidPositionDescription
```solidity
  function isValidPositionDescription(
    bytes positionDescription
  ) public returns (bool isValid)
```
Determines if the byte encoded description of a position(s) is valid.
The description will only make sense in context of the product.

This function should be overwritten in inheriting Product contracts.
If invalid, return false if possible. Reverting is also acceptable.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`positionDescription` | bytes | The description to validate.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isValid`| bytes | True if is valid.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address dataProvider_
  ) public
```
Changes the covered platform.
Can only be called by the current [**governor**](/docs/protocol/governance).

Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dataProvider_` | address | The new Data Provider.

