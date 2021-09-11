## Props

### `CardProps`
- **Extends**: ClickProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `transparent` (optional) | boolean | Set transparency.
| `canHover` (optional) | boolean | Change background-color on hover.
| `fade` (optional) | boolean | Set background-color to a faded color.
| `blue` (optional) | boolean | Set background-color to blue.
| `purple` (optional) | boolean | Set background-color to purple.
| `glow` (optional) | boolean | Set border to glow.

### `CardContainerProps`
- **Extends**: GeneralElementProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `cardsPerRow` (optional) | number | Set cards per row in container.

## Styles

### `CardCss`
- **Props**: CardProps
- **Info**: Base card style.

## Components

### `CardContainer` (exported)
- **Props**: CardContainerProps, GeneralTextProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Container to hold cards.

### `Card` (exported)
- **Props**: CardProps
- **Additional Styles**: CardCss, GeneralElementCss
- **Info**: Normal card component.

### `InvestmentCard` (exported)
- **Props**: CardProps
- **Additional Styles**: CardCss
- **Info**: Card component for holding investment info.

### `PositionCard` (exported)
- **Props**: CardProps
- **Additional Styles**: CardCss
- **Info**: Card component for holding position info.

### `CardHeader` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Card text with set grid column.

### `CardTitle` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Card text with set margin-bottom.

### `CardBlock` (exported)
- **Info**: Simple div element.
