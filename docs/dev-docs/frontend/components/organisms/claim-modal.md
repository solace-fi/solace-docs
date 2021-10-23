---
title: ClaimModal
---

## Props

### `ClaimModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `latestBlock` | Block \| undefined | The latest block.
| `selectedPolicy` | [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported) \| undefined | The currently selected policy.

## Components

### `ClaimModal` (exported)

Props Dependencies:

- `ClaimModalProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Contracts | `selectedProtocol`
| CachedData | `gasPrices` , `reload` , `addLocalTransactions` , `userPolicyData`
| Network | `activeNetwork`, `currencyDecimals` , `chainId`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetCooldownPeriod()`
- `useWindowDimensions()`
- `useAppraisePolicyPosition()`
- `useGasConfig()`

Contract Functions:

- `submitClaim` : Calls function from product contract to submit claim.

Local Functions:

- `handleClose()` : Handle closing modal

Info: Returns modal to submit claim for a user's policy.