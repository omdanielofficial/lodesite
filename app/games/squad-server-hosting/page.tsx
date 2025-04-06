import Pricing from "@/app/games/squad-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Squad Hosting",
  description:
    "Lead your platoon with Lodestone's military-grade Squad hosting. Optimised for 100-slot battles, our high-CPU servers deliver tactical realism without lag. Features one-click mod installs, DDoS protection, and global server locations for competitive play.",
  keywords:
    "Squad server hosting, military FPS hosting, high-CPU servers, large-scale battles, tactical shooter hosting, mod support, DDoS protection, low-latency gameplay, 100-slot servers, competitive hosting",
  openGraph: {
    title: "Lodestone | Squad Hosting",
    description:
    "Lead your platoon with Lodestone's military-grade Squad hosting. Optimised for 100-slot battles, our high-CPU servers deliver tactical realism without lag. Features one-click mod installs, DDoS protection, and global server locations for competitive play.",
  },
  twitter: {
    title: "Lodestone | Squad Hosting",
    description:
    "Lead your platoon with Lodestone's military-grade Squad hosting. Optimised for 100-slot battles, our high-CPU servers deliver tactical realism without lag. Features one-click mod installs, DDoS protection, and global server locations for competitive play.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
