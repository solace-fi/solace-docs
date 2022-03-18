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
| CachedData | `userPolicyData`

Hook Dependencies:

- `useWindowDimensions()`

Info: Returns a table of policies for a user.