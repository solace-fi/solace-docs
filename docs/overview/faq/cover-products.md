---
sidebar_position: 1
---

# Cover Products

---

### What does Solace Wallet Coverage cover for?
Solace Wallet Coverage insures against smart contract exploits and hacks. Please read the <u>Terms & Conditions</u> for the full disclosure of what constitutes a covered event.

Below is the list of covered loss events. 

Solace will provide coverage policies across following exploits types:
- Minting vulnerability
- Flash loan attack
- Trojan fake token
- Proxy manipulation
- Math error
- Re-entry attack

Solace coverage does not provide for:
- Price arbitrage
- Compromised private keys
- Phishing attacks
- Front-end attacks

Solace pays out financial loss at the current market value of the position at the time of the loss event within a user's coverage limit.

### What protocols are covered?
Currently, Solace's protocol capabalities is capped on the list of protocols that exist in Zapper's API, which is what Solace's Rating Engine utilizes to get protocol information and a wallet's protocol positions. Check out the latest list of covered protocols [<u>here</u>](https://risk-data.solace.fi/series).

---

### How are payouts given to users?
Solace is building the Parametric Automated Claims Assessment System (PACLAS), which when complete, will pay users within one week of a loss event detection. No need to file a claim.

### Can claim redemptions ever outweigh the size of the Underwriting Pool?
Currently, no. There is a safety mechanism designed to check how much ETH is available in the protocol’s reserves when you buy cover. If the amount of cover nears the reserve’s capacity, the protocol will not sell policies.

This can change as Solace scales.  As the  increases in size, there is a greater availability to oversell policies and leverage the reserve given that the probability of all positions getting exploited is very low.

### How does Solace accumulate funds to cover all policies?
Solace has the Underwriting Pool (UWP), which is a pool of funds that holds several assets (ETH, WBTC, Stables, SOLACE) used sell policies against, utilize in yield generation strategies, and borrow against to pay out claims. 

Learn more about the UWP [<u>here</u>](/docs/protocol/underwriting-pool.md).