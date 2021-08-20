Calculates exchange rates for trades between ERC20 tokens and Ether. This version uses rates set by governance.


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the ExchangeQuoter contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).

### setRates
```solidity
  function setRates(
    address[] tokens,
    uint256[] newRates
  ) external
```
Sets the exchange rates.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokens` | address[] | The tokens to set.
|`newRates` | uint256[] | The rates to set.

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
