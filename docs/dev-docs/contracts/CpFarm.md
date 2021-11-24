Rewards [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) in [`Policy Manager`](./PolicyManager) for providing capital in the [`Vault`](./Vault).

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**SOLACE**](./SOLACE) to all farmers split relative to the amount of [**SCP**](./Vault) they have deposited.

Users can become [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) by depositing **ETH** into the [`Vault`](./Vault), receiving [**SCP**](./Vault) in the process. [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) can then deposit their [**SCP**](./Vault) via [`depositCp()`](#depositcp) or [`depositCpSigned()`](#depositcpsigned). Alternatively users can bypass the [`Vault`](./Vault) and stake their **ETH** via [`depositEth()`](#depositeth).

Users can withdraw their rewards via [`withdrawRewards()`](#withdrawrewards).

Users can withdraw their [**SCP**](./Vault) via [`withdrawCp()`](#withdrawcp).

Note that transferring in **ETH** will mint you shares, but transferring in **WETH** or [**SCP**](./Vault) will not. These must be deposited via functions in this contract. Misplaced funds cannot be rescued.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_,
    uint256 startTime_,
    uint256 endTime_
  ) public
```
Constructs the CpFarm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | Address of the [`Registry`](./Registry) contract.
|`startTime_` | uint256 | When farming will begin.
|`endTime_` | uint256 | When farming will end.

### farmType
```solidity
  function farmType(
  ) external returns (uint256 farmType_)
```
A unique enumerator that identifies the farm type.



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



### farmController
```solidity
  function farmController(
  ) external returns (address controller_)
```
FarmController contract.



### rewardPerSecond
```solidity
  function rewardPerSecond(
  ) external returns (uint256)
```
Amount of SOLACE distributed per second.



### startTime
```solidity
  function startTime(
  ) external returns (uint256 timestamp)
```
When the farm will start.



### endTime
```solidity
  function endTime(
  ) external returns (uint256 timestamp)
```
When the farm will end.



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
### getRewardAmountDistributed
```solidity
  function getRewardAmountDistributed(
    uint256 from,
    uint256 to
  ) public returns (uint256 amount)
```
Calculates the reward amount distributed between two timestamps.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | uint256 | The start of the period to measure rewards for.
|`to` | uint256 | The end of the period to measure rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The reward amount distributed in the given period.
### depositCp
```solidity
  function depositCp(
    uint256 amount
  ) external
```
Deposit some [**CP tokens**](./Vault).
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
Withdraw some [**CP tokens**](./Vault).
User will receive amount of deposited tokens and accumulated rewards.
Can only withdraw as many tokens as you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The withdraw amount.

### updateFarm
```solidity
  function updateFarm(
  ) public
```
Updates farm information to be up to date to the current time.



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
Update farm and accumulate a user's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to process rewards for.

### withdrawRewards
```solidity
  function withdrawRewards(
  ) external returns (uint256 optionID)
```
Converts the senders unpaid rewards into an [`Option`](./OptionsFarming).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionID`|  | The ID of the newly minted [`Option`](./OptionsFarming).
### withdrawRewardsForUser
```solidity
  function withdrawRewardsForUser(
    address user
  ) external returns (uint256 rewardAmount)
```
Withdraw a users rewards without unstaking their tokens.
Can only be called by [`FarmController`](./FarmController).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to withdraw rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`rewardAmount`| address | The amount of rewards the user earned on this farm.
### setRewards
```solidity
  function setRewards(
    uint256 rewardPerSecond_
  ) external
```
Sets the amount of [**SOLACE**](./SOLACE) to distribute per second.
Only affects future rewards.
Can only be called by [`FarmController`](./FarmController).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardPerSecond_` | uint256 | Amount to distribute per second.

### setEnd
```solidity
  function setEnd(
    uint256 endTime_
  ) external
```
Sets the farm's end time. Used to extend the duration.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`endTime_` | uint256 | The new end time.

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



