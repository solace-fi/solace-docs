# ContractsManager

The Manager in charge of making all smart contracts accessible throughout the app.

## How does it work?

All the smart contracts are initialized using the hooks `useGetContract` and `useGetProductContracts`. Since the web app operates on multiple chains, the contracts depend on the `chainId` from WalletManager for reinitialization.

While the core contracts are initialized via `useGetContract` , the product contracts are handled seperately via `useGetProductContracts` because there will be chains that have a different number of products available.

## Returned values

#### `master` (Contract | null)
#### `vault` (Contract | null)
#### `treasury` (Contract | null)
#### `solace` (Contract | null)
#### `cpFarm` (Contract | null)
#### `lpFarm` (Contract | null)
#### `weth` (Contract | null)
#### `lpAppraisor` (Contract | null)
#### `claimsEscrow` (Contract | null)
#### `policyManager` (Contract | null)
#### `products` (Contract | null)
#### `contractSources` (ContractSources[])
#### `products` (SupportedProduct[])
#### `getProtocolByName` (function)
#### `setSelectedProtocolByName` (function)
