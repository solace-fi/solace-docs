Calculates exchange rates for trades between ERC20 tokens and Ether. This version uses the [1inch on-chain DeFi aggregation protocol](https://github.com/1inch/1inchProtocol).


## Functions
### constructor
```solidity
  function constructor(
    address oneSplitView_
  ) public
```
Constructs the ExchangeQuoter contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`oneSplitView_` | address | The address of the 1inch router.

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
