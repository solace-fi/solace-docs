---
sidebar_position: 2
id: glossary
title: Glossary
---

**Underwriting Pool** - an insurance pool representing assets and filled with tokens from Native members, as well as tokens with relatively low volatility and high trust from the crypto community including USDC, USDT, FRAX, ETH, and BTC.

**Underwriting Equity** -  the dollar equivalent of all the assets within the underwriting pool less the debt. Calculated using the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>Underwriting Equity = Underwriting Pool - Debt</em>
</div>
<br />

**UWP** -  the index of the underwriting pool, representing all the deposited tokens.

**UWE** - wrapped UWP, taking debt into an account. UWE plays a role of an index of all the tokens deposited into the underwriting pool. $UWE tokens are minted and burned based on the deposit activity of Solace’s Native underwriters.

>**Note**: user does not interact directly with UWP tokens and they are a technical element of the protocol. UWPs are exchanged for UWEs within a single transaction when added to the **Underwriting pool**.

**Leverage Ratio** - A parameter that represents the ratio of the provided insurance capacity to underwriting assets, reflecting the economic efficiency of the use of assets in the **Underwriting pool**. The parameter is set and tuned based on the level of diversification of the assets within the pool and amount of uncorrelated risk exposure carried through the insurance policies.

**Solace Insurance Capacity (SIC)** - a parameter reflecting the underwriting capacity that can be used to back risk exposures. Calculated using the following formula: 

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>Solace Insurance Capacity = (Underwriting Pool - Debt) * Leverage Ratio</em>
</div>
<br />

**Epoch** - the period of time during which the **Solace Insurance Capacity** allocation remains unchanged. The time interval between votes on **Solace Insurance Capacity** allocation among **Native** underwriters. The current epoch length is 7 days.

**Gauge-** the mechanism that allows Native underwriters to distribute Insurance Capacity through voting. Based on the votes, each gauge sets a coverage limit for individual DApp’s / Protocol’s insurance policies during an epoch 

**Voting power** - the number of votes that an underwriter can allocate to distribute insurance capacity. Voting power is calculated from two parameters: the number of locked UWE tokens and Voting multiplier. 

**Voting power** - the number of votes that a DApp can allocate to insurance capacity during the voting period. Voting power is calculated from two parameters: the number of locked UWE tokens and Voting multiplier.

**Voting multiplier** - The coefficient, which is calculated depending on the lockup time of the assets location in the insurance pool, starting from 1 (at the minimum lock of 6 months) to ≈ 2.83  (at the maximum lock of 48 months). It can be calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>M = sqrt(months) / sqrt(6)</em>
</div>
<br />

**Individual coverage limit (CL)** -  the maximum payout available to a member of Native. **Individual Coverage** Limit is calculated at the beginning of each epoch and determined through the voting process. Can be calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>CL<sub>gauge</sub> = SIC * ∑ V<sub>gauge</sub> / V<sub>total</sub></em>
</div>
<br/>

**∑V<sub>gauge</sub>** -  the sum of all votes that underwriters allocated for that particular gauge, **V<sub>total</sub>** -  total amount of the submitted votes across all Native’s gauges in this epoch.

**Rate-on-line (ROL)** - a parameter characterizing the annual rate of insurance premium for each individual gauge (i.e. insurance policy). These parameters are determined by the risk assessment process of Solace DAO (currently driven by the risk management unit of the core team) based on quantatitive analysis of multiple attributes. Continuously updated as the new data is received. You can read the details in this section. 

**Insurance premium** - the premium that is charged at the end of every epoch based on insurance capacity allocations. A notable detail of Solace Native is the fact that the premium is charged implicitly based on votes from the underwriters, allowing DApps to bootstrap underwriting capital through their native tokens and allocate insurance to themselves (or any other party). It is calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/native_glossary_1.png" alt="voting_graph" width="400px" />

</div>


**CL<sub>gauge</sub>**- individual coverage limit of a gauge 
**Vote<sub>L</sub>**- votes allocated by an underwriter to a particular gauge 
**ROL<sub>gauge</sub>** - ROL for this particular gauge
**∑Vote<sub>L</sub>**- the sum of all votes for the chosen gauge in this epoch

**Lock period** - the duration an underwriter’s capital is locked in the **Underwriting pool**.  The capitalprovider can withdraw UWE from their respective lock prematurely ,before the end of the lockup period, only by paying a withdrawal penalty based on the remaining lockup time.