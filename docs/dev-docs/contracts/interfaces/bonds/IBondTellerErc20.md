A bond teller that accepts an ERC20 as payment.

Bond tellers allow users to buy bonds. After vesting for `vestingTerm`, bonds can be redeemed for [**SOLACE**](./../../SOLACE) or [**xSOLACEV1**](./../../staking/xSOLACEV1). Payments are made in `principal` which is sent to the underwriting pool and used to back risk.

Bonds can be purchased via [`deposit()`](#deposit) or [`depositSigned()`](#depositsigned). Bonds are represented as ERC721s, can be viewed with [`bonds()`](#bonds), and redeemed with [`redeem()`](#redeem).


## Functions
### deposit
```solidity
  function deposit(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 bondID)
```
Create a bond by depositing `amount` of `principal`.
Principal will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of principal to deposit.
|`minAmountOut` | uint256 | The minimum [**SOLACE**](./../../SOLACE) or [**xSOLACEV1**](./../../staking/xSOLACEV1) out.
|`depositor` | address | The bond recipient, default msg.sender.
|`stake` | bool | True to stake, false to not stake.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`payout`| uint256 | The amount of [**SOLACE**](./../../SOLACE) or [**xSOLACEV1**](./../../staking/xSOLACEV1) in the bond.
|`bondID`| uint256 | The ID of the newly created bond.
### depositSigned
```solidity
  function depositSigned(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 payout, uint256 bondID)
```
Create a bond by depositing `amount` of `principal`.
Principal will be transferred from `depositor` using `permit`.
Note that not all ERC20s have a permit function, in which case this function will revert.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of principal to deposit.
|`minAmountOut` | uint256 | The minimum [**SOLACE**](./../../SOLACE) or [**xSOLACEV1**](./../../staking/xSOLACEV1) out.
|`depositor` | address | The bond recipient, default msg.sender.
|`stake` | bool | True to stake, false to not stake.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`payout`| uint256 | The amount of [**SOLACE**](./../../SOLACE) or [**xSOLACEV1**](./../../staking/xSOLACEV1) in the bond.
|`bondID`| uint256 | The ID of the newly created bond.
