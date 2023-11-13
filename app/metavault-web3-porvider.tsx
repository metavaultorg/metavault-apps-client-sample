"use client";

import { arbitrum, bsc, polygon } from "viem/chains";
import { Connector, WagmiConfig, configureChains, createConfig } from "wagmi";

import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";

import { MetavaultProvider } from "@metavault/apps-react-sdk";
import { MetavaultConnector } from "@metavault/apps-wagmi";

const SupportedChains = [polygon, arbitrum, bsc];

export function MetavaultWeb3Provider({ children }: any) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    SupportedChains,
    [publicProvider()]
  );

  const metavaultConnector = new MetavaultConnector({
    chains,
    options: {},
  }) as unknown as Connector;
  const injectedConnector = new InjectedConnector({ chains });
  const metamaskConnector = new MetaMaskConnector({ chains });

  const STANDALONE_MODE = process.env.NEXT_PUBLIC_STANDALONE_MODE;

  /**
   * To test the client app standalone (without Metavault Shell), push the desired connectors to connectorList below
   */
  const enableOtherConnectors = STANDALONE_MODE || false;
  const connectorList = [metavaultConnector];

  if (enableOtherConnectors) {
    connectorList.push(injectedConnector, metamaskConnector);
  }

  const config = createConfig({
    autoConnect: true,
    connectors: connectorList,
    logger: {
      warn: (message) => console.log("[WAGMI_CONNECTOR]", message),
    },
    publicClient,
    webSocketPublicClient,
  });

  return (
    <MetavaultProvider>
      <WagmiConfig config={config}>{children}</WagmiConfig>
    </MetavaultProvider>
  );
}
