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
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported), [**BoxProps**](/docs/dev-docs/frontend/components/atoms/Box#boxprops)
- **Additional Styles**: [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
- **Info**: Sets box style.

## Components

### `BoxBase`
- **Extends**: [**rebass/styled-components/Box**](https://rebassjs.org/box)

### `BoxRow` (exported)
- **Extends**: BoxBase
- **Info**: Hold [**Box**](/docs/dev-docs/frontend/components/atoms/Box#box-exported) elements in a row.

### `Box` (exported)
- **Extends**: BoxRow
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported), [**BoxProps**](/docs/dev-docs/frontend/components/atoms/Box#boxprops)
- **Additional Styles**: [**BoxCss**](/docs/dev-docs/frontend/components/atoms/Box#boxcss)
- **Info**: Responsive box component.

### `SmallBox` (exported)
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported), [**BoxProps**](/docs/dev-docs/frontend/components/atoms/Box#boxprops), [**SmallBoxProps**](/docs/dev-docs/frontend/components/atoms/Box#smallboxprops)
- **Additional Styles**: [**BoxCss**](/docs/dev-docs/frontend/components/atoms/Box#boxcss)
- **Info**: Responsive collapsible component for notifying purposes.

### `BoxItem` (exported)
- **Info**: Responsive component within a [**Box**](/docs/dev-docs/frontend/components/atoms/Box#box-exported) .

### `BoxItemTitle` (exported)
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported)