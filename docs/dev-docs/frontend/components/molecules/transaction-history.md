---
title: TransactionHistory
---

## Components

### `Scrollable`

- **Additional Styles**: CustomScrollbar

### `TransactionHistory` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`
| CachedData | `localTransactions`
| Contracts | `contractSources`

Hook Dependencies:
- `useTransactionDetails()`
- `useWindowDimensions()`

Info: Returns a table containing a user's transaction history as well as their pending local transactions.