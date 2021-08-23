Rewards [**Capital Providers**](/docs/user-docs/Capital%20Providers) in [**SOLACE**](../SOLACE) for providing capital in the [`Vault`](../Vault).

Over the course of `startBlock` to `endBlock`, the farm distributes `blockReward` [**SOLACE**](../SOLACE) per block to all farmers split relative to the amount of [**SCP**](../Vault) they have deposited.

Users can become [**Capital Providers**](/docs/user-docs/Capital%20Providers) by depositing **ETH** into the [`Vault`](../Vault), receiving [**SCP**](../Vault) in the process. [**Capital Providers**](/docs/user-docs/Capital%20Providers) can then deposit their [**SCP**](../Vault) via [`depositCp()`](#depositcp) or [`depositCpSigned()`](#depositcpsigned). Alternatively users can bypass the [`Vault`](../Vault) and stake their **ETH** via [`depositEth()`](#depositeth).

Users can withdraw their rewards via [`withdrawRewards()`](#withdrawrewards) and compound their rewards via [`compoundRewards()`](#compoundrewards).

Users can withdraw their [**SCP**](../Vault) via [`withdrawCp()`](#withdrawcp).

Note that transferring in **ETH** will mint you shares, but transferring in **WETH** or [**SCP**](../Vault) will not. These must be deposited via functions in this contract. Misplaced funds cannot be rescued.


## Functions
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



### depositCp
```solidity
  function depositCp(
    uint256 amount
  ) external
```
Deposit some [**CP tokens**](../Vault).
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
Deposit some [**CP tokens**](../Vault) using `ERC2612.permit()`.
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
Withdraws your [**SOLACE**](../SOLACE) rewards, swaps it for **WETH**, then deposits that **WETH** onto the farm.



### withdrawCp
```solidity
  function withdrawCp(
    uint256 amount
  ) external
```
Withdraw some [**CP tokens**](../Vault).
User will receive amount of deposited tokens and accumulated rewards.
Can only withdraw as many tokens as you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The withdraw amount.

### vault
```solidity
  function vault(
  ) external returns (contract IVault)
```
Vault contract.



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
### CpDeposited
```solidity
  event CpDeposited(
  )
```
Emitted when CP tokens are deposited onto the farm.


### EthDeposited
```solidity
  event EthDeposited(
  )
```
Emitted when ETH is deposited onto the farm.


### RewardsCompounded
```solidity
  event RewardsCompounded(
  )
```
Emitted when a user compounds their rewards.


### CpWithdrawn
```solidity
  event CpWithdrawn(
  )
```
Emitted when CP tokens are withdrawn from the farm.


### UserRewarded
```solidity
  event UserRewarded(
  )
```
Emitted when a user is rewarded.


### RewardsSet
```solidity
  event RewardsSet(
  )
```
Emitted when block reward is changed.


### FarmEndSet
```solidity
  event FarmEndSet(
  )
```
Emitted when the end block is changed.


