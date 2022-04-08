<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockGovernableInitializable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Enforces access control for important functions to [**governor**](/docs/protocol/governance).

Many contracts contain functionality that should only be accessible to a privileged user. The most common access control pattern is [OpenZeppelin's `Ownable`](https://docs.openzeppelin.com/contracts/4.x/access-control#ownership-and-ownable). We instead use `Governable` with a few key differences:
- Transferring the governance role is a two step process. The current governance must [`setPendingGovernance(pendingGovernance_)`](#setPendingGovernance) then the new governance must [`acceptGovernance()`](#acceptgovernance). This is to safeguard against accidentally setting ownership to the wrong address and locking yourself out of your contract.
- `governance` is a constructor argument instead of `msg.sender`. This is especially useful when deploying contracts via a [`SingletonFactory`](./interfaces/ISingletonFactory).
- We use `lockGovernance()` instead of `renounceOwnership()`. `renounceOwnership()` is a prerequisite for the reinitialization bug because it sets `owner = address(0x0)`. We also use the `governanceIsLocked()` flag.


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the governable contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |

### doThing
```solidity
  function doThing(
  ) external
```





