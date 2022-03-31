<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/IWETH9.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

[Wrapped Ether](https://weth.io/) smart contract. Extends **ERC20**.


## Functions
### receive
```solidity
  function receive(
  ) external
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### deposit
```solidity
  function deposit(
  ) external
```
Wraps Ether. **WETH** will be minted to the sender at 1 **ETH** : 1 **WETH**.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) external
```
Unwraps Ether. **ETH** will be returned to the sender at 1 **ETH** : 1 **WETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wad` | uint256 | Amount to unwrap. |


## Events
### Deposit
```solidity
  event Deposit(
  )
```
Emitted when **ETH** is wrapped.


### Withdrawal
```solidity
  event Withdrawal(
  )
```
Emitted when **ETH** is unwrapped.


