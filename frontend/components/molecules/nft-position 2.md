---
title: NftPosition
---

## Props

### `NftPositionProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenId` | [**BigNumber**](https://docs.ethers.io/v5/api/utils/bignumber/) | ID for LP token

## Components

### `ScaledContainer`
- **Info**: Hovering on this div element causes it and its children to scale up in size.

### `NftPosition` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `lpToken`

Props Dependencies:
- **NftPositionProps**

Hook Dependencies:
- `useWindowDimensions()`

Info: Returns a component containing a table containing the pool's information, as well as its title.