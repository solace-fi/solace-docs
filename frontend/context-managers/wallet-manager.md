---
sidebar_position: 3
---

# WalletManager

The Manager in charge of the user's wallet and wallet connector. One of the most important Managers.

## How does it work?

The manager borrows functionality from Web3React, by using it as a state machine to keep track of the current `account` , and `Web3Provider` , as well as using its `connect` and `disconnect` functions.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`

Hook Dependencies:
- `useLocalStorage()`
- `useWeb3React()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`initialized` | boolean | Initialization state of wallet.
|`connecting` | boolean | Connecting status of wallet.
|`isActive` | boolean | Running state of wallet.
|`account` | string \| undefined | Account of user account.
|`name` | string \| undefined | ENS name of user account.
|`library` | any | Provider of wallet.
|`connector` | [**AbstractConnector**](https://github.com/NoahZinsmeister/web3-react/blob/d0b038c748a42ec85641a307e6c588546d86afc2/packages/abstract-connector/src/index.ts) \| undefined | Current wallet AbstractConnector.
|`activeWalletConnector` | [**WalletConnector**](/docs/dev-docs/frontend/constants/types#walletconnector-exported) \| undefined | Current wallet provider.
|`openWalletModal` | function | Opens wallet modal.
|`changeWallet` | function | Set new selected provider before reloading.
|`connect` | function | Connect to a wallet.
|`disconnect` | function | Disconnect from a wallet.