import { base, mainnet } from "viem/chains";

export const RPCS: Record<number, string[]> = {
  [mainnet.id]: [
    "https://rpc.flashbots.net/fast", // ✅ - All checks passed
    "https://rpc.flashbots.net", // ✅ - All checks passed
    "https://gateway.tenderly.co/public/mainnet", // ✅ - All checks passed
    "https://eth-pokt.nodies.app", // ✅ - All checks passed
    "https://rpc.mevblocker.io", // ✅ - All checks passed
    "https://rpc.mevblocker.io/fast", // ✅ - All checks passed
    "https://rpc.mevblocker.io/noreverts", // ✅ - All checks passed
    "https://rpc.mevblocker.io/fullprivacy", // ✅ - All checks passed
    "https://gateway.subquery.network/rpc/eth", // ✅ - All checks passed
    "https://mainnet.gateway.tenderly.co", // ✅ - All checks passed
    "https://core.gashawk.io/rpc", // ✅ - All checks passed
  ],
  [base.id]: [
    "https://base-rpc.publicnode.com", // 🤔 - Old block NOT supported
    // "https://mainnet.base.org", // ✅ - All checks passed
    // "https://base-pokt.nodies.app", // ✅ - All checks passed
    // "https://base.drpc.org", // ✅ - All checks passed
    // "https://developer-access-mainnet.base.org", // ✅ - All checks passed
    "https://base.gateway.tenderly.co", // ✅ - All checks passed
    "https://base.rpc.subquery.network/public", // ✅ - All checks passed
    "https://endpoints.omniatech.io/v1/base/mainnet/public", // ✅ - All checks passed
    "https://gateway.tenderly.co/public/base", // ✅ - All checks passed
    "https://base.blockpi.network/v1/rpc/public", // 🤔 - Old block NOT supported
    "https://1rpc.io/base", // 🤔 - eth_newFilter NOT supported
    "https://base-mainnet.public.blastapi.io", // 🤔 - eth_newFilter NOT supported
    "https://base.meowrpc.com", // 🤔 - Old block NOT supported
  ],
};
