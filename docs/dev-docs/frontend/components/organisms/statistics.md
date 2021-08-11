---
title: Statistics
---

## Components

### `Statistics` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `errors` , `chainId` , `initialized`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices` , `tokenPositionDataInitialized` , `latestBlock` , `version`
| Contracts | `master`

Hook Dependencies:

- `useCapitalPoolSize()`
- `useSolaceBalance()`
- `useTotalPendingRewards()`
- `usePolicyGetter()`
- `useGetTotalValueLocked()`

Contract Functions:

- `claimRewards` : Calls master contract to claim pending rewards.

Data Refresh:

- [ `allPolicies` ]: Calculate total active cover amount and total active policies from fetched policies.

Info: Returns a `BoxRow` of two `Box` components, where one displays user data, and the other displays global data.
