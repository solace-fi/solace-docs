The war chest of Castle Solace.

As policies are purchased, premiums will flow from [**policyholders**](/docs/protocol/policy-holder) to the `Treasury`. By default `Treasury` reroutes 100% of the premiums into the [`Vault`](./Vault) where it is split amongst the [**capital providers**](/docs/user-guides/capital-provider/cp-role-guide).

If a [**policyholder**](/docs/protocol/policy-holder) updates or cancels a policy they may receive a refund. Refunds will be paid out from the [`Vault`](./Vault). If there are not enough funds to pay out the refund in whole, the [`unpaidRefunds()`](#unpaidrefunds) will be tracked and can be retrieved later via [`withdraw()`](#withdraw).

[**Governance**](/docs/protocol/governance) can change the premium recipients via [`setPremiumRecipients()`](#setpremiumrecipients). This can be used to add new building blocks to Castle Solace or enact a protocol fee. Premiums can be stored in the `Treasury` and managed with a number of functions.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the Treasury contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | Address of registry.

### routePremiums
```solidity
  function routePremiums(
  ) external
```
Routes the **premiums** to the `recipients`.
Each recipient will receive a `recipientWeight / weightSum` portion of the premiums.
Will be called by products with `msg.value = premium`.



### numPremiumRecipients
```solidity
  function numPremiumRecipients(
  ) external returns (uint256 count)
```
Number of premium recipients.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | The number of premium recipients.
### premiumRecipient
```solidity
  function premiumRecipient(
    uint256 index
  ) external returns (address recipient)
```
Gets the premium recipient at `index`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index to query, enumerable `[0, numPremiumRecipients()-1]`.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`recipient`| uint256 | The receipient address.
### recipientWeight
```solidity
  function recipientWeight(
    uint256 index
  ) external returns (uint32 weight)
```
Gets the weight of the recipient.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index to query, enumerable `[0, numPremiumRecipients()]`.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weight`| uint256 | The recipient weight.
### weightSum
```solidity
  function weightSum(
  ) external returns (uint32 weight)
```
Gets the sum of all premium recipient weights.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weight`|  | The sum of weights.
### refund
```solidity
  function refund(
    address user,
    uint256 amount
  ) external
```
Refunds some **ETH** to the user.
Will attempt to send the entire `amount` to the `user`.
If there is not enough available at the moment, it is recorded and can be pulled later via [`withdraw()`](#withdraw).
Can only be called by active products.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user address to send refund amount.
|`amount` | uint256 | The amount to send the user.

### unpaidRefunds
```solidity
  function unpaidRefunds(
    address user
  ) external returns (uint256 amount)
```
The amount of **ETH** that a user is owed if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The amount.
### withdraw
```solidity
  function withdraw(
  ) external
```
Transfers the unpaid refunds to the user.



### _transferEth
```solidity
  function _transferEth(
    address user,
    uint256 amount
  ) internal
```
Transfers **ETH** to the user. It's called by [`refund()`](#refund) and [`withdraw()`](#withdraw) functions in the contract.
Also adds on their unpaid refunds, and stores new unpaid refunds if necessary.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to pay.
|`amount` | uint256 | The amount to pay _before_ unpaid funds.

### setPremiumRecipients
```solidity
  function setPremiumRecipients(
    address payable[] recipients,
    uint32[] weights
  ) external
```
Sets the premium recipients and their weights.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipients` | address payable[] | The premium recipients, plus an implicit `address(treasury)` at the end.
|`weights` | uint32[] | The recipient weights.

### spend
```solidity
  function spend(
    address token,
    uint256 amount,
    address recipient
  ) external
```
Spends an **ERC20** token or **ETH**.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The address of the token to spend.
|`amount` | uint256 | The amount of the token to spend.
|`recipient` | address | The address of the token receiver.

### wrap
```solidity
  function wrap(
    uint256 amount
  ) external
```
Wraps some **ETH** into **WETH**.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount to wrap.

### unwrap
```solidity
  function unwrap(
    uint256 amount
  ) external
```
Unwraps some **WETH** into **ETH**.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount to unwrap.

### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.



