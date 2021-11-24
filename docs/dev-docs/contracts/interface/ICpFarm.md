Rewards [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) in [**Options**](../OptionFarming) for providing capital in the [`Vault`](../Vault).

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**Options**](../OptionFarming) to all farmers split relative to the amount of [**SCP**](../Vault) they have deposited.

Users can become [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) by depositing **ETH** into the [`Vault`](../Vault), receiving [**SCP**](../Vault) in the process. [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) can then deposit their [**SCP**](../Vault) via [`depositCp()`](#depositcp) or [`depositCpSigned()`](#depositcpsigned). Alternatively users can bypass the [`Vault`](../Vault) and stake their **ETH** via [`depositEth()`](#depositeth).

Users can withdraw their rewards via [`withdrawRewards()`](#withdrawrewards).

Users can withdraw their [**SCP**](../Vault) via [`withdrawCp()`](#withdrawcp).

Note that transferring in **ETH** will mint you shares, but transferring in **WETH** or [**SCP**](../Vault) will not. These must be deposited via functions in this contract. Misplaced funds cannot be rescued.


## Functions
### vault
```solidity
  function vault(
  ) external returns (address vault_)
```
Vault contract.



### weth
```solidity
  function weth(
  ) external returns (address weth_)
```
WETH contract.



### lastRewardTime
```solidity
  function lastRewardTime(
  ) external returns (uint256 timestamp)
```
Last time rewards were distributed or farm was updated.



### accRewardPerShare
```solidity
  function accRewardPerShare(
  ) external returns (uint256 acc)
```
Accumulated rewards per share, times 1e12.



### userStaked
```solidity
  function userStaked(
  ) external returns (uint256 amount)
```
The amount of [**SCP**](../Vault) tokens a user deposited.



### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256 amount)
```
Value of tokens staked by all farmers.



### depositCp
```solidity
  function depositCp(
    uint256 amount
  ) external
```
Deposit some [**CP tokens**](../Vault).
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



### depositWeth
```solidity
  function depositWeth(
    uint256 amount
  ) external
```
Deposit some **WETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of **WETH** to deposit.

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

### receive
```solidity
  function receive(
  ) external
```
Receive function. Deposits eth.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth.



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


### CpWithdrawn
```solidity
  event CpWithdrawn(
  )
```
Emitted when CP tokens are withdrawn from the farm.


### RewardsSet
```solidity
  event RewardsSet(
  )
```
Emitted when rewardPerSecond is changed.


### FarmEndSet
```solidity
  event FarmEndSet(
  )
```
Emitted when the end time is changed.


