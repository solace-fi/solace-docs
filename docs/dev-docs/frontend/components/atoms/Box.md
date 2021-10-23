## Props

### `BoxProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `color1` (optional) | boolean | Change background color to color1.
| `color2` (optional) | boolean | Change background color to color2.
| `success` (optional) | boolean | Change background color to success color.
| `info` (optional) | boolean | Change background color to info color.
| `transparent` (optional) | boolean | Change background color to transparent.
| `outlined` (optional) | boolean | Give box outline.
| `glow` (optional) | boolean | Give box border glow.
| `shadow` (optional) | boolean | Give box shadow.

### `SmallBoxProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `error` (optional) | boolean | Change border-color to error color.
| `collapse` (optional) | boolean | Change visibility.
| `canHover` (optional) | boolean | Allow hover.

## Styles

### `BoxCss`
- **Props**: GeneralElementProps, BoxProps
- **Additional Styles**: GeneralElementCss
- **Info**: Sets styles defined by `BoxProps` and `GeneralElementProps`.

## Components

### `BoxBase`
- **Extends**: rebass/styled-components/Box

### `BoxRow` (exported)
- **Extends**: BoxBase
- **Info**: Hold `Box` elements in a row.

### `Box` (exported)
- **Extends**: BoxRow
- **Props**: GeneralElementProps, BoxProps
- **Additional Styles**: BoxCss
- **Info**: Responsive box component.

### `SmallBox` (exported)
- **Props**: GeneralElementProps, BoxProps, SmallBoxProps
- **Additional Styles**: BoxCss
- **Info**: Responsive collapsible component for notifying purposes.

### `BoxItem` (exported)
- **Info**: Responsive component within a `Box` .

### `BoxItemTitle` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralTextCss