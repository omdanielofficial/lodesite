import Pricing from "@/app/web-hosting/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Web Hosting",
  description:
    "Launch your website with Lodestone's fast and secure web hosting solutions. We offer affordable plans, free business email, and a 99.99% uptime guarantee. Start your online journey today.",
  keywords:
    "website hosting, domain hosting, WordPress hosting, DirectAdmin, cheap web hosting, free ssl certificates, cloud hosting, lodestone",
  openGraph: {
    title: "Lodestone | Web Hosting",
    description:
    "Launch your website with Lodestone's fast and secure web hosting solutions. We offer affordable plans, free business email, and a 99.99% uptime guarantee. Start your online journey today.",
  },
  twitter: {
    title: "Lodestone | Web Hosting",
    description:
    "Launch your website with Lodestone's fast and secure web hosting solutions. We offer affordable plans, free business email, and a 99.99% uptime guarantee. Start your online journey today.",
  },
};

const MinecraftServerHosting = () => {
  return <Pricing />;
};

export default MinecraftServerHosting;
