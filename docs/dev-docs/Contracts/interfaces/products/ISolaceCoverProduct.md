<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/products/ISolaceCoverProduct.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### activatePolicy
```solidity
  function activatePolicy(
    address policyholder_,
    uint256 coverLimit_,
    uint256 amount_,
    bytes referralCode_
  ) external returns (uint256 policyID)
```
Activates policy for `policyholder_`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The address of the intended policyholder. |
| `coverLimit_` | uint256 | The maximum value to cover in **USD**. |
| `amount_` | uint256 | The deposit amount in **USD** to fund the policyholder's account. |
| `referralCode_` | bytes | The referral code. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the newly minted policy. |

### updateCoverLimit
```solidity
  function updateCoverLimit(
    uint256 newCoverLimit_,
    bytes referralCode_
  ) external
```
Updates the cover limit of a user's policy.

This will reset the cooldown.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `newCoverLimit_` | uint256 | The new maximum value to cover in **USD**. |
| `referralCode_` | bytes | The referral code. |

### deposit
```solidity
  function deposit(
    address policyholder,
    uint256 amount
  ) external
```
Deposits funds into `policyholder`'s account.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder` | address | The policyholder. |
| `amount` | uint256 | The amount to deposit in **USD**. |

### withdraw
```solidity
  function withdraw() external
```
Withdraw funds from user's account.

