---
title: AssetsModal
---

## Props

### `AssetsModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isOpen` | boolean | Boolean to indicate whether the modal is open or not.
| `closeModal` | () => void | Function to close the modal.
| `assets` | any[] | List of assets to be displayed.
| `modalTitle` | () => void | String for the modal title.

## Components

### `AssetsModal` (exported)

Props Dependencies:
- `AssetsModalProps`

Local functions:
- `handleClose()` : Returns a function that closes the modal.

Info: Returns the modal containing the assets passed in.