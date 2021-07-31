## Props

### `BoxProps`
- **purple (boolean)**?: Change background color to purple
- **green (boolean)**?: Change background color to green
- **navy (boolean)**?: Change background color to navy
- **transparent (boolean)**?: Change background color to transparent
- **outlined (boolean)**?: Give box outline
- **glow (boolean)**?: Give box border glow
- **shadow (boolean)**?: Give box shadow

### `SmallBoxProps`
- **error (boolean)**?: change border-color to error color
- **collapse (boolean)**?: hide `SmallBox`

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