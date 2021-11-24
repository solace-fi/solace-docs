Controls the allocation of rewards across multiple farms.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address optionsFarming_,
    uint256 rewardPerSecond_
  ) public
```
Constructs the `FarmController` contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`optionsFarming_` | address | The address of the [`OptionsFarming`](./OptionsFarming) contract.
|`rewardPerSecond_` | uint256 | Amount of reward to distribute per second.

### rewardPerSecond
```solidity
  function rewardPerSecond(
  ) external returns (uint256)
```
Rewards distributed per second across all farms.



### totalAllocPoints
```solidity
  function totalAllocPoints(
  ) external returns (uint256)
```
Total allocation points across all farms.



### numFarms
```solidity
  function numFarms(
  ) external returns (uint256)
```
The number of farms that have been created.



### farmAddresses
```solidity
  function farmAddresses(
  ) external returns (address)
```
Given a farm ID, return its address.

Indexable 1-numFarms, 0 is null farm.


### farmIndices
```solidity
  function farmIndices(
  ) external returns (uint256)
```
Given a farm address, returns its ID.

Returns 0 for not farms and unregistered farms.


### allocPoints
```solidity
  function allocPoints(
  ) external returns (uint256)
```
Given a farm ID, how many points the farm was allocated.



### pendingRewards
```solidity
  function pendingRewards(
    address user
  ) external returns (uint256 reward)
```
Calculates the accumulated balance of rewards for the specified user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user for whom unclaimed rewards will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| address | Total amount of withdrawable rewards.
### massUpdateFarms
```solidity
  function massUpdateFarms(
  ) external
```
Updates all farms to be up to date to the current second.



### farmOptionMulti
```solidity
  function farmOptionMulti(
  ) external returns (uint256 optionID)
```
Withdraw your rewards from all farms and create an [`Option`](./OptionsFarming).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionID`|  | The ID of the new [`Option`](./OptionsFarming).
### createOption
```solidity
  function createOption(
    address recipient,
    uint256 rewardAmount
  ) external returns (uint256 optionID)
```
Creates an [`Option`](./OptionsFarming) for the given `rewardAmount`.
Must be called by a farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | The recipient of the option.
|`rewardAmount` | uint256 | The amount to reward in the Option.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionID`| address | The ID of the new [`Option`](./OptionsFarming).
### registerFarm
```solidity
  function registerFarm(
    address farmAddress,
    uint256 allocPoints_
  ) external returns (uint256 farmID)
```
Registers a farm.
Can only be called by the current [**governor**](/docs/protocol/governance).
Cannot register a farm more than once.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmAddress` | address | The farm's address.
|`allocPoints_` | uint256 | How many points to allocate this farm.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`farmID`| address | The farm ID.
### setAllocPoints
```solidity
  function setAllocPoints(
    uint256 farmID,
    uint256 allocPoints_
  ) external
```
Sets a farm's allocation points.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmID` | uint256 | The farm to set allocation points.
|`allocPoints_` | uint256 | How many points to allocate this farm.

### setRewardPerSecond
```solidity
  function setRewardPerSecond(
    uint256 rewardPerSecond_
  ) external
```
Sets the reward distribution across all farms.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardPerSecond_` | uint256 | Amount of reward to distribute per second.

### _setAllocPoints
```solidity
  function _setAllocPoints(
    uint256 farmID,
    uint256 allocPoints_
  ) internal
```
Sets a farm's allocation points.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmID` | uint256 | The farm to set allocation points.
|`allocPoints_` | uint256 | How many points to allocate this farm.

### _updateRewards
```solidity
  function _updateRewards(
  ) internal
```
Updates each farm's second rewards.



