<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/Factory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### _deployMinimalProxy
```solidity
  function _deployMinimalProxy(
    address target
  ) internal returns (address minimalProxy)
```
deploy an EIP1167 minimal proxy using "CREATE" opcode


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | implementation contract to proxy |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `minimalProxy` | address | address of deployed proxy |

### _deployMinimalProxy
```solidity
  function _deployMinimalProxy(
    address target,
    bytes32 salt
  ) internal returns (address minimalProxy)
```
deploy an EIP1167 minimal proxy using "CREATE2" opcode

reverts if deployment is not successful (likely because salt has already been used)

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | implementation contract to proxy |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `minimalProxy` | address | address of deployed proxy |

### calculateMinimalProxyDeploymentAddress
```solidity
  function calculateMinimalProxyDeploymentAddress(
    address target,
    bytes32 salt
  ) public returns (address)
```
calculate the deployment address for a given target and salt


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | implementation contract to proxy |
| `salt` | bytes32 | input for deterministic address calculation |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `deployment` | address | address |

### _generateMinimalProxyInitCode
```solidity
  function _generateMinimalProxyInitCode(
    address target
  ) internal returns (bytes)
```
concatenate elements to form EIP1167 minimal proxy initialization code


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `target` | address | implementation contract to proxy |

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

### calculateDeploymentAddress
```solidity
  function calculateDeploymentAddress(
    bytes32 initCodeHash,
    bytes32 salt
  ) public returns (address)
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

## Events
### ContractDeployed
```solidity
  event ContractDeployed(
  )
```



