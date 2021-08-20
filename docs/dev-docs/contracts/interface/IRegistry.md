Tracks the contracts in the Solaverse.


## Functions
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




### setSolace
```solidity
  function setSolace(
    address solace_
  ) external
```
Sets the solace token contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The solace token address.

### setMaster
```solidity
  function setMaster(
    address master_
  ) external
```
Sets the master contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`master_` | address | The master contract address.

### setVault
```solidity
  function setVault(
    address vault_
  ) external
```
Sets the vault contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`vault_` | address | The vault contract address.

### setTreasury
```solidity
  function setTreasury(
    address treasury_
  ) external
```
Sets the treasury contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`treasury_` | address | The treasury contract address.

### setLocker
```solidity
  function setLocker(
    address locker_
  ) external
```
Sets the locker contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`locker_` | address | The locker address.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address claimsEscrow_
  ) external
```
Sets the Claims Escrow contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimsEscrow_` | address | The Claims Escrow address.

### setPolicyManager
```solidity
  function setPolicyManager(
    address policyManager_
  ) external
```
Sets the PolicyManager contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The PolicyManager address.

### setRiskManager
```solidity
  function setRiskManager(
    address riskManager_
  ) external
```
Sets the RiskManager contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskManager_` | address | The RiskManager address.

## Events
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



