---
sidebar_position: 5
id: all_protocols
title: Step 2. Displaying the list of available protocols
---

Based on fetched JSON file with all available protocols, DApps can provide their users with a list of protocols available for selection. There are several ways a DApp can implement this part on their frontend such as a dropdown menu, table, search bar, or a combination of the few. The choice is up to each DApp and their UI/UX. The main criterion is to increase convenience for your user. 

In Solace’s interface, we used a dropdown menu with a search bar:

<div style={{"display":"flex", "margin-bottom":"20px" ,"justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="img/portfolio_simulator_1.png" alt="portfolio_simulator" width="300px" />

</div>

After clicking on the item object with project detail will be added to the array located in the state storage. For example, if the user selected **Curve**, **Aave** and **UniverseXYZ** array with positions in app state storage will look like this:

```js
{
    "positions": [
      {
          "appId": "curve",
          "network": "",
          "balanceUSD": 0
      },
      {
          "appId": "aave-v1",
          "network": "",
          "balanceUSD": 0
      },
  
      {
          "appId": "universe",
          "network": "",
          "balanceUSD": 0
      }
    ]
  }
```


**NOTES**: 
1. In order to fetch protocol icons for your interface, you can use our API **https://assets.solace.fi/zapperLogos/{appId}**, where **{appId}** should be substituted by a certain appID.
2. By default balanceUSD = 0 for each new added position. We will provide users with the ability to change the position “balanceUSD” in the other place of our interface (see next section). Nevertheless, it is only one of the possible ways how to do that. You can give this functionality right on the selecting protocols stage.


