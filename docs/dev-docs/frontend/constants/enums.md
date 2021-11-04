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

### `SystemNotice` (exported)
```
SystemNotice {
  LOSS_EVENT_DETECTED = 'LED',
  AUDIT_NOTICE = 'AN',
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
  DEPOSIT_LP_SIGNED = 'DepositLpSigned',
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
  DEPOSIT_POLICY_SIGNED = 'DepositPolicySigned',
  DEPOSIT_POLICY_SIGNED_MULTI = 'DepositPolicySignedMulti',
  WITHDRAW_POLICY = 'WithdrawPolicy',
  WITHDRAW_POLICY_MULTI = 'WithdrawPolicyMulti',

  EXERCISE_OPTION = 'ExerciseOption',
  FARM_OPTION_MULTI = 'FarmOptionMulti',
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
  POLICY = 'Policy',
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
  AAVE = 'Aave',
  COMPOUND = 'Compound',
  CURVE = 'Curve',
  LIQUITY = 'Liquity',
  SUSHISWAP = 'Sushiswap',
  UNISWAP_V2 = 'UniswapV2',
  UNISWAP_V3 = 'UniswapV3',
  WAAVE = 'Waave',
  YEARN = 'Yearn',
}
```

### `PositionType` (exported)

```
PositionType {
  TOKEN = 'token',
  LQTY = 'liquity',
  OTHER = 'other',
}
```