


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```




### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```




### price
```solidity
  function price(
  ) external returns (uint24)
```




### minPeriod
```solidity
  function minPeriod(
  ) external returns (uint40)
```




### maxPeriod
```solidity
  function maxPeriod(
  ) external returns (uint40)
```




### maxCoverAmount
```solidity
  function maxCoverAmount(
  ) external returns (uint256)
```




### maxCoverPerUser
```solidity
  function maxCoverPerUser(
  ) external returns (uint256)
```




### maxCoverPerUserDivisor
```solidity
  function maxCoverPerUserDivisor(
  ) external returns (uint32)
```




### coveredPlatform
```solidity
  function coveredPlatform(
  ) external returns (address)
```




### productPolicyCount
```solidity
  function productPolicyCount(
  ) external returns (uint256)
```




### activeCoverAmount
```solidity
  function activeCoverAmount(
  ) external returns (uint256)
```




### setGovernance
```solidity
  function setGovernance(
  ) external
```




### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```




### setPrice
```solidity
  function setPrice(
  ) external
```




### setMinPeriod
```solidity
  function setMinPeriod(
  ) external
```




### setMaxPeriod
```solidity
  function setMaxPeriod(
  ) external
```




### setCoveredPlatform
```solidity
  function setCoveredPlatform(
  ) external
```




### setPolicyManager
```solidity
  function setPolicyManager(
  ) external
```




### appraisePosition
```solidity
  function appraisePosition(
  ) external returns (uint256 positionAmount)
```




### name
```solidity
  function name(
  ) external returns (string)
```




### getQuote
```solidity
  function getQuote(
  ) external returns (uint256)
```




### updateActiveCoverAmount
```solidity
  function updateActiveCoverAmount(
  ) external
```




### buyPolicy
```solidity
  function buyPolicy(
  ) external returns (uint256 policyID)
```




### updateCoverAmount
```solidity
  function updateCoverAmount(
  ) external
```




### extendPolicy
```solidity
  function extendPolicy(
  ) external
```




### cancelPolicy
```solidity
  function cancelPolicy(
  ) external
```




### updatePolicy
```solidity
  function updatePolicy(
  ) external
```




## Events
### PolicyCreated
```solidity
  event PolicyCreated(
  )
```



### PolicyExtended
```solidity
  event PolicyExtended(
  )
```



### PolicyCanceled
```solidity
  event PolicyCanceled(
  )
```



### PolicyUpdated
```solidity
  event PolicyUpdated(
  )
```



### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



