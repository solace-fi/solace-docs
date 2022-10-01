<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/airdrop/MerkleDistributor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### constructor
```solidity
  function constructor(
    address token_,
    bytes32 merkleRoot_,
    address governance_
  ) public
```
Constructs `Solace Cover Product`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token_` | address | The address of the airdrop token. |
| `merkleRoot_` | bytes32 | Merkle root. |
| `governance_` | address | The address of the governor. |

### hasClaimed
```solidity
  function hasClaimed(
    address user
  ) public returns (bool)
```
Returns true if address has claimed, false if not.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `user` | address | Address of user to check. |

### claim
```solidity
  function claim(
    address user,
    uint256 amount,
    bytes32[] merkleProof
  ) external
```
Airdrop claim function.

Expect frontend to use offchain script to compute merkleProof and amount parameters, given set merkle tree

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `user` | address | Address of airdrop claimer. |
| `amount` | uint256 | Amount of airdrop to claim. |
| `merkleProof` | bytes32[] | Merkle proof or Merkle path, to calculate merkle root given this node - (user, amount). |

### governorRecoverAirdropTokens
```solidity
  function governorRecoverAirdropTokens() external
```
Governance-only function to recover airdrop tokens from this smart contract,
In the case that a significant amount of airdrop tokens are not claimed




