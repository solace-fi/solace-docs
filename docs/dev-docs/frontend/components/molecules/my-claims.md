---
title: MyClaims
---

## Components

### `MyClaims` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`
| Wallet | `account` , `activeWalletConnector`
| Contracts | `claimsEscrow`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:
- `useGetClaimsDetails()`
- `useWindowDimensions()`

Contract Functions: 
- `withdrawPayout` : Calls ClaimsEscrow contract to withdraw payout.


Info: Returns a card container of the user's claims in cards.