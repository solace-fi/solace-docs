## `IPolicyManager`






### `governance() → address` (external)

Governance.



### `newGovernance() → address` (external)

Governance to take over.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `addProduct(address _product)` (external)

Adds a new product.
Can only be called by the current governor.




### `removeProduct(address _product)` (external)

Removes a product.
Can only be called by the current governor.




### `setTokenDescriptor(address _tokenDescriptor)` (external)

Allows governance to set token descriptor.
Can only be called by the current governor.




### `productIsActive(address _product) → bool` (external)

Checks is an address is an active product.




### `numProducts() → uint256` (external)

Returns the number of products.




### `getProduct(uint256 _productNum) → address` (external)

Returns the product at the given index.




### `getPolicyInfo(uint256 _policyID) → address policyholder, address product, address positionContract, uint256 coverAmount, uint64 expirationBlock, uint24 price` (external)





### `getPolicyholder(uint256 _policyID) → address` (external)





### `getPolicyProduct(uint256 _policyID) → address` (external)





### `getPolicyPositionContract(uint256 _policyID) → address` (external)





### `getPolicyExpirationBlock(uint256 _policyID) → uint64` (external)





### `getPolicyCoverAmount(uint256 _policyID) → uint256` (external)





### `getPolicyPrice(uint256 _policyID) → uint24` (external)





### `listPolicies(address _policyholder) → uint256[]` (external)





### `exists(uint256 _policyID) → bool` (external)





### `policyIsActive(uint256 _policyID) → bool` (external)





### `policyHasExpired(uint256 _policyID) → bool` (external)





### `createPolicy(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _expirationBlock, uint24 _price) → uint256 policyID` (external)

Creates new ERC721 policy `tokenID` for `to`.
The caller must be a product.




### `setPolicyInfo(uint256 _policyID, address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _expirationBlock, uint24 _price)` (external)





### `burn(uint256 _tokenId)` (external)





### `updateActivePolicies(uint256[] _policyIDs)` (external)





### `activeCoverAmount() → uint256` (external)






### `ProductAdded(address product)`





### `ProductRemoved(address product)`





### `PolicyCreated(uint256 tokenID)`





### `PolicyBurned(uint256 tokenID)`





### `GovernanceTransferred(address _newGovernance)`





