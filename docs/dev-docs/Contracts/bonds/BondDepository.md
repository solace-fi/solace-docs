<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/bonds/BondDepository.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Factory and manager of [`Bond Tellers`](./BondTellerBase).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address solace_
  ) public
```
Constructs the BondDepository contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`solace_` | address | Address of [**SOLACE**](./../SOLACE).

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

### pullSolace
```solidity
  function pullSolace(
    uint256 amount
  ) external
```
Sends [**SOLACE**](./../SOLACE) to the teller.
Can only be called by tellers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to send.

