---
title: "Enums"
---

### `TransactionCondition` (exported)

```
TransactionCondition {
  SUCCESS = 'Complete',
  FAILURE = 'Incomplete',
  PENDING = 'Pending',
  CANCELLED = 'Cancelled',
}
```
### `Error` (exported)

```
Error {
  UNSUPPORTED_NETWORK = 'UN',
  NO_PROVIDER = 'NP',
  UNKNOWN_WALLET_ERROR = 'UWE',
  NO_ACCESS = 'NA',
  WALLET_NETWORK_UNSYNC = 'WNU',
}
```
### `FunctionName` (exported)

```
FunctionName {
  APPROVE = 'Approve',
  BUY_POLICY = 'BuyPolicy',
  CANCEL_POLICY = 'CancelPolicy',
  DEPOSIT_ETH = 'DepositEth',
  DEPOSIT_CP = 'DepositCp',
  DEPOSIT_SIGNED = 'DepositLpSigned',
  EXTEND_POLICY_PERIOD = 'ExtendPolicy',
  UPDATE_POLICY_AMOUNT = 'UpdateCoverAmount',
  UPDATE_POLICY = 'UpdatePolicy',
  SUBMIT_CLAIM = 'SubmitClaim',
  WITHDRAW_ETH = 'WithdrawEth',
  WITHDRAW_CP = 'WithdrawCp',
  WITHDRAW_LP = 'WithdrawLp',
  WITHDRAW_CLAIMS_PAYOUT = 'WithdrawClaimsPayout',
  WITHDRAW_REWARDS = 'WithdrawRewards',
  MULTI_CALL = 'Multicall',
  START_COOLDOWN = 'StartCooldown',
  STOP_COOLDOWN = 'StopCooldown',
}
```
### `ExplorerscanApi` (exported)

```
ExplorerscanApi {
  TX = 'tx',
  BLOCK = 'block',
  ADDRESS = 'address',
}
```
### `Unit` (exported)

```
Unit {
  ETH = 'ETH',
  MATIC = 'MATIC',
  SCP = 'Solace CP Token',
  SOLACE = 'SOLACE',
  LP = 'LP Token',
  ID = 'ID',
  _ = 'Unknown',
}
```
### `PolicyState` (exported)

```
PolicyState {
  ACTIVE = 'Active',
  EXPIRED = 'Expired',
}
```
### `ProductName` (exported)

```
ProductName {
  COMPOUND = 'Compound',
  AAVE = 'Aave',
  WAAVE = 'Waave',
}
```
