---
title: Navbar
---

## Props

### `NavbarProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `location` | any | Location object, fetched from react-router-dom.

## Components

### `SideNavbar` (exported)

Props Dependencies:

- `NavbarProps`

Info: Returns component containing Solace Logo along with the navigation links as a side navbar.

### `TopNavbar` (exported)

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| General | `openModal`

Props Dependencies:

- `NavbarProps`

Hook Dependencies:

- `useWindowDimension()`

Info: Returns component containing Solace Logo along with the navigation links, `NetworkConnectButton`, `WalletConnectButton` , and `TransactionHistoryButton`, as a top navbar.