<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/BlockGetter.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Used to get information about the chain. Useful in situations where chain manipulation results in the wrong results being returned.


## Functions
### getBlockNumber
```solidity
  function getBlockNumber(
  ) external returns (uint256 num)
```
Returns the elevation of the latest block in the chain.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `num` | uint256 | The block number. |

