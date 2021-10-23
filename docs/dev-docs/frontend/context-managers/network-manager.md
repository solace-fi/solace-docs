---
sidebar_position: 2
---

# NetworkManager

NetworkManager keeps track of the network currently connected, as well as the network's settings and cached data.

## How does it work?

NetworkManager doesn't have any complex state or operations. It records what the active network is and makes that known throughout the app. While this makes the Manager simple by design, its function is prominent to the app.

Hook Dependencies:
- `useLocalStorage()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`activeNetwork` | [**NetworkConfig**](/docs/dev-docs/frontend/constants/types#networkconfig-exported) | Current network to be connected to.
|`chainId` | number | Chain ID of current network.
|`currencyDecimals` | number | Number of decimals of current network's native currency.
|`networks` | [**NetworkConfig**](/docs/dev-docs/frontend/constants/types#networkconfig-exported)[] | Array of network configurations.
|`findNetworkByChainId` | (chainId: number \| undefined) => [**NetworkConfig**](/docs/dev-docs/frontend/constants/types#networkconfig-exported) \| undefined | Find the network using chainId, return undefined if not found.
|`findNetworkByName` | (networkName: string) => [**NetworkConfig**](/docs/dev-docs/frontend/constants/types#networkconfig-exported) \| undefined | Find the network using name, return undefined if not found.
|`changeNetwork` | (chainId: number \| undefined) => [**NetworkConfig**](/docs/dev-docs/frontend/constants/types#networkconfig-exported) \| undefined | Change network to that which uses the input chainId.