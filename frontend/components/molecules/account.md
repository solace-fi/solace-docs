---
title: Account
---

## Components

### `UserAccount` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `appTheme`
| Network | `activeNetwork`
| Wallet | `account, name`
| CachedData | `openAccountModal`

Hook Dependencies: 
- `useLocation()`

Info: Returns a button containing user avatar, address and the network. Opens the [**AccountModal**](/docs/dev-docs/frontend/components/organisms/account-modal#accountmodal-exported) component on click.

### `MiniAccount` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `appTheme`
| Wallet | `account`
| CachedData | `openAccountModal`

Hook Dependencies: 
- `useLocation()`

Info: Returns a small button containing user avatar. Opens the [**AccountModal**](/docs/dev-docs/frontend/components/organisms/account-modal#accountmodal-exported) component on click.