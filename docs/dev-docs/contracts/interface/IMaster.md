## `IMaster`

The interface for the SOLACE token distributor.




### `governance() → address` (external)

Governor.



### `newGovernance() → address` (external)

Governance to take over.



### `solace() → contract SOLACE` (external)

Native SOLACE Token.



### `solacePerBlock() → uint256` (external)

Total solace distributed per block across all farms.



### `totalAllocPoints() → uint256` (external)

Total allocation points across all farms.



### `numFarms() → uint256` (external)

The number of farms that have been created.



### `farmAddresses(uint256) → address` (external)

Given a farm id, return its address.


Indexable 1-numFarms, 0 is null farm.

### `farmIndices(address) → uint256` (external)

Given a farm address, returns its id.


Returns 0 for not farms and unregistered farms.

### `allocPoints(uint256) → uint256` (external)

Given a farm id, how many points the farm was allocated.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `registerFarm(address _farmAddress, uint256 _allocPoints) → uint256 farmId` (external)

Registers a farm.
Can only be called by the current governor.
Cannot register a farm more than once.




### `setAllocPoints(uint256 _farmId, uint256 _allocPoints)` (external)

Sets a farm's allocation points.
Can only be called by the current governor.




### `setSolacePerBlock(uint256 _solacePerBlock)` (external)

Sets the Solace reward distribution across all farms.
Optionally updates all farms.




### `massUpdateFarms()` (external)

Updates all farms to be up to date to the current block.



### `withdrawRewards()` (external)

Withdraw your rewards from all farms.




### `FarmCreated(uint256 _farmId, address _farmAddress)`





### `RewardsSet(uint256 _solacePerBlock)`





### `GovernanceTransferred(address _newGovernance)`





