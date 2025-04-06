import Pricing from "@/app/games/eco-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Eco Hosting",
  description:
  "Build a sustainable world with Lodestone's Eco hosting. Designed for large player economies, our high-RAM servers prevent lag during complex simulations. Includes automated backups and pollution tracking.",
  keywords:
    "Eco server hosting, sustainable world servers, multiplayer economy hosting, high-RAM servers, modded Eco servers, automated backups, 24/7 uptime",
  openGraph: {
    title: "Lodestone | Eco Hosting",
    description:
    "Build a sustainable world with Lodestone's Eco hosting. Designed for large player economies, our high-RAM servers prevent lag during complex simulations. Includes automated backups and pollution tracking.",
  },
  twitter: {
    title: "Lodestone | Eco Hosting",
    description:
    "Build a sustainable world with Lodestone's Eco hosting. Designed for large player economies, our high-RAM servers prevent lag during complex simulations. Includes automated backups and pollution tracking.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
