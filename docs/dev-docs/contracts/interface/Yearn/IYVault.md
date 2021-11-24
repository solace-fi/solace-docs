


## Functions
### token
```solidity
  function token(
  ) external returns (address)
```
Returns underlying token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`address`|  | Underlying token address.
### balanceOf
```solidity
  function balanceOf(
  ) external returns (uint256)
```
Returns user balance in vault.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| address | User balance
### pricePerShare
```solidity
  function pricePerShare(
  ) external returns (uint256)
```
Returns the price for a single `Vault` share.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`share`|  | The value of a single share
### deposit
```solidity
  function deposit(
  ) external
```
Deposits `_amount` `token`, issuing shares to `recipient`. If the
Vault is in Emergency Shutdown, deposits will not be accepted and this
call will fail.



### name
```solidity
  function name(
  ) external returns (string)
```
Returns the name of the `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`name`|  | `Vault` name.
### symbol
```solidity
  function symbol(
  ) external returns (string)
```
Returns the symbol of the `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`symbol`|  | `Vault` symbol.
### decimals
```solidity
  function decimals(
  ) external returns (uint256)
```
Returns the decimals value of the `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`decimals`|  | `Vault` decimals.
