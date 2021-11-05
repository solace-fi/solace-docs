---
title: "Types and Interfaces"
---

## Types

### `NetworkCache` (exported)

```
type NetworkCache = {
  chainId: number
  positionsCache: PositionsCache
  positionNamesCache: PositionNamesCache
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
type PositionsCacheValue = { positions: Position[]; init: boolean }
```

### `PositionNamesCacheValue` (exported)

```
type PositionNamesCacheValue = {
  positionNames: { [key: string]: string }
  underlyingPositionNames: { [key: string]: string[] }
  init: boolean
}
```

### `ClaimDetails` (exported)

```
type ClaimDetails = { id: string; cooldown: string; canWithdraw: boolean; amount: BigNumber }
```

### `BasicData` (exported)

```
type BasicData = {
  address: string
  name: string
}
```

### `Option` (exported)

```
type Option = {
  id: BigNumber
  rewardAmount: BigNumber
  strikePrice: BigNumber
  expiry: BigNumber
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
  underlyingPositionNames: string[]
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
### `NftTokenInfo` (exported)

```
type NftTokenInfo = {
  id: BigNumber
  value: BigNumber
}
```

### `GasConfiguration` (exported)

```
type GasConfiguration =
  | {
      maxFeePerGas?: undefined
      type?: undefined
      gasPrice?: undefined
    }
  | {
      maxFeePerGas: number
      type: number
      gasPrice?: undefined
    }
  | {
      gasPrice: number
      maxFeePerGas?: undefined
      type?: undefined
    }
```

### `Position` (exported)

```
type Position = {
  type: PositionType
  position: Token | LiquityPosition
}
```

### `TokenData` (exported)
```
type TokenData = {
  address: string
  name: string
  symbol: string
  decimals: number
  balance: BigNumber
}
```

### `Token` (exported)

```
type Token = {
  token: TokenData
  underlying: TokenData[]
  eth: {
    balance: BigNumber
  }
  tokenType: 'token' | 'nft'
  metadata?: any
}
```

### `LiquityPosition` (exported)
```
type LiquityPosition = {
  positionName: string
  positionAddress: string
  amount: BigNumber
  nativeAmount: BigNumber
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
type GasPriceResult = {
  fast: number
  proposed: number
  safe: number
  suggestBaseFee?: number
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
  positionsType: PositionType
  productLink?: string
    gasLimits?: {
    [key: number]: {
      [key: string]: number
    }
  }
  supportedSubProducts?: {
    [key: number]: string[]
  }
  getTokens?: {
    [key: number]: (provider: any, activeNetwork: NetworkConfig, metadata?: any) => Promise<Token[]>
  }
  getBalances?: {
    [key: number]: (user: string, provider: any, activeNetwork: NetworkConfig, tokens: Token[]) => Promise<Token[]>
  }
  getPositions?: {
    [key: number]: any
  }
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
type SystemNoticeData = {
  type: SystemNotice
  metadata: string
  uniqueId: string
}
```

## Interfaces

### `WalletConnector` (exported)
```
interface WalletConnector {
  name: string
  id: string
  logo: string
  supportedTxTypes: number[]
  getConnector(network: NetworkConfig, args?: Record<string, any>): AbstractConnector
  onConnect?(connector: AbstractConnector, args?: Record<string, any>): void
  onDisconnect?(connector?: AbstractConnector): void
  onError(error: Error): Error | undefined
}
```