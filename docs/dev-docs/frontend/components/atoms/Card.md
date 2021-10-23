## Props

### `CardProps`
- **Extends**: ClickProps, GeneralElementProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `transparent` (optional) | boolean | Set transparency.
| `canHover` (optional) | boolean | Change background-color on hover.
| `fade` (optional) | boolean | Set background-color to a faded color.
| `color1` (optional) | boolean | Set background-color to color1.
| `color2` (optional) | boolean | Set background-color to color2.
| `glow` (optional) | boolean | Set border to glow.
| `isHighlight` (optional) | boolean | Set highlight background-color.

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
- **Info**: Card component for holding position info and changes color on hover.

### `CardHeader` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Card text with set grid column.

### `CardTitle` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss

### `CardBlock` (exported)
- **Info**: Simple div element.
