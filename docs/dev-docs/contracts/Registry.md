The `Registry` is an  upgradeable proxy contract that tracks the contracts in the Solaverse. It inherits from `UUPSUpgradeable` contract. Please refer  [**OpenZeppelin Docs**](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UUPSUpgradeable) to learn more about upgradeable proxies.

## Variables
### **admin**
```solidity
   address public admin;
```
Admin account address to upgrade `Registry` contract.


### **governance**
```solidity
   address public governance;
```
Governor address.


### **newGovernance**
```solidity
   address public newGovernance;
```
Governance to take over.


### **solace**
```solidity
   address public solace;
```
Solace Token contract address.


### **master**
```solidity
   address public master;
```
Master contract address.


### **vault**
```solidity
   address public vault;
```
Vault contract address.


### **treasury**
```solidity
   address public treasury;
```
Treasury contract address.


### **locker**
```solidity
   address public locker;
```
Locker contract address.


### **claimsEscrow**
```solidity
    address public claimsEscrow;
```
ClaimsEscrow contract address.


### **policyManager**
```solidity
   address public policyManager;
```
PolicyManager contract address.


### **riskManager**
```solidity
   address public riskManager;
```
RiskManager contract address.


## Functions
### initialize
```solidity
  function initialize(address _governance) public initializer
```

Initialize function for the registry contract.
Only called once in contract deployment to initialize `governor` and `admin`. 

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_governance` | address | The account address of the `governor`.



### **setGovernance**
```solidity
  function setGovernance(address _governance) external
```

Allows governance to be transferred to a new `governor`.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_governance` | address | The account address of the `governor`.



### **acceptGovernance**
```solidity
  function acceptGovernance() external
```

Accepts the governance role.
Can only be called by the new `governor`.



### **setSolace**
```solidity
function setSolace(address _solace) external
```

Sets the [`Solace Token`](./SOLACE.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_solace` | address | The contract address of the `SOLACE` contract.



### **setMaster**
```solidity
  function setMaster(address _master) external
```

Sets the [`Master`](./Master.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_master` | address | The contract address of the `Master` contract.



### **setClaimsEscrow**
```solidity
  function setClaimsEscrow(address _claimsEscrow) external
```

Sets the [`Claims Escrow`](./ClaimsEscrow.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_claimsEscrow` | address | The contract address of the `ClaimsEscrow` contract.



### **setVault**
```solidity
  function setVault(address _vault) external
```

Sets the [`Vault`](./Vault.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_vault` | address | The contract address of the `Vault` contract.



### **setTreasury**
```solidity
  function setTreasury(address _treasury) external
```

Sets the [`Treasury`](./Treasury.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_treasury` | address | The contract address of the `Treasury` contract.



### **setLocker**
```solidity
  function setLocker(address _locker) external
```

Sets the `Locker` contract.
Can only be called by the current governor.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_locker` | address | The contract address of the `Locker` contract.



### **setPolicyManager**
```solidity
  function setPolicyManager(address _policyManager) external
```

Sets the [`Policy Manager`](./PolicyManager.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_policyManager` | address | The contract address of the `PolicyManager` contract.



### **setRiskManager**
```solidity
function setRiskManager(address _riskManager) external
```

Sets the [`Risk Manager`](./RiskManager.md) contract.
Can only be called by the current `governor`.

#### Parameters
| Name | Type | Description                                             |
| ---- | ----- | ------------------------------------------------------ |
|`_riskManager` | address | The contract address of the `RiskManager` contract.



### _authorizeUpgrade
```solidity
function _authorizeUpgrade(address) internal
```

To authorize the `admin` to upgrade the `Registry` contract.


## Events
### **GovernanceTransferred**
```solidity
   event GovernanceTransferred(address _newGovernance);
```
Emitted when Governance is set.


### **SolaceSet**
```solidity
   event SolaceSet(address _solace);
```
Emitted when Solace Token is set.


### **MasterSet**
```solidity
   event MasterSet(address _master);
```
Emitted when Master is set.


### **VaultSet**
```solidity
   event VaultSet(address _vault);
```
Emitted when Vault is set.


### **TreasurySet**
```solidity
   event TreasurySet(address _treasury);
```
Emitted when Treasury is set.


### **LockerSet**
```solidity
   event LockerSet(address _locker);
```
Emitted when Locker is set.


### **ClaimsEscrowSet**
```solidity
   event ClaimsEscrowSet(address _claimsEscrow);
```
Emitted when ClaimsEscrow is set.


### **PolicyManagerSet**
```solidity
   event PolicyManagerSet(address _policyManager);
```
Emitted when PolicyManager is set.


### **RiskManagerSet**
```solidity
   event RiskManagerSet(address _riskManager);
```
Emitted when RiskManager is set.