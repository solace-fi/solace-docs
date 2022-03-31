A contract that throws if sent ETH.


## Functions
### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### forwardCall
```solidity
  function forwardCall(
    address payable to,
    bytes data
  ) external
```
Forwards a call to another contract.
Do not use in production.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`to` | address payable | Contract to call.
|`data` | bytes | Data to send.

