Solace tokens can be earned by depositing Capital Provider or Liquidity Provider tokens to the Master contract.
        SOLACE can also be locked for a preset time in the Locker contract to recieve veSOLACE tokens.


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
|`_governance` | address | Address of the governor.

### mint
```solidity
  function mint(
    address account,
    uint256 amount
  ) public
```
Creates `amount` new tokens for `to`.
The caller must be a minter.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | receiver of new tokens
|`amount` | uint256 | number of new tokens

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current governor.


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
Can only be called by the new governor.



### addMinter
```solidity
  function addMinter(
    address _minter
  ) public
```
Adds a new minter.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minter` | address | the new minter

### removeMinter
```solidity
  function removeMinter(
    address _minter
  ) public
```
Removes a minter.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minter` | address | the minter to remove

## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



