---
sidebar_position: 9
---

# Risk Assessment Infrastructure
---
## How do we do risk assessment now? 

Here is a high-level explanation of our four-step assessment process: 

---
### Step 1: Request a List of Defi Protocols from Zapper through API

[Zapper](https://docs.zapper.fi/zapper-api/api-getting-started) is a service that allows tracking users’ positions in DeFi protocols. Solace requests the following information from the API:

1. Which DeFi protocols does the user have funds in?
2. How many assets does the user have in each protocol?

Hundreds of DeFi projects are created every day so it is quite challenging to track them all. For now, Solace sells insurance policies for all projects that are on Zapper's list. If you see a project has not been added to Zapper yet, Solace is not able to provide an accurate risk assessment for that particular position at the moment. It also will not factor into calculating the risk rate for the portfolio. 

Note: At the moment, the industry is struggling to track all user positions in DeFi so for now we are using Zapper. In the future, we intend to include other solutions or create our own infrastructure.

<b>Sample Zapper Response:</b>

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/zapper-info.png" alt="Zapper Info Example" width="300px" />

</div>

In the JSON file, as displayed in the sample above, Zapper provides each ‘appId’ with a corresponding ‘category’.  At the moment, each project is categorized into one of the following:
1. yield-aggregator
2. lending
3. liquidity-pool
4. exchange
5. asset-management
6. unknown
7. other

The ‘category’ parameter provides important insight into each protocol and enables us to use more advanced statistical methods in the risk assessment process. 

By aggregating risk loads by category instead of by each protocol, Solace can diversify the risk load so the total premium for the whole account ends up being cheaper than buying cover for each position in the portfolio (account coverage vs. stacked coverage). The discount varies depending on the structure of the portfolio but a discount anywhere between 10 and 20% can be expected for an account with multiple positions.

### Step 2: Calculating Risk Rate for User Portfolio

Solace pulls the risk rate for each protocol (from the Data Preparation step) and weighs it with assets amount in each protocol.
 
When a user requests an assessment of their portfolio, Solace collects information from Zapper about their positions and the value of funds invested in each protocol. 

We aggregate information and calculate the risk of each protocol in advance so that once we have information about the composition of the individual portfolio, we are able to calculate the final risk rate. 

We use different data sources in order to collect a wide range of risk-related attributes about DeFi protocols. We currently collect the following information about each protocol:

1. Total Value Locked (TVL)
2. Blockchain Platform
3. Number of Users
4. Transaction Activity
5 Time Since Launch
6. Number of Audits

We use the following sources to retrieve this information:

1. DeFi Llama
2. Defiyield
3. Rekt news
4. CryptoSec

We create a base table of attributes from the sources above to use in our risk assessment model. 

### Step 3: Process Data and Rank each Protocol to the Associated Risk

Each attribute has its own adjusted weight coefficient in the total risk estimation. Weights are currently determined by the team, but will be determined by governance as more reliable data is aggregated. 

If Solace is unable to find information about a specific protocol, it will be classified as ‘unknown’ and placed in the highest risk tier (F).

### Step 4: Calculate the Inter-Category and Category Internal Correlation Tables

Solace uses statistical approaches to take into account possible explicit and implicit risk connections of different DeFi categories and protocols. In order to do so, we need to introduce two new entities to our explanation:

#### Inter-Category Correlation Table
<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/inter-categoryCT.png" alt="Inter-Category Correlation Table" width="600px" />

</div>

Each value in this table represents the relationship between integral risks of Category A with integral risks of Category B. This allows Solace to quantitatively describe the influence that hacks from Category A would have on the safety of projects from Category B. The less this parameter is, the less likely that hacking protocols in Сategory А will affect protocols in Category B.

#### What Does it Mean?
Each DeFi category is unique in logic, implementation, tools and mechanics. So theoretically, hackers will use different approaches to hack protocols of different categories. However, since the Defi world is complex, there can also be several commonalities between projects. This holds true even if they are from different categories (at least for the same smart-contracts libraries).

Moreover, DeFi projects of varying categories might be interacting with each other in different ways and hacking one project can have significant influence on others.

For now, the value in the Inter-category correlation table is populated by experts based on their experience and research work. This table is continuously updated by the Solace team and DAO risk management team.

Below are a few examples:
<b>Lending-Lending</b> = 1, maximum of correlation with itself = 1
1. Lending-AMM = 0.1
    - This means that hacks of Lending protocols have a low impact on AMM and vice versa.
2. Lending-DEX = 0.2
    - This means that hacks of Lending protocols have a moderate influence on DEX safety.
3. Lending-Derivatives = 0.3
    - This means that hacks of Lending protocols have a high influence on Derivatives protocol safety.


#### Category Internal Correlation Table

The Category Internal Correlation NxN Table has a similar output but within the same category. This table answers the question: “What is the probability that hacking product A could have a negative impact on the security of product B?”

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/categoryICT.png" alt="Category Internal Correlation Table Example" width="600px" />

</div>

Solace calculates a table for each user who buys coverage.  

As you can see from the table above, all cells, except the diagonals, are populated with 10% (0.1). This means that there is not a strong correlation between the risks of a different protocol. 

In this example, we make an assumption that Lending protocols have low inter-connectivity of risks between each other, so we populated the table with 0.1. It is an assumption and coefficient for each pair theoretically should be calculated by the Rating Engine.

Below are our initial assumption about the interconnectivity of risks:

<div style={{"display":"flex", "justify-content":"center", "align-items":"center", "justify-content":"center" }} >

<img src="/img/inter-connectivity-risk.png" alt="Interconnectivity of Risks Example" width="600px" />

</div>

To summarize, our risk assessment flow (described above) is designed to produce a:

1. Continuously updated table with a risk rate for each project on Zapper,
2. Continuously updated Inter-Category Correlation Table and
3. Continuously updated Category Internal Correlation Table.



