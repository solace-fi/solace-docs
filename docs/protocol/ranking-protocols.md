---
sidebar_position: 8
---

# Ranking protocols

Solace uses relativity classification to rank protocols into four different risk tiers. Relativities are multiplicative, and each risk attribute has it´s own relativity value corresponding to how much it increases or decreases the risk level of the protocol. For example, a relativity value of 1 has no impact on the risk level of the protocol, whereas a relativity greater than 1 increases the risk level relative to the base rate. Similarly, if the relativity is lesser than 1, it will decrease the risk level. Initially, Solace will rely on expert judgement from its risk management team. 

Community members can determine relativities for each attribute via the protocol submission form. As the sample size gets bigger, Solace will reduce its reliance on expert judgement and increase the reliance on damage ratios generated from the historical data. However, Solace includes generated damage ratios in the pipeline from the start so that the pipeline will scale easier and the transition to a more decentralized model will be smoother. Users will only have to submit their relatvitity values and, if accepted, they can easily be included in the pipeline without the need for changing the structure. Here is an example of the look up table used to map protocols into risk tiers based on their total relativity:

Tier |	Min Relativity | Max Relativity |
|----|-----------------|----------------|
Unrated risk tier | null | null |
Mid risk tier | 1.67 | 2.33 |
High risk tier | 2.33 | 3 |
 
Minimum relativity and maximum relativity columns describe the range from the lowest relativity to highest relativity that can map into each tier. These risk tiers will be expanded to allow for a more granular classification in the future. 