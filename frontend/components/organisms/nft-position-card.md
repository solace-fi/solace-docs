---
title: NftPositionCard
---

## Props

### `NftPositionCardProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `position` | [**Position**](/docs/dev-docs/frontend/constants/types#position-exported) | The token position to create a card for.
| `protocolName` | string | The name of the protocol.
| `selectedPositions` | [**Position**](/docs/dev-docs/frontend/constants/types#position-exported)[] | Array of selected positions used to check if this token position is selected.
| `userPolicies` | [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported)[] | The list of Policy objects.
| `openManageModal` | (policy: [**Policy**](/docs/dev-docs/frontend/constants/types#policy-exported)) => Promise | Function to open the ManageModal, used in conjunction with `userPolicies` .
| `handleSelect` | (position: [**Position**](/docs/dev-docs/frontend/constants/types#position-exported)) => Promise | Function to select or deselect a token position.

## Components

### `NftPositionCard` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`

Hook Dependencies:

- `useWindowDimensions()`

Info: Returns a [**PositionCard**](/docs/dev-docs/frontend/components/atoms/Card#positioncard-exported) object that displays the NFT's information.
