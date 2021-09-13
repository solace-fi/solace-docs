---
title: PoolModal
---

## Props

### `PoolModalProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `handleClose` | function | Function to call when closing modal.
| `isOpen` | boolean | Boolean to open modal.
| `modalTitle` | string | String to set title of modal.
| `disableCloseButton` | boolean | Boolean to disable modal close button.

## Components

### `PoolModal` (exported)

Props Dependencies:

- `PoolModalProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`
| Wallet | `account`, `library` , `activeWalletConnector`
| CachedData | `addLocalTransactions` , `reload` , `gasPrices`
| Contracts | `vault` , `cpFarm` , `lpFarm` , `lpToken`
| Network | `activeNetwork` , `currencyDecimals` , `chainId`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useUserStakedValue()`
- `useNativeTokenBalance()`
- `useScpBalance()`
- `useUserWalletLpBalance()`
- `useDepositedLpBalance()`
- `useTokenAllowance()`
- `useCooldown()`

Contract Functions:

- `callStartCooldown` : Calls vault contract to start the cooldown.
- `callStopCooldown` : Calls vault contract to stop the cooldown.
- `approve` : Calls vault contract to approve amount being transferred.
- `callDeposit` : Calls vault contract to deposit ETH into Risk Backing Capital Pool.
- `callWithdrawEth` : Calls vault contract to withdraw ETH from the vault. User must wait for the cooldown to elapse.
- `callDepositEth` : Calls cpFarm contract to deposit and stake ETH into Capital Provider Pool.
- `callWithdrawCp` : Calls cpFarm contract to withdraw CP from Capital Provider Pool.
- `callDepositCp` : Calls cpFarm contract to deposit SCP tokens into Capital Provider Pool.
- `callDepositLp` : Calls lpFarm contract to deposit LP tokens into Liquidity Provider Pool.
- `callWithdrawLp` : Calls lpFarm contract to withdraw LP tokens from Liquidity Provider Pool.


Local Functions:

- `handleToast(tx: any, localTx: LocalTx)`: Create toast on submitted transaction.
- `handleContractCallError(functionName: string, err: any, txType: FunctionName)`: Contract error handling.
- `isAppropriateAmount()` : Returns true if the user's amount for a transaction is valid.
- `getAssetBalanceByFunc()` : Returns the available balance of an asset based on the type of transaction the user wants.
- `getAssetTokensByFunc()` : Returns an array of information for each LP token from the user's wallet or in their stake in the farm.
- `calculateMaxEth()` : Return the maximum amount of an asset the user can send minus gas.
- `handleSelectChange(option: GasFeeOption)` : Set selected gas option.
- `handleCallbackFunc()` : Calls contract function based on selected transaction type by the user.
- `handleClose()` : Handle closing modal
- `handleNft()` : Set selected NFT and amount. 

Data Refresh:

- [ `gasPrices` ]: Set selected gas option if one doesn't exist already.
- [ `maxSelected` , `handleSelectChange` ]: Calculate maximum amount of assets to be sent minus gas from selected gas option.
- [ `isOpen` , `cpFarm?.address` , `vault`, `userLpTokenInfo` , `depositedLpTokenInfo` , `func` , `currencyDecimals` ]: Set contract for allowance, set spender, and set selected NFT.

Additional Functional Components:

- #### `GasRadioGroup`

- #### `AutoStakeOption`

Info: Returns modal to make transactions with a pool.