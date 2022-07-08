<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/products/ISolaceCoverProductV3.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### purchase
```solidity
  function purchase(
    address _user,
    uint256 _coverLimit
  ) external
```
Purchases policies for the user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_user` | address | The policy owner. |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |

### purchaseWithStable
```solidity
  function purchaseWithStable(
    address _user,
    uint256 _coverLimit,
    address _token,
    uint256 _amount
  ) external returns (uint256 policyID)
```
Purchases policy for the user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_user` | address | The policy owner. |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |
| `_token` | address | The token to deposit. |
| `_amount` | uint256 | Amount of token to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the newly minted policy. |

### purchaseWithNonStable
```solidity
  function purchaseWithNonStable(
    address _user,
    uint256 _coverLimit,
    address _token,
    uint256 _amount,
    uint256 _price,
    uint256 _priceDeadline,
    bytes _signature
  ) external returns (uint256 policyID)
```
Purchases policy for the user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_user` | address | The policy owner. |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |
| `_token` | address | The token to deposit. |
| `_amount` | uint256 | Amount of token to deposit. |
| `_price` | uint256 | The `SOLACE` price in wei(usd). |
| `_priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `_signature` | bytes | The `SOLACE` price signature. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the newly minted policy. |

### cancel
```solidity
  function cancel(
    uint256 _premium,
    uint256 _deadline,
    bytes _signature
  ) external
```
Cancels the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_premium` | uint256 | The premium amount to verify. |
| `_deadline` | uint256 | The deadline for the signature. |
| `_signature` | bytes | The premium data signature. |

### cancelPolicies
```solidity
  function cancelPolicies(
    address[] _policyholders
  ) external
```
Terminates the policies if users don't have enough balance to pay coverage.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_policyholders` | address[] | The owners of the policies to terminate. |

### maxCover
```solidity
  function maxCover(
  ) external returns (uint256 cover)
```
The maximum amount of cover that can be sold in **USD** to 18 decimals places.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover. |

### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) external returns (uint256 amount)
```
Returns the active cover limit in **USD** to 18 decimal places. In other words, the total cover that has been sold at the current time.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The active cover limit. |

### availableCoverCapacity
```solidity
  function availableCoverCapacity(
  ) external returns (uint256 availableCoverCapacity_)
```
Determine the available remaining capacity for new cover.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `availableCoverCapacity_` | uint256 | The amount of available remaining capacity for new cover. |

### policyStatus
```solidity
  function policyStatus(
    uint256 policyID_
  ) external returns (bool status)
```
Returns true if the policy is active, false if inactive


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID_` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if policy is active. False otherwise. |

### minRequiredAccountBalance
```solidity
  function minRequiredAccountBalance(
    uint256 coverLimit
  ) external returns (uint256 minRequiredAccountBalance_)
```
Calculate minimum required account balance for a given cover limit. Equals the maximum chargeable fee for one epoch.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `coverLimit` | uint256 | Cover limit. |

### setRegistry
```solidity
  function setRegistry(
    address registry_
  ) external
```
Sets the [`Registry`](./Registry) contract address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `registry_` | address | The address of `Registry` contract. |

### setPaused
```solidity
  function setPaused(
    bool paused_
  ) external
```
Pauses or unpauses policies.
Deactivating policies are unaffected by pause.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `paused_` | bool | True to pause, false to unpause. |

### setMaxRate
```solidity
  function setMaxRate(
    uint256 maxRateNum_,
    uint256 maxRateDenom_
  ) external
```
set _maxRate.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxRateNum_` | uint256 | Desired maxRateNum. |
| `maxRateDenom_` | uint256 | Desired maxRateDenom. |

### setChargeCycle
```solidity
  function setChargeCycle(
    enum ISolaceCoverProductV3.ChargePeriod chargeCycle_
  ) external
```
set _chargeCycle.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `chargeCycle_` | enum ISolaceCoverProductV3.ChargePeriod | Desired chargeCycle. |

### setBaseURI
```solidity
  function setBaseURI(
    string baseURI_
  ) external
```
Sets the base URI for computing `tokenURI`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `baseURI_` | string | The new base URI. |

### setChargedTime
```solidity
  function setChargedTime(
    uint256 _timestamp
  ) external
```
Sets the latest premium charged time.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_timestamp` | uint256 | The timestamp value when the premiums are charged. |


## Events
### PolicyCreated
```solidity
  event PolicyCreated(
  )
```
Emitted when a new Policy is created.


### PolicyUpdated
```solidity
  event PolicyUpdated(
  )
```
Emitted when a Policy is updated.


### PolicyCanceled
```solidity
  event PolicyCanceled(
  )
```
Emitted when a Policy is deactivated.


### RegistrySet
```solidity
  event RegistrySet(
  )
```
Emitted when Registry address is updated.


### PauseSet
```solidity
  event PauseSet(
  )
```
Emitted when pause is set.


### LatestChargedTimeSet
```solidity
  event LatestChargedTimeSet(
  )
```
Emitted when latest charged time is set.


### MaxRateSet
```solidity
  event MaxRateSet(
  )
```
Emitted when maxRate is set.


### ChargeCycleSet
```solidity
  event ChargeCycleSet(
  )
```
Emitted when chargeCycle is set.


### BaseURISet
```solidity
  event BaseURISet(
  )
```
Emitted when baseURI is set


### DebtSet
```solidity
  event DebtSet(
  )
```
Emitted when debt is added for policyholder.


