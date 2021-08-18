# NetworkManager

NetworkManager keeps track of the network currently connected, as well as the network's settings and cached data.

## How does it work?

Hook Dependencies:
- `useSessionStorage()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`activeNetwork` | NetworkConfig | Current network to be connected to.
|`chainId` | number | Chain ID of current network.
|`currencyDecimals` | number | Number of decimals of current network's native currency.
|`networks` | NetworkConfig[] | Array of network configurations.
|`findNetworkByChainId` | (chainId: number \| undefined) => NetworkConfig \| undefined | Find the network using chainId, return undefined if not found.
|`findNetworkByName` | (networkName: string) => NetworkConfig \| undefined | Find the network using name, return undefined if not found.
|`changeNetwork` | (chainId: number \| undefined) => NetworkConfig \| undefined | Change network to that which uses the input chainId.