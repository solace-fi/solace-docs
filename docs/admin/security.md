---
sidebar_position: 6
---

# Contract Security
---
In this section, we'll discuss the matters of security practice surrounding Solace's smart contracts. This will include discussions on oracles, certain attacks, and testing practices.

## Testing

Solace provides documemnted coverage code from tests [here](https://github.com/solace-fi/solace-core#code-coverage).

## Oracle Independence

At this point in time, we do not use oracles because at no point do we need to access outside information via oracle. All necessary information to provide our coverage products resides within Solace’s smart contract.

Moreover, because Solace does not use Oracles, the protocol is also resistant to front-run attacks.

## Flash Loan Attack Resistance

The Solace application has three functions that a flash loan attack could target. The first is our $SOLACE bonding program. If someone was to use a flash loan to attempt to buy $SOLACE tokens at a discount via bonds, they would be met with the 7-day lockup period and would not be able to pay the flash loan back in the same transaction. 

The second function to target would be our $SOLACE staking mechanism. If someone was to use a flash loan to purchase $SOLACE and stake it, they would not recieve any additional rewards due to the fact that staking rewards occur each subsequent block. Since the attacker would have to pay the flash loan in the same transaction, they would not generate any rewards with the attack.

The final function is our Solace Portfolio Insurance (SPI) product. SWC assesses a user's DeFi portfolio and creates a policy price for covering their wallet's positions. The only thing a user can do with SWC is top up their policy balance so as to pay for coverage. In this instance, a flash loan attack would serve no purpose for an attacker because they would simply create a policy, top up their balance to activate a policy, then attempt to remove their balance, which would get locked up for a 7 day withdrawal period. Once again, they would not be able to pay the flash loan back in the same transaction.

