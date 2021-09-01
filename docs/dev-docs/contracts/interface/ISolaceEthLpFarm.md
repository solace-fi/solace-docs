Rewards [**Liquidity Providers**](/docs/user-guides/liquidity-provider/lp-role-guide) in [**SOLACE**](./SOLACE) for providing liquidity in the [**SOLACE**](./SOLACE)-**ETH** [**Uniswap V3 Pool**](https://docs.uniswap.org/protocol/reference/core/UniswapV3Pool).

Over the course of `startBlock` to `endBlock`, the farm distributes `blockReward` [**SOLACE**](./SOLACE) per block to all farmers split relative to the value of their deposited tokens.


## Functions
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
User will receive accumulated [**SOLACE**](../SOLACE) rewards if any.
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
User will receive accumulated [**SOLACE**](../SOLACE) rewards if any.


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
  ) external returns (uint256, uint256)
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
### lpToken
```solidity
  function lpToken(
  ) external returns (contract IUniswapLpToken)
```
[`Uniswap V3 LP Token`](https://docs.uniswap.org/protocol/reference/periphery/NonfungiblePositionManager).



### solace
```solidity
  function solace(
  ) external returns (contract SOLACE)
```
Native [**SOLACE**](../SOLACE) Token.



### weth
```solidity
  function weth(
  ) external returns (contract IWETH9)
```
WETH.



### lastRewardBlock
```solidity
  function lastRewardBlock(
  ) external returns (uint256)
```
Last time rewards were distributed or farm was updated.



### accRewardPerShare
```solidity
  function accRewardPerShare(
  ) external returns (uint256)
```
Accumulated rewards per share, times 1e12.



### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256)
```
Value of tokens staked by all farmers.



## Events
### TokenDeposited
```solidity
  event TokenDeposited(
  )
```



### TokenWithdrawn
```solidity
  event TokenWithdrawn(
  )
```



### UserRewarded
```solidity
  event UserRewarded(
  )
```



### RewardsSet
```solidity
  event RewardsSet(
  )
```



### FarmEndSet
```solidity
  event FarmEndSet(
  )
```



