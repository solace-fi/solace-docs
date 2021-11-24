


## Functions
### isRegistered
```solidity
  function isRegistered(
    address _token
  ) external returns (bool)
```
Checks if the given token has a registered `Vault`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`bool`| address | True if the token has a registered `Vault`.
### latestVault
```solidity
  function latestVault(
    address _token
  ) external returns (address)
```
Gives the lates `Vault` implementation of the given token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`address`| address | The latest `Vault` address.
### numVaults
```solidity
  function numVaults(
    address _token
  ) external returns (uint256)
```
Gives the count of implemented `Vaults` of the token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| address | The count of implemented `Vaults`.
### vaults
```solidity
  function vaults(
    address _token,
    uint256 _vaultId
  ) external returns (address)
```
Gives the address of `Vault`. It takes `token` and `vaultId` as parameters.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token address.
|`_vaultId` | uint256 | The vault index.

### numTokens
```solidity
  function numTokens(
  ) external returns (uint256)
```
Returns total number of tokens that has a `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | The number of tokens.
### tokens
```solidity
  function tokens(
    uint256 _tokenIndex
  ) external returns (address)
```
Returns the token for a given token index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenIndex` | uint256 | The token index.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`address`| uint256 | The token address.
