---
title: LiquidityPool
---

## Props

### `LiquidityPoolProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openModal` | ( func: FunctionName, modalTitle: string ) => void | Set modal visibility, functionality, and title.

## Components

### `LiquidityPool` (exported)

Props Depenencies:

- `LiquidityPoolProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `errors`
| Contracts | `lpFarm`
| Network | `currencyDecimals`

Hook Dependencies:
- `useUserStakedValue()`
- `useRewardsPerDay()`
- `useUserRewardsPerDay()`
- `useUserPendingRewards()`
- `usePoolStakedValue()`
- `useWindowDimensions()`

Info: Returns a component containing a table containing the pool's information, as well as its title.
