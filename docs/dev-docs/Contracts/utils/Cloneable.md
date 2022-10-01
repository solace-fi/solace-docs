<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/Cloneable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### calculateMinimalProxyDeploymentAddress
```solidity
  function calculateMinimalProxyDeploymentAddress(
    bytes32 salt
  ) public returns (address)
```
calculate the deployment address for a given target and salt


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `deployment` | address | address |

### _calculateDeploymentAddress
```solidity
  function _calculateDeploymentAddress(
    bytes32 initCodeHash,
    bytes32 salt
  ) internal returns (address)
```
calculate the _deployMetamorphicContract deployment address for a given salt


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initCodeHash` | bytes32 | hash of contract initialization code |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `deployment` | address | address |

### _deployMinimalProxy
```solidity
  function _deployMinimalProxy() internal returns (address minimalProxy)
```
deploy an EIP1167 minimal proxy using "CREATE" opcode

reverts if deployment is not successful


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `minimalProxy` | address | address of deployed proxy |

### _deployMinimalProxy
```solidity
  function _deployMinimalProxy(
    bytes32 salt
  ) internal returns (address minimalProxy)
```
deploy an EIP1167 minimal proxy using "CREATE2" opcode

reverts if deployment is not successful (likely because salt has already been used)

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `minimalProxy` | address | address of deployed proxy |

### _generateMinimalProxyInitCode
```solidity
  function _generateMinimalProxyInitCode() internal returns (bytes)
```
concatenate elements to form EIP1167 minimal proxy initialization code



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `bytes` | bytes | memory initialization code |

### _deploy
```solidity
  function _deploy(
    bytes initCode
  ) internal returns (address deployment)
```
deploy contract code using "CREATE" opcode


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initCode` | bytes | contract initialization code |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `deployment` | address | address of deployed contract |

### _deploy
```solidity
  function _deploy(
    bytes initCode,
    bytes32 salt
  ) internal returns (address deployment)
```
deploy contract code using "CREATE2" opcode

reverts if deployment is not successful (likely because salt has already been used)

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initCode` | bytes | contract initialization code |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `deployment` | address | address of deployed contract |

