The **SOLACE** staking contract.

Users can stake their **SOLACE** and receive **xSOLACE**. **xSOLACE** is designed to be a safe up-only contract that allows users to enter or leave at any time. The value of **xSOLACE** relative to **SOLACE** will increase when **SOLACE** is sent to this contract, namely from premiums from coverage polices.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address solace_
  ) public
```
Constructs the xSOLACE Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`solace_` | address | Address of the **SOLACE** contract.

### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
native solace token



### solaceToXSolace
```solidity
  function solaceToXSolace(
    uint256 amountSolace
  ) public returns (uint256 amountXSolace)
```
Determines the current value in xsolace for an amount of solace.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountSolace` | uint256 | The amount of solace.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| uint256 | The amount of xsolace.
### xSolaceToSolace
```solidity
  function xSolaceToSolace(
    uint256 amountXSolace
  ) public returns (uint256 amountSolace)
```
Determines the current value in solace for an amount of xsolace.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountXSolace` | uint256 | The amount of xsolace.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| uint256 | The amount of solace.
### stake
```solidity
  function stake(
    uint256 amountSolace
  ) external returns (uint256 amountXSolace)
```
Allows a user to stake **SOLACE**.
Shares of the pool (xSOLACE) are minted to msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountSolace` | uint256 | Amount of solace to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| uint256 | The amount of xsolace minted.
### stakeSigned
```solidity
  function stakeSigned(
    address depositor,
    uint256 amountSolace,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 amountXSolace)
```
Allows a user to stake **SOLACE**.
Shares of the pool (xSOLACE) are minted to msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amountSolace` | uint256 | The deposit amount.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| address | The amount of xsolace minted.
### unstake
```solidity
  function unstake(
    uint256 amountXSolace
  ) external returns (uint256 amountSolace)
```
Allows a user to unstake **xSOLACE**.
Burns **xSOLACE** tokens and transfers **SOLACE** to msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountXSolace` | uint256 | Amount of xSOLACE.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| uint256 | Amount of SOLACE returned.
### burn
```solidity
  function burn(
    uint256 amount
  ) external
```
Burns **xSOLACE** from msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount to burn.

### _stake
```solidity
  function _stake(
    address depositor,
    uint256 amountSolace
  ) internal returns (uint256 amountXSolace)
```
Handles minting of xsolace during deposit.
Called by [`depositSolace()`](#depositsolace) and [`depositSolaceSigned()`](#depositsolacesigned).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amountSolace` | uint256 | The solace deposit amount.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| address | The amount of xsolace minted.
### _unstake
```solidity
  function _unstake(
    address depositor,
    uint256 amountXSolace
  ) internal returns (uint256 amountSolace)
```
Handles burning of xsolace during deposit.
Called by [`depositXSolace()`](#depositxsolace) and [`depositXSolaceSigned()`](#depositxsolacesigned).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amountXSolace` | uint256 | The xsolace deposit amount.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| address | The amount of solace minted.
