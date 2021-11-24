Tracks the contracts of the Solaverse.

[**Governance**](/docs/protocol/governance) can set the contract addresses and anyone can look them up.

Note that `Registry` doesn't track all Solace contracts. Farms are tracked in [`FarmController`](./FarmController), Products are tracked in [`PolicyManager`](./PolicyManager), and the `Registry` is untracked.


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
|`governance_` | address | The address of the [governor](/docs/protocol/governance).

### weth
```solidity
  function weth(
  ) external returns (address weth_)
```
Gets the [**WETH**](./WETH9) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weth_`|  | The address of the [**WETH**](./WETH9) contract.
### vault
```solidity
  function vault(
  ) external returns (address vault_)
```
Gets the [`Vault`](./Vault) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`vault_`|  | The address of the [`Vault`](./Vault) contract.
### claimsEscrow
```solidity
  function claimsEscrow(
  ) external returns (address claimsEscrow_)
```
Gets the [`ClaimsEscrow`](./ClaimsEscrow) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`claimsEscrow_`|  | The address of the [`ClaimsEscrow`](./ClaimsEscrow) contract.
### treasury
```solidity
  function treasury(
  ) external returns (address treasury_)
```
Gets the [`Treasury`](./Treasury) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`treasury_`|  | The address of the [`Treasury`](./Treasury) contract.
### policyManager
```solidity
  function policyManager(
  ) external returns (address policyManager_)
```
Gets the [`PolicyManager`](./PolicyManager) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyManager_`|  | The address of the [`PolicyManager`](./PolicyManager) contract.
### riskManager
```solidity
  function riskManager(
  ) external returns (address riskManager_)
```
Gets the [`RiskManager`](./RiskManager) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`riskManager_`|  | The address of the [`RiskManager`](./RiskManager) contract.
### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
Gets the [**SOLACE**](./SOLACE) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`solace_`|  | The address of the [**SOLACE**](./SOLACE) contract.
### optionsFarming
```solidity
  function optionsFarming(
  ) external returns (address optionsFarming_)
```
Gets the [`OptionsFarming`](./OptionsFarming) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionsFarming_`|  | The address of the [`OptionsFarming`](./OptionsFarming) contract.
### farmController
```solidity
  function farmController(
  ) external returns (address farmController_)
```
Gets the [`FarmController`](./FarmController) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`farmController_`|  | The address of the [`FarmController`](./FarmController) contract.
### locker
```solidity
  function locker(
  ) external returns (address)
```
Gets the [`Locker`](./Locker) contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`locker_`|  | The address of the [`Locker`](./Locker) contract.
### setWeth
```solidity
  function setWeth(
    address weth_
  ) external
```
Sets the [**WETH**](./WETH9) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth_` | address | The address of the [**WETH**](./WETH9) contract.

### setVault
```solidity
  function setVault(
    address vault_
  ) external
```
Sets the [`Vault`](./Vault) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`vault_` | address | The address of the [`Vault`](./Vault) contract.

### setClaimsEscrow
```solidity
  function setClaimsEscrow(
    address claimsEscrow_
  ) external
```
Sets the [`Claims Escrow`](./ClaimsEscrow) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimsEscrow_` | address | The address of the [`Claims Escrow`](./ClaimsEscrow) contract.

### setTreasury
```solidity
  function setTreasury(
    address treasury_
  ) external
```
Sets the [`Treasury`](./Treasury) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`treasury_` | address | The address of the [`Treasury`](./Treasury) contract.

### setPolicyManager
```solidity
  function setPolicyManager(
    address policyManager_
  ) external
```
Sets the [`Policy Manager`](./PolicyManager) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The address of the [`Policy Manager`](./PolicyManager) contract.

### setRiskManager
```solidity
  function setRiskManager(
    address riskManager_
  ) external
```
Sets the [`Risk Manager`](./RiskManager) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskManager_` | address | The address of the [`Risk Manager`](./RiskManager) contract.

### setSolace
```solidity
  function setSolace(
    address solace_
  ) external
```
Sets the [**SOLACE**](./SOLACE) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The address of the [**SOLACE**](./SOLACE) contract.

### setOptionsFarming
```solidity
  function setOptionsFarming(
    address optionsFarming_
  ) external
```
Sets the [`OptionsFarming`](./OptionsFarming) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`optionsFarming_` | address | The address of the [`OptionsFarming`](./OptionsFarming) contract.

### setFarmController
```solidity
  function setFarmController(
    address farmController_
  ) external
```
Sets the [`FarmController`](./FarmController) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmController_` | address | The address of the [`FarmController`](./FarmController) contract.

### setLocker
```solidity
  function setLocker(
    address locker_
  ) external
```
Sets the [`Locker`](./Locker) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`locker_` | address | The address of the [`Locker`](./Locker) contract.

### setMultiple
```solidity
  function setMultiple(
    address weth_,
    address vault_,
    address claimsEscrow_,
    address treasury_,
    address policyManager_,
    address riskManager_,
    address solace_,
    address optionsFarming_,
    address farmController_,
    address locker_
  ) external
```
Sets multiple contracts in one call.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`weth_` | address | The address of the [**WETH**](../WETH9) contract.
|`vault_` | address | The address of the [`Vault`](../Vault) contract.
|`claimsEscrow_` | address | The address of the [`Claims Escrow`](../ClaimsEscrow) contract.
|`treasury_` | address | The address of the [`Treasury`](../Treasury) contract.
|`policyManager_` | address | The address of the [`Policy Manager`](../PolicyManager) contract.
|`riskManager_` | address | The address of the [`Risk Manager`](../RiskManager) contract.
|`solace_` | address | The address of the [**SOLACE**](../SOLACE) contract.
|`optionsFarming_` | address | The address of the [`OptionsFarming`](./OptionsFarming) contract.
|`farmController_` | address | The address of the [`FarmController`](./FarmController) contract.
|`locker_` | address | The address of the [`Locker`](../Locker) contract.

