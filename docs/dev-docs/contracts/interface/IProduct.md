## `IProduct`






### `governance() → address` (external)





### `newGovernance() → address` (external)





### `price() → uint24` (external)





### `minPeriod() → uint64` (external)





### `maxPeriod() → uint64` (external)





### `maxCoverAmount() → uint256` (external)





### `maxCoverPerUser() → uint256` (external)





### `maxCoverPerUserDivisor() → uint32` (external)





### `coveredPlatform() → address` (external)





### `productPolicyCount() → uint256` (external)





### `activeCoverAmount() → uint256` (external)





### `setGovernance(address _governance)` (external)





### `acceptGovernance()` (external)





### `setPrice(uint24 _price)` (external)





### `setMinPeriod(uint64 _minPeriod)` (external)





### `setMaxPeriod(uint64 _maxPeriod)` (external)





### `setCoveredPlatform(address _coveredPlatform)` (external)





### `setPolicyManager(address _policyManager)` (external)





### `appraisePosition(address _policyholder, address _positionContract) → uint256 positionAmount` (external)





### `name() → string` (external)





### `getQuote(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _blocks) → uint256` (external)





### `updateActiveCoverAmount(int256 _coverDiff)` (external)





### `buyPolicy(address _policyholder, address _positionContract, uint256 _coverAmount, uint64 _blocks) → uint256 policyID` (external)





### `updateCoverAmount(uint256 _policyID, uint256 _coverAmount)` (external)





### `extendPolicy(uint256 _policyID, uint64 _blocks)` (external)





### `cancelPolicy(uint256 _policyID)` (external)





### `updatePolicy(uint256 _policyID, uint256 _coverAmount, uint64 _blocks)` (external)






### `PolicyCreated(uint256 policyID)`





### `PolicyExtended(uint256 policyID)`





### `PolicyCanceled(uint256 policyID)`





### `PolicyUpdated(uint256 policyID)`





### `GovernanceTransferred(address _newGovernance)`





