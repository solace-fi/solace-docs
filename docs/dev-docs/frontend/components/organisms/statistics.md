---
title: Statistics
---

## Components

### `Statistics` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account` , `initialized`
| CachedData | `addLocalTransactions` , `reload` , `tokenPosData` , `latestBlock`
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
- `useGetFunctionGas()`

Contract Functions:

- `claimRewards` : Calls master contract to claim pending rewards.

Info: Returns a [**BoxRow**](/docs/dev-docs/frontend/components/atoms/Box#boxrow-exported) of two [**Box**](/docs/dev-docs/frontend/components/atoms/Box#box-exported) components, where one displays user data, and the other displays global data.
