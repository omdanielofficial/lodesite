import Pricing from "@/app/games/arma3-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Arma 3 Hosting",
  description:
    "Command your unit with Lodestone's military-grade Arma 3 hosting. Optimised for 100-slot operations, our high-CPU servers deliver tactical realism with headless client support and one-click mod installs. Ideal for mil-sim communities.",
  keywords:
    "Arma 3 server hosting, mil-sim servers, headless client support, large-scale battles, Zeus mode hosting, Steam Workshop mods, tactical realism servers, low-latency hosting",
  openGraph: {
    title: "Lodestone | Arma 3 Hosting",
    description:
    "Command your unit with Lodestone's military-grade Arma 3 hosting. Optimised for 100-slot operations, our high-CPU servers deliver tactical realism with headless client support and one-click mod installs. Ideal for mil-sim communities.",
  },
  twitter: {
    title: "Lodestone | Arma 3 Hosting",
    description:
    "Command your unit with Lodestone's military-grade Arma 3 hosting. Optimised for 100-slot operations, our high-CPU servers deliver tactical realism with headless client support and one-click mod installs. Ideal for mil-sim communities.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
