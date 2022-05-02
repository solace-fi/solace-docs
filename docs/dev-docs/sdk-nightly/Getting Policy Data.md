---
sidebar_position: 10
id: getting-policy-data
title: Getting Policy Data
---

To assist with getting policy data, we have provided a **Policy** class

---

## **Policy methods**

### **Setup**
```js
import { Policy } from "@solace-fi/sdk-nightly"
const policy = new Policy()
```

<br/>

### **getTotalActivePolicies**

Gets total active policies for a specified chain. Takes in a mandatory parameter for the chain id, and providing a custom rpc url is optional.

```js
// Create policy object
console.log( await policy.getTotalActivePolicies(1) )
/*
    {
      totalPolicies: BigNumber { _hex: '0x07', _isBigNumber: true },
      totalActiveCoverLimit: BigNumber { _hex: '0x13419b9a2817b2b8ca1e', _isBigNumber: true }
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `rpcUrl` | `string` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getTotalActivePolicies_All**

Gets total active policies across all supported chains. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create policy object
console.log( await policy.getTotalActivePolicies_All() )
/*
{
      totalPolicies: BigNumber { _hex: '0x9b', _isBigNumber: true },
      totalActiveCoverLimit: BigNumber { _hex: '0x3d94272075fb56da67aa', _isBigNumber: true }
}
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getExistingPolicy**

Gets all existing policies for a given address. The first parameter for the address is mandatory , the second parameter for an object mapping chain ids to rpc urls is optional, and the third parameter for including results from testnets is optional.

```js
// Create policy object
console.log( await policy.getExistingPolicy('0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef') )
/*
[
      {
        policyId: BigNumber { _hex: '0x01', _isBigNumber: true },
        chainId: 1
      },
      {
        policyId: BigNumber { _hex: '0x11', _isBigNumber: true },
        chainId: 137
      }
]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `rpcUrlMapping` | `{ [chain: number]: string }` \| `undefined` |
| `includeTestnets` | `boolean` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>