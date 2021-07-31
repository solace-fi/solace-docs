## Props

### `CardProps`
- **Extends**: ClickProps
- **transparent (boolean)**?: Set transparency
- **fade (boolean)**?: Set background-color to fade

### `CardContainerProps`
- **cardsPerRow (number)**?: Set cards per row in container

## Styles

### `CardCss`
- **Props**: CardProps
- **Info**: Base card style.

## Components

### `CardContainer` (exported)
- **Props**: CardContainerProps, GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Container to hold cards.

### `Card` (exported)
- **Props**: CardProps
- **Additional Styles**: CardCss
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