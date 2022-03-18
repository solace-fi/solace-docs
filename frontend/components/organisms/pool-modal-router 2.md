---
title: PoolModalRouter
---

## Props

### `PoolModalProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `func` | [**FunctionName**](/docs/dev-docs/frontend/constants/enums#functionname-exported) | Function name representing a function call.
| `isOpen` | boolean | Boolean to open modal.
| `modalTitle` | string | String to set title of modal.
| `closeModal` | function | Function to close modal.

### `PoolModalRouterProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `func` | [**FunctionName**](/docs/dev-docs/frontend/constants/enums#functionname-exported) | Function name representing a function call.
| `isOpen` | boolean | Boolean to open modal.
| `modalTitle` | string | String to set title of modal.
| `closeModal` | function | Function to close modal.
| `farmName` | string | farm's name for lookup purposes.

### `Erc20InputPanelProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `unit` | [**Unit**](/docs/dev-docs/frontend/constants/enums#unit-exported) | Unit to display on panel.
| `availableBalance` | string | The maximum balance of the asset for this panel.
| `amount` | string | The input amount for this asset to be used.
| `handleInputChange` | function | Function to change amount state based on input.
| `setMax` | function | Function to call a passed in setMax function.

### `Erc721InputPanelProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `unit` | [**Unit**](/docs/dev-docs/frontend/constants/enums#unit-exported) | Unit to display on panel.
| `assetTokens` | NftTokenInfo[] | Array of NftTokenInfo objects.
| `availableBalance` | string | The maximum balance of the asset for this panel.
| `nftSelection` | { value: string; label: string } | The selected nft data field.
| `handleNft` | function | Function to change nftSelection.
| `nftId` | BigNumber | Current nft ID to change.

## Components

### `PoolModalRouter` (exported)

Props Dependencies:

- **PoolModalRouterProps**

Info: Uses a mapping of farmName to the PoolModal, returns corresponding PoolModal component.

### `Erc20InputPanel` (exported)

Props Dependencies:

- **Erc20InputPanelProps**

Info: Returns input interface for upper part of Erc20-based modal.

### `Erc721InputPanel` (exported)

Props Dependencies:

- **Erc721InputPanelProps**

Info: Returns input interface for upper part of Erc721-based modal.

## Hooks

### `usePoolModal` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `library`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices`
| Network | `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetFunctionGas()`

Local functions:

- `isAppropriateAmount (amount: string, assetBalance: BigNumber) => boolean` : Checks if the amount is in acceptable format and is greater than 0 but less than or equal to the assetBalance.

- `handleSelectChange (option: GasFeeOption | undefined) => void` : Sets the selected gas option on selection change.

- `handleToast (tx: any, localTx: LocalTx | null)` : Creates toast after successful contract call.

- `handleContractCallError (functionName: string, err: any, txType: FunctionName)` : Creates toast after failed contract call.

- `calculateMaxEth (balance: BigNumber, func: FunctionName) => boolean` : Return the maximum amount of an asset the user can send minus gas.

- `handleInputChange()` : Sets amount to input.

- `setMax (balance: BigNumber, func: FunctionName) => void` : Sets amount to max.

- `resetAmount()` : Resets amount.

Returns object containing the most common functions and variables for a Pool Modal component. Object includes functions listed above, the amount and gas setting variables.