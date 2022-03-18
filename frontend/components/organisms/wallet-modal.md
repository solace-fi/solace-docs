---
title: WalletModal
---

## Props

### `WalletModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.

### `ConnectWalletModalState `

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `showLedgerModal` | boolean | Flag to show ledger derivation path modal.

## Components

### `WalletModal` (exported)

Props Dependencies:

- **WalletModalProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `changeWallet` , `disconnect` , `activeWalletConnector`

Local Functions:

- `handleClose()` : Handle closing modal
- `connectWallet()` : Handle the wallet change

Info: Returns wallet modal.