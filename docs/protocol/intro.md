---
sidebar_position: 0
---

# Introduction

Solace is a system with many interconnected components, each fulfilling its role providing overall integrity to the protocol. Below are the major components of this protocol and their purpose:

**1. Underwriting Pool:** ETH-based capital pool underwrites the risk across multiple risk assessment models and allocates coverage capacity for each risk manager providing coverage products. This pool is leveraged to back the risk of sold coverage policies and compensate losses for policyholders (within coverage limit), while generating returns through premiums.

**2. Risk Assessment:** A combination of risk assessment models distribute coverage capacity (granted by the underwriting pool) across their respective products.

**3. Coverage Products:** A suite of smart contracts managed by risk assessment models that allow users to purchase coverage.

**4. Coverage Policies:** NFT (ERC-721) tokens that represent underwriters’ obligation to pay out financial losses carried by the policyholders in the event of a technical failure or exploit.

**5. Claims Assessment:** A parametric auto claims assessment system (aka PACLAS) monitors coverage policies, determines financial losses, and signs proof that allows users to submit a claim transaction and receive a pay out.

**6. Governance:** Solace Launch DAO (later community-run Solace DAO) directs the protocol, defines incentives, and updates system components through a decentralized operational model.