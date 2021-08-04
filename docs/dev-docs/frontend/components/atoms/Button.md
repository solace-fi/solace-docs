## Props

### `ButtonProps`
- **secondary (boolean)**?: Set secondary color
- **hidden (boolean)**?: Hide button

### `ClickProps` (exported)
- **onClick (any)**?: Function to call on click
- **disabled (boolean)**?: Disable button

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