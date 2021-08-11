


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    address _master,
    address _lpToken,
    contract SOLACE _solace,
    uint256 _startBlock,
    uint256 _endBlock,
    address _pool
  ) public
```
Constructs the farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.
|`_master` | address | Address of the Master contract.
|`_lpToken` | address | Address of the Uniswap NonFungiblePositionManager contract.
|`_solace` | contract SOLACE | Address of the SOLACE token contract.
|`_startBlock` | uint256 | When farming will begin.
|`_endBlock` | uint256 | When farming will end.
|`_pool` | address | Address of the UniswapV3Pool.

### receive
```solidity
  function receive(
  ) external
```




### fallback
```solidity
  function fallback(
  ) external
```




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

### setAppraisor
```solidity
  function setAppraisor(
    address _appraisor
  ) external
```
Sets the appraisal function.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_appraisor` | address | The new appraisor.

### deposit
```solidity
  function deposit(
    uint256 _tokenId
  ) external
```
Deposit a Uniswap LP token.
User will receive accumulated Solace rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to deposit.

### depositSigned
```solidity
  function depositSigned(
    address _depositor,
    uint256 _tokenId,
    uint256 _deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit a Uniswap LP token using permit.
User will receive accumulated Solace rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_tokenId` | uint256 | The id of the token to deposit.
|`_deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### mintAndDeposit
```solidity
  function mintAndDeposit(
    struct ISolaceEthLpFarm.MintAndDepositParams params
  ) external returns (uint256 tokenId)
```
Mint a new Uniswap LP token then deposit it.
User will receive accumulated Solace rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`params` | struct ISolaceEthLpFarm.MintAndDepositParams | parameters

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenId`| struct ISolaceEthLpFarm.MintAndDepositParams | The newly minted token id.
### withdraw
```solidity
  function withdraw(
    uint256 _tokenId
  ) external
```
Withdraw a Uniswap LP token.
User will receive _tokenId and accumulated rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to withdraw.

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
### countDeposited
```solidity
  function countDeposited(
    address _user
  ) external returns (uint256)
```
Returns the count of Uniswap LP tokens that a user has deposited onto a farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to check count for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | count of deposited Uniswap LP tokens.
### listDeposited
```solidity
  function listDeposited(
    address _user
  ) external returns (uint256[], uint256[])
```
Returns the list of Uniswap LP tokens that a user has deposited onto a farm and their values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to list Uniswap LP tokens.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | list of deposited Uniswap LP tokens.
|`The`|  | values of the tokens.
### getDeposited
```solidity
  function getDeposited(
    address _user,
    uint256 _index
  ) external returns (uint256, uint256)
```
Returns the id of a Uniswap LP that a user has deposited onto a farm and its value.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to get token id for.
|`_index` | uint256 | The farm-based index of the token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | id of the deposited Uniswap LP token.
|`The`| uint256 | value of the token.
### appraise
```solidity
  function appraise(
    uint256 _token
  ) external returns (uint256 _value)
```
Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | uint256 | The id of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_value`| uint256 | The token's value.
### _harvest
```solidity
  function _harvest(
  ) internal
```
Calculate and transfer a user's rewards.



### _deposit
```solidity
  function _deposit(
    address _depositor,
    uint256 _tokenId
  ) internal
```
Performs the internal accounting for a deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_tokenId` | uint256 | The id of the token to deposit.

### _add
```solidity
  function _add(
    uint256 _a,
    int256 _b
  ) internal returns (uint256 _c)
```
Adds two numbers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_a` | uint256 | The first number as a uint256.
|`_b` | int256 | The second number as an int256.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_c`| uint256 | The sum as a uint256.
