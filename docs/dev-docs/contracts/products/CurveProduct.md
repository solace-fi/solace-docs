## `CurveProduct`






### `constructor(address _governance, contract IPolicyManager _policyManager, contract IRegistry _registry, address _coveredPlatform, uint64 _minPeriod, uint64 _maxPeriod, uint24 _price, uint32 _maxCoverPerUserDivisor, address _quoter)` (public)





### `appraisePosition(address _policyholder, address _positionContract) → uint256 positionAmount` (public)





### `setCoveredPlatform(address _coveredPlatform)` (public)

Changes the covered platform.
Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current governor.




### `verifyPool(address _poolOrToken) → contract IERC20, contract ICurvePool` (internal)

Given the address of either the pool or the token, returns the token and the pool.
Throws if not a valid pool or token.




### `name() → string` (public)

Returns the name of the product.





