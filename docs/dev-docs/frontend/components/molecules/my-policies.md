---
title: MyPolicies
---

## Props

### `MyPoliciesProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `openClaimModal` | any | Function to open Claim modal.
| `openManageModal` | any | Function to open Manage Modal.
| `latestBlock` | number | The latest block number.

## Components

### `MyPolicies` (exported)

Props Dependencies:

- `MyPoliciesProps`

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `chainId`
| CachedData | `userPolicyData`

Local Functions:
- `calculatePolicyExpirationDate (expirationBlock: string)` : Returns a policy's expiration date from its expiration block as a string.

- `shouldWarnUser (policy: Policy)` : Return boolean of whether a user's policy will expire within 1 day.

Info: Returns a table of policies for a user.