Enforces access control for important functions to [**governor**](/docs/protocol/governance).

Many contracts contain functionality that should only be accessible to a privileged user. The most common access control pattern is [OpenZeppelin's `Ownable`](https://docs.openzeppelin.com/contracts/4.x/access-control#ownership-and-ownable). We instead use `Governable` with a few key differences:
- Transferring the governance role is a two step process. The current governance must [`setPendingGovernance(pendingGovernance_)`](#setPendingGovernance) then the new governance must [`acceptGovernance()`](#acceptgovernance). This is to safeguard against accidentally setting ownership to the wrong address and locking yourself out of your contract.
- `governance` is a constructor argument instead of `msg.sender`. This is especially useful when deploying contracts via a [`SingletonFactory`](./ISingletonFactory).
- We use `lockGovernance()` instead of `renounceOwnership()`. `renounceOwnership()` is a prerequisite for the reinitialization bug because it sets `owner = address(0x0)`. We also use the `governanceIsLocked()` flag.


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Address of the current governor.



### pendingGovernance
```solidity
  function pendingGovernance(
  ) external returns (address)
```
Address of the governor to take over.



### governanceIsLocked
```solidity
  function governanceIsLocked(
  ) external returns (bool)
```
Returns true if governance is locked.



### setPendingGovernance
```solidity
  function setPendingGovernance(
    address pendingGovernance_
  ) external
```
Initiates transfer of the governance role to a new governor.
Transfer is not complete until the new governor accepts the role.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pendingGovernance_` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



### lockGovernance
```solidity
  function lockGovernance(
  ) external
```
Permanently locks this contract's governance role and any of its functions that require the role.
This action cannot be reversed.
Before you call it, ask yourself:
  - Is the contract self-sustaining?
  - Is there a chance you will need governance privileges in the future?
Can only be called by the current [**governor**](/docs/protocol/governance).



## Events
### GovernancePending
```solidity
  event GovernancePending(
  )
```
Emitted when pending Governance is set.


### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```
Emitted when Governance is set.


### GovernanceLocked
```solidity
  event GovernanceLocked(
  )
```
Emitted when Governance is locked.


