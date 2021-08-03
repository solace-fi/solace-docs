## `Registry`

Tracks the contracts in the Solaverse.




### `constructor()` (public)

Constructs the registry contract.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setSolace(address _solace)` (external)

Sets the solace token contract.
Can only be called by the current governor.




### `setMaster(address _master)` (external)

Sets the master contract.
Can only be called by the current governor.




### `setClaimsAdjustor(address _claimsAdjustor)` (external)

Sets the Claims Adjustor contract.
Can only be called by the current governor.




### `setClaimsEscrow(address _claimsEscrow)` (external)

Sets the Claims Escrow contract.
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




### `addProduct(address _product)` (external)

Adds a new product.
Can only be called by the current governor.




### `removeProduct(address _product)` (external)

Removes a product.
Can only be called by the current governor.




### `numProducts() → uint256` (external)

Returns the number of products.




### `getProduct(uint256 _productNum) → address` (external)

Returns the product at the given index.




### `isProduct(address _product) → bool` (external)

Returns true if the given address is a product.





### `GovernanceSet(address _governance)`





### `SolaceSet(address _solace)`





### `MasterSet(address _master)`





### `VaultSet(address _vault)`





### `TreasurySet(address _treasury)`





### `LockerSet(address _locker)`





### `ClaimsAdjustorSet(address _claimsAdjustor)`





### `ClaimsEscrowSet(address _claimsEscrow)`





### `ProductAdded(address _product)`





### `ProductRemoved(address _product)`





