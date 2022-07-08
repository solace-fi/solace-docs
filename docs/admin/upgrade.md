---
sidebar_position: 4
---

# Contract Upgradability
---
There are several smart contracts that can have items modified. Below are the details for each smart contract:

- **BondTellers**: 
    - Bond Rates: contracts are changed to control the rate at which bonds increase/decrease price, and the price itself. 
    - Fees: we take 5% off bonds, we can set that number and is decided from DAO
    - Pause: we have a pause function on the buying process of bonds, though you can still redeem previous bonds after a pause.
    - Addresses: can change address for SOLACE, locker, UWP, DAO/core multisig, bondTeller
- **$SOLACE token contract**:
    - Governance can add/remove minters
- **Solace Portfolio Insurance contract**:
    - Pause Control: specifically, pauses entire contract, so coverage stops, and weekly DAI/FRAX pulls stop, people cannot withdraw
    - SetCooldownPeriod: when you deactivate policy, you enter cooldown, then you can withdraw your funds. Can change length of cool
    - MaxRate Contract: max rate charged per second per coverage, can change max rate itself
    - ChargeCycle Contract: how often we could bill, can change the cycle time
    - ReferralProgram Contract: referral reward can be set, referralThreshold - can set it to any number (currently 100)
    - ReferralOn Contract: can turn on or off the referral program
    - CoverPromotionAdminRole Contract: give or take reward points outside of referral program, governance has the right to change the address role
- **Registries**:
    - (Address lookup contract): governance can control that look up, we can point to any contract
- **Staking Contract**: 
    - Can set rewards distribution in quantity per seconds, and start/end time of staking program, for example we have 10m/year
- **Locker Contract**:
    - Can set listeners 
- **PremiumCollectorRole Contract**:
    - Can charge premiums, governance has the right to change the address role
---
# Immutable Contracts:
---
1. xSOLACE
2. xSOLACE migrator
3. xSOLACE v1
4. Bridge Wrapper
5. Testnet Faucet
