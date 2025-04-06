import Pricing from "@/app/games/unturned-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Unturned Hosting",
  description:
    "Dominate the zombie apocalypse with Lodestone's Unturned server hosting. Enjoy 24/7 uptime, full mod support, and DDoS protection for uninterrupted survival gameplay. Customise your server with FTP access and auto-backups—perfect for private or public survival communities.",
  keywords:
    "Unturned server hosting, Unturned dedicated server, zombie survival hosting, Unturned mod support, private Unturned server, unlimited slots, DDoS protection, low-latency hosting, auto-backups, FTP access",
  openGraph: {
    title: "Lodestone | Unturned Hosting",
    description:
    "Dominate the zombie apocalypse with Lodestone's Unturned server hosting. Enjoy 24/7 uptime, full mod support, and DDoS protection for uninterrupted survival gameplay. Customise your server with FTP access and auto-backups—perfect for private or public survival communities.",
  },
  twitter: {
    title: "Lodestone | Unturned Hosting",
    description:
    "Dominate the zombie apocalypse with Lodestone's Unturned server hosting. Enjoy 24/7 uptime, full mod support, and DDoS protection for uninterrupted survival gameplay. Customise your server with FTP access and auto-backups—perfect for private or public survival communities.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
