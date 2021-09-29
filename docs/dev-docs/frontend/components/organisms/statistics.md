---
title: Statistics
---

## Components

### `Statistics` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`
| Wallet | `account` , `initialized`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices` , `tokenPositionData` , `latestBlock`
| Contracts | `master`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useCapitalPoolSize()`
- `useSolaceBalance()`
- `useTotalPendingRewards()`
- `usePolicyGetter()`
- `useGetTotalValueLocked()`
- `useWindowDimensions()`
- `useGasConfig()`

Contract Functions:

- `claimRewards` : Calls master contract to claim pending rewards.

Data Refresh:

- [ `allPolicies` ]: Calculate total active cover amount and total active policies from fetched policies.

Info: Returns a `BoxRow` of two `Box` components, where one displays user data, and the other displays global data.
