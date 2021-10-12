


## Functions
### getETH
```solidity
  function getETH(
  ) external returns (uint256)
```
@notice
Returns the total amount of ETH held by the pool, accounted in an internal variable instead of `balance`,
to exclude edge cases like ETH received from a self-destruct.



### getTotalLUSDDeposits
```solidity
  function getTotalLUSDDeposits(
  ) external returns (uint256)
```
Returns LUSD held in the pool. Changes when users deposit/withdraw, and when Trove debt is offset.



### getCompoundedLUSDDeposit
```solidity
  function getCompoundedLUSDDeposit(
    address _depositor
  ) external returns (uint256)
```
Return the user's compounded deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | the user address

### getDepositorLQTYGain
```solidity
  function getDepositorLQTYGain(
    address _depositor
  ) external returns (uint256)
```

Calculate the LQTY gain earned by a deposit since its last snapshots were taken.
If not tagged with a front end, the depositor gets a 100% cut of what their deposit earned.
Otherwise, their cut of the deposit's earnings is equal to the kickbackRate, set by the front end through
which they made their deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | the user address

