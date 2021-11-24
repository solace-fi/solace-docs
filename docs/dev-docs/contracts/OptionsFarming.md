Distributes options to farmers.

Rewards are accumulated by farmers for participating in farms. Rewards can be redeemed for options with 1:1 reward:[**SOLACE**](./SOLACE). Options can be exercised by paying `strike price` **ETH** before `expiry` to receive `rewardAmount` [**SOLACE**](./SOLACE).

The `strike price` is calculated by either:
  - The current market price of [**SOLACE**](./SOLACE) * `swap rate` as determined by the [**SOLACE**](./SOLACE)-**ETH** Uniswap pool.
  - The floor price of [**SOLACE**](./SOLACE)/**USD** converted to **ETH** using a **ETH**-**USD** Uniswap pool.


## Functions
### constructor
```solidity
  function constructor(
    address governance_
  ) public
```
Constructs the `OptionsFarming` contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).

### solace
```solidity
  function solace(
  ) external returns (address solace_)
```
Native [**SOLACE**](./SOLACE) Token.



### farmController
```solidity
  function farmController(
  ) external returns (address controller_)
```




### receiver
```solidity
  function receiver(
  ) external returns (address receiver_)
```
The receiver for options payments.



### expiryDuration
```solidity
  function expiryDuration(
  ) external returns (uint256 expiryDuration_)
```
Amount of time in seconds into the future that new options will expire.



### numOptions
```solidity
  function numOptions(
  ) external returns (uint256 numOptions_)
```
Total number of options ever created.



### solaceEthPool
```solidity
  function solaceEthPool(
  ) external returns (address solaceEthPool_)
```
The uniswap [**SOLACE**](../SOLACE)-**ETH** pool for calculating twap.



### ethUsdPool
```solidity
  function ethUsdPool(
  ) external returns (address ethUsdPool_)
```
The uniswap **ETH**-**USD** pool for calculating twap.



### solaceEthTwapInterval
```solidity
  function solaceEthTwapInterval(
  ) external returns (uint32 twapInterval_)
```
Interval in seconds to calculate time weighted average price in strike price.



### ethUsdTwapInterval
```solidity
  function ethUsdTwapInterval(
  ) external returns (uint32 twapInterval_)
```
Interval in seconds to calculate time weighted average price in strike price.



### swapRate
```solidity
  function swapRate(
  ) external returns (uint16 swapRate_)
```
The relative amount of the eth value that a user must pay, measured in BPS.



### priceFloor
```solidity
  function priceFloor(
  ) external returns (uint256 priceFloor_)
```
The floor price of [**SOLACE**](./SOLACE) measured in **USD**.
Specifically, whichever stablecoin is in the **ETH**-**USD** pool.



### unpaidSolace
```solidity
  function unpaidSolace(
    address user
  ) external returns (uint256 amount)
```
The amount of [**SOLACE**](./SOLACE) that a user is owed if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The amount.
### getOption
```solidity
  function getOption(
    uint256 optionID
  ) external returns (uint256 rewardAmount, uint256 strikePrice, uint256 expiry)
```
Get information about an option.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`optionID` | uint256 | The ID of the option to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`rewardAmount`| uint256 | The amount of **SOLACE** out.
|`strikePrice`|  | The amount of **ETH** in.
|`expiry`|  | The expiration timestamp.
### calculateStrikePrice
```solidity
  function calculateStrikePrice(
    uint256 rewardAmount
  ) public returns (uint256 strikePrice)
```
Calculate the strike price for an amount of [**SOLACE**](./SOLACE).
SOLACE and at least one pool must be set.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardAmount` | uint256 | Amount of [**SOLACE**](./SOLACE).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strikePrice`| uint256 | Strike Price in **ETH**.
### createOption
```solidity
  function createOption(
    address recipient,
    uint256 rewardAmount
  ) external returns (uint256 optionID)
```
Creates an option for the given `rewardAmount`.
Must be called by the [`FarmController(./FarmController).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | The recipient of the option.
|`rewardAmount` | uint256 | The amount to reward in the Option.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`optionID`| address | The ID of the newly minted option.
### exerciseOption
```solidity
  function exerciseOption(
    uint256 optionID
  ) external
```
Exercises an Option.
`msg.sender` must pay `option.strikePrice` **ETH**.
`msg.sender` will receive `option.rewardAmount` [**SOLACE**](./SOLACE).
Can only be called by the Option owner or approved.
Can only be called before `option.expiry`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`optionID` | uint256 | The ID of the Option to exercise.

### exerciseOptionInPart
```solidity
  function exerciseOptionInPart(
    uint256 optionID
  ) external
```
Exercises an Option in part.
`msg.sender` will pay `msg.value` **ETH**.
`msg.sender` will receive a fair amount of [**SOLACE**](../SOLACE).
Can only be called by the Option owner or approved.
Can only be called before `option.expiry`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`optionID` | uint256 | The ID of the Option to exercise.

### withdraw
```solidity
  function withdraw(
  ) external
```
Transfers the unpaid [**SOLACE**](./SOLACE) to the user.



### sendValue
```solidity
  function sendValue(
  ) external
```
Sends this contract's **ETH** balance to `receiver`.



### setSolace
```solidity
  function setSolace(
    address solace_
  ) external
```
Sets the [**SOLACE**](../SOLACE) native token.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`solace_` | address | The address of the [**SOLACE**](../SOLACE) contract.

### setFarmController
```solidity
  function setFarmController(
    address controller
  ) external
```
Sets the [`FarmController(./FarmController) contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`controller` | address | The address of the new [`FarmController(./FarmController).

### setReceiver
```solidity
  function setReceiver(
    address payable receiver_
  ) external
```
Sets the recipient for Option payments.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`receiver_` | address payable | The new recipient.

### setExpiryDuration
```solidity
  function setExpiryDuration(
    uint256 expiryDuration_
  ) external
```
Sets the time into the future that new Options will expire.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`expiryDuration_` | uint256 | The duration in seconds.

### setSolaceEthPool
```solidity
  function setSolaceEthPool(
    address pool,
    bool solaceIsToken0,
    uint32 interval
  ) external
```
Sets the [**SOLACE**](../SOLACE)-**ETH** pool for twap calculations.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | The address of the pool.
|`solaceIsToken0` | bool | True if [**SOLACE**](./SOLACE) is token0 in the pool, false otherwise.
|`interval` | uint32 | The interval of the twap.

### setEthUsdPool
```solidity
  function setEthUsdPool(
    address pool,
    bool usdIsToken0,
    uint32 interval,
    uint256 priceFloor_
  ) external
```
Sets the **ETH**-**USD** pool for twap calculations.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | address | The address of the pool.
|`usdIsToken0` | bool | True if **USD** is token0 in the pool, false otherwise.
|`interval` | uint32 | The interval of the twap.
|`priceFloor_` | uint256 | The floor price in the **USD** stablecoin.

### setSolaceEthTwapInterval
```solidity
  function setSolaceEthTwapInterval(
    uint32 interval
  ) external
```
Sets the interval for [**SOLACE**](./SOLACE) twap calculations.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`interval` | uint32 | The interval of the twap.

### setEthUsdTwapInterval
```solidity
  function setEthUsdTwapInterval(
    uint32 interval
  ) external
```
Sets the interval for **ETH**-**USD** twap calculations.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`interval` | uint32 | The interval of the twap.

### setSwapRate
```solidity
  function setSwapRate(
    uint16 swapRate_
  ) external
```
Sets the swap rate for prices in the [**SOLACE**](../SOLACE)-**ETH** pool.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swapRate_` | uint16 | The new swap rate.

### setPriceFloor
```solidity
  function setPriceFloor(
    uint256 priceFloor_
  ) external
```
Sets the floor price of [**SOLACE**](./SOLACE) measured in **USD**.
Specifically, whichever stablecoin is in the **ETH**-**USD** pool.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`priceFloor_` | uint256 | The new floor price.

### _calculateSolaceEthPrice
```solidity
  function _calculateSolaceEthPrice(
    uint256 rewardAmount
  ) internal returns (uint256 strikePrice)
```
Calculate the strike price for an amount of [**SOLACE**](./SOLACE).
Uses the [**SOLACE**](../SOLACE)-**ETH** uniswap pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardAmount` | uint256 | Amount of [**SOLACE**](./SOLACE).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strikePrice`| uint256 | Strike Price in **ETH**.
### _calculateEthUsdPrice
```solidity
  function _calculateEthUsdPrice(
    uint256 rewardAmount
  ) internal returns (uint256 strikePrice)
```
Calculate the strike price for an amount of [**SOLACE**](./SOLACE).
Uses the **ETH**-**USD** uniswap pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardAmount` | uint256 | Amount of [**SOLACE**](./SOLACE).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strikePrice`| uint256 | Strike Price in **ETH**.
### _getPriceX96
```solidity
  function _getPriceX96(
    contract IUniswapV3Pool pool,
    uint32 twapInterval
  ) internal returns (uint256 priceX96)
```
Gets the relative price between tokens in a pool.
Can use spot price or twap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`pool` | contract IUniswapV3Pool | The pool to fetch price.
|`twapInterval` | uint32 | The interval to calculate twap.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`priceX96`| contract IUniswapV3Pool | The price as a Q96.
### _transferSolace
```solidity
  function _transferSolace(
    address user,
    uint256 amount
  ) internal
```
Transfers [**SOLACE**](./SOLACE) to the user. It's called by [`exerciseOption()`](#exerciseoption) and [`withdraw()`](#withdraw) functions in the contract.
Also adds on their unpaid [**SOLACE**](./SOLACE), and stores new unpaid [**SOLACE**](./SOLACE) if necessary.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to pay.
|`amount` | uint256 | The amount to pay _before_ unpaid funds.

### _sendValue
```solidity
  function _sendValue(
  ) internal
```
Sends this contract's **ETH** balance to `receiver`.



### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.


