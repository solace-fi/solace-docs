Tracks the contracts of the Solaverse.

[**Governance**](/docs/user-docs/Governance) can set the contract addresses and anyone can look them up.

Note that `Registry` doesn't track all Solace contracts. Farms are tracked in [`Master`](../Master), Products are tracked in [`PolicyManager`](../PolicyManager), and the `Registry` is untracked.


## Functions
### weth
```solidity
  function weth(
  ) external returns (address)
```
Gets the [**WETH**](../WETH9) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weth_`|  | The address of the [**WETH**](../WETH9) contract.
### vault
```solidity
  function vault(
  ) external returns (address)
```
Gets the [`Vault`](../Vault) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault_`|  | The address of the [`Vault`](../Vault) contract.
### claimsEscrow
```solidity
  function claimsEscrow(
  ) external returns (address)
```
Gets the [`ClaimsEscrow`](../ClaimsEscrow) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`claimsEscrow_`|  | The address of the [`ClaimsEscrow`](../ClaimsEscrow) contract.
### treasury
```solidity
  function treasury(
  ) external returns (address)
```
Gets the [`Treasury`](../Treasury) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`treasury_`|  | The address of the [`Treasury`](../Treasury) contract.
### policyManager
```solidity
  function policyManager(
  ) external returns (address)
```
Gets the [`PolicyManager`](../PolicyManager) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyManager_`|  | The address of the [`PolicyManager`](../PolicyManager) contract.
### riskManager
```solidity
  function riskManager(
  ) external returns (address)
```
Gets the [`RiskManager`](../RiskManager) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`riskManager_`|  | The address of the [`RiskManager`](../RiskManager) contract.
### solace
```solidity
  function solace(
  ) external returns (address)
```
Gets the [**SOLACE**](../SOLACE) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`solace_`|  | The address of the [**SOLACE**](../SOLACE) contract.
### master
```solidity
  function master(
  ) external returns (address)
```
Gets the [`Master`](../Master) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`master_`|  | The address of the [`Master`](../Master) contract.
### locker
```solidity
  function locker(
  ) external returns (address)
```
Gets the [`Locker`](../Locker) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`locker_`|  | The address of the [`Locker`](../Locker) contract.
### setWeth
```solidity
  function setWeth(
    address weth_
  ) external
```
Sets the [**WETH**](../WETH9) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth_` | address | The address of the [**WETH**](../WETH9) contract.

### setVault
```solidity
  function setVault(
    address vault_
  ) external
```
Sets the [`Vault`](../Vault) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`vault_` | address | The address of the [`Vault`](../Vault) contract.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address claimsEscrow_
  ) external
```
Sets the [`Claims Escrow`](../ClaimsEscrow) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimsEscrow_` | address | The address of the [`Claims Escrow`](../ClaimsEscrow) contract.

### setTreasury
```solidity
  function setTreasury(
    address treasury_
  ) external
```
Sets the [`Treasury`](../Treasury) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`treasury_` | address | The address of the [`Treasury`](../Treasury) contract.

### setPolicyManager
```solidity
  function setPolicyManager(
    address policyManager_
  ) external
```
Sets the [`Policy Manager`](../PolicyManager) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The address of the [`Policy Manager`](../PolicyManager) contract.

### setRiskManager
```solidity
  function setRiskManager(
    address riskManager_
  ) external
```
Sets the [`Risk Manager`](../RiskManager) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskManager_` | address | The address of the [`Risk Manager`](../RiskManager) contract.

### setSolace
```solidity
  function setSolace(
    address solace_
  ) external
```
Sets the [**SOLACE**](../SOLACE) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The address of the [**SOLACE**](../SOLACE) contract.

### setMaster
```solidity
  function setMaster(
    address master_
  ) external
```
Sets the [`Master`](../Master) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`master_` | address | The address of the [`Master`](../Master) contract.

### setLocker
```solidity
  function setLocker(
    address locker_
  ) external
```
Sets the [`Locker`](../Locker) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`locker_` | address | The address of the [`Locker`](../Locker) contract.

## Events
### WethSet
```solidity
  event WethSet(
  )
```



### VaultSet
```solidity
  event VaultSet(
  )
```



### ClaimsEscrowSet
```solidity
  event ClaimsEscrowSet(
  )
```



### TreasurySet
```solidity
  event TreasurySet(
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



### LockerSet
```solidity
  event LockerSet(
  )
```



