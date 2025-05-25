import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { fallback } from "viem";
import { RPCS } from "../constants/rpcs";

const projectId = "b8cc79a99a485aa76490b649b6b3bc49";
coinbaseWallet.preference = "smartWalletOnly";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended Wallet",
      wallets: [coinbaseWallet],
    },
    {
      groupName: "Other",
      wallets: [
        zerionWallet,
        rainbowWallet,
        metaMaskWallet,
        argentWallet,
        trustWallet,
        ledgerWallet,
      ],
    },
  ],
  {
    appName: "Hunt/Mint Swap Module",
    projectId,
    appDescription: "Hunt/Mint Swap Module",
    appIcon: "https://drop.mint.club/og-image-1200-800.png",
  }
);

const config = createConfig({
  batch: {
    multicall: true,
  },
  chains: [mainnet, base],
  // turn off injected provider discovery
  multiInjectedProviderDiscovery: false,
  connectors,
  ssr: false,
  transports: {
    [base.id]: fallback(
      RPCS[base.id]?.map((rpc) => http(rpc, { key: rpc })) ?? [],
      { rank: false }
    ),
    [mainnet.id]: fallback(
      RPCS[mainnet.id]?.map((rpc) => http(rpc, { key: rpc })) ?? [],
      { rank: false }
    ),
  },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme({})}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
