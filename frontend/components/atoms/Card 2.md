## Props

### `CardProps`
- **Extends**: [**ClickProps**](/docs/dev-docs/frontend/components/atoms/Button#clickprops-exported), [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)

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
- **Extends**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `cardsPerRow` (optional) | number | Set cards per row in container.

## Styles

### `CardCss`
- **Props**: [**CardProps**](/docs/dev-docs/frontend/components/atoms/Card#cardprops)
- **Info**: Base card style.

## Components

### `CardContainer` (exported)
- **Props**: [**CardContainerProps**](/docs/dev-docs/frontend/components/atoms/Card#cardcontainerprops), [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported), [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
- **Info**: Container to hold cards.

### `Card` (exported)
- **Props**: [**CardProps**](/docs/dev-docs/frontend/components/atoms/Card#cardprops)
- **Additional Styles**: [**CardCss**](/docs/dev-docs/frontend/components/atoms/Card#cardcss), [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
- **Info**: Normal card component.

### `InvestmentCard` (exported)
- **Props**: [**CardProps**](/docs/dev-docs/frontend/components/atoms/Card#cardprops)
- **Additional Styles**: [**CardCss**](/docs/dev-docs/frontend/components/atoms/Card#cardcss)
- **Info**: Card component for holding investment info.

### `PositionCard` (exported)
- **Props**: [**CardProps**](/docs/dev-docs/frontend/components/atoms/Card#cardprops)
- **Additional Styles**: [**CardCss**](/docs/dev-docs/frontend/components/atoms/Card#cardcss)
- **Info**: Card component for holding position info and changes color on hover.

### `CardHeader` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported)
- **Info**: Card text with set grid column.

### `CardTitle` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported)

### `CardBlock` (exported)
- **Info**: Simple div element.
