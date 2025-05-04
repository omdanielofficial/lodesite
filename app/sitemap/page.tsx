import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Sitemap",
  description:
  "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  keywords:
  "game server hosting, Minecraft hosting, web hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone",
  openGraph: {
    title: "Lodestone | Sitemap",
    description:
      "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lodestone",
    title: "Lodestone | Sitemap",
    description:
      "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  },
};

const Sitemap = () => {
  const sitemaps = [
    { name: "Homepage", url: "/" },
    { name: "Minecraft Hosting", url: "/minecraft-hosting" },
    { name: "Game Hosting", url: "/game-hosting" },
    { name: "Palworld Hosting", url: "/game-hosting/palworld" },
    { name: "Rust Hosting", url: "/game-hosting/rust" },
    { name: "Valheim Hosting", url: "/game-hosting/valheim" },
    { name: "Counter-Strike 2 Hosting", url: "/game-hosting/cs2" },
    { name: "Dedicated Hosting", url: "/dedicated-hosting" },
    { name: "Discord Bot Hosting", url: "/discord-bot-hosting" },
    { name: "About Us", url: "/about" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-2xl font-bold">Sitemap</div>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {sitemaps.map((sitemap, index) => (
            <li
              key={index}
              className="text-md grid- font-robotomono mb-4 font-normal"
            >
              <a href={sitemap.url}>{sitemap.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sitemap;
