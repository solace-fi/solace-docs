---
title: AccountModal
---

## Props

### `AccountModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `isOpen` | boolean | Boolean to indicate whether the modal is open or not.
| `closeModal` | () => void | Function to close the modal.

## Components

### `AccountModal` (exported)

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`
| Contracts | `contractSources`
| Wallet | `account, name, activeWalletConnector`
| CachedData | `localTransactions`

Props Dependencies:
- `AccountModalProps`

Hook Dependencies:
- `useWindowDimensions()`
- `useTransactionDetails()`

Local functions:
- `handleClose()` : Returns a function that closes the modal.

Info: Returns the modal displaying account details.