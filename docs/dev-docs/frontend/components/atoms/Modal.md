## Props

### `ModalProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `handleClose` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `modalTitle` | string | String to set title of modal.
| `disableCloseButton` | boolean | Boolean to disable modal close button.
| `zIndex` (optional) | number | Set the component's z-index.

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

### `ModalBase` (exported)
- **Props**: ModalProps
- **Additional Styles**: FadeInAnimation
- **Info**: Base modal component.

### `ModalClose` (exported)
- **Props**: ModalButtonProps
- **Info**: Component for modal close button.

### `ModalHeader` (export)
- **Info**: Component for modal title.

### `ModalRow` (export)
- **Props**: GeneralElementProps
- **Additional Styles**: GeneralElementCss
- **Info**: Component for modal row to hold `ModalCell` components.

### `ModalCell` (exported)
- **Props**: GeneralTextProps, GeneralElementProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
