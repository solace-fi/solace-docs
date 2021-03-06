<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/Registry.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Tracks the contracts of the Solaverse.

[**Governance**](/docs/protocol/governance) can set the contract addresses and anyone can look them up.

A key is a unique identifier for each contract. Use [`get(key)`](#get) or [`tryGet(key)`](#tryget) to get the address of the contract. Enumerate the keys with [`length()`](#length) and [`getKey(index)`](#getkey).


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the registry contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |

### get
```solidity
  function get(
    string key
  ) external returns (address value)
```
Gets the `value` of a given `key`.
Reverts if the key is not in the mapping.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `key` | string | The key to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `value` | address | The value of the key. |

### tryGet
```solidity
  function tryGet(
    string key
  ) external returns (bool success, address value)
```
Gets the `value` of a given `key`.
Fails gracefully if the key is not in the mapping.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `key` | string | The key to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `success` | bool | True if the key was found, false otherwise. |
| `value` | address | The value of the key or zero if it was not found. |

### getKey
```solidity
  function getKey(
    uint256 index
  ) external returns (string key)
```
Gets the `key` of a given `index`.

Iterable [1,length].

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index` | uint256 | The index to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `key` | string | The key at that index. |

### set
```solidity
  function set(
    string[] keys,
    address[] values
  ) external
```
Sets keys and values.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `keys` | string[] | The keys to set. |
| `values` | address[] | The values to set. |


