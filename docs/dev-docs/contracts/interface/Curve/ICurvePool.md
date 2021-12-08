


## Functions
### coins
```solidity
  function coins(
  ) external returns (address coin)
```
Returns the coin address of the given coin index.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coin`| uint256 | The coin address.
### add_liquidity
```solidity
  function add_liquidity(
    uint256[] amounts,
    uint256 minMintAmount
  ) external
```
Adds liquidity to pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amounts` | uint256[] | The liquidity amount for each token in the pool.
|`minMintAmount` | uint256 | The minumum pool lp token mint threshold.

### calc_withdraw_one_coin
```solidity
  function calc_withdraw_one_coin(
    uint256 tokenAmount,
    int128 i
  ) external returns (uint256 amount)
```
Calculates the withdraw amount for given `amount` and `coin`.
The given coin index must be valid for the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenAmount` | uint256 | The balance of the user in the pool.
|`i` | int128 | The coin index.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The withdraw amount.
