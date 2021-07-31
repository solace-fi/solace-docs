---
title: TransactionHistory
---

## Components

### `Scrollable`

- **Additional Styles**: CustomScrollbar

### `TransactionHistory` (exported)

Manager Dependencies:
- **Wallet**: `chainId`
- **CachedData**: `localTransactions`
- **Contracts**: `contractSources`

Hook Dependencies:
- `useTransactionDetails`

Info: Returns a table containing a user's transaction history as well as their pending local transactions.