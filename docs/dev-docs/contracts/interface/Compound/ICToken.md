Abstract base for CTokens


## Functions
### borrow
```solidity
  function borrow(
    uint256 borrowAmount
  ) external returns (uint256 error)
```
Sender borrows assets from the protocol to their own address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`borrowAmount` | uint256 | The amount of the underlying asset to borrow.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`error`| uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details).
### redeem
```solidity
  function redeem(
    uint256 redeemTokens
  ) external returns (uint256 error)
```
Sender redeems cTokens in exchange for the underlying asset.

Accrues interest whether or not the operation succeeds, unless reverted.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`redeemTokens` | uint256 | The number of cTokens to redeem into underlying.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`error`| uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details).
### exchangeRateStored
```solidity
  function exchangeRateStored(
  ) external returns (uint256 rate)
```
Calculates the exchange rate from the underlying to the CToken.

This function does not accrue interest before calculating the exchange rate.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`rate`|  | Calculated exchange rate scaled by 1e18.
### underlying
```solidity
  function underlying(
  ) external returns (address)
```
Underlying asset for this CToken.
Does not exist on CETH.



### balanceOfUnderlying
```solidity
  function balanceOfUnderlying(
    address owner
  ) external returns (uint256 ubalance)
```
Get the underlying balance of the `owner`.

This also accrues interest in a transaction.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`owner` | address | The address of the account to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`ubalance`| address | The amount of underlying owned by `owner`.
