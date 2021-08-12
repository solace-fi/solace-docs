---
title: Account
---

## Components

### `Account` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `isActive` , `chainId` , `account`
| CachedData | `localTransactions`, `openHistoryModal`
| Network | `activeNetwork`, `findNetworkByChainId`

Hook Dependencies:

- `useNativeTokenBalance()`
- `useWindowDimensions()`

Local Functions:

Info: Returns a component containing the user's ETH balance, address, and a button that opens the transaction history modal.