---
title: PolicyModalInfo
---

## Props

### `PolicyModalInfoProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `appraisal` | BigNumber | The appraised amount of a position.
| `selectedPolicy` | Policy \| undefined | The currently selected policy.
| `latestBlock` | number | The latest block number.

## Components

### `PolicyModalInfo` (exported)

Props Dependencies:

- `PolicyModalInfoProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `currencyDecimals`
| Wallet | `account`
| CachedData | `tokenPositionData`

Local functions:
- `closeModal()` : Handle closing the `AssetsModal` modal
- `getTokens()` : Get policy's tokens for the `AssetsModal` modal

Hook Dependencies:
- `useWindowDimensions()`

Info: Return a component containing a policy's information.