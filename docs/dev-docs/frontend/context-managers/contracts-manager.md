---
sidebar_position: 6
---

# ContractsManager

The Manager in charge of making all smart contracts accessible throughout the app.

## How does it work?

All the smart contracts are initialized using the hooks `useGetContract` and `useGetProductContracts`. Since the web app operates on multiple chains, the contracts depend on the `chainId` from WalletManager for reinitialization.

While the core contracts are initialized via `useGetContract` , the product contracts are handled seperately via `useGetProductContracts` because there will be chains that have a different number of products available.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`

Hook Dependencies:
- `useContractArray()`
- `useGetContract()`
- `useGetProductContracts()`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`master` | Contract \| null | Master contract.
|`vault` | Contract \| null | Vault contract.
|`treasury` | Contract \| null | Treasury contract.
|`solace` | Contract \| null | Solace contract.
|`cpFarm` | Contract \| null | Capital Provider Farm contract.
|`lpFarm` | Contract \| null | Liquidity Provider Farm contract.
|`registry` | Contract \| null | Registry contract.
|`lpToken` | Contract \| null | Liquidity Provider Token contract.
|`weth` | Contract \| null | WETH contract.
|`lpAppraisor` | Contract \| null | Liquidity Provider Appraisor contract.
|`claimsEscrow` | Contract \| null | Claims Escrow contract.
|`policyManager` | Contract \| null | Policy Manager contract.
|`riskManager` | Contract \| null | Risk Manager contract.
|`contractSources` | ContractSources[] | Array of contract addresses and ABIs.
|`products` | ProductContract[] | Array of product contracts.
|`selectedProtocol` | Contract \| undefined | User selected product contract.
|`getProtocolByName` | function | Get product contract by name.
|`setSelectedProtocolByName` | function | Set `selectedProtocol` by name.