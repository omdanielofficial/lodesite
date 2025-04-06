import Pricing from "@/app/games/7daystodie-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | 7 Days To Die Hosting",
  description:
    "Survive the zombie apocalypse with Lodestone's 7 Days to Die hosting. Featuring blood moon-ready hardware, full mod support, and auto-wipe scheduling for endless horde challenges. Customise your server with FTP access and DDoS protection—perfect for hardcore survivalists.",
  keywords:
    "7 Days to Die server hosting, 7DTD dedicated server, zombie survival hosting, blood moon servers, modded 7DTD, private PvP servers, auto-wipe scheduling, DDoS protection, high-population servers",
  openGraph: {
    title: "Lodestone | 7 Days To Die Hosting",
    description:
    "Survive the zombie apocalypse with Lodestone's 7 Days to Die hosting. Featuring blood moon-ready hardware, full mod support, and auto-wipe scheduling for endless horde challenges. Customise your server with FTP access and DDoS protection—perfect for hardcore survivalists.",
  },
  twitter: {
    title: "Lodestone | 7 Days To Die Hosting",
    description:
    "Survive the zombie apocalypse with Lodestone's 7 Days to Die hosting. Featuring blood moon-ready hardware, full mod support, and auto-wipe scheduling for endless horde challenges. Customise your server with FTP access and DDoS protection—perfect for hardcore survivalists.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
