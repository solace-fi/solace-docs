Rewards [**Policyholders**](/docs/protocol/policy-holder) in [**Options**](../OptionFarming) for staking their [**Policies**](./PolicyManager).

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**Options**](../OptionFarming) to all farmers split relative to the value of the policies they have deposited.

Note that you should deposit your policies via [`depositPolicy()`](#depositpolicy) or [`depositPolicySigned()`](#depositpolicysigned). Raw `ERC721.transfer()` will not be recognized.


## Functions
### policyManager
```solidity
  function policyManager(
  ) external returns (address policyManager_)
```
@notice



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
Value of policies a user deposited.



### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256 amount)
```
Value of policies deposited by all farmers.



### policyInfo
```solidity
  function policyInfo(
  ) external returns (address depositor, uint256 value)
```
Information about a deposited policy.



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
|`index` | uint256 | The farm-based index of the token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The ID of the deposited [**policy**](./PolicyManager).
|`policyValue`| uint256 | The value of the [**policy**](./PolicyManager).
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

## Events
### PolicyDeposited
```solidity
  event PolicyDeposited(
  )
```



### PolicyWithdrawn
```solidity
  event PolicyWithdrawn(
  )
```



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


