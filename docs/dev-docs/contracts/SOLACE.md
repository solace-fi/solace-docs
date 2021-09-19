**Solace** tokens can be earned by depositing **Capital Provider** or **Liquidity Provider** tokens to the [`Master`](./Master) contract.
**SOLACE** can also be locked for a preset time in the `Locker` contract to recieve `veSOLACE` tokens.


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the Solace Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).

### maxSupply
```solidity
  function maxSupply(
  ) external returns (uint256 cap)
```
The total amount of **SOLACE** that can be minted.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cap`|  | The supply cap.
### setMaxSupply
```solidity
  function setMaxSupply(
    uint256 maxSupply_
  ) external
```
Changes the max supply of **SOLACE**.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maxSupply_` | uint256 | The new supply cap.

### isMinter
```solidity
  function isMinter(
    address account
  ) external returns (bool status)
```
Returns true if `account` is authorized to mint **SOLACE**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | Account to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if `account` can mint, false otherwise.
### mint
```solidity
  function mint(
    address account,
    uint256 amount
  ) external
```
Mints new **SOLACE** to the receiver account.
Can only be called by authorized minters.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | The receiver of new tokens.
|`amount` | uint256 | The number of new tokens.

### addMinter
```solidity
  function addMinter(
    address minter
  ) external
```
Adds a new minter.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minter` | address | The new minter.

### removeMinter
```solidity
  function removeMinter(
    address minter
  ) external
```
Removes a minter.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minter` | address | The minter to remove.

