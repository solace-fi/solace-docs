## Props

### `ModalProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `handleClose` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `modalTitle` | string | String to set title of modal.
| `disableCloseButton` | boolean | Boolean to disable modal close button.

### `ModalButtonProps` (exported)
- **Extends**: ClickProps

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `hidden` (optional) | boolean | Boolean to hide modal close button.

## Styles

### `FadeInAnimation`
- **Info**: Keyframes for fade-in animation.

## Components

### `ModalContainer` (exported)
- **Props**: ModalProps
- **Info**: Component containing modal.

### `ModalBase` (exported)
- **Props**: ModalProps
- **Additional Styles**: FadeInAnimation
- **Info**: Base modal component.

### `ModalCloseButton` (exported)
- **Props**: ModalButtonProps
- **Info**: Component for modal close button.

### `ModalHeader` (export)
- **Info**: Component for modal header.

### `ModalRow` (export)
- **Info**: Component for modal row.

### `ModalCell` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Component for modal cell.
