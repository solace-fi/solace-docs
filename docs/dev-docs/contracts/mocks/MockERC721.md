Mock ERC721 is only used to test other contracts.


## Functions
### constructor
```solidity
  function constructor(
    string name,
    string symbol
  ) public
```
Constructs the Mock Token contract.


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
