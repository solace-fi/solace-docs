---
title: MyInvestments
---

## Components

### `MyInvestments` (exported)

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Wallet | `account`
| Contracts | `cpFarm` , `lpFarm`
| Network | `activeNetwork `

Hook Dependencies:
- `useUserPendingRewards()`
- `useUserRewardsPerDay()`
- `useUserStakedValue()`

Info: Returns a card container of the user's investments in cards.