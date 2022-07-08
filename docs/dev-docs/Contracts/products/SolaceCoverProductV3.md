<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/products/SolaceCoverProductV3.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A Solace insurance product that allows users to insure all of their DeFi positions against smart contract risk through a single policy.


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    address _registry
  ) public
```
Constructs `Solace Cover Product`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_governance` | address | The address of the governor. |
| `_registry` | address | The [`Registry`](./Registry) contract address. |

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
  ) public returns (uint256 cover)
```
The maximum amount of cover that can be sold in **USD** to 18 decimals places.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover. |

### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) public returns (uint256 amount)
```
Returns the active cover limit in **USD** to 18 decimal places. In other words, the total cover that has been sold at the current time.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The active cover limit. |

### availableCoverCapacity
```solidity
  function availableCoverCapacity(
  ) public returns (uint256 capacity)
```
Determine the available remaining capacity for new cover.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `capacity` | uint256 | The amount of available remaining capacity for new cover. |

### policyStatus
```solidity
  function policyStatus(
    uint256 _policyID
  ) public returns (bool status)
```
Returns true if the policy is active, false if inactive


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if policy is active. False otherwise. |

### minRequiredAccountBalance
```solidity
  function minRequiredAccountBalance(
    uint256 _coverLimit
  ) public returns (uint256 mrab)
```
Calculate minimum required account balance for a given cover limit. Equals the maximum chargeable fee for one epoch.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |

### minScpRequired
```solidity
  function minScpRequired(
    address _policyholder
  ) external returns (uint256 amount)
```
Calculates the minimum amount of Solace Credit Points required by this contract for the account to hold.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_policyholder` | address | The account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The amount of SCP the account must hold. |

### tokenURI
```solidity
  function tokenURI(
    uint256 policyID
  ) public returns (string uri)
```
Returns the Uniform Resource Identifier (URI) for `policyID`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

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

### setPaused
```solidity
  function setPaused(
    bool _paused
  ) external
```
Pauses or unpauses policies.
Deactivating policies are unaffected by pause.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_paused` | bool | True to pause, false to unpause. |

### setMaxRate
```solidity
  function setMaxRate(
    uint256 _maxRateNum,
    uint256 _maxRateDenom
  ) external
```
set _maxRate.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_maxRateNum` | uint256 | The maximum rate charged per second per 1e-18 (wei) of cover limit.
The default is to charge 10% of cover limit annually = 1/315360000. |
| `_maxRateDenom` | uint256 | The maximum rate denomination value. The default value is max premium rate of 10% of cover limit per annum. |

### setChargeCycle
```solidity
  function setChargeCycle(
    enum ISolaceCoverProductV3.ChargePeriod _chargeCycle
  ) external
```
Sets maximum epoch duration over which premiums are charged.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_chargeCycle` | enum ISolaceCoverProductV3.ChargePeriod | The premium charge period(Weekly, Monthly, Annually, Daily, Hourly) in seconds to set. The default is weekly(604800). |

### setBaseURI
```solidity
  function setBaseURI(
    string _baseURI
  ) external
```
Sets the base URI for computing `tokenURI`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_baseURI` | string | The new base URI. |

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

### _checkCapacity
```solidity
  function _checkCapacity(
    uint256 _currentCoverLimit,
    uint256 _newCoverLimit
  ) internal returns (bool acceptable)
```
Returns true if there is sufficient capacity to update a policy's cover limit, false if not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_currentCoverLimit` | uint256 | The current cover limit, 0 if policy has not previously been activated. |
| `_newCoverLimit` | uint256 |  The new cover limit requested. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `acceptable` | bool | True there is sufficient capacity for the requested new cover limit, false otherwise. |

### _purchase
```solidity
  function _purchase(
    address _user,
    uint256 _coverLimit
  ) internal returns (uint256 policyID)
```
Purchases policy for user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_user` | address | The account to purchase policy. |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the newly minted policy. |

### _purchaseWithStable
```solidity
  function _purchaseWithStable(
    address _purchaser,
    address _user,
    uint256 _coverLimit,
    address _token,
    uint256 _amount
  ) internal returns (uint256 policyID)
```
Purchases policy for user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_purchaser` | address | The account that purchases the policy. |
| `_user` | address | The account to purchase policy for. |
| `_coverLimit` | uint256 | The maximum value to cover in **USD**. |
| `_token` | address | The token to deposit. |
| `_amount` | uint256 | Amount of token to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the newly minted policy. |

### _purchaseWithNonStable
```solidity
  function _purchaseWithNonStable(
    address _purchaser,
    address _user,
    uint256 _coverLimit,
    address _token,
    uint256 _amount,
    uint256 _price,
    uint256 _priceDeadline,
    bytes _signature
  ) internal returns (uint256 policyID)
```
Purchases policy for user.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_purchaser` | address | The account that purchases the policy. |
| `_user` | address | The account to purchase policy. |
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

### _updateActiveCoverLimit
```solidity
  function _updateActiveCoverLimit(
    uint256 _currentCoverLimit,
    uint256 _newCoverLimit
  ) internal
```
Updates the Risk Manager on the current total cover limit purchased by policyholders.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_currentCoverLimit` | uint256 | The current policyholder cover limit (0 if activating policy). |
| `_newCoverLimit` | uint256 | The new policyholder cover limit. |

### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal
```
Override _beforeTokenTransfer hook from ERC721 standard to ensure policies are non-transferable, and only one can be minted per user.

This hook is called on mint, transfer and burn.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | sending address. |
| `to` | address | receiving address. |
| `tokenId` | uint256 | tokenId. |

### _setRegistry
```solidity
  function _setRegistry(
    address _registry
  ) internal
```
Sets registry and related contract addresses.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_registry` | address | The registry address to set. |


