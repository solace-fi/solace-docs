The `Vault` smart contract enables that **Capital Providers** can deposit **ETH** to mint shares of the `Vault`(**CP tokens**).



## Variables

### **governance**
```solidity
address public governance;
```
Governor address.


### **newGovernance**
```solidity
address public newGovernance;
```
Governance to take over.


### **emergencyShutdown**
```solidity
bool public emergencyShutdown;
```
Pauses deposits.


### **token**
```solidity
IERC20 public token;
```
WETH ERC20 token.


### **registry**
```solidity
IRegistry public registry;
```
IRegistry contract.


### **cooldownMin**
```solidity
uint64 public cooldownMin = 604800; // 7 days
```
The minimum amount of time in seconds a user must wait to withdraw funds.


### **cooldownMax**
```solidity
uint64 public cooldownMax = 3024000; // 35 days
```
The maximum amount of time in seconds a user must wait to withdraw funds.


### **cooldownStart**
```solidity
mapping(address => uint64) public cooldownStart;
```
The timestamp that a depositor's cooldown started.


### **isRequestor**
```solidity
mapping(address => bool) public isRequestor;
```
It holds information that if the destination is authorized to request ETH.


## Functions
### **constructor**
```solidity
constructor (
        address _governance, 
        address _registry, 
        address _token) ERC20("Solace CP Token", "SCP") ERC20Permit("Solace CP Token") 

```
Vault constructor. It takes `governance`, `registry` and `token` addresses as parameters.

#### Parameters
| Name         | Type    | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
|`_governance` | address | The account address of the `governor`.
|`_registry`   | address | The address of the `Registry` contract. 
|`_token`      | address | The address of the `Solace CP Token`.



### **receive**
```solidity
  receive()
```
Fallback function to allow contract to receive **ETH** . It mints **CP** tokens to **caller** if **caller** is not `Vault` or `WETH` or `Treasury`.



### **fallback**
```solidity
  fallback()
```
Fallback function to allow contract to receive **ETH** . It mints **CP** tokens to **caller** if **caller** is not `Vault` or `WETH` or `Treasury`.



### **setGovernance**
```solidity
  function setGovernance(address _governance) external
```
Allows governance to be transferred to a new `governor`.
Can only be called by the current `governor`.

#### Parameters
| Name         | Type    | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
|`_governance` | address | The account address of the `governor`.



### **acceptGovernance**
```solidity
function acceptGovernance() external
```
Accepts the governance role.
Can only be called by the new `governor`.



### **setEmergencyShutdown**
```solidity
function setEmergencyShutdown(bool active) external
```
Activates or deactivates emergency shutdown. It can only be called by the current `governor`. During emergency shutdown:
 - No users may deposit into the Vault.
 - Withdrawls can bypass cooldown.
 - Only Governance may undo emergency shutdown.

#### Parameters
| Name     | Type  | Description                                             |
| -------- | ----- | ------------------------------------------------------- |
|`_active` | bool  | If true, the `Vault` goes into **Emergency Shutdown**. If false, the `Vault` goes back into **Normal** Operation.



### **setCooldownWindow**
```solidity
function setCooldownWindow(uint64 _min, uint64 _max) external
```
Sets the **minimum** and **maximum** amount of time a user must wait to withdraw funds. It can only be called by the current `governor`.

#### Parameters
| Name  | Type   | Description                                             |
| ----- | ------ | ------------------------------------------------------- |
|`_min` | uint64 | Minimum time in seconds.
|`_max` | uint64 | Maximum time in seconds.



### **startCooldown**
```solidity
function startCooldown() external
```
Starts the cooldown.



### **setRequestor**
```solidity
function setRequestor(address _dst, bool _status) external
```
Adds or removes requesting rights. It can only be called by the current governor.
#### Parameters
| Name     | Type    | Description                                             |
| -------- | ------- | ------------------------------------------------------- |
|`_dst`    | address | The `requestor`.
|`_status` | bool    | True to add or false to remove rights.



### **deposit**
```solidity
function deposit() public payable
```
Allows a user to deposit ETH into the Vault (becoming a `Capital Provider`). Shares of the `Vault` (CP tokens) are minted to caller. Called when `Vault` receives ETH deposits. It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in **Emergency Shutdown**



### **depositWeth**
```solidity
function depositWeth(uint256 amount) external
```
Allows a user to deposit WETH into the `Vault`(becoming a **Capital Provider**). The shares of the `Vault`(**CP Tokens**) are minted to caller.

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`amount`| uint256 | The amount of weth to deposit.



### **withdraw**
```solidity
function withdraw(uint256 shares) external returns (uint256)
```
Allows a user to redeem shares for ETH. It burns CP tokens and transfers ETH to the caller(CP).

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`shares`| uint256 | The amount of shares to redeem.

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The value in ETH that the shares where redeemed for.



### **requestEth**
```solidity
function requestEth(uint256 amount) external returns (uint256)
```
Sends ETH to `ClaimsEscrow` or `Treasury` to pay out claims. Can only be called by `ClaimsEscrow` or `Treasury`.

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`amount`| uint256 | The amount of ETH wanted

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The amount of ETH sent.



### **maxRedeemableShares**
```solidity
function maxRedeemableShares(address user) external view returns (uint256)
```
Returns the maximum redeemable shares by the `user` such that Vault does not go under MCR

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`user`  | address | The address of the user to check. 

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The max redeemable shares by the user.



### **totalAssets**
```solidity
function totalAssets() external view returns (uint256)
```
Returns the total quantity of all assets under control of this `Vault`, including those loaned out to a `Strategy` as well as those currently held in the `Vault`.

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The total assets under control of this vault.



## Internal Functions
### _totalAssets
```solidity
function totalAssets() internal view returns (uint256)
```
This internal function called by totalAssets() function. It returns quantity of all assets under control of this `Vault`, including those loaned out to `Strategies`.

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The total assets under control of this vault.



### _shareValue
```solidity
function _shareValue(uint256 shares) internal view returns (uint256)
```
The function determines the current value of `shares`.

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`shares`| uint256 | The amount of shares to calculate value for.

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The value of the shares.



### _sharesForAmount
```solidity
function _sharesForAmount(uint256 amount) internal view returns (uint256)
```
The function determines how many shares for given amount of token would receive.

#### Parameters
| Name   | Type    | Description                                             |
| ------ | ------- | ------------------------------------------------------- |
|`shares`| uint256 | The amount of tokens to calculate number of shares for.

#### Return Values
| Type     | Description                                            |
| -------- | ------------------------------------------------------ |
| uint256  | The amount of tokens.



### min
```solidity
function min(uint256 a, uint256 b) internal pure returns (uint256) 
```
Returns the minium value.


## Events
### **DepositMade**
```solidity
event DepositMade(address indexed depositor, uint256 indexed amount, uint256 indexed shares);
```
Emitted when a user deposits funds.


### **WithdrawalMade**
```solidity
event WithdrawalMade(address indexed withdrawer, uint256 indexed value);
```
Emitted when a user withdraws funds.


### **FundsSent**
```solidity
event FundsSent(uint256 value);
```
Emitted when funds are sent to escrow or treasury.


### **EmergencyShutdown**
```solidity
event EmergencyShutdown(bool active);
```
Emitted when emergency shutdown mode is toggled.


### **GovernanceTransferred**
```solidity
   event GovernanceTransferred(address _newGovernance);
```
Emitted when Governance is set.