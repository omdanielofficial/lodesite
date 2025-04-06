import Pricing from "@/app/games/garrysmod-server-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Garry's Mod Hosting",
  description:
  "Unleash chaos with Lodestone's GMod hosting. Run DarkRP, TTT, or Sandbox modes with one-click installs. Features Lua scripting, workshop mods, and DDoS protection for endless creativity.",
  keywords:
    "GMod server hosting, DarkRP servers, TTT hosting, Sandbox mode, Lua scripting support, Steam Workshop mods, instant setup",
  openGraph: {
    title: "Lodestone | Garry's Mod Hosting",
    description:
    "Unleash chaos with Lodestone's GMod hosting. Run DarkRP, TTT, or Sandbox modes with one-click installs. Features Lua scripting, workshop mods, and DDoS protection for endless creativity.",
  },
  twitter: {
    title: "Lodestone | Garry's Mod Hosting",
    description:
    "Unleash chaos with Lodestone's GMod hosting. Run DarkRP, TTT, or Sandbox modes with one-click installs. Features Lua scripting, workshop mods, and DDoS protection for endless creativity.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
