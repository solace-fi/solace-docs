Mock Cloneable is only used to test Cloneable.


## Functions
### clone
```solidity
  function clone(
    string message_,
    address governance_
  ) external returns (address newInstance)
```
Creates a new `MockCloneable`. The new instance will be a minimal proxy to this instance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`message_` | string | The new instance's message.
|`governance_` | address | The new instance's [governor](/docs/protocol/governance).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`newInstance`| string | The address of the new instance.
### clone2
```solidity
  function clone2(
    string message_,
    address governance_,
    bytes32 salt_
  ) external returns (address newInstance)
```
Creates a new `MockCloneable`. The new instance will be a minimal proxy to this instance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`message_` | string | The new instance's message.
|`governance_` | address | The new instance's [governor](/docs/protocol/governance).
|`salt_` | bytes32 | Input for deterministic address calculation.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`newInstance`| string | The address of the new instance.
### initialize
```solidity
  function initialize(
    string message_,
    address governance_
  ) external
```
Initializes the MockCloneable.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`message_` | string | The instance's message.
|`governance_` | address | The instance's [governor](/docs/protocol/governance).

### setMessage
```solidity
  function setMessage(
  ) external
```




