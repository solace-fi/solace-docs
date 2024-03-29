<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/bonds/BondTellerErc20.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A bond teller that accepts an ERC20 as payment.

Bond tellers allow users to buy bonds. Payments are made in `principal` which is sent to the underwriting pool and used to back risk. Users will receive [**SOLACE**](./../SOLACE) but it must be bonded or staked. If bonded, the [**SOLACE**](./../SOLACE) will be vested linearly and redeemed over time. If staked, the [**SOLACE**](./../SOLACE) only be withdrawable after the lock expires but will give the user extra [**SOLACE**](./../SOLACE) rewards and voting rights.

Bonds can be purchased via [`deposit()`](#deposit) or [`depositSigned()`](#depositsigned). Bonds are represented as ERC721s, can be viewed with [`bonds()`](#bonds), and redeemed with [`claimRewards()`](#claimrewards). If staked, an [`xsLocker`](./../staking/xsLocker) lock is created instead of a bond.


## Functions
### clone
```solidity
  function clone(
    string name_,
    address governance_,
    address principal_,
    bool isPermittable_,
    bytes32 salt_
  ) external returns (address teller)
```
Creates a new `BondTellerERC20`. The new teller will be a minimal proxy to this instance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `name_` | string | The name of the bond token. |
| `governance_` | address | The address of the teller's [governor](/docs/protocol/governance). |
| `principal_` | address | The ERC20 token that users give. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `salt_` | bytes32 | Input for deterministic address calculation. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `teller` | address | The address of the new teller. |

### initialize
```solidity
  function initialize(
    string name_,
    address governance_,
    address solace_,
    address xsLocker_,
    address pool_,
    address dao_,
    address principal_,
    bool isPermittable_,
    address bondDepo_
  ) external
```
Initializes the teller.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `name_` | string | The name of the bond token. |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |
| `solace_` | address | The [**SOLACE**](./../SOLACE) token. |
| `xsLocker_` | address | The [**xsLocker**](./../staking/xsLocker) contract. |
| `pool_` | address | The underwriting pool. |
| `dao_` | address | The DAO. |
| `principal_` | address | The ERC20 token that users deposit. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `bondDepo_` | address | The bond depository. |

### bondPrice
```solidity
  function bondPrice() public returns (uint256 price_)
```
Calculate the current price of a bond.
Assumes 1 [**SOLACE**](./../SOLACE) payout.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `price_` | uint256 | The price of the bond measured in `principal`. |

### calculateAmountOut
```solidity
  function calculateAmountOut(
    uint256 amountIn,
    bool stake
  ) external returns (uint256 amountOut)
```
Calculate the amount of [**SOLACE**](./../SOLACE) out for an amount of `principal`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amountIn` | uint256 | Amount of principal to deposit. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of [**SOLACE**](./../SOLACE) out. |

### calculateAmountIn
```solidity
  function calculateAmountIn(
    uint256 amountOut,
    bool stake
  ) external returns (uint256 amountIn)
```
Calculate the amount of `principal` in for an amount of [**SOLACE**](./../SOLACE) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of [**SOLACE**](./../SOLACE) out. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | Amount of principal to deposit. |

### deposit
```solidity
  function deposit(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 tokenID)
```
Create a bond by depositing `amount` of `principal`.
Principal will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount of principal to deposit. |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |

### depositSigned
```solidity
  function depositSigned(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 payout, uint256 tokenID)
```
Create a bond by depositing `amount` of `principal`.
Principal will be transferred from `depositor` using `permit`.
Note that not all ERC20s have a permit function, in which case this function will revert.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount of principal to deposit. |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |

### claimPayout
```solidity
  function claimPayout(
    uint256 bondID
  ) external
```
Claim payout for a bond that the user holds.
User calling `claimPayout()`` must be either the owner or approved for the entered bondID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `bondID` | uint256 | The ID of the bond to redeem. |

### _deposit
```solidity
  function _deposit(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) internal returns (uint256 payout, uint256 tokenID, uint256 protocolFee)
```
Create a bond by depositing `amount` of `principal`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount of principal to deposit. |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |
| `protocolFee` | uint256 | Amount of principal paid to dao |

### _calculateTotalPayout
```solidity
  function _calculateTotalPayout(
    uint256 depositAmount
  ) internal returns (uint256 amountOut)
```
Calculate the payout in [**SOLACE**](./../SOLACE) and update the current price of a bond.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `depositAmount` | uint256 | The amount of `principal` to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of [**SOLACE**](./../SOLACE) out. |

### _calculateEligiblePayout
```solidity
  function _calculateEligiblePayout(
    uint256 bondID
  ) internal returns (uint256 eligiblePayout)
```
Calculates current eligible payout on a bond, based on `bond.localVestingTerm` and `bonds[bondID].payoutAlreadyClaimed`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `bondID` | uint256 | The ID of the bond to calculate eligible payout on. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `eligiblePayout` | uint256 | Amount of [**SOLACE**](./../SOLACE) that can be currently claimed for the bond. |

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
| `initValue` | uint256 | The initial value. |
| `time` | uint256 | The time elapsed. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `endValue` | uint256 | The value at the end. |

### toUint40
```solidity
  function toUint40() internal returns (uint40)
```

Returns the downcasted uint40 from uint256, reverting on
overflow (when the input is greater than largest uint40).

Counterpart to Solidity's `uint40` operator.

Requirements:

- input must fit into 40 bits


### pause
```solidity
  function pause() external
```
Pauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).



### unpause
```solidity
  function unpause() external
```
Unpauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).



### setTerms
```solidity
  function setTerms(
    struct BondTellerErc20.Terms terms
  ) external
```
Sets the bond terms.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `terms` | struct BondTellerErc20.Terms | The terms of the bond. |

### setFees
```solidity
  function setFees(
    uint256 protocolFee
  ) external
```
Sets the bond fees.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `protocolFee` | uint256 | The fraction of `principal` that will be sent to the dao measured in BPS. |

### setAddresses
```solidity
  function setAddresses(
    address solace_,
    address xsLocker_,
    address pool_,
    address dao_,
    address principal_,
    bool isPermittable_,
    address bondDepo_
  ) external
```
Sets the addresses to call out.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `solace_` | address | The [**SOLACE**](./../SOLACE) token. |
| `xsLocker_` | address | The [**xsLocker**](./../staking/xsLocker) contract. |
| `pool_` | address | The underwriting pool. |
| `dao_` | address | The DAO. |
| `principal_` | address | The ERC20 token that users deposit. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `bondDepo_` | address | The bond depository. |

### _setAddresses
```solidity
  function _setAddresses(
    address solace_,
    address xsLocker_,
    address pool_,
    address dao_,
    address principal_,
    bool isPermittable_,
    address bondDepo_
  ) internal
```
Sets the addresses to call out.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `solace_` | address | The [**SOLACE**](./../SOLACE) token. |
| `xsLocker_` | address | The [**xsLocker**](./../staking/xsLocker) contract. |
| `pool_` | address | The underwriting pool. |
| `dao_` | address | The DAO. |
| `principal_` | address | The ERC20 token that users deposit. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `bondDepo_` | address | The bond depository. |


