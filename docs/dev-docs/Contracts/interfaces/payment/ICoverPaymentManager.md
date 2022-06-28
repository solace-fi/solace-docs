<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/payment/ICoverPaymentManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A cover payment manager for [**Solace Cover Points**](./SCP) that accepts stablecoins  and `SOLACE` for payment.


## Functions
### depositStableFrom
```solidity
  function depositStableFrom(
    address token,
    address from,
    address recipient,
    uint256 amount
  ) external
```
Deposits tokens from msg.sender and credits them to recipient.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `from` | address | The depositor of the token. |
| `recipient` | address | The recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |

### depositStable
```solidity
  function depositStable(
    address token,
    address recipient,
    uint256 amount
  ) external
```
Deposits tokens from msg.sender and credits them to recipient.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `recipient` | address | The recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |

### depositSignedStableFrom
```solidity
  function depositSignedStableFrom(
    address token,
    address from,
    address depositor,
    uint256 amount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposits tokens from depositor using permit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `from` | address | The depositor of the token. |
| `depositor` | address | The depositor and recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

### depositSignedStable
```solidity
  function depositSignedStable(
    address token,
    address depositor,
    uint256 amount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposits tokens from depositor using permit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `depositor` | address | The depositor and recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

### depositNonStableFrom
```solidity
  function depositNonStableFrom(
    address token,
    address from,
    address recipient,
    uint256 amount,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external
```
Deposits tokens from msg.sender and credits them to recipient.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `from` | address | The depositor of the token. |
| `recipient` | address | The recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

### depositNonStable
```solidity
  function depositNonStable(
    address token,
    address recipient,
    uint256 amount,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external
```
Deposits tokens from msg.sender and credits them to recipient.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to deposit. |
| `recipient` | address | The recipient of Solace Cover Points. |
| `amount` | uint256 | Amount of token to deposit. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

### withdrawFrom
```solidity
  function withdrawFrom(
    address from,
    uint256 amount,
    address recipient,
    uint256 priceDeadline,
    uint256 signature
  ) external
```
Withdraws some of the user's deposit and sends it to `recipient`.
User must have sufficient Solace Cover Points to withdraw.
Premium pool must have the tokens to return.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | The SCP balance holder address. |
| `amount` | uint256 | The amount of `SOLACE` to withdraw. |
| `recipient` | address | The receiver of funds. |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | uint256 | The `SOLACE` price signature. |

### withdraw
```solidity
  function withdraw(
    uint256 amount,
    address recipient,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external
```
Withdraws some of the user's deposit and sends it to `recipient`.
User must have deposited `SOLACE` in at least that amount in the past.
User must have sufficient Solace Cover Points to withdraw.
Token must be refundable.
Premium pool must have the tokens to return.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | The amount of to withdraw. |
| `recipient` | address | The receiver of funds. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

### chargePremiums
```solidity
  function chargePremiums(
    address[] accounts,
    uint256[] premiums
  ) external
```
Charge premiums for each policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `accounts` | address[] | Array of addresses of the policyholders to charge. |
| `premiums` | uint256[] | Array of premium amounts (in **USD** to 18 decimal places) to charge each policyholder. |

### getSCPBalance
```solidity
  function getSCPBalance(
    address account
  ) external returns (uint256 amount)
```
Returns account's `SCP` balance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to fetch. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The amount of `SCP`. |

### getTokenInfo
```solidity
  function getTokenInfo(
    uint256 index
  ) external returns (address token, bool accepted, bool permittable, bool refundable, bool stable)
```
Returns to token information for given token index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index` | uint256 | The token index. |

### getRefundableSOLACEAmount
```solidity
  function getRefundableSOLACEAmount(
    address depositor,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external returns (uint256 solaceAmount)
```
Calculates the refundable `SOLACE` amount.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `depositor` | address | The owner of funds. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |


### productIsActive
```solidity
  function productIsActive(
    address product
  ) external returns (bool status)
```
Checks is an address is an active product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | The product to check. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | Returns true if the product is active. |

### numProducts
```solidity
  function numProducts(
  ) external returns (uint256 count)
```
Returns the number of products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The number of products. |

### getProduct
```solidity
  function getProduct(
    uint256 productNum
  ) external returns (address product)
```
Returns the product at the given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `productNum` | uint256 | The index to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `product` | address | The address of the product. |

### setRegistry
```solidity
  function setRegistry(
    address _registry
  ) external
```
Sets the [`Registry`](./Registry) contract address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_registry` | address | The address of `Registry` contract. |

### setTokenInfo
```solidity
  function setTokenInfo(
    struct ICoverPaymentManager.TokenInfo[] tokens
  ) external
```
Adds or removes a set of accepted tokens.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokens` | struct ICoverPaymentManager.TokenInfo[] | Tokens to set. |

### setPaused
```solidity
  function setPaused(
    bool _paused
  ) external
```
Pauses or unpauses contract..
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_paused` | bool | True to pause, false to unpause. |

### addProduct
```solidity
  function addProduct(
    address product
  ) external
```
Adds a new product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | the new product |

### removeProduct
```solidity
  function removeProduct(
    address product
  ) external
```
Removes a product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | the product to remove |


## Events
### TokenDeposited
```solidity
  event TokenDeposited(
  )
```
Emitted when a token is deposited.


### TokenWithdrawn
```solidity
  event TokenWithdrawn(
  )
```
Emitted when a token is withdrawn.


### RegistrySet
```solidity
  event RegistrySet(
  )
```
Emitted when registry is set.


### TokenInfoSet
```solidity
  event TokenInfoSet(
  )
```
Emitted when a token is set.


### PauseSet
```solidity
  event PauseSet(
  )
```
Emitted when paused is set.


### ProductAdded
```solidity
  event ProductAdded(
  )
```
Emitted when product is added.


### ProductRemoved
```solidity
  event ProductRemoved(
  )
```
Emitted when product is removed.


