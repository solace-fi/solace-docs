## Props

### `ButtonProps` (exported)
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `secondary` (optional) | boolean | Set secondary color.
| `inconspicuous` (optional) | boolean | Prevent button from drawing user's attention.
| `glow` (optional) | boolean | Set border glow.
| `hidden` (optional) | boolean | Hide button.
| `noradius` (optional) | boolean | Remove rounded corners of button.

### `ButtonWrapperProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isRow` (optional) | boolean | Line children from left to right.
| `isColumn` (optional) | boolean | Line children from top to bottom.

### `ClickProps` (exported)
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `onClick` (optional) | boolean | Function to call on click.
| `disabled` (optional) | boolean | Disable button.

## Styles

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
- **Props**: ButtonWrapperProps
- **Additional Styles**: ButtonWrapperCss, MarginCss
- **Info**: Wrapper for housing a group of buttons.