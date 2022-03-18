---
sidebar_position: 6
---

# Staking Contract

Staking is a mechanic that allows $SOLACE holders to earn income via policy and token emissions. To do so, the user needs to lock $SOLACE tokens in Solace's staking mechanism. Solace will reward users for keeping $SOLACE in the protocol. The main source for rewards for stakers is the Core Multisig, where almost all minted SOLACE tokens are currently stored. 80 millions of SOLACE tokens was set aside for stakers, rewarding 10 million SOLACE tokens per year. Such distribution strategy might be changed in the future.

Solace distributes 10 million tokens during per year on each chain proportinoal to all stakers. Solace distributes the constant amount of SOLACE per second (this is a constant in the smart contract that is defined by DAO). Then, this amount is divided between all stakers according to their "staking power".

"Staking power" can be calculated with the following formula:

Staking power  = deposited $SOLACE * multiplier, where multiplier = 1 when unlocked and linearly increases up to 2.5 with a four year lock.

Let's look at the staking process step by step: 
1. Users wants $SOLACE. The user can buy SOLACE tokens on the open market or purchase bonds via the Solace site.
2. Users needs to specify a term for SOLACE tokens locking and SOLACE amount. “Locking period” refers period of time when the user is unable to retrieve his tokens from staking smart contract. The longer the period, the greater the “staking power” and, accordingly, the greater the staker’'s reward.
3. Send the transaction to staking smart contract. When the user press “Stake” button, they deposit $SOLACE to the xsLocker.sol smart contract. xsLocker.sol notifies StakingRewards.sol, and it leads to credit rewards to stakers for the previous period and recalculation law of SOLACE distribution between all stakers for next period.

After the user locks $SOLACE in the staking protocol, xSOLACE tokens will be credited to user’s address. xSOLACE is the governance token, it's a non-transferrable ERC20 based on the user's locks. Based on a user's xSOLACE amount, “voting power” is calculated:

Voting power  = deposited * multiplier, where multiplier = 1 when unlocked and linearly increases up to 4 with a four-year lock.

