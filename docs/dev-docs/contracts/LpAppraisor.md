## `LpAppraisor`






### `constructor(address _governance, address _lpToken, uint256 _curve_A, uint256 _curve_B)` (public)





### `setGovernance(address _governance)` (external)

Allows governance to be transferred to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setCurve(uint256 _curve_A, uint256 _curve_B)` (external)

Modifies the appraisal curve, and with it the incentive structure.




### `appraise(uint256 _tokenId) → uint256 _value` (external)

Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.





### `GovernanceTransferred(address _newGovernance)`





