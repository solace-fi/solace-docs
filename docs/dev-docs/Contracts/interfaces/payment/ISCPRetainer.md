<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/payment/ISCPRetainer.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An interface for contracts that require users to maintain a minimum balance of SCP.


## Functions
### minScpRequired
```solidity
  function minScpRequired(
    address account
  ) external returns (uint256 amount)
```
Calculates the minimum amount of Solace Cover Points required by this contract for the account to hold.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | Account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The amount of SCP the account must hold. |

