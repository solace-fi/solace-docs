---
title: CpPoolModal
---

## Components

### `CpPoolModal` (exported)

Props Dependencies:

- [**PoolModalProps**](/docs/dev-docs/frontend/components/organisms/pool-modal-router#poolmodalprops-exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| CachedData | `reload`
| Contracts | `vault` , `cpFarm`
| Network | `activeNetwork` , `currencyDecimals`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useUserStakedValue()`
- `usePoolModal()`
- `useScpBalance()`
- `useTokenAllowance()`
- `useCpFarm()`
- `useVault()`

Contract Functions:

- `approve` : Calls vault contract to approve amount being transferred.
- `callDepositCp` : Calls cpFarm contract to deposit SCP tokens into Capital Provider Pool.
- `callWithdrawCp` : Calls cpFarm contract to withdraw CP from Capital Provider Pool.

Local Functions:

- `handleToast(tx: any, localTx: LocalTx)`: Create toast on submitted transaction.
- `handleContractCallError(functionName: string, err: any, txType: FunctionName)`: Contract error handling.
- `getAssetBalanceByFunc()` : Returns the available balance of an asset based on the type of transaction the user wants.
- `_setMax()` : Calls passed setMax function to set current input amount to max amount.
- `handleCallbackFunc()` : Calls contract function based on selected transaction type by the user.
- `handleClose()` : Handle closing modal.

Info: Returns modal to make transactions with cp pool.