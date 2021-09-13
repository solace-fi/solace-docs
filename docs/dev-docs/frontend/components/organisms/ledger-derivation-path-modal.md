---
title: LedgerDerivationPathModal
---

## Props

### `LedgerDerivationPathModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.

## Components

### `LedgerDerivationPathModal` (exported)

Props Dependencies:

- `LedgerDerivationPathModalProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `connect`

Local Functions:

- `handleClose()` : Handle closing modal
- `handleSelect()` : Handle path selection
- `onSuccess()` : Handle on connection success
- `handleConnect()` : Set selected NFT and amount

Info: Returns modal for the user to select a derivation path to connect their Ledger wallet with.