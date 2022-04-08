<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/IApprovalReceiver.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An interface that receives notice of token approval events per the [`ERC-677` standard](https://github.com/ethereum/EIPs/issues/677).


## Functions
### onTokenApproval
```solidity
  function onTokenApproval(
    address from,
    uint256 amount,
    bytes data
  ) external returns (bool success)
```
Called by the token contract after tokens are approved from another account to this contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | The token sender. |
| `amount` | uint256 | The amount of tokens approved. |
| `data` | bytes | Free form calldata. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `success` | bool | True if the execution was successful. |

