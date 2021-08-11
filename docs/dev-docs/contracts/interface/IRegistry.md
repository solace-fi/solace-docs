Tracks the contracts in the Solaverse.


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Governance.



### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```
Governance to take over.



### master
```solidity
  function master(
  ) external returns (address)
```
Protocol contract address getters



### vault
```solidity
  function vault(
  ) external returns (address)
```




### treasury
```solidity
  function treasury(
  ) external returns (address)
```




### solace
```solidity
  function solace(
  ) external returns (address)
```




### locker
```solidity
  function locker(
  ) external returns (address)
```




### claimsEscrow
```solidity
  function claimsEscrow(
  ) external returns (address)
```




### policyManager
```solidity
  function policyManager(
  ) external returns (address)
```




### riskManager
```solidity
  function riskManager(
  ) external returns (address)
```




### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Transfers the governance role to a new governor.
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
|`_claimsEscrow` | address | The Claims Escrow address.

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
|`_policyManager` | address | The PolicyManager address.

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
|`_riskManager` | address | The RiskManager address.

## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



### SolaceSet
```solidity
  event SolaceSet(
  )
```



### MasterSet
```solidity
  event MasterSet(
  )
```



### VaultSet
```solidity
  event VaultSet(
  )
```



### TreasurySet
```solidity
  event TreasurySet(
  )
```



### LockerSet
```solidity
  event LockerSet(
  )
```



### ClaimsEscrowSet
```solidity
  event ClaimsEscrowSet(
  )
```



### PolicyManagerSet
```solidity
  event PolicyManagerSet(
  )
```



### RiskManagerSet
```solidity
  event RiskManagerSet(
  )
```



