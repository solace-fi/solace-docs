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
- **Extends**: [**ClickProps**](/docs/dev-docs/frontend/components/atoms/Button#clickprops-exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `hidden` (optional) | boolean | Boolean to hide modal close button.

## Styles

### `FadeInAnimation`
- **Info**: Keyframes for fade-in animation.

## Components

### `ModalContainer` (exported)
- **Props**: [**ModalProps**](/docs/dev-docs/frontend/components/atoms/Modal#modalprops-exported)

### `ModalBase` (exported)
- **Props**: [**ModalProps**](/docs/dev-docs/frontend/components/atoms/Modal#modalprops-exported)
- **Additional Styles**: [**FadeInAnimation**](/docs/dev-docs/frontend/components/atoms/Modal#fadeinanimation)
- **Info**: Base modal component.

### `ModalClose` (exported)
- **Props**: [**ModalButtonProps**](/docs/dev-docs/frontend/components/atoms/Modal#modalbuttonprops-exported)
- **Info**: Component for modal close button.

### `ModalHeader` (exported)
- **Info**: Component for modal title.

### `ModalFooter` (exported)
- **Info**: Component for modal bottom.

### `ModalRow` (exported)
- **Props**: [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
- **Info**: Component for modal row to hold [**ModalCell**](/docs/dev-docs/frontend/components/atoms/Modal#modalcell-exported) components.

### `ModalCell` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported), [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported), [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
