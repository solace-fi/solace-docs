## `RiskManager`






### `constructor(address _governance, address _registry)` (public)

Constructs the risk manager contract.




### `setGovernance(address _governance)` (external)

Allows governance to be transferred to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setProductWeights(address[] _products, uint32[] _weights)` (external)

Sets the products and their weights.
Can only be called by the current governor.




### `maxCoverAmount(address _product) → uint256` (external)

The maximum amount of cover that a product can sell.




### `minCapitalRequirement() → uint256` (external)

The minimum amount of capital required to safely cover all policies.




