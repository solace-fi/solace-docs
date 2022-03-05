


## Functions
### compute
```solidity
  function compute(
    struct IncentiveKey key
  ) external returns (bytes32 incentiveId)
```
Calculate the key for a staking incentive


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`key` | struct IncentiveKey | The components used to compute the incentive identifier

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`incentiveId`| struct IncentiveKey | The identifier for the incentive
