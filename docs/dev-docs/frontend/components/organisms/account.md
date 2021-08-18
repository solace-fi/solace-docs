---
title: Account
---

## Components

### `UserAccount` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| Network | `activeNetwork`

Hook Dependencies:

- `useNativeTokenBalance()`

Local Functions:

Info: Returns a component containing the user's ETH balance, address.

### `Account` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| CachedData | `localTransactions`

Local Functions:

Info: Returns a component containing `UserAccount` , `NetworkConnectButton` , `WalletConnectButton` , and `TransactionHistoryButton` in that order.