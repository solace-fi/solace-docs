An alternative Mock ERC-20 with changeable decimals.


## Functions
### constructor
```solidity
  function constructor(
    string name,
    string symbol,
    uint256 supply,
    uint8 decimals_
  ) public
```
Constructs the Mock Token contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | string | The name of the token.
|`symbol` | string | The symbol of the token.
|`supply` | uint256 | The amount of supply for the token.
|`decimals_` | uint8 | The amount of decimals in the token.

### decimals
```solidity
  function decimals(
  ) public returns (uint8)
```
Returns the number of decimals used to get its user representation.
For example, if `decimals` equals `2`, a balance of `505` tokens should
be displayed to a user as `5,05` (`505 / 10 ** 2`).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value `ERC20` uses, unless this function is
overridden.

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
`balanceOf()` and `transfer`.



### mint
```solidity
  function mint(
  ) external
```
Mints 1000 new tokens to msg.sender



