


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Governance.



### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```
Governance to take over.



### master
```solidity
  function master(
  ) external returns (address)
```
Master contract.



### farmType
```solidity
  function farmType(
  ) external returns (uint256)
```
A unique enumerator that identifies the farm type.



### blockReward
```solidity
  function blockReward(
  ) external returns (uint256)
```




### startBlock
```solidity
  function startBlock(
  ) external returns (uint256)
```




### endBlock
```solidity
  function endBlock(
  ) external returns (uint256)
```




### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Transfers the governance role to a new governor.
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
### updateFarm
```solidity
  function updateFarm(
  ) external
```
Updates farm information to be up to date to the current block.



### getMultiplier
```solidity
  function getMultiplier(
    uint256 _from,
    uint256 _to
  ) external returns (uint256)
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
## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



