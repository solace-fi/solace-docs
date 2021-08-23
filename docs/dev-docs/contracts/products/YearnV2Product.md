The **Yearn(V2)** product that is users can buy policy for **Yearn(V2)**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address yregistry_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    uint24 price_,
    uint32 maxCoverPerUserDivisor_,
    address quoter_
  ) public
```
Constructs the YearnV2Product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`policyManager_` | contract IPolicyManager | The [`PolicyManager`](../PolicyManager) contract.
|`registry_` | contract IRegistry | The [`Registry`](../Registry) contract.
|`yregistry_` | address | The Yearn YRegistry.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`price_` | uint24 | The cover price for the **Product**.
|`maxCoverPerUserDivisor_` | uint32 | The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).
|`quoter_` | address | The exchange quoter address.

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) public returns (uint256 positionAmount)
```
Calculate the value of a user's position in **ETH**.
The `positionContract` must be a **yearn.fi vault**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The owner of the position.
|`positionContract` | address | The address of the **vault**.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The value of the position.
### yregistry
```solidity
  function yregistry(
  ) external returns (address yregistry_)
```
Yearn's YRegistry.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`yregistry_`|  | The YRegistry.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address yregistry_
  ) public
```
Changes the covered platform.
The function should be used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`yregistry_` | address | The new YRegistry.

