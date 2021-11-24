A bond teller that accepts **ETH** and **WETH** as payment.

Bond tellers allow users to buy bonds. After vesting for `vestingTerm`, bonds can be redeemed for [**SOLACE**](./SOLACE) or [**xSOLACE**](./xSOLACE). Payments are made in **ETH** or **WETH** which is sent to the underwriting pool and used to back risk.

Bonds can be purchased via [`depositEth()`](#depositeth), [`depositWeth()`](#depositweth), or [`depositWethSigned()`](#depositwethsigned). Bonds are represented as ERC721s, can be viewed with [`bonds()`](#bonds), and redeemed with [`redeem()`](#redeem).


## Functions
### depositEth
```solidity
  function depositEth(
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 bondID)
```
Create a bond by depositing **ETH**.
Principal will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minAmountOut` | uint256 | The minimum **SOLACE** or **xSOLACE** out.
|`depositor` | address | The bond recipient, default msg.sender.
|`stake` | bool | True to stake, false to not stake.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`payout`| uint256 | The amount of SOLACE or xSOLACE in the bond.
|`bondID`| address | The ID of the newly created bond.
### depositWeth
```solidity
  function depositWeth(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 bondID)
```
Create a bond by depositing `amount` **WETH**.
**WETH** will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of **WETH** to deposit.
|`minAmountOut` | uint256 | The minimum **SOLACE** or **xSOLACE** out.
|`depositor` | address | The bond recipient, default msg.sender.
|`stake` | bool | True to stake, false to not stake.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`payout`| uint256 | The amount of SOLACE or xSOLACE in the bond.
|`bondID`| uint256 | The ID of the newly created bond.
### depositWethSigned
```solidity
  function depositWethSigned(
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
Create a bond by depositing `amount` **WETH**.
**WETH** will be transferred from `depositor` using `permit`.
Note that not all **WETH**s have a permit function, in which case this function will revert.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of **WETH** to deposit.
|`minAmountOut` | uint256 | The minimum **SOLACE** or **xSOLACE** out.
|`depositor` | address | The bond recipient, default msg.sender.
|`stake` | bool | True to stake, false to not stake.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`payout`| uint256 | The amount of SOLACE or xSOLACE in the bond.
|`bondID`| uint256 | The ID of the newly created bond.
### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive *ETH*.
Deposits **ETH** and creates bond.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.
Deposits **ETH** and creates bond.



