---
sidebar_position: 7
---

# Data Pipeline

The two main data sources necessary for the rating process are:
1. Transactional data:
    - Historical exploits data at the time of exploit
2. Temporal data
    - Current data attributes that are necessary for rating supported protocols

## Transactional data pipeline

Unfortunately, there's not a lot of data about DeFi exploits. That makes data analysis a big challenge. Solace aggregates the exploits data from various sources (e.g [<u>Defiyield</u>](https://defiyield.app/rekt-database), [<u>Rekt news</u>](https://rekt.news/leaderboard/), [<u>CryptoSec</u>](https://cryptosec.info/defi-hacks/)) to build out the exploits database manually. This database includes historical data about past exploits and updates the database as new exploits happen. The most relevant factors aggregated are: launch data of the protocol and exploit date to be able to analyze the time to failure to see if age is a predictive attribute. Also loss amount, number of audits, oracle dependency, type of exploit and total value locked on the day the exploit are captured. The damage ratio is analyzed for each attribute by dividing the loss amount by the total value locked right before the exploit happened.

## Temporal data pipeline

The purpose of the temporal data pipeline is to aggregate and update current data from the supported protocols. For the first version of the Solace Wallet Coverage, we capture protocols that are supported by Zapper. Therefore, the first step is to retrieve those protocols via a request to Zapper's public API.

After retrieving the list of supported protocols endpoint, we have to find the relevant attributes needed for scoring. In order to retrieve those attributes, we rely on other data aggregators such as: [<u>Defi llama</u>](https://defillama.com/) and [<u>Dune</u>](https://dune.xyz/home). By creating a unique Solace ID, we are able to merge the responses together into a single dataframe containing the protocols and  data attributes necessary for ranking protocols into tiers. Each time the temporal data pipeline is run, a new dataframe is created and appended to Solace's risk mananagement database, overwriting the previous version. This database is the basis for the publish series.