<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/staking/xSOLACEV1.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

V1 of the [**SOLACE**](./../SOLACE) staking contract.

Users can stake their [**SOLACE**](./../SOLACE) and receive **xSOLACE**. **xSOLACE** is designed to be a safe up-only contract that allows users to enter or leave at any time. The value of **xSOLACE** relative to [**SOLACE**](./../SOLACE) will increase when [**SOLACE**](./../SOLACE) is sent to this contract, namely from premiums from coverage polices.

Note that xSOLACEV1 was deprecated for the [new staking system](./xSOLACE).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address solace_
  ) public
```
Constructs the **xSOLACE** Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`solace_` | address | Address of the [**SOLACE**](./../SOLACE) contract.

### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
Address of the [**SOLACE**](./../SOLACE) contract.



### solaceToXSolace
```solidity
  function solaceToXSolace(
    uint256 amountSolace
  ) public returns (uint256 amountXSolace)
```
Determines the current value in **xSOLACE** for an amount of [**SOLACE**](./../SOLACE).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountSolace` | uint256 | The amount of [**SOLACE**](./../SOLACE).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| uint256 | The amount of **xSOLACE**.
### xSolaceToSolace
```solidity
  function xSolaceToSolace(
    uint256 amountXSolace
  ) public returns (uint256 amountSolace)
```
Determines the current value in [**SOLACE**](./../SOLACE) for an amount of **xSOLACE**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountXSolace` | uint256 | The amount of **xSOLACE**.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| uint256 | The amount of [**SOLACE**](./../SOLACE).
### stake
```solidity
  function stake(
    uint256 amountSolace
  ) external returns (uint256 amountXSolace)
```
Allows a user to stake [**SOLACE**](./../SOLACE).
Shares of the pool (xSOLACE) are minted to msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountSolace` | uint256 | Amount of [**SOLACE**](./../SOLACE) to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| uint256 | The amount of **xSOLACE** minted.
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
Allows a user to stake [**SOLACE**](./../SOLACE).
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
|`amountXSolace`| uint256 | The amount of **xSOLACE** minted.
### unstake
```solidity
  function unstake(
    uint256 amountXSolace
  ) external returns (uint256 amountSolace)
```
Allows a user to unstake **xSOLACE**.
Burns **xSOLACE** tokens and transfers [**SOLACE**](./../SOLACE) to msg.sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountXSolace` | uint256 | Amount of **xSOLACE**.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| uint256 | Amount of [**SOLACE**](./../SOLACE) returned.
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
Handles minting of **xSOLACE** during deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amountSolace` | uint256 | The [**SOLACE**](./../SOLACE) deposit amount.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountXSolace`| uint256 | The amount of **xSOLACE** minted.
### _unstake
```solidity
  function _unstake(
    address depositor,
    uint256 amountXSolace
  ) internal returns (uint256 amountSolace)
```
Handles burning of **xSOLACE** during deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | address | The depositing user.
|`amountXSolace` | uint256 | The **xSOLACE** deposit amount.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountSolace`| uint256 | The amount of [**SOLACE**](./../SOLACE) minted.
