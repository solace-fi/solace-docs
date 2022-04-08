<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/risk/ICoverageDataProvider.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Holds underwriting pool amounts in `USD`. Provides information to the [**Risk Manager**](./RiskManager.sol) that is the maximum amount of cover that `Solace` protocol can sell as a coverage.


## Functions
### reset
```solidity
  function reset(
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

### set
```solidity
  function set(
    string uwpName,
    uint256 amount
  ) external
```
Sets the balance of the given underwriting pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpName` | string | The underwriting pool name to set balance. |
| `amount` | uint256 | The balance of the underwriting pool in `USD`. |

### remove
```solidity
  function remove(
    string uwpName
  ) external
```
Removes the given underwriting pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpName` | string | The underwriting pool name to remove. |

### maxCover
```solidity
  function maxCover(
  ) external returns (uint256 cover)
```
The maximum amount of cover in `USD` that Solace as a whole can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover in `USD`. |

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

### getUwpUpdater
```solidity
  function getUwpUpdater(
  ) external returns (address uwpUpdater)
```
Returns the underwriting pool bot updater address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uwpUpdater` | address | The bot address. |

### setUwpUpdater
```solidity
  function setUwpUpdater(
    address uwpUpdater
  ) external
```
Sets the underwriting pool bot updater.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uwpUpdater` | address | The bot address to set. |


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


