<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/bonds/IBondTellerMatic.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A bond teller that accepts **MATIC** and **WMATIC** as payment.

Bond tellers allow users to buy bonds. Payments are made in **MATIC** or **WMATIC** which is sent to the underwriting pool and used to back risk. Users will receive [**SOLACE**](./../../SOLACE) but it must be bonded or staked. If bonded, the [**SOLACE**](./../../SOLACE) will be vested linearly and redeemed over time. If staked, the [**SOLACE**](./../../SOLACE) only be withdrawable after the lock expires but will give the user extra [**SOLACE**](./../../SOLACE) rewards and voting rights.

Bonds can be purchased via [`depositMatic()`](#depositeth), [`depositWmatic()`](#depositwmatic), or [`depositWmaticSigned()`](#depositwmaticsigned). Bonds are represented as ERC721s, can be viewed with [`bonds()`](#bonds), and redeemed with [`claimRewards()`](#claimrewards). If staked, an [`xsLocker`](./../../staking/xsLocker) lock is created instead of a bond.


## Functions
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
| `solace_` | address | The [**SOLACE**](./../../SOLACE) token. |
| `xsLocker_` | address | The [**xsLocker**](./../../staking/xsLocker) contract. |
| `pool_` | address | The underwriting pool. |
| `dao_` | address | The DAO. |
| `principal_` | address | The ERC20 token that users deposit. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `bondDepo_` | address | The bond depository. |

### bondPrice
```solidity
  function bondPrice() external returns (uint256 price_)
```
Calculate the current price of a bond.
Assumes 1 [**SOLACE**](./../../SOLACE) payout.



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
Calculate the amount of [**SOLACE**](./../../SOLACE) out for an amount of `principal`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amountIn` | uint256 | Amount of principal to deposit. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of [**SOLACE**](./../../SOLACE) out. |

### calculateAmountIn
```solidity
  function calculateAmountIn(
    uint256 amountOut,
    bool stake
  ) external returns (uint256 amountIn)
```
Calculate the amount of `principal` in for an amount of [**SOLACE**](./../../SOLACE) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amountOut` | uint256 | Amount of [**SOLACE**](./../../SOLACE) out. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | Amount of principal to deposit. |

### depositMatic
```solidity
  function depositMatic(
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 tokenID)
```
Create a bond by depositing **MATIC**.
Principal will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |

### depositWmatic
```solidity
  function depositWmatic(
    uint256 amount,
    uint256 minAmountOut,
    address depositor,
    bool stake
  ) external returns (uint256 payout, uint256 tokenID)
```
Create a bond by depositing `amount` **WMATIC**.
**WMATIC** will be transferred from `msg.sender` using `allowance`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount of **WMATIC** to deposit. |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |

### depositWmaticSigned
```solidity
  function depositWmaticSigned(
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
Create a bond by depositing `amount` **WMATIC**.
**WMATIC** will be transferred from `depositor` using `permit`.
Note that not all **WMATIC**s have a permit function, in which case this function will revert.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount of **WMATIC** to deposit. |
| `minAmountOut` | uint256 | The minimum [**SOLACE**](./../../SOLACE) out. |
| `depositor` | address | The bond recipient, default msg.sender. |
| `stake` | bool | True to stake, false to not stake. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `payout` | uint256 | The amount of [**SOLACE**](./../../SOLACE) in the bond. |
| `tokenID` | uint256 | The ID of the newly created bond or lock. |

### claimPayout
```solidity
  function claimPayout(
    uint256 bondID
  ) external
```
Claim payout for a bond that the user holds.
User calling `claimPayout()` must be either the owner or approved for the entered bondID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `bondID` | uint256 | The ID of the bond to redeem. |

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
| `solace_` | address | The [**SOLACE**](./../../SOLACE) token. |
| `xsLocker_` | address | The [**xsLocker**](./../../staking/xsLocker) contract. |
| `pool_` | address | The underwriting pool. |
| `dao_` | address | The DAO. |
| `principal_` | address | The ERC20 token that users deposit. |
| `isPermittable_` | bool | True if `principal` supports `EIP2612`. |
| `bondDepo_` | address | The bond depository. |

### receive
```solidity
  function receive() external
```
Fallback function to allow contract to receive *MATIC*.
Deposits **MATIC** and creates bond.



### fallback
```solidity
  function fallback() external
```
Fallback function to allow contract to receive **MATIC**.
Deposits **MATIC** and creates bond.




## Events
### CreateBond
```solidity
  event CreateBond()
```
Emitted when a bond is created.


### RedeemBond
```solidity
  event RedeemBond()
```
Emitted when a bond is redeemed.


### Paused
```solidity
  event Paused()
```
Emitted when deposits are paused.


### Unpaused
```solidity
  event Unpaused()
```
Emitted when deposits are unpaused.


### TermsSet
```solidity
  event TermsSet()
```
Emitted when terms are set.


### FeesSet
```solidity
  event FeesSet()
```
Emitted when fees are set.


### AddressesSet
```solidity
  event AddressesSet()
```
Emitted when fees are set.


