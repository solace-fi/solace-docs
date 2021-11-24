


## Functions
### allPairsLength
```solidity
  function allPairsLength(
  ) external returns (uint256 pools)
```
Returns `LP Pool` length.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pools`|  | The number of pools.
### allPairs
```solidity
  function allPairs(
    uint256 pairIndex
  ) external returns (address pair)
```
Returns `LP Pool` address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pairIndex` | uint256 | The index of the lp pair.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pair`| uint256 | The address of the lp pair.
### getPair
```solidity
  function getPair(
    address token0,
    address token1
  ) external returns (address pair)
```
Gets the `LP Pool` for given input pair `token0` and `token1`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token0` | address | The pair first token.
|`token1` | address | The pair second token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pair`| address | The address of the pair.
