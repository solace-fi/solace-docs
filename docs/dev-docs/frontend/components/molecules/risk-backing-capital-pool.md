---
title: RiskBackingCapitalPool
---

## Props

### `RiskBackingCapitalPoolProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openModal` | ( func: FunctionName, modalTitle: string ) => void | Set modal visibility, functionality, and title.

## Components

### `RiskBackingCapitalPool` (exported)

Props Dependencies:

- `RiskBackingCapitalPoolProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `errors`

Hook Dependencies:
- `useUserVaultDetails()`
- `useCapitalPoolSize()`

Info: Returns a component containing a table containing the pool's information, as well as its title.