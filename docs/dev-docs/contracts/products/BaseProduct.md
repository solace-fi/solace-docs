## `BaseProduct`

To be inherited by individual Product contracts.




### `constructor(address _governance, contract IPolicyManager _policyManager, contract IRegistry _registry, address _coveredPlatform, uint64 _minPeriod, uint64 _maxPeriod, uint24 _price, uint32 _maxCoverPerUserDivisor)` (internal)





### `setGovernance(address _governance)` (external)

Allows governance to be transferred to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setPrice(uint24 _price)` (external)

Sets the price for this product




### `setMinPeriod(uint64 _minPeriod)` (external)

Sets the minimum number of blocks a policy can be purchased for




### `setMaxPeriod(uint64 _maxPeriod)` (external)

Sets the maximum number of blocks a policy can be purchased for




### `addSigner(address _signer)` (external)

Adds a new signer that can authorize claims.
Can only be called by the current governor.




### `removeSigner(address _signer)` (external)

Removes a signer.
Can only be called by the current governor.




### `setPaused(bool _pause)` (external)

Pauses or unpauses buying and extending policies.
Cancelling policies and submitting claims are unaffected by pause.
Can only be called by the current governor.


Used for security and to gracefully phase out old products.

### `setCoveredPlatform(address _coveredPlatform)` (public)

Changes the covered platform.
Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current governor.




### `setPolicyManager(address _policyManager)` (external)

Changes the policy manager.
Can only be called by the current governor.




### `appraisePosition(address _policyholder, address _positionContract) → uint256 positionAmount` (public)

@notice
 Provide the user's total position in the product's protocol.
 This total should be denominated in eth.
@dev
 Every product will have a different mechanism to read and determine
 a user's total position in that product's protocol. This method will
 only be implemented in the inheriting product contracts




### `getQuote(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _blocks) → uint256` (external)

@notice
 Provide a premium quote.




### `updateActiveCoverAmount(int256 _coverDiff)` (external)

Updates the product's book-keeping variables.




### `buyPolicy(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _blocks) → uint256 policyID` (external)

@notice
 Purchase and deploy a policy on the behalf of the policyholder




### `updateCoverAmount(uint256 _policyID, uint256 _coverAmount)` (external)

@notice
 Increase or decrease the cover amount for the policy




### `extendPolicy(uint256 _policyID, uint64 _blocks)` (external)

@notice
 Extend a policy contract




### `updatePolicy(uint256 _policyID, uint256 _newCoverAmount, uint64 _newExtension)` (external)

@notice
 Update an existing policy contract




### `cancelPolicy(uint256 _policyID)` (external)

@notice
 Cancel and destroy a policy.




### `maxCoverAmount() → uint256` (public)





### `maxCoverPerUser() → uint256` (external)





### `add(uint256 _a, int256 _b) → uint256 _c` (internal)

Adds two numbers.




### `min(uint256 a, uint256 b) → uint256` (internal)






### `SignerAdded(address _signer)`





### `SignerRemoved(address _signer)`





### `ClaimSubmitted(uint256 policyID)`





