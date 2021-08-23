[Compound Finance](https://compound.finance/) CTokens which wrap an ERC20 underlying.


## Functions
### mint
```solidity
  function mint(
    uint256 mintAmount
  ) external returns (uint256 error)
```
Sender supplies assets into the market and receives cTokens in exchange.

Accrues interest whether or not the operation succeeds, unless reverted.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`mintAmount` | uint256 | The amount of the underlying asset to supply.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`error`| uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details).
