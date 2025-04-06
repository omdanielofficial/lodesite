import Pricing from "@/app/games/ark-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Ark Hosting",
  description:
    "Dominate the dinosaur-filled world with Lodestone's powerful ARK: Survival Evolved server hosting. Featuring ultra-low latency, full mod support, and automatic updates to keep your tribe ahead of the competition. Experience next-gen ARK hosting built for epic adventures.",
  keywords:
    "ARK Survival Evolved hosting, private ARK server, dinosaur game hosting, ARK modded servers, clustered ARK hosting, high-uptime ARK servers, PvP ARK hosting, PvE ARK servers, cross-platform ARK hosting",
  openGraph: {
    title: "Lodestone | Ark Hosting",
    description:
    "Dominate the dinosaur-filled world with Lodestone's powerful ARK: Survival Evolved server hosting. Featuring ultra-low latency, full mod support, and automatic updates to keep your tribe ahead of the competition. Experience next-gen ARK hosting built for epic adventures.",
  },
  twitter: {
    title: "Lodestone | Ark Hosting",
    description:
    "Dominate the dinosaur-filled world with Lodestone's powerful ARK: Survival Evolved server hosting. Featuring ultra-low latency, full mod support, and automatic updates to keep your tribe ahead of the competition. Experience next-gen ARK hosting built for epic adventures.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
