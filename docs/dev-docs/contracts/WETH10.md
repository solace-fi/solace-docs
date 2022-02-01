
Wrapped Ether v10 (WETH10) is an Ether (ETH) ERC-20 wrapper. You can `deposit` ETH and obtain a WETH10 balance which can then be operated as an ERC-20 token. You can
`withdraw` ETH from WETH10, which will then burn WETH10 token in your wallet. The amount of WETH10 token in any wallet is always identical to the
balance of ETH deposited minus the ETH withdrawn with that specific wallet.

## Functions
### DOMAIN_SEPARATOR
```solidity
  function DOMAIN_SEPARATOR(
  ) external returns (bytes32)
```

Return the DOMAIN_SEPARATOR.


### totalSupply
```solidity
  function totalSupply(
  ) external returns (uint256)
```

Returns the total supply of WETH10 token as the ETH held in this contract.


### receive
```solidity
  function receive(
  ) external
```

Fallback, `msg.value` of ETH sent to this contract grants caller account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to caller account.


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


### depositToAndCall
```solidity
  function depositToAndCall(
  ) external returns (bool success)
```

`msg.value` of ETH sent to this contract grants `to` account a matching increase in WETH10 token balance,
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
For more information on {transferAndCall} format, see https://github.com/ethereum/EIPs/issues/677.


### maxFlashLoan
```solidity
  function maxFlashLoan(
  ) external returns (uint256)
```

Return the amount of WETH10 token that can be flash-lent.


### flashFee
```solidity
  function flashFee(
  ) external returns (uint256)
```

Return the fee (zero) for flash lending an amount of WETH10 token.


### flashLoan
```solidity
  function flashLoan(
  ) external returns (bool)
```

Flash lends `value` WETH10 token to the receiver address.
By the end of the transaction, `value` WETH10 token will be burned from the receiver.
The flash-minted WETH10 token is not backed by real ETH, but can be withdrawn as such up to the ETH balance of this contract.
Arbitrary data can be passed as a bytes calldata parameter.
Emits {Approval} event to reflect reduced allowance `value` for this contract to spend from receiver account (`receiver`),
unless allowance is set to `type(uint256).max`
Emits two {Transfer} events for minting and burning of the flash-minted amount.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - `value` must be less or equal to type(uint112).max.
  - The total of all flash loans in a tx must be less or equal to type(uint112).max.


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


### approve
```solidity
  function approve(
  ) external returns (bool)
```

Sets `value` as allowance of `spender` account over caller account's WETH10 token.
Emits {Approval} event.
Returns boolean value indicating whether operation succeeded.


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


### permit
```solidity
  function permit(
  ) external
```

Sets `value` as allowance of `spender` account over `owner` account's WETH10 token, given `owner` account's signed approval.
Emits {Approval} event.
Requirements:
  - `deadline` must be timestamp in future.
  - `v`, `r` and `s` must be valid `secp256k1` signature from `owner` account over EIP712-formatted function arguments.
  - the signature must use `owner` account's current nonce (see {nonces}).
  - the signer cannot be `address(0)` and must be `owner` account.
For more information on signature format, see https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section].
WETH10 token implementation adapted from https://github.com/albertocuestacanada/ERC20Permit/blob/master/contracts/ERC20Permit.sol.


### transfer
```solidity
  function transfer(
  ) external returns (bool)
```

Moves `value` WETH10 token from caller's account to account (`to`).
A transfer to `address(0)` triggers an ETH withdraw matching the sent WETH10 token in favor of caller.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - caller account must have at least `value` WETH10 token.


### transferFrom
```solidity
  function transferFrom(
  ) external returns (bool)
```

Moves `value` WETH10 token from account (`from`) to account (`to`) using allowance mechanism.
`value` is then deducted from caller account's allowance, unless set to `type(uint256).max`.
A transfer to `address(0)` triggers an ETH withdraw matching the sent WETH10 token in favor of caller.
Emits {Approval} event to reflect reduced allowance `value` for caller account to spend from account (`from`),
unless allowance is set to `type(uint256).max`
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - `from` account must have at least `value` balance of WETH10 token.
  - `from` account must have approved caller to spend at least `value` of WETH10 token, unless `from` and caller are the same account.


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


