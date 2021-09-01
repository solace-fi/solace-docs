# Capital Pool

The capital model regulates how Solace Protocol invests the pooled capital to earn yield while providing a sufficient level of solvency to securely guarantee that any liability can be covered with a high confidence level. The computation of coverage liabilities, also known as technical provisions, consists of a ”best estimate” of liabilities and a risk margin where the liabilities can’t be properly hedged. Similar to traditional insurance companies, Solace protocol follows the idea of a Minimum Capital Requirement (MCR) and cannot have the MCR ratio below 100%. This means that Solace sets a threshold corresponding to the minimum amount of total assets covering the liabilities over a 1-year period with a confidence level of 85%. The MCR is set across the entire risk portfolio and is updated on an on-going basis as the new coverage policies are being extended and others expire.

Due to the nature of DeFi, the capital pool does not have to be split into a statutory reserve pool (which is usually idle or utilized in liquid investments) and an investment pool to generate a return on investment. Since yield instruments in DeFi are very liquid, virtually the entire Solace’s risk-backing capital pool can be engaged and still ensure adequate liquidity is available to honor all of the legitimate claims made by policyholders and any operational transactions, like capital provider withdrawals. Given these circumstances, building a well-managed investment thesis and hedging the associated risks becomes very important to avoid any losses in situations of shortfall events.

Note that since valid claim pay-outs will be made in the amount of financial loss carried by the policyholder (up to the cover limit) and not in the coverage amount, Solace’s effective risk is reduced so that the protocol can provide more active coverage. The active covered amount is not equal to the liabilities in this context; therefore, the MCR can be less than the active coverage amount that the protocol is providing.

The capital pool will be invested through different strategies. The Solace protocol can build complex investment thesis over time, sourcing ideas in a decentralized fashion as users will be able to design and propose their own strategies.

At launch, the first strategy Solace will invest in is ETH2.0 staking due to more stable returns. Generally, Solace investments will pursue less risky, more stable-rate returns and engage in passive (e.g., hodling, lending, etc.) and active (e.g., liquidity mining) investment vehicles on-chain. Below are a few examples of potential strategies:
- liquid ETH2.0 staking (e.g., Lido Finance) ;
- Fixed-rate lending (e.g., Element Finance);
- Self-optimizing lender that makes deposits to the highest yield lending platform;
- Provide liquidity for ETH - sETH or ETH - sETH on curve.fi DEX;
- Open Maker vault to mint DAI and provide stablecoin liquidity on a DEX.

Besides the obvious risks of Ethereum blockchain failing, Solace Protocol exposes capital providers to the following risks:
- Solace Protocol smart contract failure.
- Any of the covered protocols might fail, and claims will need to be paid out.
- Risks associated with investments (e.g., staking will have to be done through offered DeFi products, like Lido.fi, so they might have some issues leading to loss of funds).
- Catastrophic devaluation of the SOLACE token which will lead to investors pulling out the funds as old coverage policies end and new ones are not being purchased. This would ultimately result in a slow, painful death of the platform.
