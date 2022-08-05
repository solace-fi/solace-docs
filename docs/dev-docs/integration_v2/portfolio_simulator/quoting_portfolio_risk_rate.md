---
sidebar_position: 6
id: quoting_portfolio_risk_rate
title: Step 4. Quoting a simulated portfolio rate

---

In order to get a portfolio risk information dApp needs to send a POST request to Solace API endpoint: **https://risk-data.solace.fi/scores**.

**/scores**
 use a POST request with a body that contains the account and an array of positions. Each position is an object that indicates the network, appId and balance of the position. 
The body for the request has the following structure:

```js
{
    "account": "0x9549bf77F664f12C3A6B96F6A631E5bf02D52D67", // you also can leave this field un-populated: "account": "",
    "positions": [
      {
          "appId": "curve",
          "network": "",
          "balanceUSD": 3000
      },
      {
          "appId": "aave-v1",
          "network": "",
          "balanceUSD": 5000
      },
  
      {
          "appId": "universe",
          "network": "",
          "balanceUSD": 2000
      }
    ]
  }
```

**NOTES**: 
1. As you can see, the JSON object is slightly different from the user position object we generated in the previous step. The main difference is the presence of the "account" field. Actually  **Risk assessment engine** doesn’t necessarily need a populated “account”. So you can leave this field un-populated while forming request on the frontend.

2. Actually  **Risk assessment engine** doesn’t necessarily need a populated “network” field to perform risk rate calculation for a composed portfolio. So you can leave this field un-populated while forming requests on the frontend. Meanwhile, **appId** and **balanceUSD** should be populated for all positions.

The 200 successful response to a POST /scores request to looks like this:

```js

{
  "address": "",
  "address_rp": 325.51983563303423,
  "current_rate": 0.032551983563303424,
  "timestamp": "2022/08/01, 07:37:04",
  "protocols": [
    {
      "appId": "curve",
      "network": "",
      "balanceUSD": 3000,
      "category": "liquidity-pool",
      "tier": 1,
      "rol": 0.02,
      "rrol": 0.0167,
      "riskLoad": 0.2,
      "rp-usd": 50.1,
      "risk-adj": 10.02
    },
    {
      "appId": "aave-v1",
      "network": "",
      "balanceUSD": 5000,
      "category": "lending",
      "tier": 2,
      "rol": 0.025,
      "rrol": 0.0192,
      "riskLoad": 0.3,
      "rp-usd": 96,
      "risk-adj": 28.8
    },
    {
      "appId": "universe",
      "network": "",
      "balanceUSD": 2000,
      "category": "unknown",
      "tier": 3,
      "rol": 0.0799,
      "rrol": 0.0571,
      "riskLoad": 0.4,
      "rp-usd": 114.2,
      "risk-adj": 45.68
    }
  ],
  "metadata": {
    "seriesName": "Series 2.0",
    "version": "0.0.1",
    "dateCreated": "2022-06-27",
    "provenance": "ipfs://cid0000001"
  }
}
```

One of the most important fields here is the current_rate. This field represents the estimated rate the current portfolio would be charged over a one-year period.

You can calculate policy price by the following formulas:
- USD price per year= USD portfolio equivalent * current_rate
- USD price per month= USD portfolio equivalent * current_rate/12
- USD price per day= USD portfolio equivalent * current_rate/365.25
 
So,  now you can provide your user with **price rate** that allows to assess the feasibility of buying a policy.

**NOTE**: there are several options for how you can organize the process of quoting information from risk assessment engine:
1. You can quote updates each time when something changed in the portfolio.
2. You can send a request only if the user pressed the special button.


