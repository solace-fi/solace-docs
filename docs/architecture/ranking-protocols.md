---
sidebar_position: 6
---

# Ranking Protocols
---

Solace uses relativity classification to rank protocols into four different risk tiers. Relativities are multiplicative, and each risk attribute has its own relativity value corresponding to how much it increases or decreases the risk level of the protocol. For example, a relativity value of 1 has no impact on the risk level of the protocol, whereas a relativity greater than 1 increases the risk level relative to the base rate. Similarly, if the relativity is lesser than 1, it will decrease the risk level. Initially, Solace will rely on expert judgment from its risk management team.

Community members can determine relativities for each attribute via the protocol submission form. As the sample size gets bigger, Solace will reduce its reliance on expert judgment and increase the weight of damage ratios generated from the historical data. 

We currently generate damage ratios in our pipeline as we prepare to scale and move to a more decentralized model. That way as user-submitted relativity values are accepted, we can easily incorporate them into the current structure. 

Below is a sample lookup table used to map protocols into risk tiers based on their total relativity:

Tier |	Min Relativity | Max Relativity |
|----|-----------------|----------------|
Unrated risk tier | null | null |
Low risk tier | 0.67 | 1.67 |
Mid risk tier | 1.67 | 2.33 |
High risk tier | 2.33 | 3 |
 
Minimum relativity and maximum relativity columns describe the range from the lowest relativity to highest relativity that can map into each tier. These risk tiers will be expanded to allow for a more granular classification in the future. 