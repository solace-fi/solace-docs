The distributor of [**SOLACE** token](../SOLACE).


## Functions
### solace
```solidity
  function solace(
  ) external returns (contract SOLACE)
```
Native SOLACE Token.



### solacePerBlock
```solidity
  function solacePerBlock(
  ) external returns (uint256)
```
Total solace distributed per block across all farms.



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



### registerFarm
```solidity
  function registerFarm(
    address farmAddress,
    uint256 allocPoints
  ) external returns (uint256 farmID)
```
Registers a farm.
Can only be called by the current [**governor**](/docs/protocol/governance).
Cannot register a farm more than once.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmAddress` | address | The farm's address.
|`allocPoints` | uint256 | How many points to allocate this farm.

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

### setSolacePerBlock
```solidity
  function setSolacePerBlock(
    uint256 solacePerBlock_
  ) external
```
Sets the Solace reward distribution across all farms.
Optionally updates all farms.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solacePerBlock_` | uint256 | Amount of solace to distribute per block.

### massUpdateFarms
```solidity
  function massUpdateFarms(
  ) external
```
Updates all farms to be up to date to the current block.



### withdrawRewards
```solidity
  function withdrawRewards(
  ) external
```
Withdraw your rewards from all farms.



## Events
### FarmCreated
```solidity
  event FarmCreated(
  )
```
Emitted when a farm is created.


### RewardsSet
```solidity
  event RewardsSet(
  )
```
Emitted when SOLACE per block is changed.


