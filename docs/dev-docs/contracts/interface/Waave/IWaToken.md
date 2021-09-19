WaTokens mimic Aave V2 Vaults and can be exploited by design. Use this contract or any of its subclasses at your own risk.


## Functions
### underlying
```solidity
  function underlying(
  ) external returns (address)
```
The underlying token.



### pricePerShare
```solidity
  function pricePerShare(
  ) external returns (uint256)
```
The amount of underlying tokens it would take to mint one full waToken.



### deposit
```solidity
  function deposit(
    uint256 uAmount
  ) external returns (uint256 waAmount)
```
Deposit underlying tokens to receive some waTokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`uAmount` | uint256 | Amount of underlying to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`waAmount`| uint256 | Amount of waTokens minted.
### withdraw
```solidity
  function withdraw(
    uint256 waAmount
  ) external returns (uint256 uAmount)
```
Burn some waTokens to receive some underlying tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`waAmount` | uint256 | Amount of waTokens to burn.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`uAmount`| uint256 | Amount of underlying received.
### lose
```solidity
  function lose(
    uint256 uAmount
  ) external
```
The waToken has lost money on its investments.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`uAmount` | uint256 | Amount of losses in underlying.

