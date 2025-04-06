import Pricing from "@/app/games/palworld-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Palworld Hosting",
  description:
    "Experience premium Palworld server hosting with Lodestone. Enjoy high performance, DDoS protection, global server locations, and customisable features for seamless multiplayer gaming. Start hosting with Lodestone today.",
  keywords:
    "Palworld server hosting, Lodestone hosting, multiplayer game servers, customisable Palworld servers, DDoS protection, high-performance servers, global server locations, affordable game hosting, instant server setup, scalable hosting solutions",
  openGraph: {
    title: "Lodestone | Palworld Hosting",
    description:
    "Experience premium Palworld server hosting with Lodestone. Enjoy high performance, DDoS protection, global server locations, and customisable features for seamless multiplayer gaming. Start hosting with Lodestone today.",
  },
  twitter: {
    title: "Lodestone | Palworld Hosting",
    description:
    "Experience premium Palworld server hosting with Lodestone. Enjoy high performance, DDoS protection, global server locations, and customisable features for seamless multiplayer gaming. Start hosting with Lodestone today.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
