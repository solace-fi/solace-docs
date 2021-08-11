The interface for the SOLACE token distributor.


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Governor.



### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```
Governance to take over.



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
Given a farm id, return its address.

Indexable 1-numFarms, 0 is null farm.


### farmIndices
```solidity
  function farmIndices(
  ) external returns (uint256)
```
Given a farm address, returns its id.

Returns 0 for not farms and unregistered farms.


### allocPoints
```solidity
  function allocPoints(
  ) external returns (uint256)
```
Given a farm id, how many points the farm was allocated.



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



### registerFarm
```solidity
  function registerFarm(
    address _farmAddress,
    uint256 _allocPoints
  ) external returns (uint256 farmId)
```
Registers a farm.
Can only be called by the current governor.
Cannot register a farm more than once.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_farmAddress` | address | The farm's address.
|`_allocPoints` | uint256 | How many points to allocate this farm.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`farmId`| address | The farm id.
### setAllocPoints
```solidity
  function setAllocPoints(
    uint256 _farmId,
    uint256 _allocPoints
  ) external
```
Sets a farm's allocation points.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_farmId` | uint256 | The farm to set allocation points.
|`_allocPoints` | uint256 | How many points to allocate this farm.

### setSolacePerBlock
```solidity
  function setSolacePerBlock(
    uint256 _solacePerBlock
  ) external
```
Sets the Solace reward distribution across all farms.
Optionally updates all farms.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_solacePerBlock` | uint256 | Amount of solace to distribute per block.

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



### RewardsSet
```solidity
  event RewardsSet(
  )
```



### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



