---
sidebar_position: 3
id: architecture
title: Architecture
---

## Introduction

**Solace Native** offers a mechanic to facilitate insurance with the underwriting capital primarily bootstrapped by participating DApps and protocols leveraging their own native tokens., which have been whitelisted by Solace DAO risk management (currently driven by the core team). Major structural advantage of the system is the fact that, while the underwriting funds are composed of various native tokens, claims are settled with stablecoins, without the need to liquidate the underlying token, hence avoiding any negative market pressures in perilous situations. This is achieved by borrowing stablecoins through posting UWP tokens, representing a united index of underwriting assets, as lending collateral, and then paying back the loan(s) through the float and incoming premiums paid over time. Given the chance of simultaneous hacking of a large number of  insured DApps/protocols is probabilistically negligible, the risk of default becomes very low and decreases as the system scales. Ultimately, this approach provides an opportunity to increase the capital efficiency of the underwriting assets and allows underwriters to distribute insurance capacity values greater than the deposited capital. The total Solace Insurance Capacity is calculated using the following formula:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<em>Solace Insurance Capacity = (Underwriting Assets - Debt) * Leverage Ratio</em>
</div>

<em>, where <b>Underwriting Assets </b> is the value of assets within the underwriting pool, Debt is the value of any outstanding debt used to pay claims, Leverage Ratio is the efficiency of insurance capital.</em>
<br/>
<br/>

The **Solace Insurance Capacity** is distributed each epoch among the **Native** insured DApps  through voting. Underwriters vote for DApps’ gauges during  each epoch, and the results set the coverage limits for each Native-insured DApp for the following epoch. The more votes a DApp’s gauge receive, the higher that DApp’s share of **Solace Insurance Capacity**, and therefore, the higher the DApp’s **Individual Coverage Limit**. This mechanism allows the system to self-regulate and dynamically distribute the insurance capacity among **Native-insured** participants.

**Solace Native** provides DApps an opportunity to access insurance while introducing additional utility for their native token: underwriting. The overall structure significantly increases the capital efficiency compared to other approaches in DeFi insurance and introduces a novel way to bootstrap underwriting capital. Moreover, longer lockup periods grant an underwriter greater control over the insurance capacity, so DApps can access higher coverage limits with longer commitments.


## General diagram of the Native protocol

