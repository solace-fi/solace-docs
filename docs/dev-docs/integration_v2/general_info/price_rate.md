---
sidebar_position: 3
id: price_rate
title: How Solace calculates price rate for the portfolio

---

The **portfolio price rate** calculation is based risk rate of the portfolio. This **portfolio price rate** represents the estimated amount of money that would be charged to the user over a one-year period.
You can calculate the **portfolio price rate** by the following formulas:
- USD price per year= USD portfolio equivalent * current portfolio risk rate
- USD price per month= USD portfolio equivalent * current portfolio risk rate/12
- USD price per day= USD portfolio equivalent * current portfolio risk rate/365.25
 
**NOTE:**
1. The current portfolio risk rate is storage in “current_rate” field of the JSON object that is returned by “/score” API method. 
2. It is an estimation assuming that the user will not move his funds between DeFi protocols. As policyholders move in and out of DeFi positions and as position balances rise and fall, Solace will accordingly change risk rate and the price of insurance will change over time. Solace protocol keeps track of policyholder positions during the life of a policy.





