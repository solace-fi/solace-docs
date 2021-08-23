Proxy smart contract to get the price of an asset from a price source, with Chainlink Aggregator
        smart contracts as primary option
- If the returned price by a Chainlink aggregator is <= 0, the call is forwarded to a fallbackOracle
- Owned by the Aave governance system, allowed to add sources for assets, replace them
  and change the fallbackOracle


## Functions
### getAssetPrice
```solidity
  function getAssetPrice(
    address asset
  ) external returns (uint256)
```
Gets an asset price by address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`asset` | address | The asset address

