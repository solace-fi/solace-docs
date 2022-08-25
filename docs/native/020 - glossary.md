---
sidebar_position: 2
id: glossary
title: Glossary
---

**Underwriting Pool** - an insurance pool filled with tokens from Native members, as well as tokens with relatively low volatility and high trust from the crypto community including USDC, USDT, FRAX, ETH, and BTC.

**Underwriting Equity** - the dollar equivalent of all assets within the underwriting pool. If any debt is taken out to pay claims, the underwriting equity subtracts the debt, so that Solace does not over leverage their underwriting capital. Calculated using the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>Underwriting Equity = Underwriting Pool - Debt</em>
</div>
<br />

**UWP** - index of all tokens deposited into the underwriting pool.

**UWE** - wrapped UWP. UWE plays a role of index of all tokens deposited into the underwriting pool taking into account all the funds that have been sent to the lending protocol. The main purposes of the UWE token are to incentivize liquidity providers on the Solace platform and get as many users involved as possible in the governance of the protocol’s underwriting. $UWE tokens are minted and burned based on the deposit activity of voters.

>**Note**: user does not interact directly with UWP tokens and they are a technical element of the protocol. UWPs are exchanged for UWEs within a single transaction when added to the **Underwriting pool**.

**Leverage Ratio** - A parameter that reflects the economic efficiency of the use of assets in the **Underwriting pool**. The parameter is determined by the level of diversification of assets within the pool.

**Solace Insurance Capacity (SIC)** - a parameter reflecting the underwriting capital that can be used to cover losses, assuming the required diversification and independence of assets within the pool. Calculated using the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>Solace Insurance Capacity = (Underwriting Pool - Debt) * Leverage Ratio</em>
</div>
<br />

**Epoch** - the period of time during which the **Solace Insurance Capacity** allocation remains unchanged.The time interval between votes on **Solace Insurance Capacity** allocation between **Native** member protocols. The epoch length is 7 days.

**Gauge -** the mechanism that allows each protocol to accumulate Insurance Capacity through votes. Each Native participant has its own gauge.

**Voting power** - the number of votes that a DApp can allocate to insurance capacity during the voting period. Voting power is calculated from two parameters: the number of locked UWE tokens and Voting multiplier.

**Voting multiplier** - The coefficient, which is calculated depending on the time of the asset location in the insurance pool, varies from 1 (at the minimum lock of 6 months) to ≈ 2.83 (at the maximum lock of 48 months). It can be calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>M = sqrt(months) / sqrt(6)</em>
</div>
<br />

**Individual coverage limit (CL)** - the maximum payout available to a member of Native. **Individual Coverage Limit** is calculated at the beginning of each and determined by the voting process. Can be calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>CL<sub>gauge</sub> = SIC * ∑ V<sub>gauge</sub> / V<sub>total</sub></em>
</div>
<br/>

**∑V<sub>gauge</sub>** - the sum of all votes that users gave for that particular gauge, **V<sub>total</sub>** - total sum of vote powers, for all votes for all gauges in this epoch.

**Rate-on-line (ROL)** - “rate-on-line”, a parameter characterizing the annual percentage for participation in Native. The parameter is determined by the risk assessment team based on the analysis of multiple parameters. Continuously updated as new data is received. You can read the details in this section.**

**Voting premium** - the premium that is charged at the end of every epoch from all voters. It is calculated by the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/native_glossary_1.png" alt="voting_graph" width="400px" />

</div>


**CL<sub>gauge</sub>**- individual coverage limit of gauge
**Vote<sub>L</sub>**- vote allocated by the voter to a particular gauge
**ROL<sub>gauge</sub>** - ROL for this particular gauge
**∑Vote<sub>L</sub>**- the sum of vote powers, for all votes for the chosen gauge in this epoch

**Lock period** - the duration an asset is locked in the **Underwriting pool**. A token provider can withdraw UWE tokens from the pool before the end of the period only by paying a withdrawal fee Lock lengths vary from 6 months to 48 months and affects **Voting multiplier** value.