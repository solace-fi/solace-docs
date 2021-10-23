## Props

### `TableProps`
- **Extends**: GeneralTextProps, GeneralElementProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isHighlight` (optional) | boolean | Highlight the table in a different color.
| `canHover` (optional) | boolean | Enable table color change on hover.
| `headers` (optional) | string[] | Array of strings to assign to table headers.

### `TableHeadProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `sticky` (optional) | boolean | Set table head to stick to its parent component, enabling the scrolling mechanism.

## Components

### `Table` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss

### `TableRow` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss

### `TableBody` (exported)
- **Info**: Table Body

### `TableHead` (exported)
- **Props**: TableHeadProps

### `TableHeader` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss

### `TableDataGroup` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss

### `TableData` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss