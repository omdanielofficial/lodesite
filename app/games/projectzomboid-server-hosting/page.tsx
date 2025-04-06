import Pricing from "@/app/games/projectzomboid-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Project Zomboid Hosting",
  description:
    "Survive the apocalypse with Lodestone's Project Zomboid server hosting. Enjoy high-performance hardware, full mod support, and DDoS protection for a seamless zombie survival experience. Customise your server with FTP access, auto-backups, and 24/7 uptime—perfect for hardcore survivalists.",
  keywords:
    "Project Zomboid server hosting, PZ dedicated server, zombie survival hosting, PZ mod support, private Zomboid server, high-population servers, DDoS protection, low-latency hosting, auto-backups, FTP access, hardcore survival servers",
  openGraph: {
    title: "Lodestone | Project Zomboid Hosting",
    description:
    "Survive the apocalypse with Lodestone's Project Zomboid server hosting. Enjoy high-performance hardware, full mod support, and DDoS protection for a seamless zombie survival experience. Customise your server with FTP access, auto-backups, and 24/7 uptime—perfect for hardcore survivalists.",
  },
  twitter: {
    title: "Lodestone | Project Zomboid Hosting",
    description:
    "Survive the apocalypse with Lodestone's Project Zomboid server hosting. Enjoy high-performance hardware, full mod support, and DDoS protection for a seamless zombie survival experience. Customise your server with FTP access, auto-backups, and 24/7 uptime—perfect for hardcore survivalists.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
