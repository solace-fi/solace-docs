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

Gets total active policies for a specified chain

```js
// Create policy object
console.log( await policy.getTotalActivePolicies(1) )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`any`\>

<br/>

### **getTotalActivePolicies_All**

Gets total active policies across all supported chains

```js
// Create policy object
console.log( await policy.getTotalActivePolicies_All() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getExistingPolicy**

Gets all existing policies for a given address

```js
// Create policy object
console.log( await policy.getExistingPolicy('0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>