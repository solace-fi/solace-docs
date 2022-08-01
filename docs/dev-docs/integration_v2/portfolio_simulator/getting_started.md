---
sidebar_position: 2
id: getting_started
title: Getting started

---

**IMPORTANT**: we don't insist on a specific UI and UX implementation for the **Portfolio simulator**. Using our API you can get all the necessary information from our backend infrastructure and use this information on the frontend as you want. In the following description we will describe our own implementation, which you should consider as an example, but not the only possible option.

To implement a portfolio simulator on page, we should provide the user with the following key components:
1. A list of all protocols insured by Solace (link to “Quoting a list of protocols”). Users can select the protocols they want to add to the simulated portfolio from this list .
2. A selected protocols list with text entry for each protocol (link to “Quoting a list of protocols”). Here is the list of protocols added by user to the simulated portfolio. Users should specify the dollar value of the simulated position for each protocol.

After collecting the positions USD balances on the frontend we should form a special JSON file and send a [POST request](https://risk-data-docs.solace.fi/#/Quote%20Policy%20Price/getScores) to a special backend endpoint.

On the backend, JSON file is fed to the **Risk assessment engine**, which follows rules described in “How Solace assess risk rate for entire portfolio”  section. After **Risk assessment engine** calculated the **portfolio risk rate**, the price rate is calculated according to the following formula:

    USD price per year= USD portfolio equivalent * current_rate




