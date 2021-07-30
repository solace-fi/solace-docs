---
id: about
title: Hooks Reference
---

## useBalance.ts

### `useNativeTokenBalance`

Manager Dependencies: 
- **Wallet**: account, library, connect
- **CachedData**: version

Calls getBalance() on the current user's account and returns the ETH balance as a string.

### `useScpBalance`

Manager Dependencies: 
- **Wallet**: account
- **CachedData**: version, latestBlock
- **Contracts**: vault

Calls getBalance() on the current user's account and returns the SCP balance as a string.

### `useSolaceBalance`

Manager Dependencies: 
- **Wallet**: account
- **CachedData**: version, latestBlock
- **Contracts**: solace

Calls getBalance() on the current user's account and returns the SOLACE balance as a string.

### `useLpBalances`

Manager Dependencies:
- **Wallet**: account
- **CachedData**: version, latestBlock
- **Contracts**: lpToken, lpFarm, lpAppraisor

Return the ids and values of LP tokens in the user's wallet and from their share of the liquidity pool, as a pair value of arrays.

## useClaimsEscrow.ts

### `useGetClaimsDetails`

Parameters:
- **claimant**: (string | undefined)

Manager Dependencies:
- **CachedData**: latestBlock
- **Contracts**: claimsEscrow

For each claim belonging to a user, return an object containing the time left until it can be withdrawn, the boolean indicating whether it can be withdrawn, and its amount. Afterwards, return all objects as an array.

### `useGetCooldownPeriod`

Manager Dependencies:
- **Contracts**: claimsEscrow

Return the current cooldown period as a string.

## useContract.ts

### `useGetContract`

Parameters:
- **address**: (string)
- **abi**: (any)
- **hasSigner**: (boolean)

Manager Dependencies:
- **Wallet**: library, account

Creates and returns a contract based on its parameters, returns null if the hook fails to create a contract.

### `useGetProductContracts`

Manager Dependencies:
- **Wallet**: library, account, chainId

Initializes all product contracts using the addresses and contract ABIs based on the current chain. Returns contract instances as an array.

### `useContractArray`

Manager Dependencies:
- **Wallet**: chainId

For each contract in the current chain, return an object containing its address and ABI. Afterwards, return all objects as an array.

## useFarm.ts

### `useUserStakedValue`

Parameters:
- **farm**: (Contract | null | undefined)
- **account**: (string | undefined)

Manager Dependencies:
- **CachedData**: version

Returns the user's staked value for the farm passed into its parameters as a string.

### `usePoolStakedValue`

Parameters:
- **farm**: (Contract | null | undefined)

Manager Dependencies:
- **CachedData**: latestBlock

Returns the staked value for the farm passed into its parameters as a string.

### `useGetTotalValueLocked`

Manager Dependencies:
- **Contracts**: cpFarm, lpFarm

Hook Dependencies:
- `usePoolStakedValue(cpFarm)`
- `usePoolStakedValue(lpFarm)`

Adds the staked value of the CP farm and the LP farm and returns the sum as a string.

## useFetchGasPrice.ts

### `useFetchGasPrice`

Manager Dependencies:
- **Wallet**: chainId
- **CachedData**: version, latestBlock

Fetches gas prices via API from the chain explorer and returns an object containing the gas options, the boolean for loading gas prices, and the currently selected gas option.

## useGetLatestBlockNumber.ts

### `useGetLatestBlockNumber`

Parameters:
- **dataVersion**: (number)

Manager Dependencies:
- **Wallet**: library

Calls getBlockNumber() on the current Web3Provider to get latest block number and returns it as a number.

## useGetter.ts

### `usePolicyGetter`

Parameters:
- **getAll**: (boolean)
- **latestBlock**: (number)
- **dataInit**: (boolean)
- **version**: (number)
- **policyHolder**?: (string)
- **product**?: (string)

Manager Dependencies:
- **Wallet**: library, chainId, isActive
- **Contracts**: policyManager

If `policyHolder` is provided as input, all of the user's policies will be retrieved, else all policies regardless of ownership will be retrieved. Return an object containing a boolean for loading policies, the user policies, and all policies.

## useGetTokens.ts

### `useGetTokens`

Manager Dependencies:
- **Wallet**: library, chainId

Once per chain, initialize the token data and position names of all products from that chain if not already.

## useInterval.ts

### `useInterval`

Parameters:
- **callback**: (function)
- **delay**: (number | null)

On an interval of milliseconds set by `delay`, call `callback` function.

## usePairPrice.ts

### `usePairPrice`

Fetches pair data between SOLACE and ETH via the Uniswap SDK and returns the price as a string.

## usePolicy.ts

### `useGetPolicyPrice`

