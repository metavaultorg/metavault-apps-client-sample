## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# 1. Install Wagmi

```bash
npm i wagmi viem
```

# 2. Install Metavault Apps and React SDK

```bash
npm i @metavault/apps-wagmi @metavault/apps-react-sdk
```

# 3. Configure Wagmi Client

You can take a look at the sample code how to configure Wagmi client. app > metavault-web3-provider.tsx

```javascript

export function MetavaultWeb3Provider({ children }: any) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, bsc],
    [publicProvider()]
  );

  const metavaultConnector = new MetavaultConnector({
    chains,
    options: {},
  }) as unknown as Connector;


  const config = createConfig({
    autoConnect: true,
    connectors: [metavaultConnector],
    publicClient,
    webSocketPublicClient,
  });

  return (
    <MetavaultProvider>
      <WagmiConfig config={config}>{children}</WagmiConfig>
    </MetavaultProvider>
  );
}


```
