# WalletManager

The Manager in charge of the user's wallet and wallet connector. One of the most important Managers.

## How does it work?

The manager borrows functionality from Web3React, by using it as a state machine to keep track of the current `chainId` , `account` , and `Web3Provider` , as well as using its `connect` and `disconnect` functions.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Provider | `ethProvider`

Hook Dependencies:
- `useWeb3React()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`initialized` | boolean | Initialization state of wallet.
|`connecting` | boolean | Connecting status of wallet.
|`isActive` | boolean | Running state of wallet.
|`account` | string \| undefined | Account of user account.
|`chainId` | string \| undefined | Current chain ID.
|`library` | any | Provider of wallet.
|`connector` | WalletConnector \| undefined | Current wallet provider.
|`errors` | Error[] | Array of current errors.
|`connect` | function | Connect to a wallet.
|`disconnect` | function | Disconnect from a wallet.