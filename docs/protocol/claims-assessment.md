---
sidebar_position: 5
---


# Claims Assessment

Claims assessment is one of the most important parts of any coverage tool. It has to provide transparency of processes, ease of use and guarantee that users receive a payout in the event of an accident. Solace has developed a parametric auto claims assessment system (aka PACLAS) to achieve that.

## How does the system work?

The claims system tracks covered liquidity for every policy, determines financial losses, and signs proof that allows users to submit a claim transaction and receive a pay out. 

Currently the system runs in a centralized fashion on AWS supported by the core team, though the code is open-source. However, we plan to transition to a distributed computation framework in the near future to increase the security and transparency of the system. While right now this approach gives the core team control over the claims process, we want to make sure the community can comfortably rely on us and trust the integrity of the system, so we have decided that there will be no code change or updates without Solace Launch DAO approving it (for more info check *Governance* section) and notifications to the public/community. This will keep everyone honest and aware of how things develop and change as far as upgrades, thus you don’t have to worry about Solace core team introducing an update that’s not in the best interest of the user.

## What's the flow in case of an exploit?

The user just needs to open the Solace app and open the claim. When the user opens a claim, PACLAS scans over stored data points to determine exact financial loss. Once a claim has been opened, Solace instantly validates that and makes payouts in a single transaction (within policy’s coverage limit), without delay for reviews by any claims assessment committee.  However, payout goes to Escrow first and stays there for one week (subject to be lowered later) as a cooldown period, which gives everyone a chance to double check that PACLAS operates smoothly and correctly. Important note is that once the payout is submitted to Escrow, underwriters no longer possess those funds, so, as a policyholder, you can relax knowing that your payout is there waiting for you.

## What's cool about it?

This approach removes centralization and bureaucracy that comes with claims assessment committees and human-operated processes and provides transparency and accessibility to users. Code runs all the processes, not people. And code is much more reliable than people. 