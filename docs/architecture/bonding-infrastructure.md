---
sidebar_position: 3
---

# Bonding Infrastructure
---
In order to implement the mechanics for bonding, we use infrastructure composed of several smart contracts you can find [<u>here</u>](https://docs.solace.fi/docs/dev-docs/Contract%20Addresses/Ethereum). 

The two main components for bonds are:
1. Bond Teller
    - A bond teller is essentially an exchange, where the user can deposit crypto assets to receive $SOLACE at a certain price. When a user buys bonds, they interact with one of the BondTeller smart-contracts based on the token they're exchanging. There are separate smart contracts for each crypto asset, for which users provide to purchase SOLACE bond. Therefore, if the user provides ETH to purchase bonds, they will interaсt with the ETH bond teller smart contract. If the user provides USDC, they will interact with the USDC bond teller smart contract.
    - 95%  of crypto assets provided by users for bonding go toward the Underwriting pool. The other 5% goes to the Core Multisig. Their $SOLACE is either linearly unlocked over 7 days or placed into an xsLock smart-contract.
2. [<u>Bond Depository</u>](https://github.com/solace-fi/solace-core/blob/main/contracts/bonds/BondDepository.sol)
    - This is a smart-contract that behaves like a registry for bond tellers smart contracts. You can find fuctions that allows users to purchase $SOLACE tokens who purchased bonds.
    
#### How the BondTeller Contract Works:
1. Deploys BondTellerERC20.sol on the blockchain.
2. Calls initialize() function for deployed original BondTellerERC20.sol. After this step, all variables inside the original contracts are populated.
3. Creates new BondTeller copy on blockchain by calling the clone() method.


