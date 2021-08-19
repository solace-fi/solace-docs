---
id: about
title: About Managers
sidebar_position: 0
---

## Introduction

### Terminology

It should be clarified that React Context Providers here are called "Managers" instead of "Providers", because "Provider" is a term that is already reserved by the Ethers.js library, which utilizes the "Provider and Signer" methodology.

### Who are the Managers?

Currently there are six Managers that the user interface relies on for global state: 
- **NetworkManager**
- **WalletManager**
- **ProviderManager**
- **CachedDataManager**
- **ContractsManager**
- **NotificationsManager**

Below is the current structure of the Managers, the order does not necessarily matter.

        <NetworkManager>                        
          <WalletManager>
            <ProviderManager>  
              <ContractsManager>  
                <CachedDataManager>        
                  <NotificationsManager>
                    ...
                  </NotificationsManager>
                </CachedDataManager>
              </ContractsManager>
            </ProviderManager>
          </WalletManager>
        </NetworkManager>

