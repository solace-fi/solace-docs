Calculates exchange rates for trades between ERC20 tokens and Ether. This version uses the Aave Price Oracle.


## Functions
### constructor
```solidity
  function constructor(
    address dataProvider_
  ) public
```
Constructs the ExchangeQuoterAaveV2 contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dataProvider_` | address | Aave protocol data provider address.

### tokenToEth
```solidity
  function tokenToEth(
    address token,
    uint256 amount
  ) public returns (uint256 amountOut)
```
Calculates the exchange rate for an `amount` of `token` to **ETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The token to give.
|`amount` | uint256 | The amount to give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| address | The amount of **ETH** received.
