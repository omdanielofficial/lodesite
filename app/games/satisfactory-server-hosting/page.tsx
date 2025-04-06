import Pricing from "@/app/games/satisfactory-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Satisfactory Hosting",
  description:
    "Automate and expand with Lodestone's Satisfactory server hosting. Built for large factories, our high-RAM servers ensure smooth multiplayer gameplay with zero lag. Includes mod support, auto-updates, and DDoS protection for industrial-scale efficiency.",
  keywords:
    "Satisfactory server hosting, factory game servers, high-RAM hosting, Satisfactory dedicated server, multiplayer automation, mod support, DDoS protection, 24/7 uptime, low-latency servers, scalable hosting",
  openGraph: {
    title: "Lodestone | Satisfactory Hosting",
    description:
    "Automate and expand with Lodestone's Satisfactory server hosting. Built for large factories, our high-RAM servers ensure smooth multiplayer gameplay with zero lag. Includes mod support, auto-updates, and DDoS protection for industrial-scale efficiency.",
  },
  twitter: {
    title: "Lodestone | Satisfactory Hosting",
    description:
    "Automate and expand with Lodestone's Satisfactory server hosting. Built for large factories, our high-RAM servers ensure smooth multiplayer gameplay with zero lag. Includes mod support, auto-updates, and DDoS protection for industrial-scale efficiency.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
