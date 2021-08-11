


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    address _master,
    address _vault,
    contract SOLACE _solace,
    uint256 _startBlock,
    uint256 _endBlock,
    address _swapRouter,
    address _weth
  ) public
```
Constructs the farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.
|`_master` | address | Address of the Master contract.
|`_vault` | address | Address of the Vault contract.
|`_solace` | contract SOLACE | Address of the SOLACE token contract.
|`_startBlock` | uint256 | When farming will begin.
|`_endBlock` | uint256 | When farming will end.
|`_swapRouter` | address | Address of uniswap router.
|`_weth` | address | Address of weth.

### receive
```solidity
  function receive(
  ) external
```
Receive function. Deposits eth.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth.



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



### setRewards
```solidity
  function setRewards(
    uint256 _blockReward
  ) external
```
Sets the amount of reward token to distribute per block.
Only affects future rewards.
Can only be called by Master.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_blockReward` | uint256 | Amount to distribute per block.

### setEnd
```solidity
  function setEnd(
    uint256 _endBlock
  ) external
```
Sets the farm's end block. Used to extend the duration.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_endBlock` | uint256 | The new end block.

### depositCp
```solidity
  function depositCp(
    uint256 _amount
  ) external
```
Deposit some CP tokens.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The deposit amount.

### depositCpSigned
```solidity
  function depositCpSigned(
    address _depositor,
    uint256 _amount,
    uint256 _deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit some CP tokens using permit.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_amount` | uint256 | The deposit amount.
|`_deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### depositEth
```solidity
  function depositEth(
  ) external
```
Deposit some ETH.
User will receive accumulated rewards if any.



### compoundRewards
```solidity
  function compoundRewards(
  ) external
```
Your money already makes you money. Now make your money make more money!
Withdraws your SOLACE rewards, swaps it for WETH, then deposits that WETH onto the farm.



### withdrawCp
```solidity
  function withdrawCp(
    uint256 _amount
  ) external
```
Withdraw some CP tokens.
User will receive _amount of deposited tokens and accumulated rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The withdraw amount.

### withdrawRewards
```solidity
  function withdrawRewards(
  ) external
```
Withdraw your rewards without unstaking your tokens.



### withdrawRewardsForUser
```solidity
  function withdrawRewardsForUser(
  ) external
```
Withdraw a users rewards without unstaking their tokens.
Can only be called by Master.



### updateFarm
```solidity
  function updateFarm(
  ) public
```
Updates farm information to be up to date to the current block.



### pendingRewards
```solidity
  function pendingRewards(
    address _user
  ) external returns (uint256)
```
Calculates the accumulated balance of reward token for specified user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user for whom unclaimed tokens will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Total`| address | amount of withdrawable reward tokens.
### getMultiplier
```solidity
  function getMultiplier(
    uint256 _from,
    uint256 _to
  ) public returns (uint256)
```
Calculates the reward multiplier over the given _from until _to block.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_from` | uint256 | The start of the period to measure rewards for.
|`_to` | uint256 | The end of the period to measure rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| uint256 | weighted multiplier for the given period.
### _depositEth
```solidity
  function _depositEth(
  ) internal
```
Deposits some ether.



### _depositCp
```solidity
  function _depositCp(
    address _depositor,
    uint256 _amount
  ) internal
```
Deposit some CP tokens.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_amount` | uint256 | The deposit amount.

### _harvest
```solidity
  function _harvest(
  ) internal
```
Calculate and transfer a user's rewards.



