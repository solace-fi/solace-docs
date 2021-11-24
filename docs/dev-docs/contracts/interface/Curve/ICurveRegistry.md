


## Functions
### get_pool_from_lp_token
```solidity
  function get_pool_from_lp_token(
    address token
  ) external returns (address pool)
```
Returns `Curve Pool` address for given `Curve LP Token`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | LP token address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pool`| address | `Curve Pool` address.
### get_lp_token
```solidity
  function get_lp_token(
    address pool
  ) external returns (address token)
```
Returns `LP Token` for given `Curve Pool`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | Curve Pool address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | `LP Token` address.
### get_n_coins
```solidity
  function get_n_coins(
    address pool
  ) external returns (uint256 n_coins)
```
Returns the number of coins for given `Curve Pool`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | Curve Pool address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`n_coins`| address | The coin count in the pool.
### pool_count
```solidity
  function pool_count(
  ) external returns (uint256 poolCount)
```
Returns total pool count in the `Curve Protocol`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`poolCount`|  | The total `Curve Pool` count.
### pool_list
```solidity
  function pool_list(
    uint256 poolIndex
  ) external returns (address pool)
```
Returns `Curve Pool` address for given pool index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`poolIndex` | uint256 | The index of the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`pool`| uint256 |  The address of the pool.
### coin_count
```solidity
  function coin_count(
  ) external returns (uint256 coinCount)
```
Returns the total coin count in the `Curve Protocol`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coinCount`|  | The total count of coins.
### get_coin
```solidity
  function get_coin(
  ) external returns (address coin)
```
Returns the coin address for given coin index.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coin`| uint256 | The address of the coin.
### get_pool_name
```solidity
  function get_pool_name(
    address pool
  ) external returns (string name)
```
Returns the name of pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | The address of the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`name`| address | The name of the pool.

### get_underlying_coins
```solidity
  function get_underlying_coins(
    address pool
  ) external returns (address[8] underlyingCoins)
```
Returns the underlying coins of the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | the address of the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`underlyingCoins`| address | The underlying coins.
### get_underlying_decimals
```solidity
  function get_underlying_decimals(
    address pool
  ) external returns (uint256[8] underlyingDecimals)
```
Returns the underlying decimals of the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | the address of the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`underlyingDecimals`| address | The underlying coins.
### get_coins
```solidity
  function get_coins(
    address pool
  ) external returns (address[8] coins)
```
Returns the coins of the pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | the address of the pool.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coins`| address | The pool coins.
