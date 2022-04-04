<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/bonds/IBondDepository.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Factory and manager of [`Bond Tellers`](./IBondTeller).


## Functions
### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
Native [**SOLACE**](./../../SOLACE) Token.



### isTeller
```solidity
  function isTeller(
  ) external returns (bool isTeller_)
```
Returns true if the address is a teller.



### addTeller
```solidity
  function addTeller(
    address teller
  ) external
```
Adds a teller.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `teller` | address | The teller to add. |

### removeTeller
```solidity
  function removeTeller(
    address teller
  ) external
```
Adds a teller.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `teller` | address | The teller to remove. |

### pullSolace
```solidity
  function pullSolace(
    uint256 amount
  ) external
```
Sends [**SOLACE**](./../../SOLACE) to the teller.
Can only be called by tellers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | The amount of [**SOLACE**](./../../SOLACE) to send. |


## Events
### TellerAdded
```solidity
  event TellerAdded(
  )
```
Emitted when a teller is added.


### TellerRemoved
```solidity
  event TellerRemoved(
  )
```
Emitted when a teller is removed.


