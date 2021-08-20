The **Aave(V2)** product that is users can buy policy for **Aave(V2)**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct).
The contract also inherits from [`EIP712`](https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address dataProvider_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    uint24 price_,
    uint32 maxCoverPerUserDivisor_
  ) public
```
The constructor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The governor.
|`policyManager_` | contract IPolicyManager | The IPolicyManager contract.
|`registry_` | contract IRegistry | The IRegistry contract.
|`dataProvider_` | address | Aave protocol data provider address.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`price_` | uint24 | The cover price for the **Product**.
|`maxCoverPerUserDivisor_` | uint32 | The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) public returns (uint256 positionAmount)
```
It gives the user's total position in the product's protocol.
The `positionContract` must be a **aToken** (Please see https://etherscan.io/tokens/label/aave-v2 for more information).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The `buyer` who is requesting the coverage quote.
|`positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in **Wei** in the product's protocol.
### submitClaim
```solidity
  function submitClaim(
    uint256 policyID,
    uint256 amountOut,
    uint256 deadline,
    bytes signature
  ) external
```
The function is used to submit a claim.
The user can only submit one claim per policy and the claim must be signed by an authorized signer.
The policy is burn when the claim submission is successful and new claim is created.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy that suffered a loss.
|`amountOut` | uint256 | The amount the user will receive.
|`deadline` | uint256 | Transaction must execute before this timestamp.
|`signature` | bytes | Signature from the signer.

### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address dataProvider
  ) public
```
Changes the covered platform.
The function is used for if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dataProvider` | address | The platform to cover.

### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`AaveV2`|  | The name of the product.
