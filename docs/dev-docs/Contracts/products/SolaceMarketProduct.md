<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/products/SolaceMarketProduct.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The abstract smart contract that is inherited by every concrete individual **Product** contract.

It is required to extend [`IProduct`](../interface/IProduct) and recommended to extend `BaseProduct`. `BaseProduct` extends [`IProduct`](../interface/IProduct) and takes care of the heavy lifting; new products simply need to set some variables in the constructor. It has some helpful functionality not included in [`IProduct`](../interface/IProduct) including claim signers.
For withdrawals to work, the premium pool must call weth.approve(address (SolaceMarketProduct.sol) , UINT_256_MAX)


## Functions
### initialize
```solidity
  function initialize(
    address governance_,
    contract IRegistry minPeriod_,
    uint40 maxPeriod_,
    uint40 typehash_,
    bytes32 domain_,
    string version_
  ) public
```
Initializes the product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The governor. |
| `minPeriod_` | contract IRegistry | The minimum policy period in blocks to purchase a **policy**. |
| `maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**. |
| `typehash_` | uint40 | The typehash for submitting claims. |
| `domain_` | bytes32 | The user readable name of the EIP712 signing domain. |
| `version_` | string | The current major version of the signing domain. |

### buyPolicy
```solidity
  function buyPolicy(
    address policyholder,
    uint256 coverLimit,
    uint40 blocks,
    bytes positionDescription,
    address riskStrategy
  ) external returns (uint256 policyID)
```
Purchases and mints a policy on the behalf of the policyholder.
User will need to pay **USD**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder` | address | Holder of the position(s) to cover. |
| `coverLimit` | uint256 | The value to cover in **USD**. |
| `blocks` | uint40 | The length (in blocks) for policy. |
| `positionDescription` | bytes | A byte encoded description of the position(s) to cover. |
| `riskStrategy` | address | The risk strategy of the product to cover. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of newly created policy. |

### updateCoverLimit
```solidity
  function updateCoverLimit(
    uint256 policyID,
    uint256 coverLimit
  ) external
```
Increase or decrease the cover limit of the policy.
User may need to pay **USD** for increased cover limit or receive a refund for decreased cover limit.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy. |
| `coverLimit` | uint256 | The new value to cover in **USD**. |

### extendPolicy
```solidity
  function extendPolicy(
    uint256 policyID,
    uint40 extension
  ) external
```
Extend a policy.
User will need to pay **USD**.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy. |
| `extension` | uint40 | The length of extension in blocks. |

### updatePolicy
```solidity
  function updatePolicy(
    uint256 policyID,
    uint256 coverLimit,
    uint40 extension
  ) external
```
Extend a policy and update its cover limit.
User may need to pay **USD** for increased cover limit or receive a refund for decreased cover limit.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy. |
| `coverLimit` | uint256 | The new value to cover in **USD**. |
| `extension` | uint40 | The length of extension in blocks. |

### cancelPolicy
```solidity
  function cancelPolicy(
    uint256 policyID
  ) external
```
Cancel and burn a policy.
User will receive a refund for the remaining blocks.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy. |

### submitClaim
```solidity
  function submitClaim(
    uint256 policyID,
    uint256 amountOut,
    uint256 deadline,
    bytes signature
  ) external
```
Submit a claim.
The user can only submit one claim per policy and the claim must be signed by an authorized signer.
If successful the policy is burnt and a new claim is created.
The new claim will be in [`ClaimsEscrow`](../ClaimsEscrow) and have the same ID as the policy.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy that suffered a loss. |
| `amountOut` | uint256 | The amount the user will receive. |
| `deadline` | uint256 | Transaction must execute before this timestamp. |
| `signature` | bytes | Signature from the signer. |

### getQuote
```solidity
  function getQuote(
    uint256 coverLimit,
    uint40 blocks,
    address riskStrategy
  ) external returns (uint256 premium)
```
Calculate a premium quote for a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `coverLimit` | uint256 | The value to cover in **USD**. |
| `blocks` | uint40 | The duration of the policy in blocks. |
| `riskStrategy` | address | The risk strategy address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `premium` | uint256 | The quote for their policy in **USD**. |

### minPeriod
```solidity
  function minPeriod(
  ) external returns (uint40 period)
```
Returns the minimum policy period in blocks.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `period` | uint40 | The minimum period value. |

