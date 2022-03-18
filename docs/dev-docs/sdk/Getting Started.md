---
sidebar_position: 1
id: getting-started
title: Getting Started
---

<span style={{color: 'grey'}}>⚠️ SDK is in alpha</span>
<br/>
<br/>

The Solace SDK exists to make it easy for developers to integrate Solace Total Wallet Coverage, Staking and Bonding into external protocols and custom scripts. It is designed to run in Javascript environments (browsers, frontend, Node.js).

---

## Install module

The easiest way to install the SDK is via npm.

```js
npm install @solace-fi/sdk
```

<br/>

---

## Usage

Note that the guides following this page will use ES6 syntax.

<br/>

#### ES6 (import)
```js
import { Fetcher } from "@solace-fi/sdk"
```

#### CommonJS (require)
```js
const { Fetcher } = require("@solace-fi/sdk");
```