---
sidebar_position: 5
id: positions_list
title: Step 3. Positions list
---

After the user selected several protocols they appear in the list with selected protocols. The basic implementation of the table may look like this:


<div style={{"display":"flex", "margin-bottom":"20px" ,"justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<img src="/img/portfolio_simulator_2.png" alt="portfolio_simulator" width="500px" />
</div>

Each selected project can be presented as a separate card with the following functionality:
- Users are able to specify the USD value locked in the particular project
- User are able to remove project card from the simulated portfolio

<div style={{"display":"flex", "margin-bottom":"20px" ,"justify-content":"center", "align-items":"center", "justify-content":"center" }} >
<img src="/img/portfolio_simulator_3.png" alt="portfolio_simulator" width="500px" />
</div>

When the user changes balanceUSD for the position or removes a card from the list it will be reflected in the state object:


```js
{
    "positions": [
      {
          "appId": "curve",
          "network": "",
          "balanceUSD": 3000  // Curve position balance changed in state object after user set USD amount equal to 3000 USD in UI 
      },
      {
          "appId": "aave-v1",
          "network": "",
          "balanceUSD": 5000 // Aave position balance changed in state object after user set USD amount equal to 5000 USD in UI 
      },
  
      {
          "appId": "universe",
          "network": "",
          "balanceUSD": 2000 // Universe position balance changed in state object after user set USD amount equal to 2000 USD in UI 
      }
    ]
  }
```



