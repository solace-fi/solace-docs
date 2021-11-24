Rewards investors in [**SOLACE**](../SOLACE).


## Functions
### farmController
```solidity
  function farmController(
  ) external returns (address)
```
[`IFarmController`](../FarmController) contract.



### farmType
```solidity
  function farmType(
  ) external returns (uint256)
```
A unique enumerator that identifies the farm type.



### rewardPerSecond
```solidity
  function rewardPerSecond(
  ) external returns (uint256)
```
Amount of rewards distributed per second.



### startTime
```solidity
  function startTime(
  ) external returns (uint256)
```
When the farm will start.



### endTime
```solidity
  function endTime(
  ) external returns (uint256)
```
When the farm will end.



### pendingRewards
```solidity
  function pendingRewards(
    address user
  ) external returns (uint256 reward)
```
Calculates the accumulated rewards for specified user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user for whom unclaimed tokens will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| address | Total amount of withdrawable rewards.
### getRewardAmountDistributed
```solidity
  function getRewardAmountDistributed(
    uint256 from,
    uint256 to
  ) external returns (uint256 amount)
```
Calculates the reward amount distributed between two timestamps.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | uint256 | The start of the period to measure rewards for.
|`to` | uint256 | The end of the period to measure rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The reward amount distributed in the given period.
### withdrawRewards
```solidity
  function withdrawRewards(
  ) external returns (uint256 optionID)
```
Converts the senders unpaid rewards into an [`Option`](../OptionsFarming).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionID`|  | The ID of the newly minted [`Option`](../OptionsFarming).
### withdrawRewardsForUser
```solidity
  function withdrawRewardsForUser(
    address user
  ) external returns (uint256 rewardAmount)
```
Withdraw a users rewards without unstaking their tokens.
Can only be called by [`FarmController`](../FarmController).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to withdraw rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`rewardAmount`| address | The amount of rewards the user earned on this farm.
### updateFarm
```solidity
  function updateFarm(
  ) external
```
Updates farm information to be up to date to the current time.



### setRewards
```solidity
  function setRewards(
    uint256 rewardPerSecond_
  ) external
```
Sets the amount of rewards to distribute per second.
Only affects future rewards.
Can only be called by [`FarmController`](../FarmController).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardPerSecond_` | uint256 | Amount to distribute per second.

### setEnd
```solidity
  function setEnd(
    uint256 endTime_
  ) external
```
Sets the farm's end time. Used to extend the duration.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`endTime_` | uint256 | The new end time.

