<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/WETH9.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

[Wrapped Ether](https://weth.io/) smart contract. Extends **ERC20**.


## Functions
### constructor
```solidity
  function constructor() public
```
Constructs the **WETH** contract.



### receive
```solidity
  function receive() external
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### fallback
```solidity
  function fallback() external
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### deposit
```solidity
  function deposit() public
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) public
```
Unwraps Ether. **ETH** will be returned to the sender at 1 **ETH** : 1 **WETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wad` | uint256 | Amount to unwrap. |


