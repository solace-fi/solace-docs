## `MockProduct`

Mock product for testing purposes




### `constructor(address _governance, contract IPolicyManager _policyManager, contract IRegistry _registry, address _coveredPlatform, uint64 _minPeriod, uint64 _maxPeriod, uint24 _price, uint32 _maxCoverPerUserDivisor)` (public)





### `appraisePosition(address _buyer, address _positionContract) → uint256 positionAmount` (public)

@notice
 Provide the user's total position in the product's protocol.
 This total should be denominated in eth.
@dev
 Every product will have a different mechanism to read and determine
 a user's total position in that product's protocol. This method will
 only be implemented in the inheriting product contracts




### `setPositionValue(uint256 _value)` (external)





### `setPolicyExpiration(uint256 _policyID, uint64 _expirationBlock)` (external)





### `_buyPolicy(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _blocks) → uint256 policyID` (external)





### `name() → string` (public)

Returns the name of the product.





