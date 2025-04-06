import Pricing from "@/app/games/rust-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Rust Hosting",
  description:
    "Survive and conquer in Rust with Lodestone's battle-ready server hosting. Our high-performance servers offer instant wipe scheduling, oxide mod support, and military-grade DDoS protection to keep your Rust community thriving. The ultimate platform for intense survival gameplay.",
  keywords:
    "Rust dedicated server, Rust oxide hosting, Rust wipe scheduler, competitive Rust servers, high-pop Rust hosting, Rust PvP servers, Rust community hosting, low-ping Rust servers, Rust building servers",
  openGraph: {
    title: "Lodestone | Rust Hosting",
    description:
    "Survive and conquer in Rust with Lodestone's battle-ready server hosting. Our high-performance servers offer instant wipe scheduling, oxide mod support, and military-grade DDoS protection to keep your Rust community thriving. The ultimate platform for intense survival gameplay.",
  },
  twitter: {
    title: "Lodestone | Rust Hosting",
    description:
    "Survive and conquer in Rust with Lodestone's battle-ready server hosting. Our high-performance servers offer instant wipe scheduling, oxide mod support, and military-grade DDoS protection to keep your Rust community thriving. The ultimate platform for intense survival gameplay.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
