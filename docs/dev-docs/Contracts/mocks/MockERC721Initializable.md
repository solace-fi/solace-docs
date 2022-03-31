<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockERC721Initializable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

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
|`tokenID`| uint256 | The ID of the new token.
### burn
```solidity
  function burn(
    uint256 tokenID
  ) external
```
Burns a token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The token to burn.

### tokenCount
```solidity
  function tokenCount(
  ) external returns (uint256 count)
```
Count of all tokens created.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| uint256 | Count.
### doThing1
```solidity
  function doThing1(
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
### doThing2
```solidity
  function doThing2(
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
### doThing3
```solidity
  function doThing3(
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
### getBaseURI
```solidity
  function getBaseURI(
  ) external returns (string)
```
Get the base URI.



### setBaseURI
```solidity
  function setBaseURI(
    string baseURI_
  ) external
```
Sets the base URI for computing `tokenURI`.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`baseURI_` | string | The new base URI.

### _afterTokenTransfer
```solidity
  function _afterTokenTransfer(
    address from,
    address to,
    uint256 tokenID
  ) internal
```
Hook that is called after any token transfer. This includes minting and burning.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | address | The user that sends the token, or zero if minting.
|`to` | address | The zero that receives the token, or zero if burning.
|`tokenID` | uint256 | The ID of the token being transferred.

