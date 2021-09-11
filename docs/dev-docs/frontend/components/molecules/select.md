---
title: StyledSelect
---

## Props

### `StyledSelectProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `value` | {
    value: string
    label: string
  } | Chosen dropdown selection.
| `onChange` | any | Function to call when the Select element is being interacted with.
| `options` | {
    value: string
    label: string
  } | Dropdown selection options.

## Components

### `StyledSelect` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `appTheme`

Props Dependencies:
- `StyledSelectProps`

Info: Returns a stylized select component.