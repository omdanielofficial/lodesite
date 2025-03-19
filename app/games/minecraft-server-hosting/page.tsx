import Pricing from "@/app/games/minecraft-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Minecraft Hosting",
  description:
    "Experience lag-free Minecraft gameplay with Lodestone's reliable server hosting. Choose from a selection of affordable plans for seamless multiplayer adventures. 24/7 support and easy setup included.",
  keywords:
    "minecraft server, minecraft servers, create minecraft server, 247 minecraft server",
  openGraph: {
    title: "Lodestone | Minecraft Hosting",
    description:
    "Experience lag-free Minecraft gameplay with Lodestone's reliable server hosting. Choose from a selection of affordable plans for seamless multiplayer adventures. 24/7 support and easy setup included.",
  },
  twitter: {
    title: "Lodestone | Minecraft Hosting",
    description:
    "Experience lag-free Minecraft gameplay with Lodestone's reliable server hosting. Choose from a selection of affordable plans for seamless multiplayer adventures. 24/7 support and easy setup included.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
