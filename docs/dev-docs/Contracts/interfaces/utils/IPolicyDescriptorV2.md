<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/utils/IPolicyDescriptorV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Produces a string containing the data URI for a JSON metadata string of a policy.
It is inspired from Uniswap V3 [`NonfungibleTokenPositionDescriptor`](https://docs.uniswap.org/protocol/reference/periphery/NonfungibleTokenPositionDescriptor).


## Functions
### tokenURI
```solidity
  function tokenURI(
    contract IPolicyManager policyManager,
    uint256 policyID
  ) external returns (string description)
```
Produces the URI describing a particular policy `product` for a given `policy id`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyManager` | contract IPolicyManager | The policy manager to retrieve policy info to produce URI descriptor. |
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


## Events
### BaseUriSet
```solidity
  event BaseUriSet()
```
Emitted when the base URI is set.


