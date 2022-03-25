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

Since Solace does not interact, or all flash loans to interact with its smart contracts, the protocol is resistant to flash loan attacks.

