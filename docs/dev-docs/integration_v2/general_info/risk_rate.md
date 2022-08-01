---
sidebar_position: 2
id: risk_rate
title: How Solace asses risk rate for portfolio

---

When the **Risk assessment engine** receives information about positions in the portfolio and the amount of money locked inside each protocol, it can calculate the portfolio risk rate. In order to do so it uses the following resources:
1. Database with risk rate for protocols 
2. Inter-Category Correlation Table
3. Category Internal Correlation Table

The first step is to calculate the intermediate value of the portfolio risk rate. In this case, the amount of money locked in the protocols act as weighting coefficients in the calculation, and the output is a risk-weighted value for the portfolio.

Because the probability that all portftolio protocols will be hacked at the same time is statistically negligible, we use this fact to lower the overall **portfolio risk rate** and thus lower the price rate for the policyholder.  So, the second step is to apply special corrections to the risk rate, taking into account the **Inter-Category Correlation Table** and **Internal Correlation Table**. After these corrections, the overall risk rate of the portfolio becomes lower. More details about the logic behind that can be found here (link to this page).

After all the steps described above **Risk assessment engine** return information in JSON format. JSON format contains risk data information about all separate protocols in the portfolio and also the overall risk rate for the current portfolio which is stored in the **current_rate** field.

The field **current_rate** is the base for the calculation of the **price rate** for the current portfolio.





