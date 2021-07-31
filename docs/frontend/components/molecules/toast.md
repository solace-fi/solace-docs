---
title: Toast
---

## Props

### `AppToastProps`
- **message (string)**: Toast message
- **icon (any)**: Icon to display on toast

### `NotificationToastProps`
- **message (string)**: Toast message
- **condition (TransactionCondition)**: Transaction condition
- **icon (any)**: Icon to display on toast

## Components

### `AppToast` (exported)

Props Dependencies:

- `AppToastProps`

Info: Returns a toast with message about the app.

### `NotificationToast` (exported)

Props Dependencies:

- `NotificationToastProps`

Manager Dependencies:

- **Wallet**: `chainId`

Local Functions: 

- `getStateFromCondition (condition: TransactionCondition)` : Returns sentence fragment based on transaction condition.

Info: Returns a toast with message about a transaction.