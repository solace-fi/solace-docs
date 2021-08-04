## `IRegistry`

Tracks the contracts in the Solaverse.




### `governance() → address` (external)

Governance.



### `newGovernance() → address` (external)

Governance to take over.



### `master() → address` (external)

Protocol contract address getters



### `vault() → address` (external)





### `treasury() → address` (external)





### `solace() → address` (external)





### `locker() → address` (external)





### `claimsEscrow() → address` (external)





### `policyManager() → address` (external)





### `riskManager() → address` (external)





### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setSolace(address _solace)` (external)

Sets the solace token contract.
Can only be called by the current governor.




### `setMaster(address _master)` (external)

Sets the master contract.
Can only be called by the current governor.




### `setVault(address _vault)` (external)

Sets the vault contract.
Can only be called by the current governor.




### `setTreasury(address _treasury)` (external)

Sets the treasury contract.
Can only be called by the current governor.




### `setLocker(address _locker)` (external)

Sets the locker contract.
Can only be called by the current governor.




### `setClaimsEscrow(address _claimsEscrow)` (external)

Sets the Claims Escrow contract.
Can only be called by the current governor.




### `setPolicyManager(address _policyManager)` (external)

Sets the PolicyManager contract.
Can only be called by the current governor.




### `setRiskManager(address _riskManager)` (external)

Sets the RiskManager contract.
Can only be called by the current governor.





### `GovernanceTransferred(address _newGovernance)`





### `SolaceSet(address _solace)`





### `MasterSet(address _master)`





### `VaultSet(address _vault)`





### `TreasurySet(address _treasury)`





### `LockerSet(address _locker)`





### `ClaimsEscrowSet(address _claimsEscrow)`





### `PolicyManagerSet(address _policyManager)`





### `RiskManagerSet(address _riskManager)`





