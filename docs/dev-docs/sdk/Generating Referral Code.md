---
sidebar_position: 5
id: generating-referral-code
title: Generating Referral Code
---

The referral code is a 65-byte EIP-712 compliant Ethereum signature. This means that to generate a referral code, a message will need to be signed with the referrer's private keys. The [`getReferralCode`](#getReferralCode) method of the Policyholder class provides a convenient and safe way to do this.

### getReferralCode

Generates a referral code

```js
// ...setup policyholder object (See Sending Transactions for more info)
let referralCode = await policyholder.getReferralCode()
```

#### Parameters:

N/A

#### Returns

`Promise`<`string`\>

#### Troubleshooting

Signatures generated using a Ledger appear to have an issue where the last 2 characters (or 1 byte) of the signature is '00' or '01'. Valid Ethereum ECDSA signatures have the last 2 characters as '0b' or '0c'. This is the v part of the signature.

To fix this issue, if the last two characters of the signature are '00', replace with '0b'. If the last two characters of the signature are '01', replace with '0c'.
