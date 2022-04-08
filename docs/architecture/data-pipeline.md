---
sidebar_position: 5
---

# Data Pipeline
---

Our rating process includes data from two main data sets:
1. Transactional data: 
    - Historical data about previous exploits. Updated as exploits occur.
2. Temporal data: 
    - Current data about the supported protocols. Updated periodically. 

## Transactional data pipeline
As DeFi is still emerging, there is not a significant amount of data available about exploits. This makes data analysis challenging. In order to have a holistic view into exploits, Solace aggregates information from various sources (e.g [<u>Defiyield</u>](https://defiyield.app/rekt-database), [<u>Rekt news</u>](https://rekt.news/leaderboard/), [<u>CryptoSec</u>](https://cryptosec.info/defi-hacks/)) to manually build out the exploits database. It includes historical data about past exploits and is updated as new exploits happen. 

The most relevant factors aggregated are:
1. Launch Date and Exploit Date of the protocol. This helps us analyze the time to failure in order to determine if age is a predictive attribute.
2. Loss Amount
3. Number of Audits
4. Oracle Dependency
5. Type of Exploit
6. Total Value Locked (TVL) at time of the exploit.

The damage ratio is analyzed for each attribute by dividing the loss amount by the total value locked right before the exploit happened.

## Temporal data pipeline

The purpose of the temporal data pipeline is to collect and update current data from the supported protocols. For v1 of Solace Wallet Coverage, we capture protocols that are supported by Zapper. Therefore, the first step is to retrieve those protocols via a request to their public API.

After retrieving the list of supported protocols endpoint, we have to find the relevant attributes needed for scoring. We rely on other data aggregators such as [<u>Defi llama</u>](https://defillama.com/) and [<u>Dune</u>](https://dune.xyz/home) for this information. We merge the responses together into a single data frame containing the protocols and data attributes needed to rank the protocols into risk tiers, along with a unique Solace ID. Each time the temporal data pipeline is run, a new dataframe is created and appended to Solace's risk management database, overwriting the previous version. This database is the basis for the publish series.