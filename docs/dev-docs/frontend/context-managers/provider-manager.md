# ProviderManager

The most simplest Manager with a foundational purpose for the app.

## How does it work?

ProviderManager listens to the `activeNetwork` value from NetworkManager and creates a new `JsonRpcProvider` object for that value everytime it changes. This object is assigned then to `ethProvider`.

Manager Dependencies:

| Manager | Values                                                          |
| :--- | :------------------------------------------------------------------- |
| Network | `activeNetwork`

#### Returned values:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`ethProvider` | Provider | Alchemy provider.