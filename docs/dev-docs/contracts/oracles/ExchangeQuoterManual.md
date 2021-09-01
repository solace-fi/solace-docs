Calculates exchange rates for trades between ERC20 tokens and Ether. This version uses rates set by authorized signers.


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the ExchangeQuoterManual contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).

### rates
```solidity
  function rates(
    address token
  ) external returns (uint256 amountOut)
```
Given a token, how much **ETH** could one token buy (respecting source decimals).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Address of token to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| address | Amount of **ETH** received.
### tokenToEth
```solidity
  function tokenToEth(
    address token,
    uint256 amount
  ) external returns (uint256 amountOut)
```
Calculates the exchange rate for an amount of token to eth.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The token to give.
|`amount` | uint256 | The amount to give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| address | The amount of eth received.
### isAuthorizedSigner
```solidity
  function isAuthorizedSigner(
    address account
  ) external returns (bool status)
```
Returns true if the given account is authorized to sign claims.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | Potential signer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if is authorized signer.
### setRates
```solidity
  function setRates(
    address[] tokens,
    uint256[] newRates
  ) external
```
Sets the exchange rates.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokens` | address[] | The tokens to set.
|`newRates` | uint256[] | The rates to set.

### addSigner
```solidity
  function addSigner(
    address signer
  ) external
```
Adds a new signer that can authorize claims.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`signer` | address | The signer to add.

### removeSigner
```solidity
  function removeSigner(
    address signer
  ) external
```
Removes a signer.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`signer` | address | The signer to remove.

## Events
### SignerAdded
```solidity
  event SignerAdded(
  )
```
Emitted when a claim signer is added.


### SignerRemoved
```solidity
  event SignerRemoved(
  )
```
Emitted when a claim signer is removed.


