# Types

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
  expirationBlock: string
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