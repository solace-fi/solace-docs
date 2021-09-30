---
sidebar_position: 4
---

# Capital Underwriting Pool

Solace's Capital Underwriting Pool provides a sufficient level of solvency to securely guarantee that any liability can be covered with a high confidence level. The computation of coverage liabilities, also known as technical provisions, consists of a ”best estimate” of liabilities and a risk margin where the liabilities can’t be properly hedged. Similar to traditional insurance companies, Solace protocol follows the idea of a Minimum Capital Requirement (MCR) and cannot have the MCR ratio below 100%. This means that Solace sets a threshold corresponding to the minimum amount of total assets covering the liabilities over a 1-year period with a confidence level of 85%. The MCR is set across the entire risk portfolio and is updated on an on-going basis as the new coverage policies are being extended and others expire.

Capital pool does not have to be split: there is a single shared pool for all protocols. Anyone can become a capital provider and directly back the platform’s risks with ETH for protocol profit received from premiums.

Note that since valid claim pay-outs will be made in the amount of financial loss carried by the policyholder (up to the cover limit) and not in the coverage amount, Solace’s effective risk is reduced so that the protocol can provide more active coverage. The active covered amount is not equal to the liabilities in this context; therefore, the MCR can be less than the active coverage amount that the protocol is providing.
