import Pricing from "@/app/games/stardewvalley-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Stardew Valley Hosting",
  description:
    "Farm, fish, and relax with Lodestone's Stardew Valley server hosting. Perfect for co-op farming, our servers offer lag-free performance, easy mod integration, and 24/7 uptime for your peaceful countryside adventures.",
  keywords:
    "Stardew Valley hosting, co-op farming server, relaxed multiplayer hosting, mod support, 24/7 uptime, lag-free gameplay, private farm server, instant setup, affordable hosting, DDoS protection",
  openGraph: {
    title: "Lodestone | Stardew Valley Hosting",
    description:
    "Farm, fish, and relax with Lodestone's Stardew Valley server hosting. Perfect for co-op farming, our servers offer lag-free performance, easy mod integration, and 24/7 uptime for your peaceful countryside adventures.",
  },
  twitter: {
    title: "Lodestone | Stardew Valley Hosting",
    description:
    "Farm, fish, and relax with Lodestone's Stardew Valley server hosting. Perfect for co-op farming, our servers offer lag-free performance, easy mod integration, and 24/7 uptime for your peaceful countryside adventures.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
