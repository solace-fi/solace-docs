---
title: MyOptions
---

## Components

### `MyOptions` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account` , `library`
| Contracts | `optionsFarming`
| Network | `activeNetwork` , `currencyDecimals`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices` , `latestBlock`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useWindowDimensions()`
- `useGetFunctionGas()`
- `useOptionsDetails()`

Contract Functions:
- `exerciseOption (_optionId: string)` : Exercises an option given an id.

Info: returns component displaying options.