import Pricing from "@/app/games/valheim-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Valheim Hosting",
  description:
    "Conquer the Norse wilderness with Lodestone's Valheim server hosting. Featuring crossplay support, instant setup, and high-performance hardware for lag-free Viking adventures. Customise your world with mods and enjoy 24/7 uptime for uninterrupted exploration.",
  keywords:
    "Valheim server hosting, Valheim dedicated server, Viking survival hosting, crossplay servers, Valheim mod support, instant setup, high-performance hosting, DDoS protection, 24/7 uptime, private Valheim world",
  openGraph: {
    title: "Lodestone | Valheim Hosting",
    description:
    "Conquer the Norse wilderness with Lodestone's Valheim server hosting. Featuring crossplay support, instant setup, and high-performance hardware for lag-free Viking adventures. Customise your world with mods and enjoy 24/7 uptime for uninterrupted exploration.",
  },
  twitter: {
    title: "Lodestone | Valheim Zomboid Hosting",
    description:
    "Conquer the Norse wilderness with Lodestone's Valheim server hosting. Featuring crossplay support, instant setup, and high-performance hardware for lag-free Viking adventures. Customise your world with mods and enjoy 24/7 uptime for uninterrupted exploration.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
