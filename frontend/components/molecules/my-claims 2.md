---
title: MyClaims
---

## Components

### `MyClaims` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account`
| Contracts | `claimsEscrow`
| CachedData | `addLocalTransactions` , `reload`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:
- `useGetClaimsDetails()`
- `useWindowDimensions()`
- `useGetFunctionGas()`

Contract Functions: 
- `withdrawPayout` : Calls ClaimsEscrow contract to withdraw payout.


Info: Returns a card container of the user's claims in cards.