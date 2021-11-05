---
title: SptPool
---

## Props

### `SptPoolProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openModal` | ( func: [**FunctionName**](/docs/dev-docs/frontend/constants/enums#functionname-exported), modalTitle: string, farmName: string ) => void | Set modal visibility, functionality, and title.

## Components

### `SptPool` (exported)

Props Depenencies:

- **SptPoolProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account`
| Contracts | `sptFarm`
| Network | `currencyDecimals`

Hook Dependencies:
- `useUserStakedValue()`
- `useRewardsPerDay()`
- `useUserRewardsPerDay()`
- `useUserPendingRewards()`
- `usePoolStakedValue()`
- `useWindowDimensions()`

Info: Returns a component containing a table containing the pool's information, as well as its title.
