---
sidebar_position: 5
---
# Buying Cover 

### How do I purchase wallet cover?
Check out the [<u>Buy Wallet Coverage page</u>](../../user-guides/buy-cover.md) in our How-to docs.

### Why is the +20% the recommended coverage option?
We see that, if you were to be hacked, that the worst case scenario is that your highest position would be the greatest potential loss. The added 20% is to protect a wallet despite changes of portfolio balances. If the highest position increases in size, the 20% acts as a cushion. If the position goes down, the policy price will subsequently go down. Pricing dynamically responds to your usage of coverage so that you only pay for what cover you use.

### Can I buy cover for assets in wallets other than my own?
Yes, you are able to via calling the smart contract directly through etherscan. There is not yet a UI for the tool, but it is under development.

### Can I buy several cover policies for assets under one wallet and still be covered?
Yes, you can purchase several policies under one wallet and those positions will be covered if your wallet suffers a loss of funds.

### If I buy one cover policy for assets deposited from several wallets, would I still be covered if I lost funds?
You will only be covered for the wallet that has the cover policy. 

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

### What loss events are covered?
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

### What happens if I sell a portion or all of my position and later get back into the same position? Is my cover buy still valid?
Yes, the cover will still be valid if the position changes. 
