Enforces access control for important functions to [**governor**](/docs/user-docs/Governance).

Many contracts contain functionality that should only be accessible to a privileged user. The most common access control pattern is [OpenZeppelin's `Ownable`](https://docs.openzeppelin.com/contracts/4.x/access-control#ownership-and-ownable). We instead use `Governable` with a few key differences:
- Transferring the governance role is a two step process. The current governance must [`setGovernance(newGovernance_)`](#setgovernance) then the new governance must [`acceptGovernance()`](#acceptgovernance). This is to safeguard against accidentally setting ownership to the wrong address and locking yourself out of your contract.
- `governance` is a constructor argument instead of `msg.sender`. This is especially useful when deploying contracts via a [`SingletonFactory`](./ISingletonFactory)


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Address of the current governor.



### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```
Address of the governor to take over.



### setGovernance
```solidity
  function setGovernance(
    address newGovernance_
  ) external
```
Initiates transfer of the governance role to a new governor.
Transfer is not complete until the new governor accepts the role.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newGovernance_` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```
Emitted when Governance is set.


