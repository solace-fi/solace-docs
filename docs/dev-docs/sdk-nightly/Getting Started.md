---
sidebar_position: 1
id: getting-started
title: Getting Started
---

<span style={{color: 'grey'}}>⚠️ SDK is in alpha</span>
<br/>
<br/>

SDK Nightly is an experimental version of the SDK, with more advanced features that are not yet reliable & fast enough to make it into the standard SDK.

---

## Install module

The easiest way to install the SDK is via npm.

```js
npm install @solace-fi/sdk-nightly
```

<br/>

---

## Usage

Note that the guides following this page will use ES6 syntax.

<br/>

#### ES6 (import)
```js
import { Coverage } from "@solace-fi/sdk-nightly"
```

#### CommonJS (require)
```js
const { Coverage } = require("@solace-fi/sdk-nightly");
```

## Ethers

Our classes and methods utilize the [Ethers](https://docs.ethers.io/) library, and as such, our SDK makes use of [providers](https://docs.ethers.io/v5/api/providers/provider/) and [signers](https://docs.ethers.io/v5/api/signer/#signers).

You will need a provider to call our read-only methods, and a signer to call our write-only methods. Note that a signer can call read-only methods too.

We have also provided a [`getProvider`](./helper-methods#getprovider) helper method to make it easier to create a custom provider.

```js
import { Lock, solaceUtils } from "@solace-fi/sdk"
const { getProvider } = solaceUtils

const url = <RPC_URL>
const provider = getProvider(url)
```

We do not have a helper method to generate a Signer object, but you can use the code below to create a signer for your application.

```js
import { ethers, WALLETS } from "@solace-fi/sdk"

const provider = await WALLETS[0].connector.getProvider()
const web3Provider = new ethers.Web3Provider(provider)
const signer = web3Provider.getSigner(account)
```

The `WALLETS` array contains our wallet connectors that the user can use to interact with the blockchain:

```js

const WALLETS= [
    {
        id: 'metamask',
        ...
    }, {
        id: 'walletconnect',
        ...
        }),
    }, {
        id: 'walletlink',
        ...
    },
]

```