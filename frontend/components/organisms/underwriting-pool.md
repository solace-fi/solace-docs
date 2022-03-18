---
title: UnderwritingPool
---

## Props

### `UnderwritingPoolProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openModal` | ( func: [**FunctionName**](/docs/dev-docs/frontend/constants/enums#functionname-exported), modalTitle: string, farmName: string ) => void | Set modal visibility, functionality, and title.

## Components

### `UnderwritingPool` (exported)

Props Dependencies:

- **UnderwritingPoolProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Wallet | `account`

Hook Dependencies:
- `useUserVaultDetails()`
- `useCapitalPoolSize()`
- `useWindowDimensions()`

Info: Returns a component containing a table containing the pool's information, as well as its title.