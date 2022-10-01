<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/utils/IDeployer.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Exposes `CREATE2` (EIP-1014) to deploy bytecode on deterministic addresses based on initialization code and salt.



## Functions
### deploy
```solidity
  function deploy(
    bytes initcode,
    bytes32 salt
  ) external returns (address payable createdContract)
```
Deploys `initcode` using `salt` for defining the deterministic address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initcode` | bytes | Initialization code. |
| `salt` | bytes32 | Arbitrary value to modify resulting address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `createdContract` | address payable | Created contract address. |

### deployMultiple
```solidity
  function deployMultiple(
    bytes[] initcodes,
    bytes32[] salts
  ) external returns (address payable[] createdContracts)
```
Deploys multiple contracts.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initcodes` | bytes[] | Initialization codes. |
| `salts` | bytes32[] | Arbitrary values to modify resulting addresses. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `createdContracts` | address payable[] | Created contract addresses. |

## Events
### ContractDeployed
```solidity
  event ContractDeployed()
```
Emitted when a contract is deployed.


