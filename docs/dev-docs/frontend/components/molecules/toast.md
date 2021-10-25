---
title: Toast
---

## Props

### `AppToastProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `message` | string | Toast message.
| `icon` | any | Icon to display on toast.

### `NotificationToastProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `message` | string | Toast message.
| `condition` | [TransactionCondition](/docs/dev-docs/frontend/constants/enums#transactioncondition-exported) | Transaction condition.
| `txHash` (optional) | string | Transaction hash.

## Components

### `AppToast` (exported)

Props Dependencies:

- `AppToastProps`

Info: Returns a toast with message about the app.

### `AuditToast` (exported)

Info: Returns a toast with message about the audits.

### `NotificationToast` (exported)

Props Dependencies:

- `NotificationToastProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`

Local Functions: 

- `getStateFromCondition (condition: TransactionCondition)` : Returns sentence fragment based on [**TransactionCondition**](/docs/dev-docs/frontend/constants/enums#transactioncondition-exported).

Info: Returns a toast with message about a transaction.