## `MockWETH`



Wrapped Ether v10 (WETH10) is an Ether (ETH) ERC-20 wrapper. You can `deposit` ETH and obtain a WETH10 balance which can then be operated as an ERC-20 token. You can
`withdraw` ETH from WETH10, which will then burn WETH10 token in your wallet. The amount of WETH10 token in any wallet is always identical to the
balance of ETH deposited minus the ETH withdrawn with that specific wallet.


### `DOMAIN_SEPARATOR() → bytes32` (external)



Return the DOMAIN_SEPARATOR.

### `totalSupply() → uint256` (external)



Returns the total supply of WETH10 token as the ETH held in this contract.

### `receive()` (external)



Fallback, `msg.value` of ETH sent to this contract grants caller account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to caller account.

### `deposit()` (external)



`msg.value` of ETH sent to this contract grants caller account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to caller account.

### `depositTo(address to)` (external)



`msg.value` of ETH sent to this contract grants `to` account a matching increase in WETH10 token balance.
Emits {Transfer} event to reflect WETH10 token mint of `msg.value` from `address(0)` to `to` account.

### `depositToAndCall(address to, bytes data) → bool success` (external)



`msg.value` of ETH sent to this contract grants `to` account a matching increase in WETH10 token balance,
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
For more information on {transferAndCall} format, see https://github.com/ethereum/EIPs/issues/677.

### `withdraw(uint256 value)` (external)



Burn `value` WETH10 token from caller account and withdraw matching ETH to the same.
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from caller account.
Requirements:
  - caller account must have at least `value` balance of WETH10 token.

### `withdrawTo(address payable to, uint256 value)` (external)



Burn `value` WETH10 token from caller account and withdraw matching ETH to account (`to`).
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from caller account.
Requirements:
  - caller account must have at least `value` balance of WETH10 token.

### `withdrawFrom(address from, address payable to, uint256 value)` (external)



Burn `value` WETH10 token from account (`from`) and withdraw matching ETH to account (`to`).
Emits {Approval} event to reflect reduced allowance `value` for caller account to spend from account (`from`),
unless allowance is set to `type(uint256).max`
Emits {Transfer} event to reflect WETH10 token burn of `value` to `address(0)` from account (`from`).
Requirements:
  - `from` account must have at least `value` balance of WETH10 token.
  - `from` account must have approved caller to spend at least `value` of WETH10 token, unless `from` and caller are the same account.

### `approve(address spender, uint256 value) → bool` (external)



Sets `value` as allowance of `spender` account over caller account's WETH10 token.
Emits {Approval} event.
Returns boolean value indicating whether operation succeeded.

### `approveAndCall(address spender, uint256 value, bytes data) → bool` (external)



Sets `value` as allowance of `spender` account over caller account's WETH10 token,
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
Emits {Approval} event.
Returns boolean value indicating whether operation succeeded.
For more information on {approveAndCall} format, see https://github.com/ethereum/EIPs/issues/677.

### `permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)` (external)



Sets `value` as allowance of `spender` account over `owner` account's WETH10 token, given `owner` account's signed approval.
Emits {Approval} event.
Requirements:
  - `deadline` must be timestamp in future.
  - `v`, `r` and `s` must be valid `secp256k1` signature from `owner` account over EIP712-formatted function arguments.
  - the signature must use `owner` account's current nonce (see {nonces}).
  - the signer cannot be `address(0)` and must be `owner` account.
For more information on signature format, see https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section].
WETH10 token implementation adapted from https://github.com/albertocuestacanada/ERC20Permit/blob/master/contracts/ERC20Permit.sol.

### `transfer(address to, uint256 value) → bool` (external)



Moves `value` WETH10 token from caller's account to account (`to`).
A transfer to `address(0)` triggers an ETH withdraw matching the sent WETH10 token in favor of caller.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - caller account must have at least `value` WETH10 token.

### `transferFrom(address from, address to, uint256 value) → bool` (external)



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

### `transferAndCall(address to, uint256 value, bytes data) → bool` (external)



Moves `value` WETH10 token from caller's account to account (`to`),
after which a call is executed to an ERC677-compliant contract with the `data` parameter.
A transfer to `address(0)` triggers an ETH withdraw matching the sent WETH10 token in favor of caller.
Emits {Transfer} event.
Returns boolean value indicating whether operation succeeded.
Requirements:
  - caller account must have at least `value` WETH10 token.
For more information on {transferAndCall} format, see https://github.com/ethereum/EIPs/issues/677.


