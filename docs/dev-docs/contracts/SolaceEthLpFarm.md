Rewards [**Liquidity Providers**](/docs/user-guides/liquidity-provider/lp-role-guide) in [**SOLACE**](./SOLACE) for providing liquidity in the [**SOLACE**](./SOLACE)-**ETH** [**Uniswap V3 Pool**](https://docs.uniswap.org/protocol/reference/core/UniswapV3Pool).

Over the course of `startBlock` to `endBlock`, the farm distributes `blockReward` [**SOLACE**](./SOLACE) per block to all farmers split relative to the value of their deposited tokens.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address master_,
    address lpToken_,
    contract SOLACE solace_,
    uint256 startBlock_,
    uint256 endBlock_,
    address pool_
  ) public
```
Constructs the farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`master_` | address | Address of the [`Master`](./Master) contract.
|`lpToken_` | address | Address of the [**Uniswap NonFungiblePositionManager**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) contract.
|`solace_` | contract SOLACE | Address of the [**SOLACE**](./SOLACE) token contract.
|`startBlock_` | uint256 | When farming will begin.
|`endBlock_` | uint256 | When farming will end.
|`pool_` | address | Address of the [**Uniswap V3 Pool**](https://docs.uniswap.org/protocol/reference/core/UniswapV3Pool).

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




### setRewards
```solidity
  function setRewards(
    uint256 blockReward_
  ) external
```
Sets the amount of [**SOLACE**](./SOLACE) to distribute per block.
Only affects future rewards.
Can only be called by [`Master`](./Master).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`blockReward_` | uint256 | Amount to distribute per block.

### setEnd
```solidity
  function setEnd(
    uint256 endBlock_
  ) external
```
Sets the farm's end block. Used to extend the duration.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`endBlock_` | uint256 | The new end block.

### setAppraisor
```solidity
  function setAppraisor(
    address appraisor_
  ) external
```
Sets the appraisal function.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`appraisor_` | address | The new appraisor.

### depositLp
```solidity
  function depositLp(
    uint256 tokenID
  ) external
```
Deposit a [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager).
User will receive accumulated [**SOLACE**](./SOLACE) rewards if any.
User must `ERC721.approve()` or `ERC721.setApprovalForAll()` first.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to deposit.

### depositLpSigned
```solidity
  function depositLpSigned(
    address depositor,
    uint256 tokenID,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit a [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) using permit.
User will receive accumulated [**SOLACE**](./SOLACE) rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`tokenID` | uint256 | The ID of the token to deposit.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### mintAndDeposit
```solidity
  function mintAndDeposit(
    struct ISolaceEthLpFarm.MintAndDepositParams params
  ) external returns (uint256 tokenID)
```
Mint a new [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) then deposit it.
User will receive accumulated [**SOLACE**](./SOLACE) rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`params` | struct ISolaceEthLpFarm.MintAndDepositParams | parameters

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenID`| struct ISolaceEthLpFarm.MintAndDepositParams | The newly minted token ID.
### withdrawLp
```solidity
  function withdrawLp(
    uint256 tokenID
  ) external
```
Withdraw a [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager).
User will receive `tokenID` and accumulated rewards.
Can only withdraw tokens you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to withdraw.

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
Can only be called by ['Master`](./Master) or the user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to withdraw rewards for.

### updateFarm
```solidity
  function updateFarm(
  ) public
```
Updates farm information to be up to date to the current block.



### pendingRewards
```solidity
  function pendingRewards(
    address user
  ) external returns (uint256 reward)
```
Calculates the accumulated balance of [**SOLACE**](./SOLACE) for specified user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user for whom unclaimed tokens will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| address | Total amount of withdrawable reward tokens.
### getMultiplier
```solidity
  function getMultiplier(
    uint256 from,
    uint256 to
  ) public returns (uint256 multiplier)
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
### countDeposited
```solidity
  function countDeposited(
    address user
  ) external returns (uint256 count)
```
Returns the count of [**Uniswap LP tokens**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) that a user has deposited onto the farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to check count for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| address | The count of deposited Uniswap LP tokens.
### listDeposited
```solidity
  function listDeposited(
    address user
  ) external returns (uint256[] tokenIDs, uint256[] tokenValues)
```
Returns the list of [**Uniswap LP tokens**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) that a user has deposited onto the farm and their values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to list Uniswap LP tokens.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenIDs`| address | The list of deposited Uniswap LP tokens.
|`tokenValues`|  | The values of the tokens.
### getDeposited
```solidity
  function getDeposited(
    address user,
    uint256 index
  ) external returns (uint256 tokenID, uint256 tokenValue)
```
Returns the ID of a [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager) that a user has deposited onto a farm and its value.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to get token ID for.
|`index` | uint256 | The farm-based index of the token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenID`| address | The ID of the deposited [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager).
|`tokenValue`| uint256 | The value of the token.
### appraise
```solidity
  function appraise(
    uint256 tokenID
  ) external returns (uint256 tokenValue)
```
Appraise a [**Uniswap LP token**](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager).
Token must exist and must exist in the correct pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenValue`| uint256 | The token's value.
### _harvest
```solidity
  function _harvest(
  ) internal
```
Calculate and transfer a user's rewards.



### _deposit
```solidity
  function _deposit(
    address depositor,
    uint256 tokenID
  ) internal
```
Performs the internal accounting for a deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`tokenID` | uint256 | The ID of the token to deposit.

### _add
```solidity
  function _add(
    uint256 a,
    int256 b
  ) internal returns (uint256 c)
```
Adds two numbers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | The first number as a uint256.
|`b` | int256 | The second number as an int256.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`c`| uint256 | The sum as a uint256.
