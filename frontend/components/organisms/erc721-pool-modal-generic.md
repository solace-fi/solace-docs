---
title: Erc721PoolModalGeneric
---

## Props

### `Erc721PoolModalGenericProps`

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `farmContract` | [**Contract**](https://docs.ethers.io/v5/api/contract/contract/#Contract) \| null \| undefined | The farm contract to interact with.
| `depositFunc` | { name: FunctionName, func: ( nftId: BigNumber gasConfig: GasConfiguration) => Promise< \| { tx: null, localTx: null } \| { tx: any, localTx: LocalTx } >}
| `withdrawFunc` | { name: FunctionName, func: ( nftId: BigNumber gasConfig: GasConfiguration) => Promise< \| { tx: null, localTx: null } \| { tx: any, localTx: LocalTx } >}
| `userNftTokenInfo` | NftTokenInfo[] | Array of related nft tokens in user wallet
| `depositedNftTokenInfo` | NftTokenInfo[] | Array of related nft tokens in pool.

## Components

### `Erc721PoolModalGeneric` (exported)

Props Dependencies:

- [**PoolModalProps**](/docs/dev-docs/frontend/components/organisms/pool-modal-router#poolmodalprops-exported)
- **Erc721PoolModalGenericProps**

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| General | `haveErrors`
| Network | `activeNetwork` , `currencyDecimals`

Hook Dependencies:

- `useUserStakedValue()`
- `usePoolModal()`

Contract Functions:

- `callDeposit` : Calls farm contract to deposit ERC721 tokens into Liquidity Provider Pool.
- `callWithdraw` : Calls farm contract to withdraw ERC721 tokens from Liquidity Provider Pool.


Local Functions:

- `handleToast(tx: any, localTx: LocalTx)`: Create toast on submitted transaction.
- `handleContractCallError(functionName: string, err: any, txType: FunctionName)`: Contract error handling.
- `getAssetBalanceByFunc()` : Returns the available balance of an asset based on the type of transaction the user wants.
- `getAssetTokensByFunc()` : Returns an array of information for each ERC721 token from the user's wallet or in their stake in the farm.
- `handleCallbackFunc()` : Calls contract function based on selected transaction type by the user.
- `handleClose()` : Handle closing modal
- `handleNft()` : Set selected NFT and amount. 
- `bootNft(tokenInfo: NftTokenInfo[])` : On component mount, set the first nft token as the initial selection.

Info: Returns modal to make transactions with a generic ERC721 pool.