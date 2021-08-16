Calculates exchange rates for trades between ERC20 tokens.


## Functions
### constructor
```solidity
  function constructor(
    address _oneSplitView
  ) public
```
Constructs the ExchangeQuoter contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_oneSplitView` | address | The address of the 1inch router.

### tokenToEth
```solidity
  function tokenToEth(
    address _token,
    uint256 _amount
  ) public returns (uint256)
```
Calculates the exchange rate for an `_amount` of `_token` to **ETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token to give.
|`_amount` | uint256 | The amount to give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The amount of **ETH** received.
