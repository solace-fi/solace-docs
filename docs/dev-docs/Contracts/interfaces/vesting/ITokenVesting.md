<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/vesting/ITokenVesting.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Stores and handles vested [**SOLACE**](./SOLACE) tokens for SOLACE investors

Predetermined agreement with investors for a linear unlock over three years starting 29 Nov 2021, with a six month cliff.


## Functions
### solace
```solidity
  function solace() external returns (address)
```
SOLACE Token.



### vestingStart
```solidity
  function vestingStart() external returns (uint256)
```
timestamp that investor tokens start vesting.



### vestingEnd
```solidity
  function vestingEnd() external returns (uint256)
```
timestamp that investor tokens finish vesting.



### totalInvestorTokens
```solidity
  function totalInvestorTokens() external returns (uint256)
```
Total tokens allocated to an investor.



### claimedInvestorTokens
```solidity
  function claimedInvestorTokens() external returns (uint256)
```
Claimed token amount for an investor.



### duration
```solidity
  function duration() external returns (uint256)
```
Get vesting duration in seconds



### claimTokens
```solidity
  function claimTokens() external
```
Function for investor to claim SOLACE tokens - transfers all claimable tokens from contract to msg.sender.



### getClaimableTokens
```solidity
  function getClaimableTokens(
    address investor
  ) external returns (uint256 claimableAmount)
```
Calculates the amount of unlocked SOLACE tokens an investor can claim.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `investor` | address | Investor address. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `claimableAmount` | uint256 | The amount of unlocked tokens an investor can claim from the smart contract. |

### rescueSOLACEtokens
```solidity
  function rescueSOLACEtokens(
    uint256 amount,
    address recipient
  ) external
```
Rescues excess [**SOLACE**](./SOLACE).
Can only be called by the current [**governor**](/docs/protocol/governance).

Trusting governance to perform accurate accounting off-chain and ensure there is sufficient SOLACE in contract to make payouts as dictated in totalInvestorTokens mapping

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | Amount to send. |
| `recipient` | address | Address to send rescued SOLACE tokens to. |

### setTotalInvestorTokens
```solidity
  function setTotalInvestorTokens(
    address[] investors,
    uint256[] totalTokenAmounts
  ) external
```
Sets the total SOLACE token amounts that investors are eligible for.
Can only be called by the current [**governor**](/docs/protocol/governance).

Trusting governance to perform accurate accounting off-chain and ensure there is sufficient SOLACE in contract to make payouts as dictated in totalInvestorTokens mapping

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `investors` | address[] | Array of investors to set. |
| `totalTokenAmounts` | uint256[] | Array of token amounts to set. |

### setNewInvestorAddress
```solidity
  function setNewInvestorAddress(
    address oldAddress,
    address newAddress
  ) external
```
Changes address for an investor.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oldAddress` | address | Original investor address. |
| `newAddress` | address | Intended new investor address. |


## Events
### TokensClaimed
```solidity
  event TokensClaimed()
```
Emitted with successful claimTokens() call


### TokensRescued
```solidity
  event TokensRescued()
```
Emitted with successful rescueSOLACEtokens() call


### TotalInvestorTokensSet
```solidity
  event TotalInvestorTokensSet()
```
Emitted when investor address is changed


### InvestorAddressChanged
```solidity
  event InvestorAddressChanged()
```
Emitted when investor address is changed


