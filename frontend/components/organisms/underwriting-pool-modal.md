---
title: UndewritingPoolModal
---

## Components

### `UndewritingPoolModal` (exported)

Props Dependencies:

- [**PoolModalProps**](/docs/dev-docs/frontend/components/organisms/pool-modal-router#poolmodalprops-exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Network | `activeNetwork` , `currencyDecimals`

Hook Dependencies:

- `useNativeTokenBalance()`
- `useScpBalance()`
- `useWindowDimensions()`
- `usePoolModal()`
- `useVault()`
- `useCpFarm()`

Contract Functions:

- `callStartCooldown` : Calls vault contract to start the cooldown.
- `callStopCooldown` : Calls vault contract to stop the cooldown.
- `callDeposit` : Calls vault contract to deposit ETH into Risk Backing Capital Pool.
- `callDepositEth` : Calls cpFarm contract to deposit and stake ETH into Capital Provider Pool.
- `callWithdrawEth` : Calls vault contract to withdraw ETH from the vault. User must wait for the cooldown to elapse.



Local Functions:

- `handleToast(tx: any, localTx: LocalTx)`: Create toast on submitted transaction.
- `handleContractCallError(functionName: string, err: any, txType: FunctionName)`: Contract error handling.
- `getAssetBalanceByFunc()` : Returns the available balance of an asset based on the type of transaction the user wants.
- `_setMax()` : Calls passed setMax function to set current input amount to max amount.
- `calculateMaxEth()` : Return the maximum amount of an asset the user can send minus gas.
- `handleClose()` : Handle closing modal

Additional Functional Components:

- #### `AutoStakeOption`

- #### `UnderwritingForeword`

- #### `CooldownForword`

Info: Returns modal to make transactions with the underwriting pool.