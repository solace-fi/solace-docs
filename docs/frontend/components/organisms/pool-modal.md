---
title: PoolModal
---

## Props

### `PoolModalProps`
- **handleClose (function)**: Function to call when closing modal
- **isOpen (boolean)**: Boolean to open modal
- **modalTitle (string)**: String to set title of modal
- **disableCloseButton (boolean)**: Boolean to disable modal close button

## Components

### `PoolModal` (exported)

Props Dependencies:

- **PoolModalProps**

Manager Dependencies:

- **Wallet**: account, chainId, errors, library
- **Contracts**: vault, cpFarm, lpFarm, lpToken
- **CachedData**: addLocalTransactions, reload, gasPrices

Hook Dependencies:

- `useUserStakedValue()`
- `useNativeTokenBalance()`
- `useScpBalance()`
- `useLpBalances()`
- `useTokenAllowance()`
- `useToasts()`

Contract Functions:

- **vault**: approve, deposit, withdraw
- **cpFarm**: depositEth, depositCp, withdrawEth
- **lpFarm**: depositSigned, withdraw

Local Functions:

- **isAppropriateAmount()**: Returns true if the user's amount for a transaction is valid.
- **getAssetBalanceByFunc()**: Returns the available balance of an asset based on the type of transaction the user wants.
- **getAssetTokensByFunc()**: Returns an array of information for each LP token from the user's wallet or in their stake in the farm.
- **calculateMaxEth()**: Return the maximum amount of an asset the user can send minus gas.
- **handleSelectChange(option: GasFeeOption)**: Set selected gas option.
- **handleCallbackFunc()**: Calls contract function based on selected transaction type by the user.
- **handleClose()**: Handle closing modal
- **handleNft**: Set selected NFT and amount. 

Data Refresh:

- **[gasPrices]**: Set selected gas option if one doesn't exist already.
- **[handleSelectChange]**: Calculate maximum amount of assets to be sent minus gas from selected gas option.
- **[isOpen, cpFarm?.address, vault]**: Set contract for allowance, set spender, and set selected NFT.

Additional Functional Components:

- #### `GasRadioGroup`

- #### `AutoStakeOption`

Info: Returns modal to make transactions with a pool.