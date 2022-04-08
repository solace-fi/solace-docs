<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockPriceOracle.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Mock price oracle is only used in tests.


## Functions
### getAssetPrice
```solidity
  function getAssetPrice(
  ) external returns (uint256 price)
```
Returns asset price. It's called by `CoverageDataProvider` contract in tests.




