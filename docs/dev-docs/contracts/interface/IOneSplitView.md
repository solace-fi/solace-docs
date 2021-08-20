Interface for 1inch on-chain DeFi aggregation protocol


## Functions
### getExpectedReturn
```solidity
  function getExpectedReturn(
    address fromToken,
    address toToken,
    uint256 amount,
    uint256 parts,
    uint256 flags
  ) external returns (uint256 returnAmount, uint256[] distribution)
```
Calculate expected returning amount of `toToken`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`fromToken` | address | Address of token or `address(0)` for Ether.
|`toToken` | address | Address of token or `address(0)` for Ether.
|`amount` | uint256 | Amount for `fromToken`.
|`parts` | uint256 | Number of pieces source volume could be splitted.
|`flags` | uint256 | Flags for enabling and disabling some features, default 0.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`returnAmount`| address | Amount for `toToken`.
|`distribution`| address | Relative amount sent through various protocols.
