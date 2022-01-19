A base type for bond tellers.

Bond tellers allow users to buy bonds. After vesting for `vestingTerm`, bonds can be redeemed for [**SOLACE**](./../SOLACE) or [**xSOLACEV1**](./../staking/xSOLACEV1). Payments are made in `principal` which is sent to the underwriting pool and used to back risk.

Bonds are represented as ERC721s, can be viewed with [`bonds()`](#bonds), and redeemed with [`redeem()`](#redeem).


## Functions
### initialize
```solidity
  function initialize(
    string name_,
    address governance_,
    address solace_,
    address xsolace_,
    address pool_,
    address dao_,
    address principal_,
    address bondDepo_
  ) external
```
Initializes the teller.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name_` | string | The name of the bond token.
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`solace_` | address | The [**SOLACE**](./../SOLACE) token.
|`xsolace_` | address | The [**xSOLACEV1**](./../staking/xSOLACEV1) token.
|`pool_` | address | The underwriting pool.
|`dao_` | address | The DAO.
|`principal_` | address | address The ERC20 token that users deposit.
|`bondDepo_` | address | The bond depository.

### bondPrice
```solidity
  function bondPrice(
  ) public returns (uint256 price_)
```
Calculate the current price of a bond.
Assumes 1 [**SOLACE**](./../SOLACE) payout.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price_`|  | The price of the bond measured in `principal`.
### calculateAmountOut
```solidity
  function calculateAmountOut(
    uint256 amountIn,
    bool stake
  ) external returns (uint256 amountOut)
```
Calculate the amount of [**SOLACE**](./../SOLACE) or [**xSOLACEV1**](./../staking/xSOLACEV1) out for an amount of `principal`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountIn` | uint256 | Amount of principal to deposit.
|`stake` | bool | True to stake, false to not stake.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| uint256 | Amount of [**SOLACE**](./../SOLACE) or [**xSOLACEV1**](./../staking/xSOLACEV1) out.
### calculateAmountIn
```solidity
  function calculateAmountIn(
    uint256 amountOut,
    bool stake
  ) external returns (uint256 amountIn)
```
Calculate the amount of `principal` in for an amount of [**SOLACE**](./../SOLACE) or [**xSOLACEV1**](./../staking/xSOLACEV1) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amountOut` | uint256 | Amount of [**SOLACE**](./../SOLACE) or [**xSOLACEV1**](./../staking/xSOLACEV1) out.
|`stake` | bool | True to stake, false to not stake.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountIn`| uint256 | Amount of principal to deposit.
### redeem
```solidity
  function redeem(
    uint256 bondID
  ) external
```
Redeem a bond.
Bond must be matured.
Redeemer must be owner or approved.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`bondID` | uint256 | The ID of the bond to redeem.

### _calculatePayout
```solidity
  function _calculatePayout(
    uint256 depositAmount
  ) internal returns (uint256 amountOut)
```
Calculate the payout in [**SOLACE**](./../SOLACE) and update the current price of a bond.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositAmount` | uint256 | The amount of `principal` to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| uint256 | The amount of [**SOLACE**](./../SOLACE) out.
### exponentialDecay
```solidity
  function exponentialDecay(
    uint256 initValue,
    uint256 time
  ) internal returns (uint256 endValue)
```
Calculates exponential decay.

Linear approximation, trades precision for speed.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`initValue` | uint256 | The initial value.
|`time` | uint256 | The time elapsed.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`endValue`| uint256 | The value at the end.
### pause
```solidity
  function pause(
  ) external
```
Pauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).



### unpause
```solidity
  function unpause(
  ) external
```
Unpauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).



### setTerms
```solidity
  function setTerms(
    struct BondTellerBase.Terms terms
  ) external
```
Sets the bond terms.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`terms` | struct BondTellerBase.Terms | The terms of the bond.

### setFees
```solidity
  function setFees(
    uint256 bondFee,
    uint256 daoFee
  ) external
```
Sets the bond fees.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`bondFee` | uint256 | The fraction of [**SOLACE**](./../SOLACE) that will be sent to stakers measured in BPS.
|`daoFee` | uint256 | The fraction of `principal` that will be sent to the dao measured in BPS.

### setAddresses
```solidity
  function setAddresses(
    address solace_,
    address xsolace_,
    address pool_,
    address dao_,
    address principal_,
    address bondDepo_
  ) external
```
Sets the addresses to call out.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The [**SOLACE**](./../SOLACE) token.
|`xsolace_` | address | The [**xSOLACEV1**](./../staking/xSOLACEV1) token.
|`pool_` | address | The underwriting pool.
|`dao_` | address | The DAO.
|`principal_` | address | The ERC20 token that users deposit.
|`bondDepo_` | address | The bond depository.

### _setAddresses
```solidity
  function _setAddresses(
    address solace_,
    address xsolace_,
    address pool_,
    address dao_,
    address principal_,
    address bondDepo_
  ) internal
```
Sets the addresses to call out.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The [**SOLACE**](./../SOLACE) token.
|`xsolace_` | address | The [**xSOLACEV1**](./../staking/xSOLACEV1) token.
|`pool_` | address | The underwriting pool.
|`dao_` | address | The DAO.
|`principal_` | address | address The ERC20 token that users deposit.
|`bondDepo_` | address | The bond depository.

