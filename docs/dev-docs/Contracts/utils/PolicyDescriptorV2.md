<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/utils/PolicyDescriptorV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Produces a string containing the data URI for a JSON metadata string of a policy.
It is inspired from Uniswap V3 [`NonfungibleTokenPositionDescriptor`](https://docs.uniswap.org/protocol/reference/periphery/NonfungibleTokenPositionDescriptor).


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the policy descriptor contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |

### tokenURI
```solidity
  function tokenURI(
    contract IPolicyManager policyManager,
    uint256 policyID
  ) external returns (string description)
```
Describes a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyManager` | contract IPolicyManager | The policy manager to retrieve policy info to produce URI description. |
| `policyID` | uint256 | The ID of the policy for which to produce a description. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `description` | string | The URI of the ERC721-compliant metadata. |

### baseURI
```solidity
  function baseURI() external returns (string base)
```
Returns the base of the URI descriptor.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `base` | string | The base URI of the ERC721-compliant metadata. |

### setBaseURI
```solidity
  function setBaseURI(
    string base
  ) external
```
Sets the base URI descriptor.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `base` | string | The new base URI. |


