---
title: ManageModal
---

## Props

### `ManageModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `latestBlock` | number | The latest block number.
| `selectedPolicy` | Policy \| undefined | The currently selected policy.

## Components

### `ManageModal` (exported)

Props Dependencies:

- `ManageModalProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices`
| Contracts | `selectedProtocol` , `riskManager`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetPolicyPrice()`
- `useAppraisePosition()`
- `useWindowDimensions()`
- `useGetMaxCoverPerPolicy()`
- `useGasConfig()`

Contract Functions:

- `updatePolicy` : Calls the product contract to update policy.
- `updateCoverAmount` : Calls the product contract to update policy cover amount.
- `extendPolicy` : Calls the product contract to extend policy's time period.
- `cancelPolicy` : Calls the product contract to cancel policy.

Local Functions:

- `handleToast(tx: any, localTx: LocalTx)`: Create toast on submitted transaction.
- `handleContractCallError(functionName: string, err: any, txType: FunctionName)`: Contract error handling.
- `handleCoverageChange(coverAmount: string)` : Set coverage state on interface based on selected cover limit.
- `handleInputCoverage(input: string)` : Set coverage state on interface based on input.
- `filteredTime(input: string)` : Filter time input and set time state.
- `handleClose()` : Reset time state and close modal.
- `handleFunc()` : Calls appropriate policy function based on what values are changed by the user.

Data Refresh:

- [ `isOpen` , `selectedPolicy` , `currentCoverAmount` , `appraisal` ]: Initialize coverage based on the selected user policy, the current covered amount, and the appraisal of the user's position.

Info: Returns modal to make changes to a user's policy.