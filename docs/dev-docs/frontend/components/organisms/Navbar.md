---
title: Navbar
---

## Components

### `SideNavbar` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `appTheme`

Hook Dependencies:

- `useLocation()`
- `useWindowDimensions()`

Info: Returns component containing Solace Logo along with the navigation links as a side navbar.

### `TopNavbar` (exported)

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Notifications | `toastSettings` , `makeAppToast`

Props Dependencies:

- `NavbarProps`

Hook Dependencies:

- `useLocation()`

Info: Returns component containing Solace Logo along with the navigation links as a top navbar.