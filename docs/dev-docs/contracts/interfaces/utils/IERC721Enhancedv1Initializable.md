An extension of `ERC721`.

The base is OpenZeppelin's `ERC721Enumerable` which also includes the `Metadata` extension. This extension includes simpler transfers, gasless approvals, and better enumeration.


## Functions
### transfer
```solidity
  function transfer(
    address to,
    uint256 tokenID
  ) external
```
Transfers `tokenID` from `msg.sender` to `to`.

This was excluded from the official `ERC721` standard in favor of `transferFrom(address from, address to, uint256 tokenID)`. We elect to include it.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | address | The receipient of the token.
|`tokenID` | uint256 | The token to transfer.

### safeTransfer
```solidity
  function safeTransfer(
    address to,
    uint256 tokenID
  ) external
```
Safely transfers `tokenID` from `msg.sender` to `to`.

This was excluded from the official `ERC721` standard in favor of `safeTransferFrom(address from, address to, uint256 tokenID)`. We elect to include it.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | address | The receipient of the token.
|`tokenID` | uint256 | The token to transfer.

### permit
```solidity
  function permit(
    address spender,
    uint256 tokenID,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Approve of a specific `tokenID` for spending by `spender` via signature.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`spender` | address | The account that is being approved.
|`tokenID` | uint256 | The ID of the token that is being approved for spending.
|`deadline` | uint256 | The deadline timestamp by which the call must be mined for the approve to work.
|`v` | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s`.
|`r` | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s`.
|`s` | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v`.

### nonces
```solidity
  function nonces(
    uint256 tokenID
  ) external returns (uint256 nonce)
```
Returns the current nonce for `tokenID`. This value must be
included whenever a signature is generated for `permit`.
Every successful call to `permit` increases ``tokenID``'s nonce by one. This
prevents a signature from being used multiple times.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | ID of the token to request nonce.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`nonce`| uint256 | Nonce of the token.
### PERMIT_TYPEHASH
```solidity
  function PERMIT_TYPEHASH(
  ) external returns (bytes32 typehash)
```
The permit typehash used in the `permit` signature.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`typehash`|  | The typehash for the `permit`.
### DOMAIN_SEPARATOR
```solidity
  function DOMAIN_SEPARATOR(
  ) external returns (bytes32 seperator)
```
The domain separator used in the encoding of the signature for `permit`, as defined by `EIP712`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`seperator`|  | The domain seperator for `permit`.
### listTokens
```solidity
  function listTokens(
  ) external returns (uint256[] tokenIDs)
```
Lists all tokens.
Order not specified.

This function is more useful off chain than on chain.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenIDs`|  | The list of token IDs.
### listTokensOfOwner
```solidity
  function listTokensOfOwner(
  ) external returns (uint256[] tokenIDs)
```
Lists the tokens owned by `owner`.
Order not specified.

This function is more useful off chain than on chain.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenIDs`| address | The list of token IDs.
### exists
```solidity
  function exists(
    uint256 tokenID
  ) external returns (bool status)
```
Determines if a token exists or not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| uint256 | True if the token exists, false if it doesn't.
