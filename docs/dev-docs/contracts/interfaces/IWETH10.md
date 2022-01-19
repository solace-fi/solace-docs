
Wrapped Ether v10 (WETH10) is an Ether (ETH) ERC-20 wrapper. You can `deposit` ETH and obtain a WETH10 balance which can then be operated as an ERC-20 token. You can
`withdraw` ETH from WETH10, which will then burn WETH10 token in your wallet. The amount of WETH10 token in any wallet is always identical to the
balance of ETH deposited minus the ETH withdrawn with that specific wallet.

## Functions
### flashMinted
```solidity
  function flashMinted(
  ) external returns (uint256)
```

Returns current amount of flash-minted WETH10 token.


### deposit
```solidity
  function deposit(
  ) external
```

`msg.value` of ETH sent to this contract grants caller account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to caller account.


### depositTo
```solidity
  function depositTo(
  ) external
```

`msg.value` of ETH sent to this contract grants `to` account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to `to` account.


### withdraw
```solidity
  function withdraw(
  ) external
```

Burn `value` WETH10 token from caller account and withdraw matching ETH to the same.
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from caller account.
Requirements:
  - caller account must have at least `value` balance of WETH10 token.


### withdrawTo
```solidity
  function withdrawTo(
  ) external
```

Burn `value` WETH10 token from caller account and withdraw matching ETH to account (`to`).
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from caller account.
Requirements:
  - caller account must have at least `value` balance of WETH10 token.


### withdrawFrom
```solidity
  function withdrawFrom(
  ) external
```

Burn `value` WETH10 token from account (`from`) and withdraw matching ETH to account (`to`).
Emits {Approval} event to reflect reduced allowance `value` for caller account to spend from account (`from`),
unless allowance is set to `type(uint256).max`
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from account (`from`).
Requirements:
  - `from` account must have at least `value` balance of WETH10 token.
  - `from` account must have approved caller to spend at least `value` of WETH10 token, unless `from` and caller are the same account.


### depositToAndCall
```solidity
  function depositToAndCall(
  ) external returns (bool)
```

`msg.value` of ETH sent to this contract grants `to` account a matching increase in WETH10 token balance,
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
For more information on {transferAndCall} format, see https://github.com/ethereum/EIPs/issues/677.


### approveAndCall
```solidity
  function approveAndCall(
  ) external returns (bool)
```

Sets `value` as allowance of `spender` account over caller account's WETH10 token,
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
Emits {Approval} event.
Returns boolean value indicating whether operation succeeded.
For more information on {approveAndCall} format, see https://github.com/ethereum/EIPs/issues/677.


### transferAndCall
```solidity
  function transferAndCall(
  ) external returns (bool)
```

Moves `value` WETH10 token from caller's account to account (`to`),
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
A transfer to `address(0)` triggers an ETH withdraw matching the sent WETH10 token in favor of caller.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - caller account must have at least `value` WETH10 token.
For more information on {transferAndCall} format, see https://github.com/ethereum/EIPs/issues/677.


