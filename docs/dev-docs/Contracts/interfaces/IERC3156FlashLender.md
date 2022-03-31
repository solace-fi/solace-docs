<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/IERC3156FlashLender.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### maxFlashLoan
```solidity
  function maxFlashLoan(
    address token
  ) external returns (uint256)
```

The amount of currency available to be lended.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The loan currency. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of `token` that can be borrowed. |

### flashFee
```solidity
  function flashFee(
    address token,
    uint256 amount
  ) external returns (uint256)
```

The fee to be charged for a given loan.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The loan currency. |
| `amount` | uint256 | The amount of tokens lent. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of `token` to be charged for the loan, on top of the returned principal. |

### flashLoan
```solidity
  function flashLoan(
    contract IERC3156FlashBorrower receiver,
    address token,
    uint256 amount,
    bytes data
  ) external returns (bool)
```

Initiate a flash loan.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | contract IERC3156FlashBorrower | The receiver of the tokens in the loan, and the receiver of the callback. |
| `token` | address | The loan currency. |
| `amount` | uint256 | The amount of tokens lent. |
| `data` | bytes | Arbitrary data structure, intended to contain user-defined parameters. |


