<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/airdrop/IMerkleDistributor.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### token
```solidity
  function token(
  ) external returns (address)
```




### merkleRoot
```solidity
  function merkleRoot(
  ) external returns (bytes32)
```




### hasClaimed
```solidity
  function hasClaimed(
    address user
  ) external returns (bool)
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
Airdrop claim functions.
Recommended to use offchain script to compute merkleProof from merkle tree, which has also been generated offchain.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `user` | address | Address of airdrop claimer. |
| `amount` | uint256 | Amount of airdrop to claim. Note - Has to match value in merkle tree used to generate merkle root. |
| `merkleProof` | bytes32[] | Merkle proof or Merkle path, to calculate merkle root given this node - (user, amount). Note - Recommend using offchain script to compute. |

### governorRecoverAirdropTokens
```solidity
  function governorRecoverAirdropTokens(
  ) external
```
Governance-only function to recover airdrop tokens from this smart contract,
In the case that a significant amount of airdrop tokens are not claimed




## Events
### Claimed
```solidity
  event Claimed(
  )
```



### GovernorRecoverAirdropTokens
```solidity
  event GovernorRecoverAirdropTokens(
  )
```



