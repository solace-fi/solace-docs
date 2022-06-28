<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/payment/SCP.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

**SCP** is a stablecoin pegged to **USD**. It is used to pay for coverage.

**SCP** conforms to the ERC20 standard but cannot be minted or transferred by most users. Balances can only be modified by "SCP movers" such as SCP Tellers and coverage contracts. In some cases the user may be able to exchange **SCP** for the payment token, if not the balance will be marked non refundable. Some coverage contracts may have a minimum balance required to prevent abuse - these are called "SCP retainers" and may block [`withdraw()`](#withdraw).

[**Governance**](/docs/protocol/governance) can add and remove SCP movers and retainers. SCP movers can modify token balances via [`mint()`](#mint), [`burn()`](#burn), [`transfer()`](#transfer), [`transferFrom()`](#transferfrom), and [`withdraw()`](#withdraw).


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the Solace Cover Points contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |

### name
```solidity
  function name(
  ) public returns (string)
```
The name of the token.



### symbol
```solidity
  function symbol(
  ) public returns (string)
```
The symbol of the token.



### decimals
```solidity
  function decimals(
  ) public returns (uint8)
```
The number of decimals in the numeric representation.



### totalSupply
```solidity
  function totalSupply(
  ) public returns (uint256)
```
The amount of tokens in existence.



### balanceOf
```solidity
  function balanceOf(
  ) public returns (uint256)
```
The amount of tokens owned by `account`.



### allowance
```solidity
  function allowance(
  ) public returns (uint256)
```
Overwritten. Returns zero.



### approve
```solidity
  function approve(
  ) public returns (bool)
```
Overwritten. Reverts when called.



### transfer
```solidity
  function transfer(
  ) public returns (bool)
```
Moves `amount` tokens from the caller's account to `recipient`.
Can only be called by a scp mover.
Requirements:
- `recipient` cannot be the zero address.
- the caller must have a balance of at least `amount`.



### transferFrom
```solidity
  function transferFrom(
  ) public returns (bool)
```
Moves `amount` tokens from `sender` to `recipient`.
Can only be called by a scp mover.
Requirements:
- `sender` and `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.



### _transfer
```solidity
  function _transfer(
  ) internal
```
Moves `amount` of tokens from `sender` to `recipient`.
Requirements:
- `sender` cannot be the zero address.
- `recipient` cannot be the zero address.
- `sender` must have a balance of at least `amount`.



### mint
```solidity
  function mint(
  ) external
```
Creates `amount` tokens and assigns them to `account`, increasing the total supply.
Requirements:
- `account` cannot be the zero address.



### burnMultiple
```solidity
  function burnMultiple(
  ) external
```
Destroys `amounts` tokens from `accounts`, reducing the total supply.
Requirements:
- `account` cannot be the zero address.
- `account` must have at least `amount` tokens.



### burn
```solidity
  function burn(
  ) external
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
  function isScpMover(
  ) public returns (bool status)
```
Returns true if `account` has permissions to move balances.



### scpMoverLength
```solidity
  function scpMoverLength(
  ) external returns (uint256 length)
```
Returns the number of scp movers.



### scpMoverList
```solidity
  function scpMoverList(
  ) external returns (address scpMover)
```
Returns the scp mover at `index`.



### isScpRetainer
```solidity
  function isScpRetainer(
  ) public returns (bool status)
```
Returns true if `account` may need to retain scp on behalf of a user.



### scpRetainerLength
```solidity
  function scpRetainerLength(
  ) external returns (uint256 length)
```
Returns the number of scp retainers.



### scpRetainerList
```solidity
  function scpRetainerList(
  ) external returns (address scpRetainer)
```
Returns the scp retainer at `index`.



### balanceOfNonRefundable
```solidity
  function balanceOfNonRefundable(
  ) public returns (uint256)
```
The amount of tokens owned by account that cannot be withdrawn.



### minScpRequired
```solidity
  function minScpRequired(
    address account
  ) public returns (uint256 amount)
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

### _subOrZero
```solidity
  function _subOrZero(
    uint256 a,
    uint256 b,
     c
  ) internal returns (uint256 c)
```
Safely performs `c = a - b`.
If negative overflow returns 0.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `a` | uint256 | First operand. |
| `b` | uint256 | Second operand. |
| `c` |  | Result. |


