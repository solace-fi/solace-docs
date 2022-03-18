---
title: ManageModal
---

## Props

### `ManageModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `latestBlock` | [**Block**](https://docs.ethers.io/v5/api/providers/types/#providers-Block) \| undefined | The latest block.
| `selectedPolicy` | [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported) \| undefined | The currently selected policy.
| isPolicyStaked | boolean | Indicate whether this policy is staked.

## Components

### `ManageModal` (exported)

Props Dependencies:

- **ManageModalProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| CachedData | `addLocalTransactions` , `reload`
| Contracts | `selectedProtocol` , `riskManager`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetPolicyPrice()`
- `useAppraisePolicyPosition()`
- `useWindowDimensions()`
- `useGetMaxCoverPerPolicy()`
- `useGetFunctionGas()`

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
- `setMaxCover()` : Set coverage state equal to the max coverage per policy.
- `setPositionCover()` : Set coverage state equal to user's position amount.

Info: Returns modal to make changes to a user's policy.