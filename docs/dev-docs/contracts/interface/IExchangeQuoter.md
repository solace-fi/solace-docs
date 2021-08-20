Calculates exchange rates for trades between ERC20 tokens and Ether.


## Functions
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
