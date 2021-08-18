## Props

### `BoxProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `purple` (optional) | boolean | Change background color to purple.
| `green` (optional) | boolean | Change background color to green.
| `navy` (optional) | boolean | Change background color to navy.
| `transparent` (optional) | boolean | Change background color to transparent.
| `outlined` (optional) | boolean | Give box outline.
| `glow` (optional) | boolean | Give box border glow.
| `shadow` (optional) | boolean | Give box shadow.

### `SmallBoxProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `error` (optional) | boolean | Change border-color to error color.
| `collapse` (optional) | boolean | Change visibility.

## Styles

### `BoxOutline`
- **Info**: Sets border-style to solid, white, and 1px width.

### `BoxCss`
- **Props**: GeneralElementProps, BoxProps
- **Additional Styles**: GeneralElementCss, BoxOutline
- **Info**: Sets styles defined by `BoxProps` and `GeneralElementProps`.

## Components

### `BoxBase`
- **Props**: GeneralElementProps, BoxProps
- **Extends**: rebass/styled-components/Box

### `BoxRow` (exported)
- **Extends**: BoxBase
- **Info**: Hold `Box` elements in a row.

### `Box` (exported)
- **Extends**: BoxRow
- **Props**: GeneralElementProps, BoxProps
- **Additional Styles**: BoxCss
- **Info**: Responsive box component.

### `BoxItem` (exported)
- **Info**: Responsive component that can hold `BoxItemTitle`.

### `BoxItemTitle` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralTextCss
- **Info**: Text with a set margin-bottom.

### `SmallBox` (exported)
- **Props**: GeneralElementProps, BoxProps, SmallBoxProps
- **Additional Styles**: BoxCss
- **Info**: Responsive collapsible component. Smaller version of `Box`.