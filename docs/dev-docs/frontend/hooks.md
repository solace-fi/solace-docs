---
title: Hooks Reference
---

## useBalance.ts

### `useNativeTokenBalance`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account` , `library` , `connect`
| CachedData | `version`
| Network | `activeNetwork`

Calls getBalance() on the current user's account and returns the ETH balance as a string.

### `useScpBalance`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| CachedData | `version` , `latestBlock`
| Contracts | `vault`
| Network | `activeNetwork`

Calls getBalance() on the current user's account and returns the SCP balance as a string.

### `useSolaceBalance`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| CachedData | `version` , `latestBlock`
| Contracts | `solace`
| Network | `activeNetwork`

Calls getBalance() on the current user's account and returns the SOLACE balance as a string.

### `useUserWalletLpBalance`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| CachedData | `version` , `latestBlock`
| Contracts | `lpToken` , `lpFarm` , `lpAppraisor`

Return the ids and values of LP tokens in the user's wallet as a pair value of arrays.

### `useDepositedLpBalance`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| CachedData | `version` , `latestBlock`
| Contracts | `lpToken` , `lpFarm` , `lpAppraisor`

Return the ids and values of LP tokens in the user's share of the liquidity pool, as a pair value of arrays.

## useClaimsEscrow.ts

### `useGetClaimsDetails`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `claimant` | string \| undefined | Address of user account.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| CachedData | `latestBlock`
| Contracts | `claimsEscrow`

For each claim belonging to a user, return an object containing the time left until it can be withdrawn, the boolean indicating whether it can be withdrawn, and its amount. Afterwards, return all objects as an array.

### `useGetCooldownPeriod`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `claimsEscrow`

Return the current cooldown period as a string.

## useContract.ts

### `useGetContract`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `sources` | ContractSources | The object containing the contract address and ABI.
| `hasSigner` | boolean | Option to create signer for contract.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `library` , `account`

Creates and returns a contract based on its parameters, returns null if the hook fails to create a contract.

### `useGetProductContracts`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `library` , `account`
| Network | `activeNetwork`
| CachedData | `tokenPositionData`

Initializes all product contracts using the addresses and contract ABIs based on the current chain. Returns contract instances as an array.

### `useContractArray`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`

For each contract in the current chain, return an object containing its address and ABI. Afterwards, return all objects as an array.

## useFarm.ts

### `useUserStakedValue`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farm` | Contract \| null \| undefined | Farm contract object.
| `account` | string \| undefined | Address of user account.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| CachedData | `version`
| Network | `currencyDecimals`

Returns the user's staked value for a farm as a string.

### `usePoolStakedValue`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farm` | Contract \| null \| undefined | Farm contract object.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| CachedData | `latestBlock`
| Network | `currencyDecimals`

Returns the staked value for a farm as a string.

### `useGetTotalValueLocked`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `cpFarm` , `lpFarm`
| Network | `currencyDecimals`

Hook Dependencies:
- `usePoolStakedValue()`
- `usePoolStakedValue()`

Adds the staked value of the CP farm and the LP farm and returns the sum as a string.

## useFetchGasPrice.ts

### `useFetchGasPrice`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `chainId`
| CachedData | `version` , `latestBlock`

Fetches gas prices via API from the chain explorer and returns an object containing the gas options, the boolean for loading gas prices, and the currently selected gas option.

## useGetLatestBlockNumber.ts

### `useGetLatestBlockNumber`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `dataVersion` | number | Value that is updated on an interval for controlled refresh.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `library`

Calls getBlockNumber() on the current Web3Provider to get latest block number and returns it as a number.

## useGetter.ts

### `usePolicyGetter`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `getAll` | boolean | Option to get policies for all users or one user.
| `latestBlock` | number | Number of the latest fetched block.
| `dataInit` | boolean | State of the token data initialization.
| `version` | number | Value that is updated by user actions for controlled refresh.
| `policyHolder` (optional) | string | Address of the policy holder.
| `product` (optional) | string | Address of the product contract.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `library` , `isActive`
| Network | `activeNetwork`, `findNetworkByChainId`, `chainId`
| Contracts | `policyManager`

If `policyHolder` is provided as input, all of the user's policies will be retrieved, else all policies regardless of ownership will be retrieved. Return an object containing a boolean for loading policies, the user policies, and all policies.

## useCacheTokens.ts

### `useCacheTokens`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `library`
| Network | `activeNetwork` , `chainId` , `networks` , `findNetworkByChainId`

Hook Dependencies:

- `useSessionStorage()`

Once per chain per session, initialize the token data and position names of all products from that chain if not already. Returns the state of initialization as a boolean and the initialized data itself.

## useInterval.ts

### `useInterval`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `callback` | function | Function to call on the interval.
| `delay` | number \| null | Milliseconds to be set for the interval.

On an interval of milliseconds set by `delay` , call `callback` function.

## usePairPrice.ts

### `usePairPrice`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `networks` , `currencyDecimals`

