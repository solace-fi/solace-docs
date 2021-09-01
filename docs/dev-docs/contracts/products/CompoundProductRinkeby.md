The **Compound** product that is users can buy policy for **Compound**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address comptroller_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    uint24 price_,
    uint32 maxCoverPerUserDivisor_,
    address quoter_
  ) public
```
Constructs the CompoundRinkebyProduct.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`policyManager_` | contract IPolicyManager | The [`PolicyManager`](../PolicyManager) contract.
|`registry_` | contract IRegistry | The [`Registry`](../Registry) contract.
|`comptroller_` | address | The Compound Comptroller.
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
The `positionContract` must be a [**cToken**](https://etherscan.io/accounts/label/compound).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The owner of the position.
|`positionContract` | address | The address of the **cToken**.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The value of the position.
### comptroller
```solidity
  function comptroller(
  ) external returns (address comptroller_)
```
Compound's Comptroller.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`comptroller_`|  | The comptroller.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address comptroller_
  ) public
```
Changes the covered platform.
The function should be used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`comptroller_` | address | The new Comptroller.

### compareStrings
```solidity
  function compareStrings(
    string a,
    string b
  ) internal returns (bool)
```
String equality.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | string | The first string.
|`b` | string | The second string.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`bool`| string | Returns True if both strings are equal.
