<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/ERC721EnhancedInitializable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An extension of `ERC721`.

The base is OpenZeppelin's `ERC721Enumerable` which also includes the `Metadata` extension. This extension includes simpler transfers, gasless approvals, and better enumeration.


## Functions
### __ERC721Enhanced_init
```solidity
  function __ERC721Enhanced_init(
    string name,
    string symbol
  ) internal
```
Initializes the `ERC721Enhanced` contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `name` | string | The name of the token. |
| `symbol` | string | The symbol of the token. |

### __ERC721Enhanced_init_unchained
```solidity
  function __ERC721Enhanced_init_unchained(
  ) internal
```




### transfer
```solidity
  function transfer(
    address to,
    uint256 tokenID
  ) public
```
Transfers `tokenID` from `msg.sender` to `to`.

This was excluded from the official `ERC721` standard in favor of `transferFrom(address from, address to, uint256 tokenID)`. We elect to include it.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `to` | address | The receipient of the token. |
| `tokenID` | uint256 | The token to transfer. |

### safeTransfer
```solidity
  function safeTransfer(
    address to,
    uint256 tokenID
  ) public
```
Safely transfers `tokenID` from `msg.sender` to `to`.

This was excluded from the official `ERC721` standard in favor of `safeTransferFrom(address from, address to, uint256 tokenID)`. We elect to include it.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `to` | address | The receipient of the token. |
| `tokenID` | uint256 | The token to transfer. |

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
| `spender` | address | The account that is being approved. |
| `tokenID` | uint256 | The ID of the token that is being approved for spending. |
| `deadline` | uint256 | The deadline timestamp by which the call must be mined for the approve to work. |
| `v` | uint8 | Must produce valid secp256k1 signature from the holder along with `r` and `s`. |
| `r` | bytes32 | Must produce valid secp256k1 signature from the holder along with `v` and `s`. |
| `s` | bytes32 | Must produce valid secp256k1 signature from the holder along with `r` and `v`. |

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
| `tokenID` | uint256 | ID of the token to request nonce. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonce` | uint256 | Nonce of the token. |

### PERMIT_TYPEHASH
```solidity
  function PERMIT_TYPEHASH(
  ) external returns (bytes32 typehash)
```
The permit typehash used in the `permit` signature.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `typehash` | bytes32 | The typehash for the `permit`. |

### DOMAIN_SEPARATOR
```solidity
  function DOMAIN_SEPARATOR(
  ) public returns (bytes32 seperator)
```
The domain separator used in the encoding of the signature for `permit`, as defined by `EIP712`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `seperator` | bytes32 | The domain seperator for `permit`. |

### tokenURI
```solidity
  function tokenURI(
  ) public returns (string)
```
Returns the Uniform Resource Identifier (URI) for `tokenID` token.



### _baseURI
```solidity
  function _baseURI(
  ) internal returns (string baseURI_)
```
Base URI for computing `tokenURI`. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenID`. Empty
by default, can be overriden in child contracts.



### _setBaseURI
```solidity
  function _setBaseURI(
    string baseURI_
  ) internal
```
Sets the base URI for computing `tokenURI`.

Remember to add access control to inheriting contracts.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `baseURI_` | string | The new base URI. |

### _mint
```solidity
  function _mint(
    address to,
    uint256 tokenID
  ) internal
```
Mints `tokenID` and transfers it to `to`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `to` | address | The receiver of the token. |
| `tokenID` | uint256 | The ID of the token to mint. |

### _burn
```solidity
  function _burn(
    uint256 tokenID
  ) internal
```
Destroys `tokenID`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenID` | uint256 | The ID of the token to burn. |

### _transfer
```solidity
  function _transfer(
    address from,
    address to,
    uint256 tokenID
  ) internal
```
Transfers `tokenID` from `from` to `to`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | The account to transfer the token from. |
| `to` | address | The account to transfer the token to. |
| `tokenID` | uint256 | The ID of the token to transfer. |

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
| `from` | address | The user that sends the token, or zero if minting. |
| `to` | address | The zero that receives the token, or zero if burning. |
| `tokenID` | uint256 | The ID of the token being transferred. |

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
| `tokenID` | uint256 | The ID of the token to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the token exists, false if it doesn't. |

