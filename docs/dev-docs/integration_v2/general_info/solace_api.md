---
sidebar_position: 4
id: solace_api
title: Solace API
---

You can access all the results of our risk assessment team through a specially developed API. To learn more about the Solace API for integrations, you can follow this link: **https://risk-data-docs.solace.fi/**.

Here you can find the following  groups of queries:
1. **Rate card**. This group include only one GET method to get a list of protocols available for insurance:
    - **/series** - GET request allows to receive objects that contains information about all protocols supported by Solace **Risk assessment engine**.

2. **Quote Police Price**. This group includes methods for requesting all necessary data to calculate the price rate for the portfolio:
    - **/premium** - GET request allows to receive annual price rate for current user portfolio. In order to receive this data you need to specify user’s account address and **chainID** where the policy will be purchased.

        **NOTE**: for now price is the same regardless network of policy purchasing, so **chainID** parameter doesn’t affect on premium. 

    - **/balances** - POST request allows receiving data with user’s balances in supported protocols over specified chains. You just need to specify the user address and the list of chainID’s and the server will return the object that contains detailed information about the user’s positions and balances in all specified chains.

    - **/scores** - POST request allows to get current portfolio risk rate and risk assessment information about user’s portfolio.




