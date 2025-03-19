import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | DirectAdmin Login",
  description:
    "Access your DirectAdmin control panel securely from our website. Manage your hosting, domains, and website settings with ease. Quick and convenient login for DirectAdmin users.",
  keywords:
    "DirectAdmin login, Lodestone, control panel access, web hosting management, domain administration, website settings",
  openGraph: {
    title: "Lodestone | DirectAdmin Login",
    description:
      "Access your DirectAdmin control panel securely from our website. Manage your hosting, domains, and website settings with ease. Quick and convenient login for DirectAdmin users.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lodestone",
    title: "Lodestone | DirectAdmin Login",
    description:
      "Access your DirectAdmin control panel securely from our website. Manage your hosting, domains, and website settings with ease. Quick and convenient login for DirectAdmin users.",
  },
};

const Sitemap = () => {
  const sitemaps = [
    { name: "LU-WEB-01", url: "https://lu-shared04.dapanel.net:2222" },
    // Add more login here
  ];

  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-2xl font-bold">DirectAdmin Login</div>
        <div className="mb-8 text-1xl">Choose a link below to access your panel.</div>
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
