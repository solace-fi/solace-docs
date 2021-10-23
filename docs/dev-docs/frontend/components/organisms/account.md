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

Info: Returns a button containing user avatar, address and the network. Opens the `AccountModal` component on click.

### `MiniAccount` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `appTheme`
| Network | `activeNetwork`
| Wallet | `account`
| CachedData | `openAccountModal`

Local Functions:

Info: Returns a small button containing user avatar. Opens the `AccountModal` component on click.