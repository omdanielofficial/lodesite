import Pricing from "@/app/games/eurotrucksimulator2-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Euro Truck Simulator 2 Hosting",
  description:
  "Hit the road with Lodestone's ETS2 convoy hosting. Support for 8+ player convoys, syncronised jobs, and modded trucks/trailers. Lag-free servers ensure smooth continental hauls.",
  keywords:
    "ETS2 server hosting, multiplayer convoy servers, trucking sim hosting, modded vehicle support, syncronised jobs, low-ping EU/NA servers",
  openGraph: {
    title: "Lodestone | Euro Truck Simulator 2 Hosting",
    description:
    "Hit the road with Lodestone's ETS2 convoy hosting. Support for 8+ player convoys, syncronised jobs, and modded trucks/trailers. Lag-free servers ensure smooth continental hauls.",
  },
  twitter: {
    title: "Lodestone | Euro Truck Simulator 2 Hosting",
    description:
    "Hit the road with Lodestone's ETS2 convoy hosting. Support for 8+ player convoys, syncronised jobs, and modded trucks/trailers. Lag-free servers ensure smooth continental hauls.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
