---
title: MyPolicies
---

## Props

### `MyPoliciesProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openClaimModal` | any | Function to open Claim modal.
| `openManageModal` | any | Function to open Manage Modal.
| `latestBlock` | [**Block**](https://docs.ethers.io/v5/api/providers/types/#providers-Block) \| undefined | The latest block.
| `depositedPolicyIds` | number[] | Array of policy IDs as numbers.
| `isOpen` | boolean | Indicate if policies accordion should open.
| `setOpen` | any | Function to set `isOpen`

## Components

### `MyPolicies` (exported)

Props Dependencies:

- **MyPoliciesProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork` , `currencyDecimals`
| CachedData | `userPolicyData` , `addLocalTransactions` , `reload`
| Notifications | `makeTxToast`

Hook Dependencies:

- `useWindowDimensions()`
- `useSptFarm()`
- `useGetFunctionGas()`

Contract Functions:
- `callDepositPolicy(policyId: number)` : Deposits a policy based on ID.
- `callWithdrawPolicy(policyId: number)` : Withdraws a policy based on ID.
- `callDepositPolicyMulti()` : Deposits multiple policies.
- `callWithdrawPolicyMulti()` : Withdraws multiple policies.

Local Functions:
- `handleToast (tx: any, localTx: LocalTx | null)` : Creates toast after successful contract call.

- `handleContractCallError (functionName: string, err: any, txType: FunctionName)` : Creates toast after failed contract call.

Info: Returns a table of policies for a user.