import Pricing from "@/app/games/terraria-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Terraria Hosting",
  description:
    "Bring your Terraria world to life with Lodestone's pixel-perfect server hosting. Featuring unlimited player slots, TShock plugin support, and lag-free performance for the ultimate building and adventure experience. Your Terraria world, your rules.",
  keywords:
    "Terraria dedicated server, TShock hosting, Terraria multiplayer hosting, Terraria building servers, unlimited player slots, Terraria modded servers, lag-free Terraria hosting, Terraria adventure maps, Terraria community servers",
  openGraph: {
    title: "Lodestone | Terraria Hosting",
    description:
    "Bring your Terraria world to life with Lodestone's pixel-perfect server hosting. Featuring unlimited player slots, TShock plugin support, and lag-free performance for the ultimate building and adventure experience. Your Terraria world, your rules.",
  },
  twitter: {
    title: "Lodestone | Terraria Hosting",
    description:
    "Bring your Terraria world to life with Lodestone's pixel-perfect server hosting. Featuring unlimited player slots, TShock plugin support, and lag-free performance for the ultimate building and adventure experience. Your Terraria world, your rules.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
