Rewards investors in [`SOLACE`](../SOLACE).


## Functions
### master
```solidity
  function master(
  ) external returns (address)
```
[`Master`](../Master) contract.



### solace
```solidity
  function solace(
  ) external returns (contract SOLACE)
```
Native [`SOLACE`](../SOLACE) Token.



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
Amount of [`SOLACE`](../SOLACE) distributed per block.



### startBlock
```solidity
  function startBlock(
  ) external returns (uint256)
```
When the farm will start.



### endBlock
```solidity
  function endBlock(
  ) external returns (uint256)
```
When the farm will end.



### setRewards
```solidity
  function setRewards(
    uint256 newBlockReward
  ) external
```
Sets the amount of [`SOLACE`](../SOLACE) to distribute per block.
Only affects future rewards.
Can only be called by [`Master`](../Master).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newBlockReward` | uint256 | Amount to distribute per block.

### setEnd
```solidity
  function setEnd(
    uint256 newEndBlock
  ) external
```
Sets the farm's end block. Used to extend the duration.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newEndBlock` | uint256 | The new end block.

### withdrawRewards
```solidity
  function withdrawRewards(
  ) external
```
Withdraw your rewards without unstaking your tokens.



### withdrawRewardsForUser
```solidity
  function withdrawRewardsForUser(
    address user
  ) external
```
Withdraw a users rewards without unstaking their tokens.
Can only be called by ['Master`](../Master) or the user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to withdraw rewards for.

### pendingRewards
```solidity
  function pendingRewards(
    address user
  ) external returns (uint256 reward)
```
Calculates the accumulated balance of [`SOLACE`](../SOLACE) for specified user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user for whom unclaimed tokens will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| address | Total amount of withdrawable SOLACE.
### updateFarm
```solidity
  function updateFarm(
  ) external
```
Updates farm information to be up to date to the current block.



### getMultiplier
```solidity
  function getMultiplier(
    uint256 from,
    uint256 to
  ) external returns (uint256 multiplier)
```
Calculates the reward multiplier over the given `from` until `to` block.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | uint256 | The start of the period to measure rewards for.
|`to` | uint256 | The end of the period to measure rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`multiplier`| uint256 | The weighted multiplier for the given period.
