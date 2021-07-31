---
title: MyPolicies
---

## Props

### `MyPoliciesProps`

- **openClaimModal (any)**: Boolean to open Claim modal
- **openManageModal (any)**: Boolean to manage Modal
- **latestBlock (number)**: The latest block number

## Components

### `MyPolicies` (exported)

Props Dependencies:

- `MyPoliciesProps`

Manager Dependencies:
- **Wallet**: `chainId`
- **CachedData**: `userPolicyData`

Local Functions:
- `calculatePolicyExpirationDate (expirationBlock: string)` : Returns a policy's expiration date from its expiration block as a string.

- `shouldWarnUser (policy: Policy)` : Return boolean of whether a user's policy will expire within 1 day.

Info: Returns a table of policies for a user.