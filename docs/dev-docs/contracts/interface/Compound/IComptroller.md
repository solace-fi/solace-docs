


## Functions
### markets
```solidity
  function markets(
  ) external returns (bool isListed, uint256 collateralFactorMantissa, bool isComped)
```
Official mapping of cTokens -> Market metadata

Used e.g. to determine if a market is supported


### getAllMarkets
```solidity
  function getAllMarkets(
  ) external returns (address[])
```
Return all of the markets

The automatic getter may be used to access an individual market.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`|  | list of market addresses
