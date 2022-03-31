A Solace insurance product that allows users to insure all of their DeFi positions against smart contract risk through a single policy.

Policies can be **purchased** via [`activatePolicy()`](#activatepolicy). Policies are represented as ERC721s, which once minted, cannot then be transferred or burned. Users can change the cover limit of their policy through [`updateCoverLimit()`](#updatecoverlimit).

The policy will remain active until i.) the user cancels their policy or ii.) the user's account runs out of funds. The policy will be billed like a subscription, every epoch a fee will be charged from the user's account.

Users can **deposit funds** into their account via [`deposit()`](#deposit). Currently the contract only accepts deposits in **FRAX**. Note that both [`activatePolicy()`](#activatepolicy) and [`deposit()`](#deposit) enables a user to perform these actions (activate a policy, make a deposit) on behalf of another user.

Users can **cancel** their policy via [`deactivatePolicy()`](#deactivatepolicy). This will start a cooldown timer. Users can **withdraw funds** from their account via [`withdraw()`](#withdraw).

Before the cooldown timer starts or passes, the user cannot withdraw their entire account balance. A minimum required account balance (to cover one epoch's fee) will be left in the user's account. After the cooldown has passed, a user will be able to withdraw their entire account balance.

Users can enter a **referral code** with [`activatePolicy()`](#activatePolicy) or [`updateCoverLimit()`](#updatecoverlimit). A valid referral code will earn reward points to both the referrer and the referee. When the user's account is charged, reward points will be deducted before deposited funds.
Each account can only enter a valid referral code once, however there are no restrictions on how many times a referral code can be used for new accounts.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_,
    string asset_,
    string domain_,
    string version_
  ) public
```
Constructs `Solace Cover Product`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the governor.
|`registry_` | address | The [`Registry`](./Registry) contract address.
|`asset_` | string | The asset name to pay coverage.
|`domain_` | string | The user readable name of the EIP712 signing domain.
|`version_` | string | The current major version of the signing domain.

### activatePolicy
```solidity
  function activatePolicy(
    address policyholder_,
    uint256 coverLimit_,
    uint256 amount_,
    bytes referralCode_,
    uint256[] chains_
  ) external returns (uint256 policyID)
```
Activates policy for `policyholder_`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | The address of the intended policyholder.
|`coverLimit_` | uint256 | The maximum value to cover in **USD**.
|`amount_` | uint256 | The deposit amount in **USD** to fund the policyholder's account.
|`referralCode_` | bytes | The referral code.
|`chains_` | uint256[] | The chain ids.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| uint256 | The ID of the newly minted policy.
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
|`newCoverLimit_` | uint256 | The new maximum value to cover in **USD**.
|`referralCode_` | bytes | The referral code.

### updatePolicyChainInfo
```solidity
  function updatePolicyChainInfo(
    uint256[] policyChains
  ) external
```
Updates policy chain info.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyChains` | uint256[] | The requested policy chains to update.

### deposit
```solidity
  function deposit(
    address policyholder,
    uint256 amount
  ) external
```
Deposits funds into the `policyholder` account.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The policyholder.
|`amount` | uint256 | The amount to deposit in **USD**.

### withdraw
```solidity
  function withdraw(
  ) external
```
Withdraw funds from user's account.

If cooldown has passed, the user will withdraw their entire account balance.

If cooldown has not started, or has not passed, the user will not be able to withdraw their entire account. A minimum required account balance (one epoch's fee) will be left in the user's account.



### deactivatePolicy
```solidity
  function deactivatePolicy(
  ) external
```
Deactivate a user's policy.

This will set a user's cover limit to 0, and begin the cooldown timer. Read comments for [`cooldownPeriod()`](#cooldownperiod) for more information on the cooldown mechanic.



### accountBalanceOf
```solidity
  function accountBalanceOf(
    address policyholder
  ) public returns (uint256 balance)
```
Returns the policyholder's account account balance in **USD**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The policyholder address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| uint256 | The policyholder's account balance in **USD**.
### maxCover
```solidity
  function maxCover(
  ) public returns (uint256 cover)
```
The maximum amount of cover that can be sold in **USD** to 18 decimals places.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| uint256 | The max amount of cover.
### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) public returns (uint256 amount)
```
Returns the active cover limit in **USD** to 18 decimal places. In other words, the total cover that has been sold at the current time.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The active cover limit.
### availableCoverCapacity
```solidity
  function availableCoverCapacity(
  ) public returns (uint256 availableCoverCapacity_)
```
Determine the available remaining capacity for new cover.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`availableCoverCapacity_`| uint256 | The amount of available remaining capacity for new cover.
### rewardPointsOf
```solidity
  function rewardPointsOf(
    address policyholder_
  ) public returns (uint256 rewardPoints_)
```
Get the reward points that a policyholder has in **USD** to 18 decimal places.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | The policyholder address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`rewardPoints_`| uint256 | The reward points for the policyholder.
### premiumsPaidOf
```solidity
  function premiumsPaidOf(
    address policyholder_
  ) public returns (uint256 premiumsPaid_)
```
Get the total premium that a policyholder has in **USD** to 18 decimal places (does not include premium paid through reward points)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | The policyholder address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`premiumsPaid_`| uint256 | The total premium paid for the policyholder.
### policyOf
```solidity
  function policyOf(
    address policyholder_
  ) public returns (uint256 policyID)
```
Gets the policyholder's policy ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | The address of the policyholder.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| uint256 | The policy ID.
### policyStatus
```solidity
  function policyStatus(
    uint256 policyID_
  ) public returns (bool status)
```
Returns true if the policy is active, false if inactive


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID_` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if policy is active. False otherwise.
### registry
```solidity
  function registry(
  ) external returns (address registry_)
```
Returns [`Registry`](./Registry) contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`registry_`| address | The `Registry` address.
### riskManager
```solidity
  function riskManager(
  ) external returns (address riskManager_)
```
Returns [`RiskManager`](./RiskManager) contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`riskManager_`| address | The `RiskManager` address.
### paused
```solidity
  function paused(
  ) external returns (bool status)
```
Returns true if the product is paused, false if not.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if product is paused.
### policyCount
```solidity
  function policyCount(
  ) public returns (uint256 count)
```
Gets the policy count (amount of policies that have been purchased, includes inactive policies).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| uint256 | The policy count.
### maxRate
```solidity
  function maxRate(
  ) public returns (uint256 maxRateNum_, uint256 maxRateDenom_)
```
Gets the max rate.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxRateNum_`| uint256 | the max rate numerator.
|`maxRateDenom_`| uint256 | the max rate denominator.
### chargeCycle
```solidity
  function chargeCycle(
  ) public returns (uint256 chargeCycle_)
```
Gets the charge cycle duration.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`chargeCycle_`| uint256 | the charge cycle duration in seconds.
### coverLimitOf
```solidity
  function coverLimitOf(
    uint256 policyID_
  ) public returns (uint256 amount)
```
Gets cover limit for a given policy ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID_` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The cover limit for given policy ID.
### cooldownPeriod
```solidity
  function cooldownPeriod(
  ) external returns (uint256 cooldownPeriod_)
```
Gets the cooldown period.

Cooldown timer is started by the user calling deactivatePolicy().
Before the cooldown has started or has passed, withdrawing funds will leave a minimim required account balance in the user's account.
Only after the cooldown has passed, is a user able to withdraw their entire account balance.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cooldownPeriod_`| uint256 | The cooldown period in seconds.
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
|`policyholder_` | address | The policyholder address

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cooldownStart_`| uint256 | The cooldown period start expressed as Unix timestamp
### referralReward
```solidity
  function referralReward(
  ) external returns (uint256 referralReward_)
```
Gets the current reward amount in USD for a valid referral code.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`referralReward_`| uint256 | The referral reward
### referralThreshold
```solidity
  function referralThreshold(
  ) external returns (uint256 referralThreshold_)
```
Gets the threshold premium amount in USD that an account needs to have paid, for the account to be able to apply a referral code



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`referralThreshold_`| uint256 | The referral threshold
### isReferralOn
```solidity
  function isReferralOn(
  ) external returns (bool isReferralOn_)
```
Returns true if referral rewards are active, false if not.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isReferralOn_`| bool | True if referral rewards are active, false if not.
### isReferralCodeUsed
```solidity
  function isReferralCodeUsed(
  ) external returns (bool isReferralCodeUsed_)
```
True if a policyholder has previously used a valid referral code, false if not

A policyholder can only use a referral code once. A policyholder is then ineligible to receive further rewards from additional referral codes.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`isReferralCodeUsed_`| bool | True if the policyholder has previously used a valid referral code, false if not
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
|`referralCode` | bytes | The referral code.

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
|`referralCode` | bytes | The referral code.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`referrer`| address | The referrer address, returns 0 address if invalid referral code.
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
|`coverLimit` | uint256 | Cover limit.

### tokenURI
```solidity
  function tokenURI(
    uint256 policyID
  ) public returns (string tokenURI_)
```
Returns the Uniform Resource Identifier (URI) for `policyID`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.

### isSupportedChain
```solidity
  function isSupportedChain(
  ) public returns (bool status)
```
Returns true if given chain id supported.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if chain is supported otherwise false.
### numSupportedChains
```solidity
  function numSupportedChains(
  ) public returns (uint256 count)
```
Returns the number of chains.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| uint256 | The number of chains.
### getChain
```solidity
  function getChain(
    uint256 chainIndex
  ) external returns (uint256 chainId)
```
Returns the chain at the given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`chainIndex` | uint256 | The index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`chainId`| uint256 | The address of the chain.
### getPolicyChainInfo
```solidity
  function getPolicyChainInfo(
    uint256 policyID
  ) external returns (uint256[] policyChains)
```
Returns the policy chain info.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy id to get chain info.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyChains`| uint256[] | The list of policy chain values.
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
|`registry_` | address | The address of `Registry` contract.

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
|`paused_` | bool | True to pause, false to unpause.

### setCooldownPeriod
```solidity
  function setCooldownPeriod(
    uint256 cooldownPeriod_
  ) external
```
Sets the cooldown period. Read comments for [`cooldownPeriod()`](#cooldownperiod) for more information on the cooldown mechanic.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`cooldownPeriod_` | uint256 | Cooldown period in seconds.

### setMaxRate
```solidity
  function setMaxRate(
    uint256 maxRateNum_,
    uint256 maxRateDenom_
  ) external
```
set _maxRate.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maxRateNum_` | uint256 | Desired maxRateNum.
|`maxRateDenom_` | uint256 | Desired maxRateDenom.

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
|`chargeCycle_` | uint256 | Desired chargeCycle.

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
|`referralReward_` | uint256 | Desired referralReward.

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
|`referralThreshhold_` | uint256 | Desired referralThreshhold.

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
|`isReferralOn_` | bool | True if referral rewards active, false if not.

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
|`baseURI_` | string | The new base URI.

### addSupportedChains
```solidity
  function addSupportedChains(
    uint256[] supportedChains
  ) external
```
Adds supported chains to cover positions.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`supportedChains` | uint256[] | The supported array of chains.

### removeSupportedChain
```solidity
  function removeSupportedChain(
    uint256 chainId
  ) external
```
Removes chain from the supported chain list.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`chainId` | uint256 | The chain id to remove.

### setAsset
```solidity
  function setAsset(
    string assetName
  ) external
```
Sets the asset name.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`assetName` | string | The asset name to set.

### setRewardPoints
```solidity
  function setRewardPoints(
    address policyholder_,
    uint256 rewardPoints_
  ) external
```
Set reward points for a selected address. Can only be called by the **Cover Promotion Admin** role.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | The address of the policyholder to set reward points for.
|`rewardPoints_` | uint256 | Desired amount of reward points.

### chargePremiums
```solidity
  function chargePremiums(
    address[] holders,
    uint256[] premiums
  ) external
```
Charge premiums for each policy holder. Can only be called by the **Premium Collector** role.


Cheaper to load variables directly from calldata, rather than adding an additional operation of copying to memory.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`holders` | address[] | Array of addresses of the policyholders to charge.
|`premiums` | uint256[] | Array of premium amounts (in **USD** to 18 decimal places) to charge each policyholder.

### _canPurchaseNewCover
```solidity
  function _canPurchaseNewCover(
    uint256 existingTotalCover_,
    uint256 newTotalCover_
  ) internal returns (bool acceptable)
```
Returns true if there is sufficient capacity to update a policy's cover limit, false if not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`existingTotalCover_` | uint256 | The current cover limit, 0 if policy has not previously been activated.
|`newTotalCover_` | uint256 |  The new cover limit requested.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`acceptable`| bool | True there is sufficient capacity for the requested new cover limit, false otherwise.
### _deposit
```solidity
  function _deposit(
    address from,
    address policyholder,
    uint256 amount
  ) internal
```
Deposits funds into the policyholder's account balance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | address | The address which is funding the deposit.
|`policyholder` | address | The policyholder address.
|`amount` | uint256 | The deposit amount in **USD** to 18 decimal places.

### _withdraw
```solidity
  function _withdraw(
    address policyholder,
    uint256 amount
  ) internal
```
Withdraw funds from policyholder's account to the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The policyholder address.
|`amount` | uint256 | The amount to withdraw in **USD** to 18 decimal places.

### _deactivatePolicy
```solidity
  function _deactivatePolicy(
    address policyholder
  ) internal
```
Deactivate the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The policyholder address.

### _updateActiveCoverLimit
```solidity
  function _updateActiveCoverLimit(
    uint256 currentCoverLimit,
    uint256 newCoverLimit
  ) internal
```
Updates the Risk Manager on the current total cover limit purchased by policyholders.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`currentCoverLimit` | uint256 | The current policyholder cover limit (0 if activating policy).
|`newCoverLimit` | uint256 | The new policyholder cover limit.

### _minRequiredAccountBalance
```solidity
  function _minRequiredAccountBalance(
    uint256 coverLimit
  ) internal returns (uint256 minRequiredAccountBalance)
```
Calculate minimum required account balance for a given cover limit. Equals the maximum chargeable fee for one epoch.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coverLimit` | uint256 | Cover limit.

### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal
```
Override _beforeTokenTransfer hook from ERC721 standard to ensure policies are non-transferable, and only one can be minted per user.

This hook is called on mint, transfer and burn.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | address | sending address.
|`to` | address | receiving address.
|`tokenId` | uint256 | tokenId.

### _startCooldown
```solidity
  function _startCooldown(
    address policyholder
  ) internal
```
Starts the cooldown period for the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Policyholder address.

### _exitCooldown
```solidity
  function _exitCooldown(
    address policyholder
  ) internal
```
Exits the cooldown period for a policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Policyholder address.

### _hasCooldownPassed
```solidity
  function _hasCooldownPassed(
    address policyholder
  ) internal returns (bool)
```
Return true if cooldown has passed for a policyholder, false if cooldown has not started or has not passed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Policyholder address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`True`| bool | if cooldown has passed, false if cooldown has not started or has not passed.
### _processReferralCode
```solidity
  function _processReferralCode(
    address policyholder_,
    bytes referralCode_
  ) internal
```
Internal function to process a referral code


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder_` | address | Policyholder address.
|`referralCode_` | bytes | Referral code.

### _isEmptyReferralCode
```solidity
  function _isEmptyReferralCode(
    bytes referralCode_
  ) internal returns (bool)
```
Internal helper function to determine if referralCode_ is an empty bytes value


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`referralCode_` | bytes | Referral code.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`True`| bool | if empty referral code, false if not.
### _getEIP712Hash
```solidity
  function _getEIP712Hash(
  ) internal returns (bytes32)
```
Internal helper function to get EIP712-compliant hash for referral code verification.



### _getAsset
```solidity
  function _getAsset(
  ) internal returns (contract IERC20)
```
Returns the underlying principal asset for `Solace Cover Product`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`asset`| contract IERC20 | The underlying asset.
### _validateChains
```solidity
  function _validateChains(
    uint256[] requestedChains
  ) internal returns (bool)
```
Checks if the given chain info is valid or not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`requestedChains` | uint256[] | The chain id array to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if the given chain array is valid.
### _setPolicyChainInfo
```solidity
  function _setPolicyChainInfo(
    uint256 policyID,
    uint256[] policyChains
  ) internal
```
Sets chain info for the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy id to add chain info.
|`policyChains` | uint256[] | The array of chain id to add.

