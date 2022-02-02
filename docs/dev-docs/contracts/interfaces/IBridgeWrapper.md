Facilitates cross chain apps by wrapping and unwrapping bridged tokens.

Users will start by bridging [**SOLACE**](./../SOLACE) from mainnet to altnets. The bridge operates the token contract on the altnet, referred to as **Bridged SOLACE** or **bSOLACE**. This contract must be used to 1:1 convert **bSOLACE** to [**SOLACE**](./../SOLACE) before it can be used.

Users can send [**SOLACE**](./../SOLACE) back to mainnet by converting it to **bSOLACE** then using the bridge. This conversion will fail if there is insufficient bridge liquidity. The user will receive [**SOLACE**](./../SOLACE) on mainnet, no unwrapping is required.

By convention we say that **bSOLACE** is wrapped and [**SOLACE**](./../SOLACE) is unwrapped.


## Functions
### solace
```solidity
  function solace(
  ) external returns (address)
```
[**SOLACE**](./../../SOLACE) token.



### bsolace
```solidity
  function bsolace(
  ) external returns (address)
```
**bSOLACE** token.



### bsolaceToSolace
```solidity
  function bsolaceToSolace(
    uint256 amount,
    address receiver
  ) external
```
Converts **bSOLACE** to [**SOLACE**](./../SOLACE).

Uses ERC20 approve-transfer.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of **bSOLACE** to convert.
|`receiver` | address | User that will receive [**SOLACE**](./../SOLACE).

### solaceToBSolace
```solidity
  function solaceToBSolace(
    uint256 amount,
    address receiver
  ) external
```
Converts [**SOLACE**](./../SOLACE) to **bSOLACE**.
This conversion will fail if there is insufficient bridge liquidity.

Uses ERC20 approve-transfer.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of [**SOLACE**](./../SOLACE) to convert.
|`receiver` | address | User that will receive **bSOLACE**.

### solaceToBSolaceSigned
```solidity
  function solaceToBSolaceSigned(
    uint256 amount,
    address receiver,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Converts [**SOLACE**](./../SOLACE) to **bSOLACE**.
This conversion will fail if there is insufficient bridge liquidity.

Uses ERC20 permit-transfer.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of [**SOLACE**](./../SOLACE) to convert.
|`receiver` | address | User that will receive **bSOLACE**.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

## Events
### Unwrapped
```solidity
  event Unwrapped(
  )
```
Emitted when **bSOLACE** is converted to [**SOLACE**](./../SOLACE).


### Wrapped
```solidity
  event Wrapped(
  )
```
Emitted when [**SOLACE**](./../SOLACE) is converted to **bSOLACE**.


