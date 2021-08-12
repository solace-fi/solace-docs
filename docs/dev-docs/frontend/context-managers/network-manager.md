# NetworkManager

NetworkManager keeps track of the network currently connected, as well as the network's settings and cached data.

## How does it work?

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `chainId`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`activeNetwork` | NetworkConfig | Current network to be connected to.
|`networks` | NetworkConfig[] | Array of network configurations.
|`findNetworkByChainId` | (chainId: number | undefined) => NetworkConfig | undefined | Find the network using chainId, return undefined if not found.