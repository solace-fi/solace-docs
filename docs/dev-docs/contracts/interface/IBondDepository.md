Factory and manager of [`Bond Tellers`](./IBondTeller).


## Functions
### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
Native [**SOLACE**](./SOLACE) Token.



### xsolace
```solidity
  function xsolace(
  ) external returns (address xsolace_)
```
[**xSOLACE**](./xSOLACE) Token.



### underwritingPool
```solidity
  function underwritingPool(
  ) external returns (address pool_)
```
Underwriting pool contract.



### dao
```solidity
  function dao(
  ) external returns (address dao_)
```
The DAO.



### isTeller
```solidity
  function isTeller(
  ) external returns (bool isTeller_)
```
Returns true if the address is a teller.



### createBondTeller
```solidity
  function createBondTeller(
    string name,
    address governance,
    address impl,
    address principal
  ) external returns (address teller)
```
Creates a new [`BondTeller`](./IBondTeller).
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | string | The name of the bond token.
|`governance` | address | The address of the teller's [governor](/docs/protocol/governance).
|`impl` | address | The address of BondTeller implementation.
|`principal` | address | address The ERC20 token that users give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`teller`| string | The address of the new teller.
### create2BondTeller
```solidity
  function create2BondTeller(
    string name,
    address governance,
    address impl,
    bytes32 salt,
    address principal
  ) external returns (address teller)
```
Creates a new [`BondTeller`](./IBondTeller).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | string | The name of the bond token.
Can only be called by the current [**governor**](/docs/protocol/governance).
|`governance` | address | The address of the teller's [governor](/docs/protocol/governance).
|`impl` | address | The address of BondTeller implementation.
|`salt` | bytes32 | The salt for CREATE2.
|`principal` | address | address The ERC20 token that users give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`teller`| string | The address of the new teller.
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
|`teller` | address | The teller to add.

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
|`teller` | address | The teller to remove.

### setAddresses
```solidity
  function setAddresses(
    address solace_,
    address xsolace_,
    address pool_,
    address dao_
  ) external
```
Sets the parameters to pass to new tellers.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | Address of [**SOLACE**](./solace).
|`xsolace_` | address | Address of [**xSOLACE**](./xsolace).
|`pool_` | address | Address of underwriting pool.
|`dao_` | address | Address of the DAO.

### pullSolace
```solidity
  function pullSolace(
    uint256 amount
  ) external
```
Sends **SOLACE** to the teller.
Can only be called by tellers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of **SOLACE** to send.

### returnSolace
```solidity
  function returnSolace(
    address dst,
    uint256 amount
  ) external
```
Sends **SOLACE** to an address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dst` | address | Destination to send **SOLACE**.
|`amount` | uint256 | The amount of **SOLACE** to send.

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


### ParamsSet
```solidity
  event ParamsSet(
  )
```
Emitted when the params are set.


