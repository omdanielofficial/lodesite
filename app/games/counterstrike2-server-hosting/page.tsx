import Pricing from "@/app/games/counterstrike2-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Counter-Strike 2 Hosting",
  description:
  "Dominate in CS2 with Lodestone's high-tickrate hosting. Enjoy 128-tick servers, instant match setup, and DDoS protection for competitive play. Full VAC-secure environment with custom map rotations.",
  keywords:
    "CS2 server hosting, 128-tick servers, competitive match hosting, VAC-secure servers, custom map rotations, retake/execute servers, DDoS protection, low-latency FPS hosting",
  openGraph: {
    title: "Lodestone | Counter-Strike 2 Hosting",
    description:
    "Dominate in CS2 with Lodestone's high-tickrate hosting. Enjoy 128-tick servers, instant match setup, and DDoS protection for competitive play. Full VAC-secure environment with custom map rotations.",
  },
  twitter: {
    title: "Lodestone | Counter-Strike 2 Hosting",
    description:
    "Dominate in CS2 with Lodestone's high-tickrate hosting. Enjoy 128-tick servers, instant match setup, and DDoS protection for competitive play. Full VAC-secure environment with custom map rotations.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
