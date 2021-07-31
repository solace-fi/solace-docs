---
title: MyClaims
---

## Components

### `MyClaims` (exported)

Manager Dependencies:
- **Wallet**: account, errors, chainId
- **Contracts**: claimsEscrow
- **CachedData**: addLocalTransactions, reload, gasPrices

Hook Dependencies:
- `useToasts()`
- `useGetClaimsDetails()`

Contract Functions: 
- **claimsEscrow**: withdrawClaimsPayout

Info: Returns a card container of the user's claims in cards.