[Wrapped Ether](https://weth.io/) smart contract. Extends ERC20.


## Functions
### constructor
```solidity
  function constructor(
  ) public
```
Constructs the WETH contract.



### receive
```solidity
  function receive(
  ) external
```
Receive function. Deposits eth.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth.



### deposit
```solidity
  function deposit(
  ) public
```
Wraps Ether. WETH will be minted to the sender at 1 ETH : 1 WETH.



### withdraw
```solidity
  function withdraw(
    uint256 wad
  ) public
```
Unwraps Ether. ETH will be returned to the sender at 1 ETH : 1 WETH.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`wad` | uint256 | Amount to unwrap.

