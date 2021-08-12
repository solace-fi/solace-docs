The `Registry` is an  upgradeable proxy contract that tracks the contracts in the Solaverse. 
It inherits from `UUPSUpgradeable` contract. Please refer  [**OpenZeppelin Docs**](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) to learn more about upgradeable proxies.


## Functions
### initialize
```solidity
  function initialize(
    address _governance
  ) public
```
Initialize function for the registry contract.
Only called once in contract deployment to initialize `governor` and `admin`. 


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
Allows governance to be transferred to a new `governor`.
Can only be called by the current `governor`.


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
Can only be called by the new `governor`.



### setSolace
```solidity
  function setSolace(
    address _solace
  ) external
```
Sets the [`Solace Token`](./SOLACE.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_solace` | address | The `SOLACE` token address.

### setMaster
```solidity
  function setMaster(
    address _master
  ) external
```
Sets the [`Master`](./Master.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_master` | address | The contract address of the `Master` contract.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address _claimsEscrow
  ) external
```
Sets the [`Claims Escrow`](./ClaimsEscrow.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_claimsEscrow` | address | The contract address of the `ClaimsEscrow` contract.

### setVault
```solidity
  function setVault(
    address _vault
  ) external
```
Sets the [`Vault`](./Vault.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_vault` | address | The contract address of the `Vault` contract.

### setTreasury
```solidity
  function setTreasury(
    address _treasury
  ) external
```
Sets the [`Treasury`](./Treasury.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_treasury` | address | The contract address of the `Treasury` contract.

### setLocker
```solidity
  function setLocker(
    address _locker
  ) external
```
Sets the [`Locker`](./Locker.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_locker` | address | The contract address of the `Locker` contract.

### setPolicyManager
```solidity
  function setPolicyManager(
    address _policyManager
  ) external
```
Sets the [`Policy Manager`](./PolicyManager.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyManager` | address | The contract address of the `PolicyManager` contract.

### setRiskManager
```solidity
  function setRiskManager(
    address _riskManager
  ) external
```
Sets the [`Risk Manager`](./RiskManager.md) contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_riskManager` | address | The contract address of the `RiskManager` contract.

### _authorizeUpgrade
```solidity
  function _authorizeUpgrade(
  ) internal
```
To authorize the `admin` to upgrade the `Registry` contract.
It is called when upgrading the `Registry` contract to security check.