[**Solace Native**](https://www.solace.fi/solace-native) is an infrastructure of interconnected smart contracts that enables innovative mechanics for decentralized management of insurance and underwriting capital bootstrapping. **Solace Native** will be available on the **Aurora** network and will expand to other networks in the nearest future (e.g., Ethereum, Polygon, Fantom, etc.). An upper-level flowchart showing the key elements of the system is shown below:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<img src="/img/native_architecture_1.png" alt="native_architecture_simplified" width="800px" />
</div>

**Note:** the above diagram is a simplified representation of the **Solace Native** architecture. One element on the slide can represent several smart contracts in the production implementation. You can read our full implementation on our [**Github**](https://github.com/solace-fi/).

## Native’s Fundamental Building Blocks

**#1 Solace Insurance Capacity (SIC)**: The total value of coverage available for Solace to distribute.

**#2 Insurance Gauges**: on **Solace Native**, the  Insurance Capacity is distributed through the voting process by the holders/delegates of underwriter locks of the system. The gauges measure how many votes were allocated to the protocol by the Native participants in the voting. Each Native-insured DApp/protocol has its own gauge. Once a party confirms that they want Native insurance, Solace will setup an Insurance Gauge for that DApp. Underwriters then get to vote on these gauges. 

**#3 Underwriting pool**: an insurance pool filled with tokens from Native members, as well as tokens with relatively low volatility and high trust from the crypto community: USDC, USDT, FRAX, ETH,BTC, etc.. Any wallet can enter underwriting locks using approved protocol’s tokens, which are pooled in a united underwriting pool and the underwriter receives equity (UWE tokens) of that pool of funds. Each lock gets a proportional equity share resulting in voting power over the insurance capacity.

**#4 Underwriter locks**: Any EOA (externally-owned address) can enter underwriting locks using whitelisted tokens, which are deposited into the united underwriting pool. The underwriter receives equity representing their portion of the pool of funds. Each lock gets proportional voting power to allocate insurance capacity. 


**#5 Premium/Revenue Pool**: At each epoch, underwriting locks will be charged an implicit premium through their underwriting equity based on their votes.  The risk management team utilizes Solace’s quantitative Risk Pipeline to determine the premium rate (rate-on-line) for each of the insurance gauges. The premiums form the float pool that can cover claims (reducing the resulting underwriter’s risk), accrue value to $SOLACE stakers, and support further Solace’s development.

**#6 Risk Management**: The risk management team utilizes Solace’s quantitative [Risk Pipeline](https://docs.google.com/presentation/d/1-VlWb1r5D7xs-EnSJdSQMIxhRZiJUFIqxqdFMZb_56c/edit?usp=sharing) to determine the annual premium rate for each of the insurance gauges.

**#7 Claims Process**: When a qualified on-chain exploit occurs, the affected DApp submits a post-mortem for a review and Solace evaluates the losses to pay out back to the protocol (or directly the affected users) based on the insurance capacity allocated to that DApp’s insurance gauge in that epoch. Claim payouts follow an optimistic approval, but can be disputed in case of a disagreement through an independent 3rd party not affiliated with Solace (current implementation will utilize UMA as arbitration to handle claim disputes).

## Getting your Token Whitelisted

DApps can deposit whitelisted tokens to gain power over the **Native’s** insurance capacity. Solace’s risk management (RM) team whitelists tokens and sets up insurance gauges to onboard new projects to **Native**. Moreover, RM calculates  the quantitative limits for these projects’ tokens in order to avoid over-exposure to any particular asset class and limit market volatility.These measures make it possible to keep the underwriting funds diversified and guarantee resilience of the capital during unfavorable market conditions and claims process for insured events.

>**Note:** as Solace transitions to a more decentralized community-driven DAO, new projects will be added by **Solace DAO** through a more formal and transparent proposal process.

For tokens to be added to the pool, the **Solace** team will execute a transaction from its multisig that confirms that the token can be added to the insurance pool and sends it to the smart contract. Such a transaction contains the following information:

- **The minimum number of tokens within the pool** If the underwriting pool contains tokens worth less than the specified parameter, the protocol will not be taken into account when allocating shares of the **Solace Insurance Capacity**.
- **The maximum dollar equivalent of tokens within a pool** Tokens cannot be added to the pool if their total dollar equivalent exceeds the specified parameter. This parameter is necessary to maintain diversification of the insurance pool.

Once a token has been approved, any holder can deposit this token into the underwriting up to the maximum limit set for that particular token (which RM decides). Important take-away is that any individual party can use any of the whitelisted protocol’s tokens to deposit.

## Adding tokens to the Underwriting pool.

When sending tokens to the pool, the EOA must set the number of tokens and the lock period for which the tokens will be locked in the pool. The longer the lock time, the greater the multiplier and therefore the greater the voting power of the user (see [**Voting power and voting process**](#voting-power-and-voting-process) for more details). Lock times can be set from 6 months to 48 months.

After setting the desired parameters, the user signs the transaction and sends tokens to the **Underwriting pool**. A few processes take place within a single transaction:

1. After tokens are deposited in the **Underwriting pool**, UWE tokens are minted for the user and locked in a special lock contract - the **Underwriting locks** smart-contract. The user cannot retrieve **UWE** tokens from the lock contract until the end of the lock period. At the beginning of each epoch, based on the insurance capacity allocations (i.e., votes) a certain amount of UWE tokens are charged implicitly (no action required) as premiums. 
2. After adding liquidity to the underwriting pool, the EOA has proportional voting power based on their deposit value and their lock length. The EOA can vote to allocate Solace’s insurance capacity to any of the Native members’ Insurance gauges.

>**Note:** by sending tokens to the **Underwriting pool**, the user confirms that he agrees with the rules for calculating ROL by the risk assessment Solace (and further DAO) team.

3. The lock contract mints a special NFT for the user, which contains information about the user's UWE tokens amount and timestamp. The provided NFT will allow the user to withdraw UWE tokens from the lock contract after the end of the lock period.

## Underwriting locks

After the tokens have been sent to the Underwriting pool, a corresponding number of UWE tokens are minted for the sender. However, these tokens are not credited to the user's account. Instead, Solace opens an underwriter lock for that EOA and deposits the UWE tokens for a period of time specified by the token provider.

If the user wants to withdraw tokens before the end of the lock period, they will have to pay a penalty for an early withdrawal. The penalty amount is dynamic and decreases linearly with time. This means that the penalty for withdrawing tokens at the beginning of a lock period will be more expensive than withdrawing them closer to the end of the period.

After the end of the lock period, the owner can redeem the unlocked UWE tokens, effectively burning the lock’s NFT. Upon submission, the NFT will be burned and the UWE tokens will be sent to the owner's address.

**Important note**:  Each exit forfeits 10% of their $UWE in the underwriting pool that gets proportionally redistributed among the remaining underwriters. This incentivizes underwriters to commit for longer terms that result in greater stability of underwriting capital and the ability to meet any claims obligations, reducing the financial risk of the system.

At the beginning of each epoch, premiums are charged implicitly based on the insurance capacity allocations (i.e., votes) and transferred out of the Underwriting Locks contract, ultimately forming the float.

## Premium Float pool

Each epoch, underwriting locks will be charged an implicit premium through their underwriting equity (UWE tokens in lock-contract) based on their votes. The premiums form the float pool that can cover claims (reducing the resulting underwriter’s risk), provides yield to $SOLACE stakers, and supports further Solace’s development.

Currently, the premiums are charged on a 'voter' basis. First, the total premium of an insurance  gauge is calculated. Then, the premium is split equally amongst all the voters’ underwriting locks. The formula to calculate the premiums for a single voter:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<img src="/img/native_glossary_1.png" alt="voting_graph" width="400px" />
</div>

**CL<sub>gauge</sub>** - individual coverage limit of gauge, **Vote<sub>L</sub>**- vote allocated by the voter to a particular gauge, **ROL<sub>gauge</sub>** - ROL for this particular gauge **∑Vote<sub>L</sub>**- the sum of all votes allocated to the respective gauge in this epoch. 

## Voting power and voting process

DApps differentiate in size, market cap, and categories, among several other attributes. In order to design a fair playing field for DApps across DeFi,  voting power per underwriting lock is calculated using a quadratic function. Inside the quadratic function exists two parameters:

- **Number of UWE tokens** locked in Underwriting Locks smart contract

>**Note**: Due to the fact that each epoch UWE tokens are withdrawn as premiums from the Underwriting Locks smart contract, the voting power of participants decreases over time. Voting power decreases faster for protocols whose ROL is larger (riskier projects).

- **Lock Multiplier,** which depends on the lockup period set by the user when depositing tokens to the Insurance pool.

The formula for calculating the Multiplier is as follows:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
M = sqrt(months) / 2.44948974278
</div>


<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<img src="/img/architecture_graph.png" alt="native_architecture_simplified" width="800px" />
</div>

At the beginning of each epoch, voting starts to determine the allocation of **Solace Insurance Capacity** for the next epoch among the participating Native protocols. During the voting process, underwriters can distribute their votes among several gauges. Based on the number of votes cast for each gauge, each project's share of **Solace Insurance Capacity** is calculated and the **Individual coverage limit** is determined for each participating protocol, which remains unchanged until the next epoch. Voting is 'saved' - any vote you make is saved for all future epochs, meaning that a lock owner/delegate needs to make the choice once and only update their vote if the choice changes.


The formula used to calculate the Individual coverage limit:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center" }} >
<img src="/img/native_architecture_3.png" alt="native_architecture_simplified" width="300px" />
</div>

## Claims Process

When an exploit occurs on any of the DApps with insurance gauges, that respective DApp submits a postmortem report. The DApp, alongside Solace, will determine the value of the exploited funds and how best to distribute the payout, taking specifics about the exploit and DApp’s architecture into account.

If the postmortem report is confirmed and approved by the risk management team, Solace begins the payout process.

**Lend, not Liquidate:**

Solace doesn’t sell or liquidate the tokens in the Native pool. First, Solace utilizes the premium float pool capital. If the float pool cannot pay out the claim alone, Solace leverages against the underwriting pool token set and borrows stablecoins to pay out the claim.

Those stablecoins are sent to the DApp within one week of the claim approval. After the payout event, Solace uses the collected premiums to pay back the loan over time.

Claims can be disputed in case of a disagreement through an independent 3rd party, not affiliated with Solace (current implementation will utilize UMA to arbitrate claim disputes).






