The distributor of [**SOLACE** token](./SOLACE).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract SOLACE solace_,
    uint256 solacePerBlock_
  ) public
```
Constructs the master contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`solace_` | contract SOLACE | Address of the solace token.
|`solacePerBlock_` | uint256 | Amount of solace to distribute per block.

### registerFarm
```solidity
  function registerFarm(
    address farmAddress,
    uint256 allocPoints_
  ) external returns (uint256 farmID)
```
Registers a farm.
Can only be called by the current [**governor**](/docs/user-docs/Governance).
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
Can only be called by the current [**governor**](/docs/user-docs/Governance).


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
  ) public
```
Updates all farms to be up to date to the current block.



### withdrawRewards
```solidity
  function withdrawRewards(
  ) external
```
Withdraw your rewards from all farms.



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
Updates each farm's block rewards.



