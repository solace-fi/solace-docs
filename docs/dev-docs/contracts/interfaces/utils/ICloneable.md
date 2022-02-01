


## Functions
### calculateMinimalProxyDeploymentAddress
```solidity
  function calculateMinimalProxyDeploymentAddress(
    bytes32 salt
  ) external returns (address)
```
calculate the deployment address for a given target and salt


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`salt` | bytes32 | input for deterministic address calculation

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`deployment`| bytes32 | address
## Events
### ContractDeployed
```solidity
  event ContractDeployed(
  )
```
Emitted when a contract is deployed.


