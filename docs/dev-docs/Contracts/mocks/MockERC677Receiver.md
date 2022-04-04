<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockERC677Receiver.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A mock contract that receives notice of token events per the [`ERC-677` standard](https://github.com/ethereum/EIPs/issues/677).


## Functions
### onTokenTransfer
```solidity
  function onTokenTransfer(
    address from,
    uint256 amount,
    bytes data
  ) external returns (bool success)
```
Called by the token contract after tokens are transferred from another account to this contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | The token sender. |
| `amount` | uint256 | The amount of tokens transferred. |
| `data` | bytes | Free form calldata. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `success` | bool | True if the execution was successful. |

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

## Events
### TokenTransferred
```solidity
  event TokenTransferred(
  )
```
Emitted when tokens are transferred.


### TokenApproved
```solidity
  event TokenApproved(
  )
```
Emitted when tokens are approved.


