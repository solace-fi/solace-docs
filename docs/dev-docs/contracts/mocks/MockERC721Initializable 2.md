Mock ERC721 is only used to test other contracts.


## Functions
### initialize
```solidity
  function initialize(
    string name,
    string symbol
  ) external
```
Initializes the Mock Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | string | The name of the token.
|`symbol` | string | The symbol of the token.

### mint
```solidity
  function mint(
    address recipient
  ) external returns (uint256 tokenID)
```
Mints a new token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | The recipient of the token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenID`| address | The ID of the new token.
### tokenCount
```solidity
  function tokenCount(
  ) external returns (uint256 count)
```
Count of all tokens created.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | Count.
### doThing
```solidity
  function doThing(
    uint256 tokenID
  ) external returns (uint256 res)
```
Do a thing to a token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to do stuff to.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`res`| uint256 | The result.
