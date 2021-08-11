Calculates exchange rates for trades between ERC20 tokens.


## Functions
### tokenToEth
```solidity
  function tokenToEth(
    address _token,
    uint256 _amount
  ) external returns (uint256)
```
Calculates the exchange rate for an _amount of _token to eth.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token to give.
|`_amount` | uint256 | The amount to give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | amount of eth received.
