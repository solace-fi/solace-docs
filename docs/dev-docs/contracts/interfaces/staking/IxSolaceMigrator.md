Helps migrate from [**xSOLACEV1**](./../../staking/xSOLACEV1) to [**xsLocker**](./../../staking/xsLocker).


## Functions
### solace
```solidity
  function solace(
  ) external returns (address)
```
Address of the [**SOLACE**](./../../SOLACE) contract.



### xsolacev1
```solidity
  function xsolacev1(
  ) external returns (address)
```
Address of the V1 [**xSOLACE**](./../../staking/xSOLACEV1) contract.



### xsLocker
```solidity
  function xsLocker(
  ) external returns (address)
```
Address of the [**xsLocker**](./../../staking/xsLocker) contract.



### migrate
```solidity
  function migrate(
    uint256 amount,
    uint256 lockEnd
  ) external
```
Migrate from the [**xSOLACEv1**](./../../staking/xSOLACEV1) contract and create a new [**Lock**](./../../staking/xsLocker).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of [**xSOLACEv1**](./../../staking/xSOLACEV1) to migrate.
|`lockEnd` | uint256 | The timestamp that the lock will unlock.

### migrateSigned
```solidity
  function migrateSigned(
    uint256 amount,
    uint256 lockEnd,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Migrate from the [**xSOLACEv1**](./../../staking/xSOLACEV1) contract and create a new [**Lock**](./../../staking/xsLocker).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of [**xSOLACEv1**](./../../staking/xSOLACEV1) to migrate.
|`lockEnd` | uint256 | The timestamp that the lock will unlock.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

