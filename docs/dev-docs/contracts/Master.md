This contract is the SOLACE token distributor.


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    contract SOLACE _solace,
    uint256 _solacePerBlock
  ) public
```
Constructs the master contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.
|`_solace` | contract SOLACE | Address of the solace token.
|`_solacePerBlock` | uint256 | Amount of solace to distribute per block.

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
    uint256 _farmId,
    uint256 _allocPoints
  ) internal
```
Sets a farm's allocation points.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_farmId` | uint256 | The farm to set allocation points.
|`_allocPoints` | uint256 | How many points to allocate this farm.

### _updateRewards
```solidity
  function _updateRewards(
  ) internal
```
Updates each farm's block rewards.



