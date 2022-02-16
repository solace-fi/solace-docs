---
sidebar_position: 1
---

# Cover Products

### What cover products does Solace offer?
Currently, we support smart contract cover only. More coverage capabilities are in the works by both Solace core team and community risk managers. Please stay updated for new releases through Twitter and Discord.

Each product provides policies for a single protocol, across all of its smart contracts that hold value, so the pricing and capacity is set on a by-protocol basis. Though a new version of a protocol requires a new product (e.g., Uniswap V2 versus Uniswap V3).

### What protocols are covered?
Any protocol with smart contracts that are older than 3 months are covered by Solace's wallet coverage. Protocols that are younger than 3 months that want to get covered with Solace need to submit a form to Solace.

Whenever a wallet is analyzed for an unknown or new contract, Solace stores that protocol in a queue for the Risk Management team to input into a risk category. In order for the process to be expedited, protocols should submit a form to Solace.

### How is wallet coverage priced?
Pricing is based on the protocols your wallet has positions in and the size of each position. Solace analyzes each protocol's risk level using the Risk Rating Engine. By aggregating the risk levels of each position, Solace can determine the fees it would cost to cover over all positions.

There are currently four risk levels we categorize protocols on. The higher the risk, the higher the fee is for that position. 

| Risk Level | Percentage Fee | Tier Rank | Description |
|------------|----------------|-----------|-------------|
| 1 | 2% | S | Safe |
| 2 | 2.5% | A | Mostly Safe |
| - | - | B | - |
| 3 | 8% | C | Risky |
| - | - | D | - |
| - | - | E | - |
| 0 | 20% | F | Unknown |

As the ensemble of risk engines increases as Solace's adoption increases, we hope to create more granular levels to follow the S-F tier system. 

### What loss events does Solace cover?
Below is a brief list of possible covered events. Please read Terms & Conditions for the full disclosure of what constitutes a covered event and refer to Claims Assessment and Open a Claim to learn more about the claims process and the mechanics behind it.
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

Solace only pays out financial loss (within coverage limit) and not the overall position covered by the end customer.

### How are payouts given to users?
Solace is building the Parametric Automated Claims Assessment System (PACLAS), which when complete, will pay users within one week of a loss event detection. No need to file a claim. PACLAS will do it for you.

### How does Solace accumulate funds to cover all policies?
Solace has the Underwriting Pool, which is a pool of funds that holds several assets (ETH, WBTC, Stables, SOLACE) used to pay out claims. The pool is primarily funded through bonds. Users can buy bonds with their assets in exchange for $SOLACE (https://solace.fi/bond). With the bond, users can either vest the token over the 7 day period, or they can autostake 

### Can claim redemptions ever outweigh the size of the Underwriting Pool?
Currently, no. There is a safety mechanism designed to check how much ETH is available in the protocol’s reserves when you buy cover. If the amount of cover nears the reserve’s capacity, the protocol will not sell policies.

This can potentially change as Solace scales.  As the reserve increases in size, there is a greater availability to oversell policies and leverage the reserve given that the probability of all positions getting exploited is very low.
