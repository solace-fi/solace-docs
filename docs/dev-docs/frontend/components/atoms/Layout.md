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
- **Additional Styles**: [**Text3Css**](/docs/dev-docs/frontend/components/atoms/Typography#text3css-exported)
- **Info**: Custom global body style

## Components

### `Scrollable`
- **Props**: [**ScrollableProps**](/docs/dev-docs/frontend/components/atoms/Layout#scrollableprops)
- **Info**: A component with a capped height that allows scrolling.

### `FlexRow` (exported)
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)

### `FlexCol` (exported)
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)

### `Layout` (exported)
- **Info**: Flexed layout component that gives passing to entire app interface.

### `HorizRule` (exported)
- **Props**: [**LayoutProps**](/docs/dev-docs/frontend/components/atoms/Layout#layoutprops)
- **Info**: styled hr element.

### `ContentContainer` (exported)
- **Info**: Flexed layout component that properly positions content and maximizes width of entire app interface.

### `SideNavContent` (exported)
- **Props**: [**HeightAndWidthProps**](/docs/dev-docs/frontend/components/general-interfaces#heightandwidthprops-exported)
- **Info**: Component for positioning nav sidebar.

### `LayoutContent` (exported)
- **Props**: [**HeightAndWidthProps**](/docs/dev-docs/frontend/components/general-interfaces#heightandwidthprops-exported)
- **Info**: Component for positioning the page, excluding nav sidebar.

### `HeroContainer` (exported)
- **Props**: [**HeightAndWidthProps**](/docs/dev-docs/frontend/components/general-interfaces#heightandwidthprops-exported)
- **Additional Styles**: [**HeightAndWidthCss**](/docs/dev-docs/frontend/components/general-interfaces#heightandwidthcss-exported)
- **Extends**: [**FlexCol**](/docs/dev-docs/frontend/components/atoms/Layout#flexcol-exported)
- **Info**: Component that serves the role of a banner. Used to capture user attention.

### `Footer` (exported)
- **Info**: Fixed footer component.

### `Content` (exported)
- **Info**: Component that creates vertical padding. Used for self-contained components sharing a page.