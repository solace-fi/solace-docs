---
title: ClaimModal
---

## Props

### `ClaimModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `latestBlock` | [**Block**](https://docs.ethers.io/v5/api/providers/types/#providers-Block) \| undefined | The latest block.
| `selectedPolicy` | [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported) \| undefined | The currently selected policy.
| isPolicyStaked | boolean | Indicate whether this policy is staked.
## Components

### `ClaimModal` (exported)

Props Dependencies:

- **ClaimModalProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Contracts | `selectedProtocol`
| CachedData | `reload` , `addLocalTransactions` , `userPolicyData`
| Network | `activeNetwork`, `currencyDecimals` , `chainId`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetCooldownPeriod()`
- `useWindowDimensions()`
- `useAppraisePolicyPosition()`
- `useGetFunctionGas()`
- `useSptFarm()`

Contract Functions:

- `submitClaim` : Calls function from product contract to submit claim.

- `callWithdrawPolicy` : Calls function from product contract to withdraw staked policy.

Local Functions:

- `handleToast (tx: any, localTx: LocalTx | null)` : Creates toast after successful contract call.

- `handleContractCallError (functionName: string, err: any, txType: FunctionName)` : Creates toast after failed contract call.

- `handleClose()` : Handle closing modal

Info: Returns modal to submit claim for a user's policy.