---
title: Statistics
---

## Components

### `Statistics` (exported)

Manager Dependencies:

- **Wallet**: account, errors, chainId, initialized
- **Contracts**: master
- **CachedData**: addLocalTransactions, reload, gasPrices, tokenPositionDataInitialized, latestBlock, version

Hook Dependencies:

- `useCapitalPoolSize()`
- `useSolaceBalance()`
- `useTotalPendingRewards()`
- `usePolicyGetter()`
- `useGetTotalValueLocked()`

Contract Functions:

- **master**: claimRewards

Data Refresh:

- **[allPolicies]**: Calculate total active cover amount and total active policies from fetched policies.

Info: Returns a `BoxRow` of two `Box` components, where one displays user data, and the other displays global data.
