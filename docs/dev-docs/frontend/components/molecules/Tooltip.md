---
title: Tooltip
---

## Props

### `StyledTooltipProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `id` | string | Html element ID of this tooltip.
| `tip` | string | Information associated with this tooltip.
| `link` (optional) | string | External link

## Components

### `CustomTooltip`
- **Extends**: ReactTooltip from react-tooltip
- **Info**: Returns a stylized tooltip component

### `StyledTooltip` (exported)

Props Dependencies:

- `StyledTooltipProps`

Hook Dependencies:
- `useWindowDimensions()`

Info: Returns a CustomTooltip component containing the tip.