Fetches pair data between SOLACE and ETH via the Uniswap SDK and returns the price as a string.

## usePolicy.ts

### `useGetPolicyPrice`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyId` | number | ID of the policy.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `selectedProtocol`
| CachedData | `userPolicyData`

Finds the policy from fetched policies whose policy ID matches the input ID and returns its price as a string.

### `useAppraisePosition`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policy` | Policy \| undefined | Policy object.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| wallet | `account`
| Contracts | `getProtocolByName`

Appraises the user's position for a product in a policy and returns the result as a BigNumber.

### `useGetMaxCoverPerUser`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `selectedProtocol`
| Network | `currencyDecimals`

Returns the max cover per user of a product contract as a string.

### `useGetYearlyCosts`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `products` , `getProtocolByName`
| Network | `currencyDecimals`

Gets the price from each product contract and returns the prices as string-to-string mapping, where the keys are the product names, and the values are the prices.

### `useGetAvailableCoverages`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `products` , `getProtocolByName`
| Network | `currencyDecimals`

Gets the available coverage from each product contract and returns the coverages as string-to-string mapping, where the keys are the product names, and the values are the coverages.

### `useGetQuote`

Parameters:

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `coverAmount` | string \| null | Value between 100 and 10000, representing percentage.
| `positionContract` | string \| null | Address of position contract.
| `days` | string | Number of days to get quote for.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `selectedProtocol`
| Wallet | `account`
| Network | `currencyDecimals`

Gets the quote from the product contract `selectedProtocol` and returns it as a string.

## useReload.ts

### `useReload`

Returns an array containing a number value and the function to increment it by 1.

## useRewards.ts

### `useMasterValues`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farmId` | number | ID of the farm.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `master`
| CachedData | `latestBlock`

Returns an object containing the current allocation points, total allocation points, and solace per block from the master contract.

### `useRewardsPerDay`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farmId` | number | ID of the farm.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `currencyDecimals`

Hook Dependencies:
- `useMasterValues()`

Calculate the amount of rewards using values from `useMasterValues` and return it as a string.

### `useUserRewardsPerDay`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farmId` | number | ID of the farm.
| `farm` | Contract \| null \| undefined | Farm contract object.
| `account` | string \| undefined | Address of user account.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `currencyDecimals`

Hook Dependencies:
- `useMasterValues()`
- `usePoolStakedValue()`
- `useUserStakedValue()`

Calculate the user's amount of rewards using values from `useMasterValues` , `usePoolStakedValue` , and `useUserStakedValue` , then return it as a string.

### `useUserPendingRewards`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farm` | Contract \| null \| undefined | Farm contract object.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `master`
| CachedData | `latestBlock`
| Wallet | `account`
| Network | `currencyDecimals`

Fetches the user's pending rewards for a farm and returns it as a string.

### `useTotalPendingRewards`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `cpFarm` , `lpFarm`
| Network | `currencyDecimals`

Hook Dependencies:
- `useUserPendingRewards()`
- `useUserPendingRewards()`

Adds a user's pending rewards from all farms together and return the sum as a string.

## useTokenAllowance.ts

### `useTokenAllowance`

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenContract` | Contract \| null | Token contract object.
| `spender` | string \| null | Address of spender.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| CachedData | `version`
| Wallet | `account` , `library`

Returns the allowance from `tokenContract` for the user as a string.

## useTransactionHistory.ts

### `useFetchTxHistoryByAddress`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `contractSources`
| Wallet | `account`
| CachedData | `deleteLocalTransactions` , `dataVersion`
| Network | `activeNetwork`

Fetches for the transaction history of a user from the explorer, while deleting local transactions whose hashes match those of the transactions fetched.

### `useTransactionDetails`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `contractSources`
| Wallet | `library`
| Network | `activeNetwork`

Hook Dependencies:
- `useFetchTxHistoryByAddress()`

Returns an object containing the transaction history of a user as well as an array of strings that describe the transaction details.

## useVault.ts

### `useCapitalPoolSize`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `vault`
| CachedData | `version` , `latestBlock`
| Network | `currencyDecimals`

Returns the total assets of the vault as a string.

### `useUserVaultDetails`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `vault` , `cpFarm`
| Wallet | `library` , `account`
| Network | `activeNetwork` , `currencyDecimals`
| CachedData | `version`

Hook Dependencies:
- `useScpBalance()`

Returns an object of two strings, where the first is the sum of the user's balance of SCP tokens and user's staked value in the CP farm, and the second is the user's share of the CP farm.

### `useCooldown`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Contracts | `vault`
| Wallet | `account`
| CachedData | `latestblock`

Returns an object of a boolean that indicates if the cooldown had been started, time waited, the minimum cooldown, the maximum cooldown, and a boolean that indicates if the assets can be withdrawn.

## useWindowDimensions.ts

### `useWindowDimensions`

Keeps track of the window's inner width and inner height. Returns them as properties of an object.