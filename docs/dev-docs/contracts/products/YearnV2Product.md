The **Yearn(V2)** product that is users can buy policy for **Yearn(V2)**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct.md).
The contract also inherits from [`EIP712`](https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712).


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    contract IPolicyManager _policyManager,
    contract IRegistry _registry,
    address _coveredPlatform,
    uint40 _minPeriod,
    uint40 _maxPeriod,
    uint24 _price,
    uint32 _maxCoverPerUserDivisor,
    address _quoter
  ) public
```
The constructor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The governor.
|`_policyManager` | contract IPolicyManager | The IPolicyManager contract.
|`_registry` | contract IRegistry | The IRegistry contract.
|`_coveredPlatform` | address | A platform contract which locates contracts that are covered by this product.
|`_minPeriod` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`_maxPeriod` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`_price` | uint24 | The cover price for the **Product**.
|`_maxCoverPerUserDivisor` | uint32 | The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).
|`_quoter` | address | The exchange quoter address.

### appraisePosition
```solidity
  function appraisePosition(
    address _policyholder,
    address _positionContract
  ) public returns (uint256 positionAmount)
```
It gives the user's total position in the product's protocol.
The `_positionContract` must be a **vault**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | The `buyer` who is requesting the coverage quote.
|`_positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

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
    address _coveredPlatform
  ) public
```
Changes the covered platform.
The function is used for if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coveredPlatform` | address | The platform to cover.

### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`YearnV2`|  | The name of the product.
