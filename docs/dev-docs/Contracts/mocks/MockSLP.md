<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockSLP.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Mock ERC-20 is only used to test the master contract.


## Functions
### constructor
```solidity
  function constructor(
    string name,
    string symbol,
    uint256 supply
  ) public
```
Constructs the Mock Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `name` | string | The name of the token. |
| `symbol` | string | The symbol of the token. |
| `supply` | uint256 | The amount of supply for the token. |

### token0
```solidity
  function token0(
  ) external returns (address token)
```
Returns the first pair token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `token` | address | The address of the first pair token. |

### token1
```solidity
  function token1(
  ) external returns (address token)
```
Returns the second pair token.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `token` | address | The address of the second pair token. |

### getReserves
```solidity
  function getReserves(
  ) external returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)
```
Returns LP token reserves.





