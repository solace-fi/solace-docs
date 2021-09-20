## Props

### `ScrollableProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxDesktopHeight` (optional) | boolean | Set max desktop height.
| `maxMobileHeight` (optional) | boolean | Set max mobile height.

## Styles

### `movingGradient`
- **Info**: Keyframes for background gradient movement animation

### `CustomScrollbar` (exported)
- **Info**: Custom scrollbar style

### `GlobalStyle` (exported)
- **Additional Styles**: CustomScrollbar, Text3Css
- **Info**: Custom body style

## Components

### `Scrollable`
- **Props**: ScrollableProps
- **Additional Styles**: CustomScrollbar

### `FlexRow` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralElementCss
- **Info**: Simple flexed row component.

### `FlexCol` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralElementCss
- **Info**: Simple flexed column component.

### `Layout` (exported)
- **Info**: Flexed layout component that gives passing to entire app interface.

### `ContentContainer` (exported)
- **Info**: Flexed layout component that properly positions content and maximizes width of entire app interface.

### `SideNavContent` (exported)
- **Props**: HeightAndWidthProps
- **Info**: Component for positioning nav sidebar.

### `LayoutContent` (exported)
- **Props**: HeightAndWidthProps
- **Info**: Component for positioning the page, excluding nav sidebar.

### `HeroContainer` (exported)
- **Props**: HeightAndWidthProps
- **Extends**: FlexCol
- **Info**: Component that serves the role of a banner. Used to capture user attention.

### `FooterComponent` (exported)
- **Info**: Component that creates and stylizes footer.

### `Content` (exported)
- **Info**: Component that creates vertical padding. Used for self-contained components sharing a page.