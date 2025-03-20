import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const sections = [
    {
      category: "Services",
      items: [
        { name: "Minecraft", url: "/games/minecraft-server-hosting" },
        { name: "Web Hosting", url: "/web-hosting" },
        { name: "All Games", url: "/games" },
      ],
    },
    {
      category: "Company",
      items: [
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "https://billing.lodestone.host/submitticket.php" },
        { name: "Knowledgebase", url: "https://billing.lodestone.host/knowledgebase" },
        { name: "Network Status", url: "https://status.lodestone.host" },
      ],
    },
    {
      category: "Legal",
      items: [
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      category: "Clients",
      items: [
        { name: "Client Portal", url: "https://billing.lodestone.host/" },
        { name: "Game Panel", url: "https://game.lodestone.host" },
        { name: "DirectAdmin Panel", url: "/directadmin-login" },
      ],
    },
  ];

  return (
    <>
      <div className="bg-violet-600 px-6 py-2.5">
        <div className="container mx-auto flex max-w-7xl items-center justify-center gap-10">
          <div className="hidden gap-2 md:flex">
            <FontAwesomeIcon icon={faBullhorn} className="text-xl" />
            <p>
              Join our Discord community for exciting news, discussions, and more!
            </p>
          </div>
          <Link
            href="https://discord.gg/lodestonehost"
            target="_self"
            className="md:ml-auto"
            aria-label="Join Discord"
          >
            <button className="flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold hover:bg-teritiary active:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 18"
                fill="none"
                className="w-6"
              >
                <path
                  d="M19.9027 1.84891C18.4495 1.19201 16.8912 0.708042 15.2619 0.43085C15.2322 0.425501 15.2026 0.43887 15.1873 0.465609C14.9869 0.816776 14.7649 1.2749 14.6094 1.63499C12.8569 1.37652 11.1135 1.37652 9.39697 1.63499C9.24148 1.2669 9.01142 0.816776 8.81011 0.465609C8.79482 0.439762 8.76518 0.426393 8.73551 0.43085C7.10708 0.707156 5.54875 1.19113 4.09465 1.84891C4.08206 1.85426 4.07127 1.86318 4.06411 1.87476C1.10828 6.2252 0.29856 10.4687 0.695784 14.6596C0.697581 14.6801 0.709264 14.6997 0.725441 14.7122C2.67561 16.1231 4.56468 16.9797 6.41868 17.5474C6.44835 17.5563 6.47979 17.5456 6.49867 17.5216C6.93723 16.9316 7.32817 16.3094 7.66336 15.6552C7.68315 15.6169 7.66426 15.5714 7.62383 15.5563C7.00374 15.3245 6.41328 15.042 5.84531 14.7211C5.80038 14.6953 5.79678 14.632 5.83811 14.6017C5.95764 14.5134 6.07719 14.4216 6.19132 14.3289C6.21197 14.312 6.24074 14.3084 6.26502 14.3191C9.99638 15.9975 14.036 15.9975 17.7234 14.3191C17.7476 14.3075 17.7764 14.3111 17.798 14.328C17.9121 14.4207 18.0316 14.5134 18.1521 14.6017C18.1934 14.632 18.1907 14.6953 18.1458 14.7211C17.5778 15.0482 16.9873 15.3245 16.3663 15.5554C16.3259 15.5705 16.3079 15.6169 16.3277 15.6552C16.6701 16.3085 17.061 16.9306 17.4915 17.5207C17.5095 17.5456 17.5418 17.5563 17.5715 17.5474C19.4345 16.9797 21.3236 16.1231 23.2737 14.7122C23.2908 14.6997 23.3016 14.681 23.3034 14.6605C23.7788 9.81536 22.5071 5.60665 19.9324 1.87565C19.9261 1.86318 19.9153 1.85426 19.9027 1.84891ZM8.22058 12.1078C7.09719 12.1078 6.17154 11.0917 6.17154 9.8439C6.17154 8.59606 7.07924 7.58 8.22058 7.58C9.37089 7.58 10.2876 8.60499 10.2696 9.8439C10.2696 11.0917 9.3619 12.1078 8.22058 12.1078ZM15.7966 12.1078C14.6732 12.1078 13.7476 11.0917 13.7476 9.8439C13.7476 8.59606 14.6552 7.58 15.7966 7.58C16.9469 7.58 17.8636 8.60499 17.8456 9.8439C17.8456 11.0917 16.9469 12.1078 15.7966 12.1078Z"
                  fill="currentColor"
                />
              </svg>
              Join Discord
            </button>
          </Link>
        </div>
      </div>
      <footer className="bg-primary p-5 lg:p-16">
        <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col items-center gap-3 md:col-span-4 md:flex-row md:items-start lg:col-span-2 lg:flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/logo.png"
                alt="Company Logo"
                width={200}
                height={100}
              />
            </div>
            <p id="about-us" className="mt-2 text-center text-sm lg:text-left">
            <b>Providing powerful, reliable, and affordable game hosting across the world.</b>
            </p>

            <p className="mt-2 text-center text-sm md:text-left lg:text-center">
              &copy; {new Date().getFullYear()} Lodestone Technologies LTD
            </p>
            <p className="mt-2 text-center text-sm md:text-left lg:text-center">
            Registered in England & Wales under CRN 16068461
            </p>
          </div>
          {sections.map((section) => (
            <div
              key={section.category}
              className="flex flex-col items-start gap-3 sm:gap-3 md:gap-2"
            >
              <h3 className="underline-half mb-2 text-lg font-semibold">
                {section.category}
              </h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.name} className="mt-1">
                    <Link href={item.url} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </footer>
    </>
  );
};

export default Footer;
