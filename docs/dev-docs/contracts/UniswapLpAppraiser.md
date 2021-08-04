## `UniswapLpAppraiser`

Determines the value of Uniswap V3 LP NFTs.
The value of a Uniswap V3 LP NFT is the amount of liquidity provided multiplied by a relative value for the pool.
If it was not deposited into a pool that we do not care to incentivize, it's value is zero.
We note that there exist more elaborate value metrics such as the tick range of the position.
We expect Liquidity Providers to behave rationally thus liquidity is a sufficient metric.




### `constructor(address _contract)` (public)

Constructs the Uniswap LP Appraiser contract.




### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setPoolValue(address _token0, address _token1, uint24 _fee, uint256 _value)` (external)

Changes a pools value.
Can only be called by the current governor.




### `appraise(uint256 _tokenId) → uint256` (external)

Appraises an NFT.





