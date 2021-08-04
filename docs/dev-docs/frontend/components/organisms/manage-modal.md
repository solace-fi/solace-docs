---
title: ManageModal
---

## Props

### `ManageModalProps`
- **closeModal (function)**: Function to call when closing modal
- **isOpen (boolean)**: Boolean to open modal
- **latestBlock (number)**: The latest block number
- **selectedPolicy (Policy | undefined)**: The currently selected product contract

## Components

### `UpdatePolicySec`

Info: Grid component for Update Policy section.

### `CancelPolicySec`

Info: Grid component for Cancel Policy section.

### `ManageModal` (exported)

Props Dependencies:

- `ManageModalProps`

Manager Dependencies:

- **Wallet**: `errors`
- **CachedData**: `addLocalTransactions` , `reload` , `gasPrices`
- **Contracts**: `selectedProtocol`

Hook Dependencies:

- `useToasts()`
- `useGetCancelFee()`
- `useGetPolicyPrice(selectedPolicy ? selectedPolicy.policyId : 0)`
- `useAppraisePosition(selectedPolicy)`
- `useGetQuote()`

Contract Functions:

- `extendPolicy` : Calls the product contract to extend policy's time period.
- `cancelPolicy` : Calls the product contract to cancel policy.

Local Functions:

- `initCoverage()` : Initialize coverage state on interface.
- `handleCoverageChange(coverageLimit: string)` : Set coverage state on interface based on selected cover limit.
- `handleInputCoverage(input: string)` : Set coverage state on interface based on input.
- `filteredTime(input: string)` : Filter time input and set time state.
- `handleClose()` : Reset time state and close modal.

Data Refresh:

- [ `isOpen` , `selectedPolicy` , `appraisal` ]: Initialize coverage based on the selected user policy and the appraisal of the user's position.

Info: Returns modal to make changes to a user's policy.