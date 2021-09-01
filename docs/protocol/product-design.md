# Product Design

The first product solace.fi offers is a market maker (i.e. liquidity provider) coverage that protects depositors and other protocols from financial loss due to smart contract failure, hacks, exploits, etc. To purchase the coverage, users will need to confirm that they have an insurable interest in a specific contract. Then in case of a valid claim, the financial loss carried by the policyholder will be automatically evaluated and paid out (within the coverage limit chosen by the user).

As users buy coverage policies, they receive an ERC721 token as their policy contract. Each tokenized policy will provide the user with options to update the term of the policy, cancel the policy and get a pro-rated refund (minus a fee), open a claim, escalate the claim (if the initial claim has been denied), etc. Ultimately, all functionality will be available through the solace.fi web interface. Coverage policies will be denominated in Ether.

Here is a step-by-step guide of what a standard process of buying coverage on Solace
protocol looks like:
1. User connects their wallet.
2. User chooses a platform (e.g. Compound, Aave, etc).
3. The Solace user interface will display the current LP/staking position or return
an error (i.e. LP position is not found). This is done through querying that
platforms contract to see if the user has a balance there (could be just LP tokens,
or staked LP) and in what amount.
4. User enters the number of days theyd like to receive coverage for the position,
and the coverage limit (ranging 0-100%).
5. The premium price will then be displayed.
6. User purchases the policy and submits the transaction.
7. Once the transaction has been successfully mined, the user receives the policy.
