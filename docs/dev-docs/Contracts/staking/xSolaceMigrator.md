<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/staking/xSolaceMigrator.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Helps migrate from [**xSOLACEV1**](./xSOLACEV1) to [**xsLocker**](./xsLocker).


## Functions
### constructor
```solidity
  function constructor(
    address solace_,
    address xsolacev1_,
    address xsLocker_
  ) public
```
Constructs the xSolaceMigrator contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `solace_` | address | Address of the [**SOLACE**](./../SOLACE) contract. |
| `xsolacev1_` | address | Address of the [**xSOLACEV1**](./xSOLACEV1) contract. |
| `xsLocker_` | address | Address of the [**xsLocker**](./xsLocker) contract. |

### migrate
```solidity
  function migrate(
    uint256 amount,
    uint256 lockEnd
  ) external
```
Migrate from the [**xSOLACEv1**](./xSOLACEV1) contract and create a new [**Lock**](./xsLocker).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | The amount of [**xSOLACEv1**](./xSOLACEV1) to migrate. |
| `lockEnd` | uint256 | The timestamp that the lock will unlock. |

### migrateSigned
```solidity
  function migrateSigned(
    uint256 amount,
    uint256 lockEnd,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Migrate from the [**xSOLACEv1**](./xSOLACEV1) contract and create a new [**Lock**](./xsLocker).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | The amount of [**xSOLACEv1**](./xSOLACEV1) to migrate. |
| `lockEnd` | uint256 | The timestamp that the lock will unlock. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

### _migrate
```solidity
  function _migrate(
    address depositor,
    uint256 amount,
    uint256 lockEnd
  ) internal
```
Migrate from the [**xSOLACEv1**](./xSOLACEV1) contract and create a new [**Lock**](./xsLocker).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `depositor` | address | The depositing user. |
| `amount` | uint256 | The deposit amount. |
| `lockEnd` | uint256 | The timestamp that the lock will unlock. |


