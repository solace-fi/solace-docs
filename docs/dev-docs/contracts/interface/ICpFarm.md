


## Functions
### receive
```solidity
  function receive(
  ) external
```
Receive function. Deposits eth.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth.



### depositCp
```solidity
  function depositCp(
    uint256 _amount
  ) external
```
Deposit some CP tokens.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The deposit amount.

### depositCpSigned
```solidity
  function depositCpSigned(
    address _depositor,
    uint256 _amount,
    uint256 _deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit some CP tokens using permit.
User will receive accumulated rewards if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_depositor` | address | The depositing user.
|`_amount` | uint256 | The deposit amount.
|`_deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### depositEth
```solidity
  function depositEth(
  ) external
```
Deposit some ETH.
User will receive accumulated rewards if any.



### compoundRewards
```solidity
  function compoundRewards(
  ) external
```
Your money already makes you money. Now make your money make more money!
Withdraws your SOLACE rewards, swaps it for WETH, then deposits that WETH onto the farm.



### withdrawCp
```solidity
  function withdrawCp(
    uint256 _amount
  ) external
```
Withdraw some CP tokens.
User will receive _amount of deposited tokens and accumulated rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The withdraw amount.

### vault
```solidity
  function vault(
  ) external returns (contract IVault)
```




### solace
```solidity
  function solace(
  ) external returns (contract SOLACE)
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
### CpDeposited
```solidity
  event CpDeposited(
  )
```



### EthDeposited
```solidity
  event EthDeposited(
  )
```



### RewardsCompounded
```solidity
  event RewardsCompounded(
  )
```



### CpWithdrawn
```solidity
  event CpWithdrawn(
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



