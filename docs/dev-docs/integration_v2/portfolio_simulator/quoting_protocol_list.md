---
sidebar_position: 4
id: quoting_protocol_list
title: Step 1. Quoting a list of protocols

---

Solace has its protocol list stored in a series.json file. In order to get the json file for the portfolio simulator, dApps needs to send a GET request to Solace API endpoint: **https://risk-data.solace.fi/series **. 

The server response is as follows:


```js
{
    "metadata": {
      "seriesName": "Series 2.0",
      "version": "0.0.1",
      "dateCreated": "2022-06-27",
      "provenance": "ipfs://cid0000001"
    },
    "function": {
      "name": "getScores",
      "description": "rating engine for swc",
      "provenance": "ipfs://cid0000001"
    },
    "data": {
      "protocolMap": [
        {
          "appId": "aave-amm",
          "category": "lending",
          "tier": 1
        },
        {
          "appId": "aave-safety-module",
          "category": "liquidity-pool",
          "tier": 1
        },
        {
          "appId": "aave-v1",
          "category": "lending",
          "tier": 2
        },
        {
          "appId": "aave-v2",
          "category": "lending",
          "tier": 1
        },
        {
          "appId": "aave-v3",
          "category": "lending",
          "tier": 1
        },
        {
          "appId": "aavegotchi",
          "category": "yield-aggregator",
          "tier": 3
        },

        ...

        ]
    }
```


The information we need is contained in the “data” → "protocolMap" field as an array of objects. Each object corresponds to one protocol and contains 3 fields:
 - **appId** - the unique text identifier of a decentralized application supported by Solace.
 - **category** - project category. There are six options: lending, liquidity-pool, yield-aggregator, asset-management, unknown, other
 - **tier** - the level of protocol risk depends on the risk score calculated by Solace team. There are 4 levels: 1 - low risk, 2 - medium risk, 3 - high risk, 0 - not enough data about the project (i.e. most risky).




