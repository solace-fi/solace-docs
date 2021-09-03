---
title: PolicyModalInfo
---

## Props

### `PolicyModalInfoProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
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

Hook Dependencies:
- `useAppraisePosition()`
- `useWindowDimensions()`
Info: Return a component containing a policy's information.