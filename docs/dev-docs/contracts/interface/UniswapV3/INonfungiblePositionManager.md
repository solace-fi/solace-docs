


## Functions
### positions
```solidity
  function positions(
    uint256 tokenId
  ) external returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```
Returns the position information associated with a given token ID.

Throws if the token ID is not valid.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenId` | uint256 | The ID of the token that represents the position

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`nonce`| uint256 | The nonce for permits
|`operator`|  | The address that is approved for spending
|`token0`|  | The address of the token0 for a specific pool
|`token1`|  | The address of the token1 for a specific pool
|`fee`|  | The fee associated with the pool
|`tickLower`|  | The lower end of the tick range for the position
|`tickUpper`|  | The higher end of the tick range for the position
|`liquidity`|  | The liquidity of the position
|`feeGrowthInside0LastX128`|  | The fee growth of token0 as of the last action on the individual position
|`feeGrowthInside1LastX128`|  | The fee growth of token1 as of the last action on the individual position
|`tokensOwed0`|  | The uncollected amount of token0 owed to the position as of the last computation
|`tokensOwed1`|  | The uncollected amount of token1 owed to the position as of the last computation
### tokenByIndex
```solidity
  function tokenByIndex(
    uint256 tokenIndex
  ) external returns (uint256 tokenId)
```
Returns token id for given token index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIndex` | uint256 | The token index.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenId`| uint256 | The token id.
### tokenOfOwnerByIndex
```solidity
  function tokenOfOwnerByIndex(
    address owner,
    uint256 index
  ) external returns (uint256 tokenId)
```
Returns token id for given `owner` and `token index`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`owner` | address | The owner address.
|`index` | uint256 | The token index.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenId`| address | The token id.
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
### ownerOf
```solidity
  function ownerOf(
    uint256 tokenId
  ) external returns (address owner)
```
Returns owner of the token id.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenId` | uint256 | The token id of the position.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`owner`| uint256 | The owner of the token.
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
