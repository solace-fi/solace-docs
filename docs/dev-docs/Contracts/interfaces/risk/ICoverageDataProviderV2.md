<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/risk/ICoverageDataProviderV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Holds underwriting pool amounts in `USD`. Provides information to the [**Risk Manager**](./RiskManager.sol) that is the maximum amount of cover that `Solace` protocol can sell as a coverage.


## Functions
### set
```solidity
  function set(
    string[] uwpNames,
    uint256[] amounts
  ) external
```
Resets the underwriting pool balances.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpNames` | string[] | The underwriting pool values to set. |
| `amounts` | uint256[] | The underwriting pool balances. |

### remove
```solidity
  function remove(
    string[] uwpNames
  ) external
```
Removes the given underwriting pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpNames` | string[] | The underwriting pool names to remove. |

### balanceOf
```solidity
  function balanceOf(
    string uwpName
  ) external returns (uint256 amount)
```
Returns the balance of the underwriting pool in `USD`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpName` | string | The underwriting pool name to get balance. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The balance of the underwriting pool in `USD`. |

### poolOf
```solidity
  function poolOf(
    uint256 index
  ) external returns (string uwpName)
```
Returns underwriting pool name for given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index` | uint256 | The underwriting pool index to get. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uwpName` | string | The underwriting pool name. |

### isUpdater
```solidity
  function isUpdater(
    address updater
  ) external returns (bool status)
```
Returns if given address is a valid underwriting pool updater.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `updater` | address | The address to check. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the address is valid updater. |

### updaterAt
```solidity
  function updaterAt(
    uint256 index
  ) external returns (address updater)
```
Returns updater for given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index` | uint256 | The index to get updater. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `updater` | address | The updater address. |

### numsOfUpdater
```solidity
  function numsOfUpdater(
  ) external returns (uint256 count)
```
Returns the length of the updaters.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The updater count. |

### addUpdater
```solidity
  function addUpdater(
    address updater
  ) external
```
Sets the underwriting pool bot updater.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `updater` | address | The bot address to set. |

### removeUpdater
```solidity
  function removeUpdater(
    address updater
  ) external
```
Sets the underwriting pool bot updater.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `updater` | address | The bot address to set. |


## Events
### UnderwritingPoolSet
```solidity
  event UnderwritingPoolSet(
  )
```
Emitted when the underwriting pool is set.


### UnderwritingPoolRemoved
```solidity
  event UnderwritingPoolRemoved(
  )
```
Emitted when underwriting pool is removed.


### UwpUpdaterSet
```solidity
  event UwpUpdaterSet(
  )
```
Emitted when underwriting pool updater is set.


### UwpUpdaterRemoved
```solidity
  event UwpUpdaterRemoved(
  )
```
Emitted when underwriting pool updater is removed.


