# CachedDataManager

CachedDataManager caches data that is internal or fetched from extrenal sources. If there would be more Managers in the future, they may help take some fields out of CachedDataManager.

## How does it work?

Since this manager has multiple roles, this section will be split into several parts.

### Version and Reload

CachedDataManager controls app-wide data refresh. This is made possible with parts of the app relying on `version` and `dataVersion`.

`version` is a number that increments by 1 every time its respective function `reload` is called, regardless of where it was called from. By incrementing `version` , any part of the app that has `version` as a dependency, will refresh.

`dataVersion` is similar to `version` , except its respective function `dataReload` is only called within the manager on an interval.

### Gas Prices

CachedDataManager keeps track of fetched gas prices for any part of the app to access.

### Token and Position Data

CachedDataManager contains a boolean that determines whether the token and position data of a chain have been initialized. This method is employed in order to properly call the initialization function once per chain.

### Local transactions

After a transaction is sent, it takes time before it is validated. Because of this, that pending transaction wouldn't be found in the user's transaction history right away. So pending transactions are stored locally and are removed when the transactions with the same hashes are found.

### Latest Block

Some parts of the app should only update when the block number is actually different, rather than `version` or `dataVersion`. To get around this, the manager stores the latest block number.

## Returned values

#### `localTransactions` (LocalTx[])
#### `userPolicyData` ({ policiesLoading: boolean; userPolicies: Policy[] })
#### `tokenPositionDataInitialized` (boolean)
#### `version` (number)
#### `dataVersion` (number)
#### `gasPrices` (any)
#### `latestBlock` (number)
#### `addLocalTransactions` (function)
#### `deleteLocalTransactions` (function)
#### `reload` (function)
