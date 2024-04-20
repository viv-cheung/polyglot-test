# Aperçu
---
sidebar_label: Paiement
---

Le modal de paiement permet aux développeurs de faciliter les paiements en cryptomonnaie. Test 123 4455

<div class="text--center">
  <img src="/img/kit/checkout-modal.png" />
</div>

# Intégration
Pour intégrer la fonctionnalité de paiement, suivez ces étapes :
1. Installez le module `kit-checkout` :

```bash
npm install @0xsequence/kit-checkout

# ou
pnpm install @0xsequence/kit-checkout

# ou
yarn add @0xsequence/kit-checkout
```

2. Placez le KitCheckoutProvider en dessous du fournisseur Sequence Kit Core dans votre application :

```jsx
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'


const App = () => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}> 
        <KitProvider>
          <KitCheckoutProvider>
            <Page />
          </KitCheckoutProvider>
        </KitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  )
}
```

## Ouvrir le modal de paiement
Utilisez le crochet `useCheckoutModal` pour ouvrir le modal de paiement et transmettez un objet de paramètres :


```jsx
  import { useCheckoutModal } from '@0xsequence/kit-checkout'


  const MyComponent = () => {
    const { triggerCheckout } = useCheckoutModal()
  
    const onClick = () => {
      const checkoutSettings = {...}
      triggerCheckout(checkoutSettings)
    }

    return (
      <button onClick={onClick}>paiement</button>
    )
  }
```

## Configuration du modal de paiement
Configurez le modal de paiement en utilisant l'objet `checkoutSettings` :


```jsx
const checkoutSettings = {
  cryptoCheckout: {...},
  orderSummaryItems: {...}
}
```

### Configuration du paiement en cryptomonnaie (`cryptoCheckout`)
Le champ `cryptoCheckout` spécifie les paramètres pour payer avec des cryptomonnaies, par exemple, interagir avec un contrat de création ou un contrat de marché.

Exemple de configuration :

```jsx
cons checkoutConfig = {
  // ...
  cryptoCheckout: {
    chainId: 137,
    triggerTransaction: async () => { console.log('transaction déclenchée') },
    coinQuantity: {
      contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      amountRequiredRaw: '10000000000'
    },
  },
}
```

### Configuration du récapitulatif de commande (`orderSummaryItems`)
Le champ `orderSummaryItems` spécifie la liste des objets de collection affichés dans le récapitulatif de commande.

Exemple de configuration :

```jsx
    orderSummaryItems: [
      {
        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
        tokenId: '66597',
        quantityRaw: '100'
      },
    ]
```