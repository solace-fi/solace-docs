---
sidebar_position: 5
---
# Buying Cover

---

### How do I purchase wallet cover?
Check out the Buy Portfolio Insurance page [<u>here</u>](../../user-guides/buy-cover).

### Why is the +20% the recommended coverage option?
If a user experienced a protocol hack, the worst case scenario is that their highest position would be the greatest potential loss. The added 20% is to protect a wallet despite any increases in a portfolio's balances. If the highest position increases in value, the 20% acts as a cushion. If the position goes down, the policy price will subsequently go down. Pricing dynamically responds to your usage of coverage so that you only pay for what cover you use.

### When I use a referral link, do I get a free deposit right away or do I need to first deposit some funds?**
You have to first deposit some funds.

To use a referral link you have to create a policy, and you cannot create a policy with 0 deposit.

Also note you get the referral bonus when you enter a valid referral code or link, but the bonus is not usable until you have spent 100 USD or more in premiums (subject to governance decision).

### Can I buy cover for assets in wallets other than my own?
Yes, you are able to via calling the smart contract directly through etherscan. The development for this function's UI is planned for the future in the long-term roadmap.

### If I buy one cover policy for assets deposited a different wallet, would I still be covered if I lost funds?
You will only be covered for the wallet that has the wallet cover policy.

---

### How is Solace Portfolio Insurance priced?
Pricing is based on the wallet portfolio of DeFi positions and the value of each position. Solace analyzes each protocol's individual and relational risk level using the [Rating Engine](/docs/architecture/rating-engine). By calculating relational risk data on a wallet's protocols and risk pooling via categories, Solace deterimines the daily rate it would cost to cover a wallet's positions.

There are currently four risk levels we categorize protocols on. The higher the risk, the higher the fee is for that position.

| Risk Level | Percentage Fee | Tier Rank | Description |
|------------|----------------|-----------|-------------|
| 1 | 2% | A | Safe |
| 2 | 2.5% | B | Mostly Safe |
| 3 | 8% | C | Risky |
| 4 | 20% | D | Unknown |

NOTE: Previously, the rankings were S, A, D, and F. They are now A, B, C, and D, respectively.

Any protocol in the list with smart contracts that are younger than 3 months are rated the highest risk level. Protocols that are younger than 3 months that want to get decrease their level must display their efforts to test the resistance strength of their new contract via high quality audits and extensive testing.

Learn more about the Risk Assessment Infrastructure that makes the pricing [<u>here</u>](/docs/architecture/risk-assessment-infra).
