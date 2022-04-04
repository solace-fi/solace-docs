<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/IERC3156FlashBorrower.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An interface that borrows flash loans per the [`EIP-3156` standard](https://eips.ethereum.org/EIPS/eip-3156).


## Functions
### onFlashLoan
```solidity
  function onFlashLoan(
    address initiator,
    address token,
    uint256 amount,
    uint256 fee,
    bytes data
  ) external returns (bytes32)
```

Receive a flash loan.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `initiator` | address | The initiator of the loan. |
| `token` | address | The loan currency. |
| `amount` | uint256 | The amount of tokens lent. |
| `fee` | uint256 | The additional amount of tokens to repay. |
| `data` | bytes | Arbitrary data structure, intended to contain user-defined parameters. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | bytes32 | keccak256 hash of "ERC3156FlashBorrower.onFlashLoan" |

