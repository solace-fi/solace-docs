


## Functions
### setAppraisor
```solidity
  function setAppraisor(
    address _appraisor
  ) external
```
Sets the appraisal function.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_appraisor` | address | The new appraisor.

### deposit
```solidity
  function deposit(
    uint256 _tokenId
  ) external
```
Deposit a token.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to deposit.

### depositSigned
```solidity
  function depositSigned(
    address _depositor,
    uint256 _tokenId,
    uint256 _deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit a Uniswap LP token using permit.
User will receive accumulated Solace rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_tokenId` | uint256 | The id of the token to deposit.
|`_deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### mintAndDeposit
```solidity
  function mintAndDeposit(
    struct ISolaceEthLpFarm.MintAndDepositParams params
  ) external returns (uint256 tokenId)
```
Mint a new Uniswap LP token then deposit it.
User will receive accumulated Solace rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`params` | struct ISolaceEthLpFarm.MintAndDepositParams | parameters

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenId`| struct ISolaceEthLpFarm.MintAndDepositParams | The newly minted token id.
### withdraw
```solidity
  function withdraw(
    uint256 _tokenId
  ) external
```
Withdraw a token.
User will receive _tokenId and accumulated rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to withdraw.

### countDeposited
```solidity
  function countDeposited(
    address _user
  ) external returns (uint256)
```
Returns the count of ERC721s that a user has deposited onto a farm.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to check count for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | count of deposited ERC721s.
### listDeposited
```solidity
  function listDeposited(
    address _user
  ) external returns (uint256[], uint256[])
```
Returns the list of ERC721s that a user has deposited onto a farm and their values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to list ERC721s.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | list of deposited ERC721s.
|`The`|  | values of the tokens.
### getDeposited
```solidity
  function getDeposited(
    address _user,
    uint256 _index
  ) external returns (uint256, uint256)
```
Returns the id of an ERC721 that a user has deposited onto a farm and its value.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to get token id for.
|`_index` | uint256 | The farm-based index of the token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | id of the deposited ERC721.
|`The`| uint256 | value of the token.
### appraise
```solidity
  function appraise(
    uint256 _tokenId
  ) external returns (uint256 _value)
```
Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_value`| uint256 | The token's value.
### lpToken
```solidity
  function lpToken(
  ) external returns (contract IUniswapLpToken)
```




### solace
```solidity
  function solace(
  ) external returns (contract SOLACE)
```




### weth
```solidity
  function weth(
  ) external returns (contract IWETH9)
```




### lastRewardBlock
```solidity
  function lastRewardBlock(
  ) external returns (uint256)
```




### accRewardPerShare
```solidity
  function accRewardPerShare(
  ) external returns (uint256)
```




### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256)
```




## Events
### TokenDeposited
```solidity
  event TokenDeposited(
  )
```



### TokenWithdrawn
```solidity
  event TokenWithdrawn(
  )
```



### UserRewarded
```solidity
  event UserRewarded(
  )
```



### RewardsSet
```solidity
  event RewardsSet(
  )
```



### FarmEndSet
```solidity
  event FarmEndSet(
  )
```



