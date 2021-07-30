# ProviderManager

The most simplest Manager with a foundational purpose for the app.

## How does it work?

ProviderManager listens to the `chainId` value from WalletManager and creates a new `JsonRpcProvider` object for that value everytime it changes. This object is assigned then to `ethProvider`.

## Returned values

#### `ethProvider` (Provider)