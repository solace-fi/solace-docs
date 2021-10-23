---
title: PolicyModalInfo
---

## Props

### `PolicyModalInfoProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `appraisal` | BigNumber | The appraised amount of a position.
| `selectedPolicy` | [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported) \| undefined | The currently selected policy.
| `latestBlock` | Block \| undefined | The latest block.

## Components

### `PolicyModalInfo` (exported)

Props Dependencies:

- `PolicyModalInfoProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `currencyDecimals`
| Wallet | `account`
| CachedData | `tokenPosData`

Local functions:
- `closeModal()` : Handle closing the `AssetsModal` modal
- `getAssets()` : Get policy's assets for the `AssetsModal` modal
- `handleFilterPositions()` : Return an array of [**BasicData**](/docs/dev-docs/frontend/constants/types#basicdata-exported) objects depending on the position's `positionsType`.


Hook Dependencies:
- `useWindowDimensions()`

Info: Return a component containing a policy's information.