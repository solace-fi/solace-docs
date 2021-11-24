


## Functions
### poolLength
```solidity
  function poolLength(
  ) external returns (uint256 pools)
```
Returns `LP Pool` length.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pools`|  | The number of pools.
### poolInfo
```solidity
  function poolInfo(
    uint256 index
  ) external returns (address lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accSushiPerShare)
```
Returns `SushiSwap LP Pool` info.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | The index of the lp pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`lpToken`| uint256 | The `Sushi LP Token` address.
|`allocPoint`|  | 