If cooldown has passed, the user will withdraw their entire account balance. 
If cooldown has not started, or has not passed, the user will not be able to withdraw their entire account. 
If cooldown has not passed, [`withdraw()`](#withdraw) will leave a minimum required account balance (one epoch's fee) in the user's account.



### deactivatePolicy
```solidity
  function deactivatePolicy() external
```
Deactivate a user's policy.

This will set a user's cover limit to 0, and begin the cooldown timer. Read comments for [`withdraw()`](#withdraw) for cooldown mechanic details.



### accountBalanceOf
```solidity
  function accountBalanceOf(
    address policyholder
  ) external returns (uint256 balance)
```
Returns the policyholder's account account balance in **USD**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder` | address | The policyholder address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `balance` | uint256 | The policyholder's account balance in **USD**. |

### maxCover
```solidity
  function maxCover() external returns (uint256 cover)
```
The maximum amount of cover that can be sold in **USD** to 18 decimals places.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover. |

### activeCoverLimit
```solidity
  function activeCoverLimit() external returns (uint256 amount)
```
Returns the active cover limit in **USD** to 18 decimal places. In other words, the total cover that has been sold at the current time.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The active cover limit. |

### availableCoverCapacity
```solidity
  function availableCoverCapacity() external returns (uint256 availableCoverCapacity_)
```
Determine the available remaining capacity for new cover.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `availableCoverCapacity_` | uint256 | The amount of available remaining capacity for new cover. |

### rewardPointsOf
```solidity
  function rewardPointsOf(
    address policyholder_
  ) external returns (uint256 rewardPoints_)
```
Get the reward points that a policyholder has in **USD** to 18 decimal places.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The policyholder address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `rewardPoints_` | uint256 | The reward points for the policyholder. |

### premiumsPaidOf
```solidity
  function premiumsPaidOf(
    address policyholder_
  ) external returns (uint256 premiumsPaid_)
```
Get the total premium that a policyholder has in **USD** to 18 decimal places (does not include premium paid through reward points)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The policyholder address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `premiumsPaid_` | uint256 | The total premium paid for the policyholder. |

### policyOf
```solidity
  function policyOf(
    address policyholder_
  ) external returns (uint256 policyID)
```
Gets the policyholder's policy ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The address of the policyholder. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

### policyStatus
```solidity
  function policyStatus(
    uint256 policyID_
  ) external returns (bool status)
```
Returns true if the policy is active, false if inactive


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID_` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if policy is active. False otherwise. |

### registry
```solidity
  function registry() external returns (address registry_)
```
Returns  [`Registry`](./Registry) contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `registry_` | address | The `Registry` address. |

### riskManager
```solidity
  function riskManager() external returns (address riskManager_)
```
Returns [`RiskManager`](./RiskManager) contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `riskManager_` | address | The `RiskManager` address. |

### paused
```solidity
  function paused() external returns (bool status)
```
Returns true if the product is paused, false if not.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if product is paused. |

### policyCount
```solidity
  function policyCount() external returns (uint256 count)
```
Gets the policy count (amount of policies that have been purchased, includes inactive policies).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The policy count. |

### maxRateNum
```solidity
  function maxRateNum() external returns (uint256 maxRateNum_)
```
Returns the max rate numerator.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `maxRateNum_` | uint256 | the max rate numerator. |

### maxRateDenom
```solidity
  function maxRateDenom() external returns (uint256 maxRateDenom_)
```
Returns the max rate denominator.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `maxRateDenom_` | uint256 | the max rate denominator. |

### chargeCycle
```solidity
  function chargeCycle() external returns (uint256 chargeCycle_)
```
Gets the charge cycle duration.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `chargeCycle_` | uint256 | the charge cycle duration in seconds. |

### coverLimitOf
```solidity
  function coverLimitOf(
    uint256 policyID_
  ) external returns (uint256 amount)
```
Gets cover limit for a given policy ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID_` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The cover limit for given policy ID. |

### cooldownPeriod
```solidity
  function cooldownPeriod() external returns (uint256 cooldownPeriod_)
```
Gets the cooldown period.

Cooldown timer is started by the user calling deactivatePolicy().
Before the cooldown has started or has passed, withdrawing funds will leave a minimim required account balance in the user's account. 
Only after the cooldown has passed, is a user able to withdraw their entire account balance.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cooldownPeriod_` | uint256 | The cooldown period in seconds. |

### cooldownStart
```solidity
  function cooldownStart(
    address policyholder_
  ) external returns (uint256 cooldownStart_)
```
The Unix timestamp that a policyholder's cooldown started. If cooldown has not started or has been reset, will return 0.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The policyholder address |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cooldownStart_` | uint256 | The cooldown period start expressed as Unix timestamp |

### referralReward
```solidity
  function referralReward() external returns (uint256 referralReward_)
```
Gets the referral reward



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `referralReward_` | uint256 | The referral reward |

### referralThreshold
```solidity
  function referralThreshold() external returns (uint256 referralThreshold_)
```
Gets the threshold premium amount in USD that an account needs to have paid, for the account to be able to apply a referral code



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `referralThreshold_` | uint256 | The referral threshold |

### isReferralOn
```solidity
  function isReferralOn() external returns (bool isReferralOn_)
```
Returns true if referral rewards are active, false if not.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isReferralOn_` | bool | True if referral rewards are active, false if not. |

### isReferralCodeUsed
```solidity
  function isReferralCodeUsed() external returns (bool isReferralCodeUsed_)
```
True if a policyholder has previously used a valid referral code, false if not

A policyholder can only use a referral code once. Afterwards a policyholder is ineligible to receive further rewards from additional referral codes.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isReferralCodeUsed_` | bool | True if the policyholder has previously used a valid referral code, false if not |

### isReferralCodeValid
```solidity
  function isReferralCodeValid(
    bytes referralCode
  ) external returns (bool)
```
Returns true if valid referral code, false otherwise.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `referralCode` | bytes | The referral code. |

### getReferrerFromReferralCode
```solidity
  function getReferrerFromReferralCode(
    bytes referralCode
  ) external returns (address referrer)
```
Get referrer from referral code, returns 0 address if invalid referral code.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `referralCode` | bytes | The referral code. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `referrer` | address | The referrer address, returns 0 address if invalid referral code. |

### minRequiredAccountBalance
```solidity
  function minRequiredAccountBalance(
    uint256 coverLimit
  ) external returns (uint256 minRequiredAccountBalance_)
```
Calculate minimum required account balance for a given cover limit. Equals the maximum chargeable fee for one epoch.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `coverLimit` | uint256 | Cover limit. |

### setRegistry
```solidity
  function setRegistry(
    address registry_
  ) external
```
Sets the [`Registry`](./Registry) contract address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `registry_` | address | The address of `Registry` contract. |

### setPaused
```solidity
  function setPaused(
    bool paused_
  ) external
```
Pauses or unpauses policies.
Deactivating policies are unaffected by pause.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `paused_` | bool | True to pause, false to unpause. |

### setCooldownPeriod
```solidity
  function setCooldownPeriod(
    uint256 cooldownPeriod_
  ) external
```
Sets the cooldown period. Read comments for [`cooldownPeriod()`](#cooldownPeriod) for more information on the cooldown mechanic.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `cooldownPeriod_` | uint256 | Cooldown period in seconds. |

### setMaxRateNum
```solidity
  function setMaxRateNum(
    uint256 maxRateNum_
  ) external
```
set _maxRateNum.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxRateNum_` | uint256 | Desired maxRateNum. |

### setMaxRateDenom
```solidity
  function setMaxRateDenom(
    uint256 maxRateDenom_
  ) external
```
set _maxRateDenom.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxRateDenom_` | uint256 | Desired maxRateDenom. |

### setChargeCycle
```solidity
  function setChargeCycle(
    uint256 chargeCycle_
  ) external
```
set _chargeCycle.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `chargeCycle_` | uint256 | Desired chargeCycle. |

### setReferralReward
```solidity
  function setReferralReward(
    uint256 referralReward_
  ) external
```
set _referralReward
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `referralReward_` | uint256 | Desired referralReward. |

### setReferralThreshold
```solidity
  function setReferralThreshold(
    uint256 referralThreshhold_
  ) external
```
set _referralThreshhold
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `referralThreshhold_` | uint256 | Desired referralThreshhold. |

### setIsReferralOn
```solidity
  function setIsReferralOn(
    bool isReferralOn_
  ) external
```
set _isReferralOn
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isReferralOn_` | bool | Desired state of referral campaign. |

### setBaseURI
```solidity
  function setBaseURI(
    string baseURI_
  ) external
```
Sets the base URI for computing `tokenURI`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `baseURI_` | string | The new base URI. |

### setRewardPoints
```solidity
  function setRewardPoints(
    address policyholder_,
    uint256 rewardPoints_
  ) external
```
Enables cover promotion admin to set reward points for a selected address.

Can only be called by the **Cover Promotion Admin** role.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder_` | address | The address of the policyholder to set reward points for. |
| `rewardPoints_` | uint256 | Desired amount of reward points. |

### chargePremiums
```solidity
  function chargePremiums(
    address[] holders,
    uint256[] premiums
  ) external
```
Charge premiums for each policy holder.

Can only be called by the **Premium Collector** role.

Cheaper to load variables directly from calldata, rather than adding an additional operation of copying to memory.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `holders` | address[] | Array of addresses of the policyholders to charge. |
| `premiums` | uint256[] | Array of premium amounts (in **USD** to 18 decimal places) to charge each policyholder. |


## Events
### PolicyCreated
```solidity
  event PolicyCreated()
```
Emitted when a new Policy is created.


### PolicyUpdated
```solidity
  event PolicyUpdated()
```
Emitted when a Policy is updated.


### PolicyDeactivated
```solidity
  event PolicyDeactivated()
```
Emitted when a Policy is deactivated.


### RegistrySet
```solidity
  event RegistrySet()
```
Emitted when Registry address is updated.


### PauseSet
```solidity
  event PauseSet()
```
Emitted when pause is set.


### CooldownStarted
```solidity
  event CooldownStarted()
```
Emitted when a user enters cooldown mode.


### CooldownStopped
```solidity
  event CooldownStopped()
```
Emitted when a user leaves cooldown mode.


### CooldownPeriodSet
```solidity
  event CooldownPeriodSet()
```
Emitted when the cooldown period is set.


### DepositMade
```solidity
  event DepositMade()
```
Emitted when a deposit is made.


### WithdrawMade
```solidity
  event WithdrawMade()
```
Emitted when a withdraw is made.


### PremiumCharged
```solidity
  event PremiumCharged()
```
Emitted when premium is charged.


### PremiumPartiallyCharged
```solidity
  event PremiumPartiallyCharged()
```
Emitted when premium is partially charged.


### PolicyManagerUpdated
```solidity
  event PolicyManagerUpdated()
```
Emitted when policy manager cover amount for soteria is updated.


### MaxRateNumSet
```solidity
  event MaxRateNumSet()
```
Emitted when maxRateNum is set.


### MaxRateDenomSet
```solidity
  event MaxRateDenomSet()
```
Emitted when maxRateDenom is set.


### ChargeCycleSet
```solidity
  event ChargeCycleSet()
```
Emitted when chargeCycle is set.


### RewardPointsSet
```solidity
  event RewardPointsSet()
```
Emitted when reward points are set.


### IsReferralOnSet
```solidity
  event IsReferralOnSet()
```
Emitted when isReferralOn is set


### ReferralRewardSet
```solidity
  event ReferralRewardSet()
```
Emitted when referralReward is set.


### ReferralThresholdSet
```solidity
  event ReferralThresholdSet()
```
Emitted when referralThreshold is set.


### ReferralRewardsEarned
```solidity
  event ReferralRewardsEarned()
```
Emitted when referral rewards are earned;


### BaseURISet
```solidity
  event BaseURISet()
```
Emitted when baseURI is set


