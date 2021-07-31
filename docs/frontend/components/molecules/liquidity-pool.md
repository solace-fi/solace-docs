---
title: LiquidityPool
---

## Props

### `LiquidityPoolProps`
- **openModal (func: FunctionName, modalTitle: string)**: Set visibility of modal and modal title

## Components

### `LiquidityPool` (exported)

Props Depenencies:

- **LiquidityPoolProps**

Manager Dependencies:
- **Wallet**: account, errors
- **Contracts**: lpFarm

Hook Dependencies:
- `useUserStakedValue()`
- `useRewardsPerDay()`
- `useUserRewardsPerDay()`
- `useUserPendingRewards()`
- `usePoolStakedValue()`

Info: Returns a component containing a table containing the pool's information, as well as its title.
