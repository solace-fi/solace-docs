---
title: "Types"
---

### `NetworkCache` (exported)

```
type NetworkCache = {
  name: string
  chainId: number
  positions: PositionsCache
  positionNames: PositionNamesCache
}
```

### `PositionsCache` (exported)

```
type PositionsCache = { [key: string]: PositionsCacheValue }
```

### `PositionNamesCache` (exported)

```
type PositionNamesCache = {
  [key: string]: PositionNamesCacheValue
}
```

### `PositionsCacheValue` (exported)

```
type PositionsCacheValue = { 
  savedPositions: Position[] 
  positionsInitialized: boolean
}
```

### `PositionNamesCacheValue` (exported)

```
type PositionNamesCacheValue = { 
  positionNames: { [key: string]: string }positionNamesInitialized: boolean
}
```

### `ClaimDetails` (exported)

```
type ClaimDetails = { 
  id: string
  cooldown: string
  canWithdraw: boolean
  amount: BigNumber
}
```

### `BasicData` (exported)

```
type BasicData = {
  address: string
  name: string
}
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

### `Position` (exported)

```
type Position = {
  type: PositionsType
  position: Token | LiquityPosition
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

### `LiquityPosition` (exported)
```
type LiquityPosition = {
  positionName: string
  positionAddress: string
  amount: BigNumber
  associatedToken: {
    address: string
    name: string
    symbol: string
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

### `PositionsType` (exported)
```
type PositionsType = 'erc20' | 'liquity' | 'other'
```

### `StringToStringMapping` (exported)

```
type StringToStringMapping = { [key: string]: string }
```
### `SupportedProduct` (exported)

```
type SupportedProduct = {
  name: ProductName
  positionsType: PositionsType
  productLink?: string
  getAppraisals: (tokens: any[], chainId: number) => Promise<BigNumber[]>

  getTokens?: (provider: any, activeNetwork: NetworkConfig) => Promise<Token[]>
  
  getBalances?: (
    user: string,
    provider: any,
    cache: NetworkCache,
    activeNetwork: NetworkConfig,
    tokens: Token[]
  ) => Promise<Token[]>

  getPositions?: any
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