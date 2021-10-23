## Props

### `ClickProps` (exported)
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `onClick` (optional) | boolean | Function to call on click.
| `disabled` (optional) | boolean | Disable button.

### `ButtonProps` (exported)

- **Extends**: ClickProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `analogical` (optional) | boolean | Set color to match theme color.
| `light` (optional) | boolean | Set light color.
| `dark` (optional) | boolean | Set dark color.
| `secondary` (optional) | boolean | Set secondary color.
| `info` (optional) | boolean | Set info color.
| `success` (optional) | boolean | Set success color.
| `error` (optional) | boolean | Set error color.
| `warning` (optional) | boolean | Set warning color.
| `glow` (optional) | boolean | Set border glow.
| `hidden` (optional) | boolean | Hide button.
| `noradius` (optional) | boolean | Remove rounded corners of button.
| `noborder` (optional) | boolean | Remove border of button.
| `nohover` (optional) | boolean | Remove hover effect of button.

### `ButtonWrapperProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isRow` (optional) | boolean | Line children from left to right.
| `isColumn` (optional) | boolean | Line children from top to bottom.

## Styles

### `ButtonWrapperCss` (exported)
- **Props**: ButtonWrapperProps
- **Info**: Set flex-direction.

### `ButtonBaseCss` (exported)
- **Props**: GeneralElementProps, ButtonProps
- **Additional Styles**: Text4Css
- **Info**: Base button style.

## Components

### `Button` (exported)
- **Props**: GeneralElementProps, ButtonProps
- **Additional Styles**: GeneralElementCss, ButtonBaseCss
- **Info**: Normal interface button.

### `NavButton` (exported)
- **Additional Styles**: ButtonBaseCss
- **Info**: Special button for Navbar.

### `ButtonWrapper` (exported)
- **Props**: ButtonWrapperProps, MarginProps
- **Additional Styles**: ButtonWrapperCss, MarginCss
- **Info**: Wrapper for housing a group of buttons.