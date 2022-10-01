<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/WMATIC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Wrapped Matic smart contract. Extends **ERC20**.


## Functions
### constructor
```solidity
  function constructor() public
```
Constructs the **WMATIC** contract.



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
  function deposit() public
```
Wraps Matic. **WMATIC** will be minted to the sender at 1 **MATIC** : 1 **WMATIC**.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) public
```
Unwraps Matic. **MATIC** will be returned to the sender at 1 **MATIC** : 1 **WMATIC**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wad` | uint256 | Amount to unwrap. |


