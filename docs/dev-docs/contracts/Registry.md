The `Registry` tracks the contracts in the Solaverse.


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
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).

### setSolace
```solidity
  function setSolace(
    address solace_
  ) external
```
Sets the [`Solace Token`](./SOLACE) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The `SOLACE` token address.

### setMaster
```solidity
  function setMaster(
    address master_
  ) external
```
Sets the [`Master`](./Master) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`master_` | address | The contract address of the `Master` contract.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address claimsEscrow_
  ) external
```
Sets the [`Claims Escrow`](./ClaimsEscrow) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimsEscrow_` | address | The contract address of the `ClaimsEscrow` contract.

### setVault
```solidity
  function setVault(
    address vault_
  ) external
```
Sets the [`Vault`](./Vault) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`vault_` | address | The contract address of the `Vault` contract.

### setTreasury
```solidity
  function setTreasury(
    address treasury_
  ) external
```
Sets the [`Treasury`](./Treasury) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`treasury_` | address | The contract address of the `Treasury` contract.

### setLocker
```solidity
  function setLocker(
    address locker_
  ) external
```
Sets the [`Locker`](./Locker) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`locker_` | address | The contract address of the `Locker` contract.

### setPolicyManager
```solidity
  function setPolicyManager(
    address policyManager_
  ) external
```
Sets the [`Policy Manager`](./PolicyManager) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The contract address of the `PolicyManager` contract.

### setRiskManager
```solidity
  function setRiskManager(
    address riskManager_
  ) external
```
Sets the [`Risk Manager`](./RiskManager) contract.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskManager_` | address | The contract address of the `RiskManager` contract.

