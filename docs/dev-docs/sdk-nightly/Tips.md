## **Using a Custom Provider**

A provider is needed to connect to (and make read-only calls) to the blockchain.


By default, the Fetcher object will use the [Default Provider](https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider) provided by ethers.js. Frequent use of the default provider will result in the following warning message:


```
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
```

To avoid this, the Fetcher constructor has an optional parameter to provide a custom provider. We have also provided a [`getProvider`](./helper-methods#getprovider) helper method to make it easier to create a custom provider.

<br/>

### Use custom RPC URL

```js
import { Fetcher, solaceUtils } from "@solace-fi/sdk"
const { getProvider } = solaceUtils

const url = <RPC_URL>
const provider = getProvider(url)

// Create new Fetcher-class object connected to Ethereum mainnet and custom RPC endpoint
const coverage = new Fetcher(1, provider)
```

<br/>

## **Error catching**

Attempting a transaction when it will revert on-chain will lead to a browser console e.g. `(error={"code":-32603,"message":"execution reverted: policy already activated","data":{"originalError":…`

To catch this and avoid your code terminating prematurely when it makes failed blockchain calls, you can wrap your code in a [try-catch block](https://www.w3schools.com/js/js_errors.asp).

```js
// ...setup policyholder object
try {
    let tx = await policyholder.deactivatePolicy()
} catch {
    // Code to run in case of error
}
```