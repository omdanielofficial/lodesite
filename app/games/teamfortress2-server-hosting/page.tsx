import Pricing from "@/app/games/teamfortress2-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Team Fortress 2 Hosting",
  description:
    "Dominate the battlefield with Lodestone's TF2 server hosting. Enjoy instant setup, custom map support, and high-tickrate servers for competitive matches. Includes DDoS protection and 24/7 support for uninterrupted chaos.",
  keywords:
    "TF2 server hosting, Team Fortress 2 dedicated server, high-tickrate hosting, custom map support, competitive FPS hosting, instant setup, DDoS protection, 24/7 uptime, low-latency servers, mod support",
  openGraph: {
    title: "Lodestone | Team Fortress 2 Hosting",
    description:
    "Dominate the battlefield with Lodestone's TF2 server hosting. Enjoy instant setup, custom map support, and high-tickrate servers for competitive matches. Includes DDoS protection and 24/7 support for uninterrupted chaos.",
  },
  twitter: {
    title: "Lodestone | Team Fortress 2 Hosting",
    description:
    "Dominate the battlefield with Lodestone's TF2 server hosting. Enjoy instant setup, custom map support, and high-tickrate servers for competitive matches. Includes DDoS protection and 24/7 support for uninterrupted chaos.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
