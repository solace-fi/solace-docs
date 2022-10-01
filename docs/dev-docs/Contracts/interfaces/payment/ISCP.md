<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/payment/ISCP.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

**SCP** is a stablecoin pegged to **USD**. It is used to pay for coverage.

**SCP** conforms to the ERC20 standard but cannot be minted or transferred by most users. Balances can only be modified by "SCP movers" such as SCP Tellers and coverage contracts. In some cases the user may be able to exchange **SCP** for the payment token, if not the balance will be marked non refundable. Some coverage contracts may have a minimum balance required to prevent abuse - these are called "SCP retainers" and may block [`withdraw()`](#withdraw).

[**Governance**](/docs/protocol/governance) can add and remove SCP movers and retainers. SCP movers can modify token balances via [`mint()`](#mint), [`burn()`](#burn), [`transfer()`](#transfer), [`transferFrom()`](#transferfrom), and [`withdraw()`](#withdraw).


## Functions
### mint
```solidity
  function mint() external
```
Creates `amount` tokens and assigns them to `account`, increasing the total supply.
Requirements:
- `account` cannot be the zero address.



### burnMultiple
```solidity
  function burnMultiple() external
```
Destroys `amounts` tokens from `accounts`, reducing the total supply.
Requirements:
- `account` cannot be the zero address.
- `account` must have at least `amount` tokens.



### burn
```solidity
  function burn() external
```
Destroys `amount` tokens from `account`, reducing the total supply.
Requirements:
- `account` cannot be the zero address.
- `account` must have at least `amount` tokens.



### withdraw
```solidity
  function withdraw(
    address account,
    uint256 amount
  ) external
```
Withdraws funds from an account.

Same as burn() except uses refundable amount and checks min scp required.
The user must have sufficient refundable balance.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to withdraw from. |
| `amount` | uint256 | The amount to withdraw. |

### isScpMover
```solidity
  function isScpMover() external returns (bool status)
```
Returns true if `account` has permissions to move balances.



### scpMoverLength
```solidity
  function scpMoverLength() external returns (uint256 length)
```
Returns the number of scp movers.



### scpMoverList
```solidity
  function scpMoverList() external returns (address scpMover)
```
Returns the scp mover at `index`.



### isScpRetainer
```solidity
  function isScpRetainer() external returns (bool status)
```
Returns true if `account` may need to retain scp on behalf of a user.



### scpRetainerLength
```solidity
  function scpRetainerLength() external returns (uint256 length)
```
Returns the number of scp retainers.



### scpRetainerList
```solidity
  function scpRetainerList() external returns (address scpRetainer)
```
Returns the scp retainer at `index`.



### balanceOfNonRefundable
```solidity
  function balanceOfNonRefundable() external returns (uint256)
```
The amount of tokens owned by account that cannot be withdrawn.



### setScpMoverStatuses
```solidity
  function setScpMoverStatuses(
    address[] scpMovers,
    bool[] statuses
  ) external
```
Adds or removes a set of scp movers.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `scpMovers` | address[] | List of scp movers to set. |
| `statuses` | bool[] | Statuses to set. |

### setScpRetainerStatuses
```solidity
  function setScpRetainerStatuses(
    address[] scpRetainers,
    bool[] statuses
  ) external
```
Adds or removes a set of scp retainers.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `scpRetainers` | address[] | List of scp retainers to set. |
| `statuses` | bool[] | Statuses to set. |


## Events
### ScpMoverStatusSet
```solidity
  event ScpMoverStatusSet()
```
Emitted when the status of an SCP mover is set.


### ScpRetainerStatusSet
```solidity
  event ScpRetainerStatusSet()
```
Emitted when the status of an SCP retainer is set.


