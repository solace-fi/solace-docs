**Solace** tokens can be earned by depositing **Capital Provider** or **Liquidity Provider** tokens to the [`Master`](./Master.md) contract.
**SOLACE** can also be locked for a preset time in the `Locker` contract to recieve `veSOLACE` tokens.


## Functions
### constructor
```solidity
  function constructor(
    address _governance
  ) public
```
Constructs the Solace Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The address of the governor.

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

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new `governor`.



### addMinter
```solidity
  function addMinter(
    address _minter
  ) public
```
Adds a new minter.
Can only be called by the current `governor`.


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
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minter` | address | The minter to remove.

## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```
Emitted when Governance is set


