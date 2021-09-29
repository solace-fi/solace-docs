---
title: TokenPositionCard
---

## Props

### `TokenPositionCardProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `position` | Position | The token position to create a card for.
| `protocolName` | string | The name of the protocol.
| `selectedPositions` | Position[] | Array of selected positions used to check if this token position is selected.
| `userPolicies` | Policy[] | The list of Policy objects.
| `openManageModal` | (policy: Policy) => Promise<void> | Function to open the ManageModal, used in conjunction with `userPolicies` .
| `handleSelect` | (position: Position) => Promise<void> | Function to select or deselect a token position.
| `userHasActiveProductPosition` | (product: string, position: string) => boolean | Function to check if user has this token position active in a policy already.

## Components

### `TokenPositionCard` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `errors`

Hook Dependencies:

- `useWindowDimensions()`

Info: Returns a `PositionCard` object that displays the token's information.
