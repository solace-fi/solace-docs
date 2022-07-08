<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockSCPRetainer.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An implementation of SCPRetainer built for testing.


## Functions
### setMinScpRequired
```solidity
  function setMinScpRequired(
    address account,
    uint256 amount
  ) external
```
Sets the minimum amount of Solace Cover Points required by this contract for the account to hold.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | Account to query. |
| `amount` | uint256 | The amount of SCP the account must hold. |

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

