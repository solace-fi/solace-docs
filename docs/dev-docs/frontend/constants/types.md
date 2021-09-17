---
title: "Types"
---

### `NetworkCache` (exported)

```
type NetworkCache = {
  name: string
  chainId: number
  tokens: any
  positions: any
}
```

### `ClaimDetails` (exported)

```
type ClaimDetails = { id: string; cooldown: string; canWithdraw: boolean; amount: BigNumber }
```
### `Policy` (exported)

```
type Policy = {
  policyId: number
  policyHolder: string
  productAddress: string
  productName: string
  positionDescription: string
  positionNames: string[]
  expirationBlock: number
  coverAmount: string
  price: string
  status: PolicyState
  claimAssessment?: ClaimAssessment
}
```
### `TokenInfo` (exported)

```
type TokenInfo = {
  address: string
  name: string
  symbol: string
  decimals: number
  balance: BigNumber
}
```
### `LpTokenInfo` (exported)

```
LpTokenInfo = {
  id: BigNumber
  value: BigNumber
}
```
### `Token` (exported)

```
type Token = {
  token: {
    address: string
    name: string
    symbol: string
    decimals: number
    balance: BigNumber
  }
  underlying: {
    address: string
    name: string
    symbol: string
    decimals: number
    balance: BigNumber
  }
  eth: {
    balance: BigNumber
  }
}
```
### `ClaimAssessment` (exported)

```
type ClaimAssessment = {
  lossEventDetected: boolean
  amountOut: string
  deadline: string
  msgHash: string
  signature: string
}
```
### `GasFeeListState` (exported)

```
export type GasFeeListState = {
  options: GasFeeOption[]
  loading: boolean
  selected?: GasFeeOption
  suggestedBaseFee?: number
}
```
### `GasFeeOption` (exported)

```
type GasFeeOption = {
  key: string
  name: string
  value: number
}
```
### `GasPriceResult` (exported)

```
GasPriceResult = {
  veryFast: number
  fast: number
  average: number
  safeLow: number
  suggestedBaseFee?: number
}
```
### `StringToStringMapping` (exported)

```
type StringToStringMapping = { [key: string]: string }
```
### `SupportedProduct` (exported)

```
type SupportedProduct = {
  name: ProductName
  getTokens: (provider: any, activeNetwork: NetworkConfig) => Promise<Token[]>
  getBalances: (
    user: string,
    provider: any,
    cache: NetworkCache,
    activeNetwork: NetworkConfig,
    tokens: Token[]
  ) => Promise<Token[]>
}
```

### `ProductContract` (exported)

```
type ProductContract = {
  name: ProductName
  contract?: Contract
}
```

### `ContractSources` (exported)

```
type ContractSources = { addr: string; abi: any }
```
### `WindowDimensions` (exported)

```
type WindowDimensions = {
  width: number
  height: number
}
```
### `LocalTx` (exported)

```
type LocalTx = {
  hash: any
  type: string
  value: string
  status: TransactionCondition
  unit: Unit
}
```

### `NetworkConfig` (exported)

```
type NetworkConfig = {
name: string
  chainId: number
  isTestnet: boolean
  supportedTxTypes: number[]
  nativeCurrency: {
    symbol: Unit
    decimals: number
  }
  rpc: {
    httpsUrl: string
    pollingInterval: number
  }
  explorer: {
    name: 'Etherscan' | 'Polygonscan'
    key: string
    url: string
    apiUrl: string
    excludedContractAddrs: string[]
  }
  config: {
    keyContracts: {
      [key: string]: ContractSources
    }
    productContracts: {
      [key: string]: ContractSources
    }
    productsRev: {
      [key: string]: ProductName
    }
  }
  cache: {
    supportedProducts: SupportedProduct[]
  }
  metamaskChain?: MetamaskAddEthereumChain
  walletConfig: any
}
```

### `MetamaskAddEthereumChain` (exported)

```
type MetamaskAddEthereumChain = {
  chainId: string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls: string[]
}
```

### `MetamaskSwitchEthereumChain` (exported)

```
type MetamaskSwitchEthereumChain = {
  chainId: string
}
```

### `MetamaskWatchAsset` (exported)

```
type MetamaskWatchAsset = {
  type: string
  options: {
    address: string
    symbol: string
    decimals: number
  }
}
```

### `ErrorData` (exported)

```
type MetamaskWatchAsset = {
  type: Error
  metadata: string
  uniqueId: string
}
```

### `SystemNoticeData` (exported)

```
type MetamaskWatchAsset = {
  type: SystemNotice
  metadata: string
  uniqueId: string
}
```