<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/IWMATIC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Wrapped Matic smart contract. Extends **ERC20**.


## Functions
### receive
```solidity
  function receive() external
```
Wraps Matic. **WMATIC** will be minted to the sender at 1 **MATIC** : 1 **WMATIC**.



### fallback
```solidity
  function fallback() external
```
Wraps Matic. **WMATIC** will be minted to the sender at 1 **MATIC** : 1 **WMATIC**.



### deposit
```solidity
  function deposit() external
```
Wraps Matic. **WMATIC** will be minted to the sender at 1 **MATIC** : 1 **WMATIC**.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) external
```
Unwraps Matic. **MATIC** will be returned to the sender at 1 **MATIC** : 1 **WMATIC**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wad` | uint256 | Amount to unwrap. |


## Events
### Deposit
```solidity
  event Deposit()
```
Emitted when **MATIC** is wrapped.


### Withdrawal
```solidity
  event Withdrawal()
```
Emitted when **MATIC** is unwrapped.


