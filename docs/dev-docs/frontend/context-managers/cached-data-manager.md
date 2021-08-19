---
sidebar_position: 4
---

# CachedDataManager

CachedDataManager caches data that is internal or fetched from external sources. If there would be more Managers in the future, they may help take some fields out of CachedDataManager.

## How does it work?

Unlike other managers, this manager has multiple roles, so this section will be split into several parts.

### Version and Reload

CachedDataManager controls app-wide data refresh. This is made possible with parts of the app relying on `version` and `dataVersion`.

`version` is a number that increments by 1 every time its respective function `reload` is called, regardless of where it was called from. By incrementing `version` , any part of the app that has it as a dependency, will refresh.

`dataVersion` is similar to `version` , except its respective function `dataReload` is only called within the manager on an interval.

### Gas Prices

CachedDataManager keeps track of fetched gas prices for any part of the app to access.

### Token and Position Data

CachedDataManager oversees the initialization of token and position data, a very expensive functionality to execute. Combined with `useSessionStorage`, this method is employed to properly call the initialization function once per chain per browser tab, which lessens the resources spent on making network requests and prevents redundant calls. The initialized data is also propelled through this Manager, allowing app-wide access for components that need it.

### Local transactions

After a transaction is sent, it takes time before it is validated. Because of this, that pending transaction wouldn't be found in the user's transaction history right away. So pending transactions are stored locally and are removed when the transactions with the same hashes are found.

### Transaction history modal

The manager can toggle the visibility of the transaction history modal. This approach is due to certain elements being destroyed as the user interface takes a different device screen width, to prevent the modal from being prematurely destroyed, it is moved here.

### Latest Block

Some parts of the app should only update when the block number is actually different, rather than `version` or `dataVersion`. To get around this, the manager stores the latest block number.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `disconnect`
| Network | `chainId `

Hook Dependencies:
- `useLocalStorage()`
- `useReload()`
- `useFetchGasPrice()`
- `useGetLatestBlockNumber()`
- `useCacheTokens()`
- `usePolicyGetter()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`localTransactions` | LocalTx[] | Array of local transactions.
|`userPolicyData` | { boolean, Policy[] } | Policy loading state and array of user policies.
|`tokenPositionData` | { boolean , NetworkCache[] } | Token and position initialization state, and the cached data itself.
|`showHistoryModal` | boolean | Display transaction history modal.
|`version` | number | Value that is updated by user actions for controlled refresh.
|`dataVersion` | number | Value that is updated on an interval for controlled refresh.
|`gasPrices` | any | Returned gas prices from explorer.
|`latestBlock` | number | Number of the latest fetched block.
|`addLocalTransactions` | function | Add local transactions.
|`deleteLocalTransactions` | function | Delete local transactions.
|`openHistoryModal` | function | Function to display transaction history modal.
|`reload` | function | Function to increment `version`.