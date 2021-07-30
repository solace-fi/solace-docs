# WalletManager

The Manager in charge of the user's wallet and wallet connector. One of the most important Managers.

## How does it work?

The manager borrows functionality from Web3React, by using it as a state machine to keep track of the current `chainId`, `account`, and `Web3Provider`, as well as using its `connect` and `disconnect` functions.

## Returned values

#### `initialized` (boolean)
#### `connecting` (boolean)
#### `isActive` (boolean)
#### `account` (string | undefined)
#### `librrary` (any)
#### `connector` (WalletConnector | undefined)
#### `errors` (Error[])
#### `connect` (function)
#### `disconnect` (function)