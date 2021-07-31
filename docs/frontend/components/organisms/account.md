---
title: Account
---

## Components

### `Account` (exported)

Manager Dependencies:

- **Wallet**: `isActive` , `chainId` , `account`
- **CachedData**: `localTransactions`

Hook Dependencies:

- `useNativeTokenBalance()`

Local Functions:

- `openModal()` : Show transaction history modal, disable scrolling
- `closeModal()` : Hide transaction history modal, enable scrolling

Info: Returns a component containing the user's ETH balance, address, and a button that opens the transaction history modal.