Parameters:
- **policyId**: (number)

Manager Dependencies:
- **Contracts**: selectedProtocol
- **CachedData**: userPolicyData

Finds the policy from `userPolicyData` whose policy id matches `policyId` and returns its price as a string.

### `useAppraisePosition`

Parameters:
- **policy**: (Policy | undefined)

Manager Dependencies:
- **wallet**: account
- **Contracts**: getProtocolByName

Appraises the user's position for a product and returns the result as a BigNumber.

### `useGetMaxCoverPerUser`

Manager Dependencies:
- **Contracts**: selectedProtocol

Returns the max cover per user of a product contract as a string.

### `useGetCancelFee`

Manager Dependencies:
- **Contracts**: selectedProtocol

Returns the cancellation fee of a product contract as a string.

### `useGetYearlyCosts`

Manager Dependencies:
- **Contracts**: products, getProtoocolByName

Gets the price from each product contract and returns the prices as string-to-string mapping, where the keys are the product names, and the values are the prices.

### `useGetYearlyCosts`

Manager Dependencies:
- **Contracts**: products, getProtoocolByName

Gets the available coverage from each product contract and returns the coverages as string-to-string mapping, where the keys are the product names, and the values are the coverages.

### `useGetQuote`

Parameters:
- **coverLimit**: (string | null)
- **positionContract**: (string | null)
- **days**: (string)

Manager Dependencies:
- **Contracts**: selectedProtocol
- **Wallet**: account

Gets the quote from the product contract `selectedProtocol` and returns it as a string.

## useReload.ts

### `useReload`

Returns an array containing a number value and the function to increment it by 1.

## useRewards.ts

### `useMasterValues`

Parameters:
- **farmId**: (number)

Manager Dependencies:
- **Contracts**: master
- **CachedData**: latestBlock

Returns an object containing the current allocation points, total allocation points, and solace per block from the master contract.

### `useRewardsPerDay`

Parameters:
- **farmId**: (number)

Hook Dependencies:
- `useMasterValues(farmId)`

Calculate the amount of rewards using values from `useMasterValues` and return it as a string.

### `useUserRewardsPerDay`

Parameters:
- **farmId**: (number)
- **farm**: (Contract | null | undefined)
- **account**: (string | undefined)

Hook Dependencies:
- `useMasterValues(farmId)`
- `usePoolStakedValue(farm)`
- `useUserStakedValue(farm, account)`

Calculate the user's amount of rewards using values from `useMasterValues`, `usePoolStakedValue(farm)`, and `useUserStakedValue(farm, account)`, then return it as a string.

### `useUserPendingRewards`

Parameters:
- **farm**: (Contract | null | undefined)

Manager Dependencies:
- **Contracts**: master
- **CachedData**: latestBlock
- **Wallet**: account

Fetches the user's pending rewards for a farm and returns it as a string.

### `useTotalPendingRewards`

Manager Dependencies:
- **Contracts**: cpFarm, lpFarm

Hook Dependencies:
- **useUserPendingRewards(cpFarm)**
- **useUserPendingRewards(lpFarm)**

Adds a user's pending rewards from all farms together and return the sum as a string.

## useTokenAllowance.ts

### `useTokenAllowance`

Parameters:
- **tokenContract**: (Contract | null)
- **spender**: (string | null)

Manager Dependencies:
- **CachedData**: version
- **Wallet**: account, library

Returns the allowance from `tokenContract` for the user as a string.

## useTransactionHistory.ts

### `useFetchTxHistoryByAddress`

Manager Dependencies:
- **Contracts**: contractSources
- **Wallet**: chainId, account
- **CachedData**: deleteLocalTransactions, dataVersion

Fetches for the transaction history of a user from the explorer, while deleting local transactions whose hashes match those of the transactions fetched.

### `useTransactionDetails`

Manager Dependencies:
- **Contracts**: contractSources
- **Wallet**: chainId, library

Hook Dependencies:
- **useFetchTxHistoryByAddress()**

Returns an object containing the transaction history of a user as well as an array of strings that describe the transaction details.

## useVault.ts

### `useCapitalPoolSize`

Manager Dependencies:
- **Contracts**: vault
- **CachedData**: version, latestBlock

Returns the total assets of the vault as a string.

### `useUserVaultDetails`

Manager Dependencies:
- **Contracts**: vault, cpFarm
- **Wallet**: library, account

Hook Dependencies:
- **useScpBalance()**

Returns an object of two strings, where the first is the sum of the user's balance of SCP tokens and user's staked value in the CP farm, and the second is the user's share of the CP farm.

## useWindowDimensions.ts

### `useWindowDimensions`

Keeps track of the window's inner width and inner height. Returns them as properties of an object.