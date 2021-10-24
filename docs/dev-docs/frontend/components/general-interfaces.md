--- 
title: General Interfaces
sidebar_position: 1
---

## Introduction

These are rather common props and styles shared across components.

## Props

### `HeightAndWidthProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `width` (optional) | number | Sets width in px.
| `height` (optional) | number | Sets height in px.
| `widthP` (optional) | number | Sets width in percentage.
| `heightP` (optional) | number | Sets height in percentage.

### `PaddingProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `p` (optional) | number | Sets padding in px.
| `pt` (optional) | number | Sets padding-top in px.
| `pl` (optional) | number | Sets padding-left in px.
| `pr` (optional) | number | Sets padding-right in px.
| `pt` (optional) | number | Sets padding-bottom in px.

### `MarginProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `m` (optional) | number | Sets margin in px.
| `mt` (optional) | number | Sets margin-top in px.
| `ml` (optional) | number | Sets margin-left in px.
| `mr` (optional) | number | Sets margin-right in px.
| `mt` (optional) | number | Sets margin-bottom in px.

### `GeneralElementProps` (exported)
- **Extends**: `HeightAndWidthCss` , `PaddingProps` , `MarginProps`

## Styles

### `HeightAndWidthCss` (exported)

Sets height and width.

### `PaddingCss` (exported)

Sets padding.

### `MarginCss` (exported)

Sets margin.

### `GeneralElementCss` (exported)
- **Extends**: `HeightAndWidthCss` , `PaddingCss` , `MarginCss`

Sets height, width, padding,and margin.