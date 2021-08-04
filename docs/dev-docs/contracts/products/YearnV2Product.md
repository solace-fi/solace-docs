## `YearnV2Product`






### `constructor(address _governance, contract IPolicyManager _policyManager, contract IRegistry _registry, address _coveredPlatform, uint64 _minPeriod, uint64 _maxPeriod, uint24 _price, uint32 _maxCoverPerUserDivisor, address _quoter)` (public)





### `appraisePosition(address _policyholder, address _positionContract) → uint256 positionAmount` (public)





### `submitClaim(uint256 policyID, uint256 amountOut, uint256 deadline, bytes signature)` (external)

Submits a claim.
Can only submit one claim per policy.
Must be signed by an authorized signer.




### `setCoveredPlatform(address _coveredPlatform)` (public)

Changes the covered platform.
Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current governor.




### `name() → string` (public)

Returns the name of the product.





