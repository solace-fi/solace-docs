---
title: "Types"
---

### `NetworkCache` (exported)

```
type NetworkCache = {
  name: string
  chainId: number
  supportedProducts: any
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
  positionContract: string
  expirationBlock: number
  coverAmount: string
  price: string
  status: PolicyState
  positionName: string
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
  tokenIn?: string
  amountIn?: string
  tokenOut?: string
}
```
### `GasFeeListState` (exported)

```
export type GasFeeListState = {
  options: GasFeeOption[]
  loading: boolean
  selected?: GasFeeOption
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
}
```
### `StringToStringMapping` (exported)

```
type StringToStringMapping = { [key: string]: string }
```
### `SupportedProduct` (exported)

```
type SupportedProduct = { name: string; contract: Contract; signer: boolean }
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
export type NetworkConfig = {
  name: string
  chainId: number
  nativeCurrency: {
    symbol: Unit
    decimals: number
  }
  rpc: {
    httpsUrl: string
  }
  explorer: {
    name: 'Etherscan' | 'Polygonscan'
    key: string
    url: string
    apiUrl: string
  }
  config: {
    keyContracts: KeyContracts
    productContracts: any
    functions: {
      getTokens: any
      getBalances: any
    }
  }
  cache: {
    supportedProducts: any
    productsRev: any
    tokens: any
    positions: any
  }
  metamaskChain?: MetamaskAddEthereumChain
  walletConfig: any
}
```

### `KeyContracts` (exported)

```
type KeyContracts = {
  [key: string]: ContractSources
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
