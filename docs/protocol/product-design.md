---
sidebar_position: 1
---

# Product Design

Solace protocol is designed as a mechanism to protect users from inherent risks associated with DeFi products. In order to achieve efficient and long-term protocol performance and provide the most secure, stable and convenient product to the market, we focused on the following aspects:

## Risk Management

- Risk managed through Solace's inter-nodal matrix (INM). Find out more details on page Risk Assessment
- Does not rely on voting or staking to determine the risk of an existing DeFi Platform (i.e., leverages market data)

## Claim Assessment

- Parametric automatic claims assessment system, known as PACLAS, monitors data for exploits and assesses financial losses in real-time
- Claim validation drives immediate payout, Solace does not assess claims through committees, votes, or other human processes that may take days or weeks.

## Optimised Exposure

- Provides cover to existing and verifiable DeFi positions
- Solace only pays out financial loss and not the overall position covered by end customer
- Reduces overall risk for Solace and enables platform to grow through smaller investments in newer protocols while balancing risk across its entire portfolio

## System Components

Solace is a system with many interconnected components, each fulfilling its role providing overall integrity to the protocol. Below are the major components of this protocol and their purpose:

1. **Products**: a group of optimally-priced smart contract coverage products for platforms and protocols on Ethereum delivered for the end-user.

2. **Risk Assessment & Pricing**: The central part of the protocol that assesses the risk of the platform and individual products and computes the premium prices.

3. **Capital Pool**: Efficiently manages the pooled capital backing the risks by maintaining solvency while providing adequate investment returns for the risks taken. 

4. **Governance Module**: Decentralized process that directs the protocol, defines incentives, develops new products, assesses risk, updates system components and provides coverage for the Solace protocol in case of an incident.

5. **Claims Adjuster**: A module that manages the claims, evaluates financial losses carried, and makes pay-outs to the policyholders.

To purchase the coverage, users will need to confirm that they have an insurable interest in a specific contract. Then in case of a valid claim, the financial loss carried by the policyholder will be automatically evaluated and paid out (within the coverage limit chosen by the user). As users buy coverage policies, they receive an ERC721 token as their policy contract. Each tokenized policy will provide the user with options to update the term of the policy, cancel the policy and get a pro-rated refund (minus a fee) and open a claim. All functionality available through the solace.fi web interface. Coverage policies denominated in Ether.

Here is a step-by-step guide of what a standard process of buying coverage on Solace protocol looks like:

1. Connect your wallet
2. Choose a platform and the positions you want covered.
3. Enter the number of days you would like to receive coverage for the position, and the coverage amount.
4. Purchase the policy and submit the transaction
5. Once the transaction has been successfully mined, you receive the policy.

Products

**Solace will provide coverage policies across following exploits types:**

- Minting vulnerability
- Flash loan attack
- Trojan fake token
- Proxy manipulation
- Math error
- Re-entry

**Does not provide for:**

- Price arbitrage
- Compromised private keys
- Phishing attack

**Protocol and platform covered by Solace:**

- Aave
- Compound
- Yearn.Finance

More protocols will be added to the list at a later date.

