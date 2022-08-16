---
sidebar_position: 6
id: exit
title: How to Exit out of Solace Native
---

Once an underwriter lock reaches the end of its lock period duration, the DApp (or user) controlling the lock has the option to exit out of the pool and redeem it’s share of the underwriting pool. The redemption rate follows a bonding curve, with a funding rate *F (10%).* Ultimate redemption value of an exit, compared to the initial deposit, depends on the time of the exit relative to other participant exits. Basically, each exit leaves 10% of their $UWE in the underwriting pool that gets proportionally redistributed among the remaining underwriters. This incentivizes underwriters to commit for longer terms that result in greater stability of underwriting capital and ability to meet any claims obligations, reducing the financial risk of the system.

- (100% - F%) of the $UWE can be withdrawn
- The first group has the largest haircut, while the last group will not have a haircut at all. In fact, they will make money.

**If Lock = >1 months: Force Quit**

Two ways to Force Quit

1. Paying at market rate $SOLACE / $UWE
2. Taking a penalty, available value coefficient:
    1. Q = UWPshare / {(M+1) * UWPshare} * (1 - F)
    2. 4y lock -> Q = 0.23508348746;
    3. 6mo lock -> Q = 0.45;
    4. zero lock -> Q = 0.9 (regular exit)
    5. Note: same F% funding rate is applied.