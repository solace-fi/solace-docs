--- 
title: General Interfaces
position: 0
---

## Introduction

These are rather common props and styles shared in between Atoms.

## Props

### `HeightAndWidthProps` (exported)
- **width (number)**?: Sets width in px.
- **height (number)**?: Sets height in px.
- **widthP (number)**?: Sets width in percentage.
- **heightP (number)**?: Sets height in percentage.

### `PaddingProps` (exported)
- **p (number)**?: Sets padding in px.
- **pt (number)**?: Sets padding-top in px.
- **pl (number)**?: Sets padding-left in px.
- **pr (number)**?: Sets padding-right in px.
- **pb (number)**?: Sets padding-bottom in px.

### `MarginProps` (exported)
- **m (number)**?: Sets margin in px.
- **mt (number)**?: Sets margin-top in px.
- **ml (number)**?: Sets margin-left in px.
- **mr (number)**?: Sets margin-right in px.
- **mb (number)**?: Sets margin-bottom in px.

### `GeneralElementProps` (exported)
- **Extends**: `HeightAndWidthProps` , `PaddingProps` , `MarginProps`

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