---
sidebar_position: 6
---

# NotificationsManager

The Manager in charge to presenting notifications and toast messages on the interface.

## How does it work?

For the notifications to work, we use the `react-toastify` library. 

The Manager handles two types of toasts right now, one for transactions, and one for the app.

Transaction toasts would tell the user whether the transaction is pending, successful, cancelled, or a failure. Since this type of toast relies on a transaction's performance, there is a function `makeTxToast` that allows any part of the app that has to do with sending transactions to create a transaction toast.

App toasts inform about system-wide occurrences, such as errors in connecting to the wallet or to the wrong network. Currently, these app toasts are being used within the Manager for errors from the WalletManager.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`, `errors`
| Network | `chainId`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`makeTxToast` | function | Create transaction toast.