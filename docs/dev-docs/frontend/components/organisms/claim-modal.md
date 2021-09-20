---
title: ClaimModal
---

## Props

### `ClaimModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `closeModal` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `latestBlock` | number | The latest block number.
| `selectedPolicy` | Policy \| undefined | The currently selected policy.

## Components

### `ClaimModal` (exported)

Props Dependencies:

- `ClaimModalProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`
| Wallet | `activeWalletConnector`
| Contracts | `selectedProtocol`
| CachedData | `gasPrices` , `reload` , `addLocalTransactions` , `userPolicyData`
| Network | `activeNetwork`, `currencyDecimals` , `chainId`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useGetCooldownPeriod()`
- `useWindowDimensions()`
- `useAppraisePosition()`

Contract Functions:

- `submitClaim` : Calls function from product contract to submit claim.

Local Functions:

- `handleClose()` : Handle closing modal

Data Refresh:

- [ `selectedPolicy` ]: get claim assessment

Info: Returns modal to submit claim for a user's policy.