---
sidebar_position: 5
---

# CachedDataManager

CachedDataManager caches data that is internal or fetched from external sources. If there would be more Managers in the future, they may help take some fields out of CachedDataManager.

## How does it work?

Unlike other managers, this manager has multiple roles, so this section will be split into several parts.

### Version and Reload

CachedDataManager controls app-wide data refresh. This is because the app listens to changes in `latestBlock`, which changes on every new block.

### Gas Prices

CachedDataManager keeps track of fetched gas prices for any part of the app to access.

### Token and Position Data

CachedDataManager oversees the initialization of token and position data, a very expensive functionality to execute. Combined with `useSessionStorage`, this method is employed to properly call the initialization function once per chain per browser tab, which lessens the resources spent on making network requests and prevents redundant calls. The initialized data is also propelled through this Manager, allowing app-wide access for components that need it.

### Local transactions

After a transaction is sent, it takes time before it is validated. Because of this, that pending transaction wouldn't be found in the user's transaction history right away. So pending transactions are stored locally and are removed when the transactions with the same hashes are found.

### Account details modal

The manager can toggle the visibility of the account details modal. This approach in grant this manager the control is to prevent the modal from being prematurely destroyed as the user interface takes a different device screen width.

### Latest Block

Some parts of the app should only update when the block number is actually different, rather than `version` or `dataVersion`. To get around this, the manager stores the latest block number.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `addNotices` , `removeNotices`
| Wallet | `account` , `disconnect`
| Network | `chainId`

Hook Dependencies:
- `useLocalStorage()`
- `useReload()`
- `useFetchGasPrice()`
- `useGetLatestBlock()`
- `useCachePositions()`
- `usePolicyGetter()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`localTransactions` | [**LocalTx**](/docs/dev-docs/frontend/constants/types#localtx-exported)[] | Array of local transactions.
|`userPolicyData` | { boolean; [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported)[]; setCanGetAssessments: (toggle: boolean) => void } | Policy loading state, array of user policies, and toggle function to allow assessment retrieval.
|`tokenPosData` | { boolean , [**NetworkCache**](/docs/dev-docs/frontend/constants/types#networkcache-exported)[] } | Token and position initialization state, and the cached data itself.
|`showAccountModal` | boolean | Display account details modal.
|`version` | number | Value that is updated by user actions for controlled refresh.
|`gasPrices` | [**GasFeeListState**](/docs/dev-docs/frontend/constants/types#gasfeeliststate-exported) | Returned gas prices from explorer.
|`latestBlock` | [**Block**](https://docs.ethers.io/v5/api/providers/types/#providers-Block) \| undefined | Number of the latest fetched block.
|`addLocalTransactions` | function | Add local transactions.
|`deleteLocalTransactions` | function | Delete local transactions.
|`reload` | function | Function to increment `version`.