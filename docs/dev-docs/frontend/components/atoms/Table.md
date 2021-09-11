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
- **Info**: Table Component

### `TableRow` (exported)
- **Props**: TableProps
- **Info**: Table Row Component

### `TableBody` (exported)
- **Info**: Table Body Component

### `TableHead` (exported)
- **Props**: TableHeadProps
- **Info**: Table Head Component

### `TableHeader` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Table Header Component

### `TableData` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Table Data Component

### `TableDataGroup` (exported)
- **Props**: TableProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Table Data Group Component