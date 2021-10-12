


## Functions
### Troves
```solidity
  function Troves(
    address _borrower
  ) external returns (uint256 _debt, uint256 _coll, uint256 _stake, uint256 _status, uint128 _arrayIndex)
```
Returns user's trove info.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_borrower` | address | the user address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_debt`| address | trove debt amount.
|`_coll`|  | trove collateral amount in ETH.
|`_stake`|  | trove stake amount.
|`_status`|  | trove status(nonExistent, active, closed).
|`_arrayIndex`|  | trove index.
### stabilityPool
```solidity
  function stabilityPool(
  ) external returns (address _stabilityPool)
```
Returns the `Stability Pool` contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_stabilityPool`|  | `Stability Pool` address.
### lqtyStaking
```solidity
  function lqtyStaking(
  ) external returns (address _lqtyStaking)
```
Returns the `LQTYStaking` contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_lqtyStaking`|  | `LQTYStaking` address.
### lqtyToken
```solidity
  function lqtyToken(
  ) external returns (address _lqtyTokenAddress)
```
Returns the `LQTY Token` contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_lqtyTokenAddress`|  | `LQTY Token` address.
### lusdToken
```solidity
  function lusdToken(
  ) external returns (address _lqtyStaking)
```
Returns the `LUSD Token` contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_lqtyStaking`|  | `LUSD Token` address.
### getTroveStake
```solidity
  function getTroveStake(
    address _borrower
  ) external returns (uint256 _stake)
```
Returns the user's trove stake amount.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_borrower` | address | the user address.* 

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_stake`| address | stake amount.
### getTroveDebt
```solidity
  function getTroveDebt(
    address _borrower
  ) external returns (uint256 _debt)
```
Returns the user's trove debt amount.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_borrower` | address | the user address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_debt`| address | debt amount.
### getTroveColl
```solidity
  function getTroveColl(
    address _borrower
  ) external returns (uint256 _coll)
```
Returns the user's trove collateral amount.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_borrower` | address | the user address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_coll`| address | debt amount.
### totalStakes
```solidity
  function totalStakes(
  ) external returns (uint256 _tvl)
```
Returns TVL amount in troves.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_tvl`|  | tvl amount.
