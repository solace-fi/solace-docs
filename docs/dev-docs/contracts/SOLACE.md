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
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).

### mint
```solidity
  function mint(
    address account,
    uint256 amount
  ) public
```
The function creates new tokens and mints them to the receiver account.
The caller must be a `minter`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | The receiver of new tokens.
|`amount` | uint256 | The number of new tokens.

### addMinter
```solidity
  function addMinter(
    address _minter
  ) public
```
Adds a new minter.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minter` | address | The new minter.

### removeMinter
```solidity
  function removeMinter(
    address _minter
  ) public
```
Removes a minter.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minter` | address | The minter to remove.

