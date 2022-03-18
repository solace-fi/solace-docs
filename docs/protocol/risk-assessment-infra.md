---
sidebar_position: 11
---

# Risk Assessment Infrastructure

## How do we do risk assessment now? 

Below we will provide high-level explanation of our flow. We will divide flow to two steps:
1. Data preparation
2. Calculating risk rate for user portfolio
    - When a user requests an assessment for his portfolio, Solace pulls information about their portfolio and the number of funds blocked in each protocol via Zapper. The information about the risks of each protocol is calculated in advance, and Solace is able to calculate final risk rate for the portfolio. 

## Data preparation:  

### Step 1: Request a list of Defi protocols from Zapper through API.

Zapper is a service that allows tracking users’ positions in DeFi protocols. Hundreds of DeFi projects come up every day, and it is quite challenging to track them all. Zapper contains the list of approved protocols where their backend logic tracks users' activity. For now, Solace can sell insurance policies for projects that are presented in Zapper's list. That means if the project is not added to Zapper, Solace is not yet able to provide an accurate risk assessment for this particular position, and it will not be taken into account during calculating the risk rate for the portfolio.

NOTE: This is a major industry problem to track all user’s positions in DeFi. For now we are using Zapper, and we intend to choose another solution or create our own infrastructure to break from the dependency.

The most simple information that Zapper able to provide us looks like this:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/zapper-info.png" alt="Zapper Info Example" width="300px" />

</div>

As displayed above, we have appId and category fields in the responded JSON file. There are 7 categories in Zapper:
1. yield-aggregator
2. lending
3. liquidity-pool
4. exchange
5. asset-management
6. unknown
7. other

The Category parameter is an important parameter about the protocol that enables Solace to use more advanced statistical approaches in the risk assessment flow. 

### Step 2: Collect risk related information about projects

We use different sources of information to get diverse risk-related information about DeFi protocols presented in the Zapper list. We are interested in the following attributes:
1. TVL
2. In what blockchain project presented
3. Number of users
4. Transaction activity
5. Age of protocol
6. Audits

We use the following sources of info to retrieve this information:
1. DeFi Llama
2. Defiyield
3. Rekt news
4. CryptoSec

Risk assessment requires a table of attributes for each protocol to be fill in with values from different sources. Each attribute has its own weight coefficient in total risk estimation. The weights are determined by the team but will be determined by governance as more data is aggregated and becomes reliable. If Solace can´t find the information about a specific protocol, then it will be classified as unknown and therefore in the highest risk tier (F).

### Step 3: Process data and provide a risk rank for each protocol

Solaces uses special formulas to calculate the risk rank for each protocol. This translates to an adjusted weight coefficient for each attribute, which helps calculate the risk ranks. This table is updated continuously based on new and risk managers reports. 

### Step 4: Calculate the Inter-Category and Category Internal Correlation Tables

At this step Solace calculates the following entity:
1. Inter-Category Correlation Table
2. Category Internal Correlation Table

We need to get these tables in order to recalculate the price for the user portfolio at Step 6. More info about these tables you can find in the Base rate calculation chapter. So after the preparation step we have:
1. Continuously updated table with risk rate for each project from Zapper list
2. Continuously updated Inter-Category Correlation Table
3. Continuously updated Category Internal Correlation Table

## Calculating risk rate for user portfolio

### Step 1: Getting portfolio information via Zapper API

At this step, Solace requests the following information:
1. Which DeFi protocols does the user have funds in?
2. How many assets does the user have in each protocol?

### Step 2: Calculate risk and price rates for the portfolio

Solace pulls the risk rate for each protocol (from the Data Preparation step) and weighs it with assets amount in each protocol. 

### Step 3: Recalculate risk rate considering diversification

By aggregating risk loads by category instead of by each protocol, Solace can diversify the risk load so the total premium for the whole account ends up being cheaper than buying cover for each position in the portfolio (account coverage vs. stacked coverage). The discount varies depending on the structure of the portfolio but a discount anywhere between 10 and 20% can be expected for an account with multiple positions.

# About Risk Correlation Tables

Solace uses statistical approaches to take into account possible explicit and implicit risk connections of different DeFi categories and protocols. In order to do so, we need to introduce two new entities to our explanation:

## Inter-Category Correlation Table

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/inter-categoryCT.png" alt="Inter-Category Correlation Table" width="600px" />

</div>

NOTE: here we have a 4x4 example, but in reality, it is a 7x7 table.

Each value in this table represents the relationship between integral risks of Category A with integral risks of Category B. This allows Solace to quantitatively describe the influence that hacks from Category A would have on the safety of projects from Category B. The less this parameter is, the less likely that hacking protocols in Сategory А will affect protocols in Category B.

### What does it mean? 
Each DeFi categories has its own peculiarities in logic, implementation, tools and mechanics. So theoretically, different vectors of attack will be used by hackers to hack protocols of different categories. However, the Defi world is complex, and there are a lot of commonalities between different projects, even if they are from different categories (at least the same smart-contracts libraries). 

Moreover, DeFi projects of different categories might be interacting with each other in a different ways, and hacking one project can have a big influence on other projects.

For now, the value in the Inter-category correlation table is populated by experts based on their experience and research work. This table continiously updated by Solace team and DAO risk managment team. 

Let’s consider examples:
<b>Lending-Lending</b> = 1, maximum of correlation with itself = 1

1. Lending-AMM = 0.1
    - This means that hacks of Lending protocols have a low impact on AMM and vice versa.
2. Lending-DEX = 0.2
    - This means that hacks of Lending protocols have a moderate influence on DEX safety.
3. Lending-Derivatives = 0.3
    - This means that hacks of Lending protocols have a high influence on Derivatives protocol safety.

## Category Internal Correlation Table
The Category Internal Correlation NxN Table has the quite same meaning but within the same category. Values in cells can answer the question: <i>“What is the probability that hacking product A could have a negative impact on the security of product B?”</i>

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/categoryICT.png" alt="Category Internal Correlation Table Example" width="600px" />

</div>

Please note, that Solace compose such table for each user, who buys coverage.

As you can see from the table, all cells, except the diagonals, are populated with 10% (0.1). This means that there is no obvious strong correlation between the risks of a different protocol. But how did we calculate all these values?

In  this example, we make an assumption that Lending protocols have low interconnectivity of risks between each other, so we populated all table with 0.1. It's an assumption and coefficient for each pair theoretically should be calculated by the Rating Engine. 

Tables of our initial assumption about interconnectivity of risks:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/inter-connectivity-risk.png" alt="Interconnectivity of Risks Example" width="600px" />

</div>



