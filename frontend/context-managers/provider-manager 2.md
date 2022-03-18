---
sidebar_position: 4
---

# ProviderManager

ProviderManager takes the role of intermediating the values between WalletManager and NetworkManager.

## How does it work?

Even though WalletManager and NetworkManager depend on each other for successful network changes, they are bounded to the parent-child relationship by the current context provider tree structure. This Manager listens to the `connector` from the WalletManager and calls `changeNetwork` from the NetworkManager.

The Network modal component also takes place as a React child of this Manager so its helper function `switchNetwork()` can correctly be called.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `findNetworkByChainId` , `findNetworkByName` , `changeNetwork`
| Wallet | `connector`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`openNetworkModal` | function | Open network modal.