### maxPeriod
```solidity
  function maxPeriod(
  ) external returns (uint40 period)
```
Returns the maximum policy period in blocks.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `period` | uint40 | The maxiumum period value. |

### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The current amount. |

### activeCoverLimitPerStrategy
```solidity
  function activeCoverLimitPerStrategy(
    address riskStrategy
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei) per risk strategy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `riskStrategy` | address | The risk strategy address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The current amount. |

### paused
```solidity
  function paused(
  ) external returns (bool status)
```
Returns whether or not product is currently in paused state.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if product is paused. |

### policyManager
```solidity
  function policyManager(
  ) external returns (address policymanager)
```
Returns the address of the [`PolicyManager`](../PolicyManager).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policymanager` | address | The policy manager address. |

### registry
```solidity
  function registry(
  ) external returns (address registry_)
```
Returns the address of the [`Registry`](../Registry).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `registry_` | address | The registry address. |

### isAuthorizedSigner
```solidity
  function isAuthorizedSigner(
    address account
  ) external returns (bool status)
```
Returns true if the given account is authorized to sign claims.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | Potential signer to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if is authorized signer. |

### updateActiveCoverLimit
```solidity
  function updateActiveCoverLimit(
    int256 coverDiff
  ) external
```
Updates the product's book-keeping variables.
Can only be called by the [`PolicyManager`](../PolicyManager).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `coverDiff` | int256 | The change in active cover limit. |

### setMinPeriod
```solidity
  function setMinPeriod(
    uint40 minPeriod_
  ) external
```
Sets the minimum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `minPeriod_` | uint40 | The minimum number of blocks. |

### setMaxPeriod
```solidity
  function setMaxPeriod(
    uint40 maxPeriod_
  ) external
```
Sets the maximum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `maxPeriod_` | uint40 | The maximum number of blocks |

### addSigner
```solidity
  function addSigner(
    address signer
  ) external
```
Adds a new signer that can authorize claims.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to add. |

### removeSigner
```solidity
  function removeSigner(
    address signer
  ) external
```
Removes a signer.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to remove. |

### setPaused
```solidity
  function setPaused(
    bool paused_
  ) external
```
Pauses or unpauses buying and extending policies.
Cancelling policies and submitting claims are unaffected by pause.
Can only be called by the current [**governor**](/docs/protocol/governance).

Used for security and to gracefully phase out old products.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `paused_` | bool | True to pause, false to unpause. |

### _updatePolicy
```solidity
  function _updatePolicy(
    uint256 policyID,
    uint256 newCoverLimit,
    uint256 prevCoverLimit,
    uint40 extension,
    uint40 prevExpirationBlock,
    uint24 newPrice,
    uint24 prevPrice
  ) internal
```
Internal function that updates the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy. |
| `newCoverLimit` | uint256 | The new value to cover in **USD**. |
| `prevCoverLimit` | uint256 | The new value to cover in **USD**. |
| `extension` | uint40 | The length of extension in blocks. |
| `prevExpirationBlock` | uint40 | The previous expiration block of the policy. |
| `newPrice` | uint24 | The new cover quote price. |
| `prevPrice` | uint24 | The previous cover quote price of the policy. |

### getAsset
```solidity
  function getAsset(
  ) internal returns (contract IERC20 asset)
```
Returns the underlying principal asset for `Solace Cover Product`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `asset` | contract IERC20 | The underlying asset. |

### _deposit
```solidity
  function _deposit(
    uint256 amount
  ) internal
```
Sends the amount to the premium pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | amount to send to premium pool |

### _withdraw
```solidity
  function _withdraw(
    uint256 amount
  ) internal
```
Withdraw dai from premium pool, and send it to the user


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | amount to send to premium pool |

### _add
```solidity
  function _add(
    uint256 a,
    int256 b
  ) internal returns (uint256 c)
```
Adds two numbers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `a` | uint256 | The first number as a uint256. |
| `b` | int256 | The second number as an int256. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `c` | uint256 | The sum as a uint256. |

## Events
### SignerAdded
```solidity
  event SignerAdded(
  )
```
Emitted when a claim signer is added.


### SignerRemoved
```solidity
  event SignerRemoved(
  )
```
Emitted when a claim signer is removed.


