Rewards [**Capital Providers**](/docs/user-docs/Capital%20Providers) in [**SOLACE**](./SOLACE) for providing capital in the [`Vault`](./Vault).

Over the course of `startBlock` to `endBlock`, the farm distributes `blockReward` [**SOLACE**](./SOLACE) per block to all farmers split relative to the amount of [**SCP**](./Vault) they have deposited.

Users can become [**Capital Providers**](/docs/user-docs/Capital%20Providers) by depositing **ETH** into the [`Vault`](./Vault), receiving [**SCP**](./Vault) in the process. [**Capital Providers**](/docs/user-docs/Capital%20Providers) can then deposit their [**SCP**](./Vault) via [`depositCp()`](#depositcp) or [`depositCpSigned()`](#depositcpsigned). Alternatively users can bypass the [`Vault`](./Vault) and stake their **ETH** via [`depositEth()`](#depositeth).

Users can withdraw their rewards via [`withdrawRewards()`](#withdrawrewards) and compound their rewards via [`compoundRewards()`](#compoundrewards).

Users can withdraw their [**SCP**](./Vault) via [`withdrawCp()`](#withdrawcp).

Note that transferring in **ETH** will mint you shares, but transferring in **WETH** or [**SCP**](./Vault) will not. These must be deposited via functions in this contract. Misplaced funds cannot be rescued.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address master_,
    address vault_,
    contract SOLACE solace_,
    uint256 startBlock_,
    uint256 endBlock_,
    address swapRouter_,
    address weth_
  ) public
```
Constructs the CpFarm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`master_` | address | Address of the [`Master`](./Master) contract.
|`vault_` | address | Address of the [`Vault`](./Vault) contract.
|`solace_` | contract SOLACE | Address of the [**SOLACE**](./SOLACE) token contract.
|`startBlock_` | uint256 | When farming will begin.
|`endBlock_` | uint256 | When farming will end.
|`swapRouter_` | address | Address of [`Uniswap V3 SwapRouter`](https://docs.uniswap.org/protocol/reference/periphery/SwapRouter).
|`weth_` | address | Address of **WETH**.

### receive
```solidity
  function receive(
  ) external
```
Receive function. Deposits eth. User will receive accumulated rewards if any.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth. User will receive accumulated rewards if any.



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
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`endBlock_` | uint256 | The new end block.

### depositCp
```solidity
  function depositCp(
    uint256 amount
  ) external
```
Deposit some [**CP tokens**](./Vault).
User will receive accumulated rewards if any.
User must `ERC20.approve()` first.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The deposit amount.

### depositCpSigned
```solidity
  function depositCpSigned(
    address depositor,
    uint256 amount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit some [**CP tokens**](./Vault) using `ERC2612.permit()`.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amount` | uint256 | The deposit amount.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### depositEth
```solidity
  function depositEth(
  ) external
```
Deposit some **ETH**.
User will receive accumulated rewards if any.



### compoundRewards
```solidity
  function compoundRewards(
  ) external
```
Your money already makes you money. Now make your money make more money!
Withdraws your [**SOLACE**](./SOLACE) rewards, swaps it for **WETH**, then deposits that **WETH** onto the farm.



### withdrawCp
```solidity
  function withdrawCp(
    uint256 amount
  ) external
```
Withdraw some [**CP tokens**](./Vault).
User will receive amount of deposited tokens and accumulated rewards.
Can only withdraw as many tokens as you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The withdraw amount.

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
Can only be called by [`Master`](./Master) or the user.


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
### _depositEth
```solidity
  function _depositEth(
  ) internal
```
Deposits some ether.



### _depositCp
```solidity
  function _depositCp(
    address depositor,
    uint256 amount
  ) internal
```
Deposit some [**CP tokens**](./Vault).
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amount` | uint256 | The deposit amount.

### _harvest
```solidity
  function _harvest(
    address user
  ) internal
```
Calculate and transfer a user's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to process rewards for.

