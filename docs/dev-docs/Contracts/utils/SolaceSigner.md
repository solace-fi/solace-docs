<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/SolaceSigner.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Verifies off-chain data.


## Functions
### constructor
```solidity
  function constructor(
    address _governance
  ) public
```
Constructs the Solace Signer contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_governance` | address | The address of the [governor](/docs/protocol/governance). |

### verifyPrice
```solidity
  function verifyPrice(
    address token,
    uint256 price,
    uint256 deadline,
    bytes signature
  ) public returns (bool)
```
Verifies `SOLACE` price data.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to verify price. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `deadline` | uint256 | The deadline for the price. |
| `signature` | bytes | The `SOLACE` price signature. |

### verifyPremium
```solidity
  function verifyPremium(
    uint256 premium,
    address policyholder,
    uint256 deadline,
    bytes signature
  ) public returns (bool)
```
Verifies cover premium data.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `premium` | uint256 | The premium amount to verify. |
| `policyholder` | address | The policyholder address. |
| `deadline` | uint256 | The deadline for the signature. |
| `signature` | bytes | The premium data signature. |

### numSigners
```solidity
  function numSigners(
  ) external returns (uint256 count)
```
Returns the number of signers.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The number of signers. |

### getSigner
```solidity
  function getSigner(
    uint256 index
  ) external returns (address signer)
```
Returns the signer at the given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index` | uint256 | The index to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `signer` | address | The address of the signer. |

### isSigner
```solidity
  function isSigner(
    address signer
  ) public returns (bool)
```
Checks whether given signer is an authorized signer or not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer address to check. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `bool` | bool | True if signer is a authorized signer. |

### addSigner
```solidity
  function addSigner(
    address signer
  ) external
```
Adds a new signer.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to add. |

### removeSigner
```solidity
  function removeSigner(
    address signer
  ) external
```
Removes a signer.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to remove. |


