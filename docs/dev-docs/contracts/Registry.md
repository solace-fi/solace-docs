Tracks the contracts in the Solaverse.


## Functions
### initialize
```solidity
  function initialize(
    address _governance
  ) public
```
initialize function for the registry contract.
Only called once in contract deployment to initialize governor and admin. 


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



### setSolace
```solidity
  function setSolace(
    address _solace
  ) external
```
Sets the solace token contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_solace` | address | The solace token address.

### setMaster
```solidity
  function setMaster(
    address _master
  ) external
```
Sets the master contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_master` | address | The master contract address.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address _claimsEscrow
  ) external
```
Sets the Claims Escrow contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_claimsEscrow` | address | The sClaims Escrow address.

### setVault
```solidity
  function setVault(
    address _vault
  ) external
```
Sets the vault contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_vault` | address | The vault contract address.

### setTreasury
```solidity
  function setTreasury(
    address _treasury
  ) external
```
Sets the treasury contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_treasury` | address | The treasury contract address.

### setLocker
```solidity
  function setLocker(
    address _locker
  ) external
```
Sets the locker contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_locker` | address | The locker address.

### setPolicyManager
```solidity
  function setPolicyManager(
    address _policyManager
  ) external
```
Sets the PolicyManager contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyManager` | address | The policy manager address.

### setRiskManager
```solidity
  function setRiskManager(
    address _riskManager
  ) external
```
Sets the RiskManager contract.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_riskManager` | address | The risk manager address.

### _authorizeUpgrade
```solidity
  function _authorizeUpgrade(
  ) internal
```
To authorize the admin to upgrade the contract.



