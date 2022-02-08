


## Functions
### factory
```solidity
  function factory(
  ) external returns (address factory)
```
Returns the address of `SushiFactory`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factory`|  | The address of the factory.
### token0
```solidity
  function token0(
  ) external returns (address token)
```
Returns the first pair token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`|  | The address of the first pair token.
### token1
```solidity
  function token1(
  ) external returns (address token)
```
Returns the second pair token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`|  | The address of the second pair token.
### symbol
```solidity
  function symbol(
  ) external returns (string symbol)
```
Returns the symbol of the token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`symbol`|  | The token symbol.
### name
```solidity
  function name(
  ) external returns (string name)
```
Returns the name of the token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`name`|  | The token name.
### totalSupply
```solidity
  function totalSupply(
  ) external returns (uint256 totalSupply)
```
Returns total token supply.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalSupply`|  | The total supply.
### balanceOf
```solidity
  function balanceOf(
    address account
  ) external returns (uint256 balance)
```
Returns account's balance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | The address of the user.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| address | The amount tokens user have.
### decimals
```solidity
  function decimals(
  ) external returns (uint256)
```
Returns the decimals value.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`decimals`|  | The decimals value.
### getReserves
```solidity
  function getReserves(
  ) external returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)
```
Returns LP token reserves.




