---
id: about
title: About Managers
sidebar_position: 0
---

## Introduction

### Terminology

It should be clarified that React Context Providers here are called "Managers" instead of "Providers", because "Provider" is a term that is already reserved by the Ethers.js library, which utilizes the "Provider and Signer" methodology.

### Who are the Managers?

Currently there are seven Managers that the user interface relies on for global state: 
- [**GeneralManager**](/docs/dev-docs/frontend/context-managers/general-manager)
- [**NetworkManager**](/docs/dev-docs/frontend/context-managers/network-manager)
- [**WalletManager**](/docs/dev-docs/frontend/context-managers/wallet-manager)
- [**ProviderManager**](/docs/dev-docs/frontend/context-managers/provider-manager)
- [**CachedDataManager**](/docs/dev-docs/frontend/context-managers/cached-data-manager)
- [**ContractsManager**](/docs/dev-docs/frontend/context-managers/contracts-manager)
- [**NotificationsManager**](/docs/dev-docs/frontend/context-managers/notifications-manager)

Below is the current structure of the Managers, the order matters so data flows down properly.

        <GeneralManager>
          <NetworkManager>                        
            <WalletManager>
              <ProviderManager>  
                <CachedDataManager>        
                  <ContractsManager>  
                    <NotificationsManager>
                      ...
                    </NotificationsManager>
                  </ContractsManager>
                </CachedDataManager>
              </ProviderManager>
            </WalletManager>
          </NetworkManager>
        </GeneralManager>

