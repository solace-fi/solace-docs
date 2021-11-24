Rewards [**Policyholders**](/docs/protocol/policy-holder) in [**Options**](../OptionFarming) for staking their [**Policies**](./PolicyManager).

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**Options**](../OptionFarming) to all farmers split relative to the amount of [**SCP**](../Vault) they have deposited.

Users can become [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) by depositing **ETH** into the [`Vault`](../Vault), receiving [**SCP**](../Vault) in the process. [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) can then deposit their [**SCP**](../Vault) via [`depositCp()`](#depositcp) or [`depositCpSigned()`](#depositcpsigned). Alternatively users can bypass the [`Vault`](../Vault) and stake their **ETH** via [`depositEth()`](#depositeth).

Users can withdraw their rewards via [`withdrawRewards()`](#withdrawrewards).

Users can withdraw their [**SCP**](../Vault) via [`withdrawCp()`](#withdrawcp).

Note that transferring in **ETH** will mint you shares, but transferring in **WETH** or [**SCP**](../Vault) will not. These must be deposited via functions in this contract. Misplaced funds cannot be rescued.


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
Constructs the SptFarm.


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



### policyManager
```solidity
  function policyManager(
  ) external returns (address policyManager_)
```
[`PolicyManager`](./PolicyManager) contract.



### countDeposited
```solidity
  function countDeposited(
    address user
  ) external returns (uint256 count)
```
Returns the count of [**policies**](./PolicyManager) that a user has deposited onto the farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to check count for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| address | The count of deposited [**policies**](./PolicyManager).
### listDeposited
```solidity
  function listDeposited(
    address user
  ) external returns (uint256[] policyIDs, uint256[] policyValues)
```
Returns the list of [**policies**](./PolicyManager) that a user has deposited onto the farm and their values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to list deposited policies.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyIDs`| address | The list of deposited policies.
|`policyValues`|  | The values of the policies.
### getDeposited
```solidity
  function getDeposited(
    address user,
    uint256 index
  ) external returns (uint256 policyID, uint256 policyValue)
```
Returns the ID of a [**Policies**](./PolicyManager) that a user has deposited onto a farm and its value.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to get policyID for.
|`index` | uint256 | The farm-based index of the policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The ID of the deposited [**policy**](./PolicyManager).
|`policyValue`| uint256 | The value of the [**policy**](./PolicyManager).
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
The value of [**policies**](./PolicyManager) a user deposited.



### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256 amount)
```
Value of [**policies**](./PolicyManager) staked by all farmers.



### policyInfo
```solidity
  function policyInfo(
  ) external returns (address depositor, uint256 value)
```
Information about a deposited policy.



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
|`user` | address | The user for whom unclaimed rewards will be shown.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| address | Total amount of withdrawable rewards.
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
### depositPolicy
```solidity
  function depositPolicy(
    uint256 policyID
  ) external
```
Deposit a [**policy**](./PolicyManager).
User must `ERC721.approve()` or `ERC721.setApprovalForAll()` first.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy to deposit.

### depositPolicySigned
```solidity
  function depositPolicySigned(
    address depositor,
    uint256 policyID,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit a [**policy**](./PolicyManager) using permit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`policyID` | uint256 | The ID of the policy to deposit.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### depositPolicyMulti
```solidity
  function depositPolicyMulti(
    uint256[] policyIDs
  ) external
```
Deposit multiple [**policies**](./PolicyManager).
User must `ERC721.approve()` or `ERC721.setApprovalForAll()` first.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyIDs` | uint256[] | The IDs of the policies to deposit.

### depositPolicySignedMulti
```solidity
  function depositPolicySignedMulti(
    address[] depositors,
    uint256[] policyIDs,
    uint256[] deadlines,
    uint8[] vs,
    bytes32[] rs,
    bytes32[] ss
  ) external
```
Deposit multiple [**policies**](./PolicyManager) using permit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositors` | address[] | The depositing users.
|`policyIDs` | uint256[] | The IDs of the policies to deposit.
|`deadlines` | uint256[] | Times the transactions must go through before.
|`vs` | uint8[] | secp256k1 signatures
|`rs` | bytes32[] | secp256k1 signatures
|`ss` | bytes32[] | secp256k1 signatures

### _deposit
```solidity
  function _deposit(
    address depositor,
    uint256 policyID
  ) internal
```
Performs the internal accounting for a deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`policyID` | uint256 | The ID of the policy to deposit.

### withdrawPolicy
```solidity
  function withdrawPolicy(
    uint256 policyID
  ) external
```
Withdraw a [**policy**](./PolicyManager).
Can only withdraw policies you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy to withdraw.

### withdrawPolicyMulti
```solidity
  function withdrawPolicyMulti(
    uint256[] policyIDs
  ) external
```
Withdraw multiple [**policies**](./PolicyManager).
Can only withdraw policies you deposited.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyIDs` | uint256[] | The IDs of the policies to withdraw.

### updateActivePolicies
```solidity
  function updateActivePolicies(
    uint256[] policyIDs
  ) external
```
Burns expired policies.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyIDs` | uint256[] | The list of expired policies.

### updateFarm
```solidity
  function updateFarm(
  ) public
```
Updates farm information to be up to date to the current time.



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
Withdraw a users rewards without unstaking their policys.
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

