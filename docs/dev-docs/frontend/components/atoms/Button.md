## Props

### `ButtonProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `secondary` (optional) | boolean | Set secondary color.
| `hidden` (optional) | boolean | Hide button.

### `ClickProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `onClick` (optional) | boolean | Function to call on click.
| `disabled` (optional) | boolean | Disable button.

## Styles

### `ButtonBaseCss` (exported)
- **Props**: GeneralElementProps, ButtonProps
- **Additional Styles**: Text3Css
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
- **Props**: MarginProps
- **Additional Styles**: MarginCss
- **Info**: Wrapper for housing a group of buttons.