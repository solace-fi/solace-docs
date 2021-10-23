## Props

### `ScrollableProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxDesktopHeight` (optional) | boolean | Set max desktop height.
| `maxMobileHeight` (optional) | boolean | Set max mobile height.

### `LayoutProps`
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `location` (optional) | any | Location object from react-router.

## Styles

### `movingGradient`
- **Info**: Keyframes for background gradient movement animation

### `GlobalStyle` (exported)
- **Additional Styles**: CustomScrollbar, Text3Css
- **Info**: Custom global body style

## Components

### `Scrollable`
- **Props**: ScrollableProps
- **Info**: A component with a capped height that allows scrolling.

### `FlexRow` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralElementCss

### `FlexCol` (exported)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralElementCss

### `Layout` (exported)
- **Info**: Flexed layout component that gives passing to entire app interface.

### `HorizRule` (exported)
- **Props**: LayoutProps
- **Info**: styled hr element.

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
- **Additional Styles**: HeightAndWidthCss
- **Extends**: FlexCol
- **Info**: Component that serves the role of a banner. Used to capture user attention.

### `Footer` (exported)
- **Info**: Fixed footer component.

### `Content` (exported)
- **Info**: Component that creates vertical padding. Used for self-contained components sharing a page.