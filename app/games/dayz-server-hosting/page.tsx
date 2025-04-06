import Pricing from "@/app/games/dayz-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | DayZ Hosting",
  description:
  "Survive Chernarus with Lodestone's DayZ hosting. Featuring persistent loot economies, base-building support, and global server locations for low-ping survival. Includes mod integration and 24/7 uptime.",
  keywords:
    "DayZ standalone hosting, persistent loot servers, base-building support, hardcore survival hosting, modded DayZ servers, low-ping servers, global locations",
  openGraph: {
    title: "Lodestone | DayZ Hosting",
    description:
    "Survive Chernarus with Lodestone's DayZ hosting. Featuring persistent loot economies, base-building support, and global server locations for low-ping survival. Includes mod integration and 24/7 uptime.",
  },
  twitter: {
    title: "Lodestone | DayZ Hosting",
    description:
    "Survive Chernarus with Lodestone's DayZ hosting. Featuring persistent loot economies, base-building support, and global server locations for low-ping survival. Includes mod integration and 24/7 uptime.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
