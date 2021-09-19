Tracks the waTokens.


## Functions
### numTokens
```solidity
  function numTokens(
  ) external returns (uint256)
```
The number of registered waTokens.



### isWaToken
```solidity
  function isWaToken(
  ) external returns (bool)
```
Returns true if the account is a waToken.



### waTokenAt
```solidity
  function waTokenAt(
  ) external returns (address)
```
Gets the waToken at an index [0,numTokens()-1].



### getAllWaTokens
```solidity
  function getAllWaTokens(
  ) external returns (address[])
```
Gets all waTokens.



### addToken
```solidity
  function addToken(
    address waToken
  ) external
```
Registers a new waToken.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`waToken` | address | The new waToken.

### removeToken
```solidity
  function removeToken(
    address waToken
  ) external
```
Deregisters a waToken.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`waToken` | address | The waToken.

