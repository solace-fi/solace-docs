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
|`farmController` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Farm Controller contract.
|`optionsFarming` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Options Farming contract.
|`vault` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Vault contract.
|`treasury` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Treasury contract.
|`solace` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Solace contract.
|`cpFarm` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Capital Provider Farm contract.
|`lpFarm` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Liquidity Provider Farm contract.
|`registry` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Registry contract.
|`lpToken` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Liquidity Provider Token contract.
|`weth` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | WETH contract.
|`lpAppraisor` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Liquidity Provider Appraisor contract.
|`claimsEscrow` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Claims Escrow contract.
|`policyManager` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Policy Manager contract.
|`riskManager` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null | Risk Manager contract.
|`contractSources` | [**ContractSources**](/docs/dev-docs/frontend/constants/types#contractsources-exported)[] | Array of contract addresses and ABIs.
|`products` | [**ProductContract**](/docs/dev-docs/frontend/constants/types#productcontract-exported)[] | Array of product contracts.
|`selectedProtocol` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| undefined | User selected product contract.
|`getProtocolByName` | function | Get product contract by name.
|`setSelectedProtocolByName` | function | Set `selectedProtocol` by name.