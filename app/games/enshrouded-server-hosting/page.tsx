import Pricing from "@/app/games/enshrouded-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Enshrouded Hosting",
  description:
  "Explore the fog with Lodestone's Enshrouded hosting. Optimised for co-op building, our servers offer seamless voxel terrain and DDoS protection. Customise your world with mods and private slots.",
  keywords:
    "Enshrouded server hosting, co-op voxel RPG, private building servers, mod support, DDoS protection, low-latency hosting, persistent worlds",
  openGraph: {
    title: "Lodestone | Enshrouded Hosting",
    description:
    "Explore the fog with Lodestone's Enshrouded hosting. Optimised for co-op building, our servers offer seamless voxel terrain and DDoS protection. Customise your world with mods and private slots.",
  },
  twitter: {
    title: "Lodestone | Enshrouded Hosting",
    description:
    "Explore the fog with Lodestone's Enshrouded hosting. Optimised for co-op building, our servers offer seamless voxel terrain and DDoS protection. Customise your world with mods and private slots.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
