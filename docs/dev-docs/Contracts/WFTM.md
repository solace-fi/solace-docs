<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/WFTM.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

[Wrapped Fantom](https://weth.io/) smart contract. Extends **ERC20**.


## Functions
### constructor
```solidity
  function constructor() public
```
Constructs the **WFTM** contract.



### receive
```solidity
  function receive() external
```
Wraps Fantom. **WFTM** will be minted to the sender at 1 **FTM** : 1 **WFTM**.



### fallback
```solidity
  function fallback() external
```
Wraps Fantom. **WFTM** will be minted to the sender at 1 **FTM** : 1 **WFTM**.



### deposit
```solidity
  function deposit() public
```
Wraps Fantom. **WFTM** will be minted to the sender at 1 **FTM** : 1 **WFTM**.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) public
```
Unwraps Fantom. **FTM** will be returned to the sender at 1 **FTM** : 1 **WFTM**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wad` | uint256 | Amount to unwrap. |


