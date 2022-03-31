The native governance token of the Solace Coverage Protocol.


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

### isMinter
```solidity
  function isMinter(
    address account
  ) external returns (bool status)
```
Returns true if `account` is authorized to mint [**SOLACE**](./SOLACE).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | Account to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if `account` can mint, false otherwise.
### mint
```solidity
  function mint(
    address account,
    uint256 amount
  ) external
```
Mints new [**SOLACE**](./SOLACE) to the receiver account.
Can only be called by authorized minters.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | The receiver of new tokens.
|`amount` | uint256 | The number of new tokens.

### burn
```solidity
  function burn(
    uint256 amount
  ) external
```
Burns [**SOLACE**](./SOLACE) from msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount to burn.

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

