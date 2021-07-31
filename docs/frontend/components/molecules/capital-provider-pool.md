---
title: CapitalProviderPool
---

## Props

### `CapitalProviderPoolProps`
- **openModal (func: FunctionName, modalTitle: string)**: Set visibility of modal and modal title

## Components

### `CapitalProviderPool` (exported)

Props Dependencies:
- **CapitalProviderPoolProps**

Manager Dependencies:
- **Wallet**: account, errors
- **Contracts**: cpFarm

Hook Dependencies:
- `useUserStakedValue()`
- `useRewardsPerDay()`
- `useUserRewardsPerDay()`
- `useUserPendingRewards()`
- `usePoolStakedValue()`

Info: Returns a component containing a table containing the pool's information, as well as its title.