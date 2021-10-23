---
title: CapitalProviderPool
---

## Props

### `CapitalProviderPoolProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openModal` | ( func: [**FunctionName**](/docs/dev-docs/frontend/constants/enums#functionname-exported), modalTitle: string ) => void | Set modal visibility, functionality, and title.

## Components

### `CapitalProviderPool` (exported)

Props Dependencies:
- `CapitalProviderPoolProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account`
| Contracts | `cpFarm`

Hook Dependencies:
- `useUserStakedValue()`
- `useRewardsPerDay()`
- `useUserRewardsPerDay()`
- `useUserPendingRewards()`
- `usePoolStakedValue()`
- `useWindowDimensions()`

Info: Returns a component containing a table containing the pool's information, as well as its title.