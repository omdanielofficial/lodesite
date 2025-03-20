"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHardDrive,
  faHeadset,
  faMemory,
  faMicrochip,
  faShield,
  faWifi,
  faUsers,
  faDatabase,
  faServer,
  faNetworkWired,
  faLock,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "Standard",
    memory: "3 Websites",
    pricebasic: "£2.99",
    pricepremium: "£2.99",
    storage: "10GB",
    bandwidth: "",
    ssl: "",
    emails: "10",
    subdomains: "5",
    databases: "5",
    image: "/assets/images/web-hosting/standard.png",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/standard",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/standard",
    color: "#FCB577",
  },
  {
    name: "Deluxe",
    memory: "5 Websites",
    pricebasic: "£6.99",
    pricepremium: "£6.99",
    storage: "25GB",
    bandwidth: "",
    ssl: "",
    emails: "30",
    subdomains: "15",
    databases: "15",
    image: "/assets/images/web-hosting/deluxe.png",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/deluxe",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/deluxe",
    color: "#1DCDE2",
  },
  {
    name: "Ultimate",
    memory: "10 Websites",
    pricebasic: "£12.99",
    pricepremium: "£12.99",
    storage: "50GB",
    bandwidth: "",
    ssl: "",
    emails: "50",
    subdomains: "30",
    databases: "30",
    image: "/assets/images/web-hosting/ultimate.png",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/ultimate",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/web-hosting/ultimate",
    color: "#65E185",
  },
];

const features = [
  "DirectAdmin Panel",
  "Free SSL Certificates",
  "FTP Access",
  "Professional Email",
  "Softaculous App Installer",
  "WordPress Supported",
  "Cron Jobs",
  "Site Redirects",
  "phpMyAdmin",
  "MySQL Databases",
  "Roundcube Webmail",
  "Local Backups",
  "Custom Error Pages",
  "Resource Usage Stats",
  "Mailing Lists",
  "Protected Directories",
  "WHMCS Supported",
  "API Docs"
];

const PlanCard = ({ plan, isPremium }: { plan: any; isPremium: boolean }) => (
  <div
    className="flex flex-col rounded-xl bg-primary px-6 py-10 hover:outline"
    style={{ outlineColor: plan.color }}
  >
    <div className="flex items-center justify-between">
      <div className="flex flex-col text-xl font-bold">
        <small style={{ color: plan.color }}>{plan.name}</small>
        {plan.memory}
      </div>
      <Image src={plan.image} alt={`${plan.name} Plan`} width={75} height={0} />
    </div>
    <ul className="mt-6">
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHardDrive} className="w-5" />
        {plan.storage} NVMe Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faNetworkWired} className="w-5" />
        Unlimited Bandwidth
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faLock} className="w-5" />
        Free SSL Certificates
      </li>     
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faEnvelope} className="w-5" />
        {plan.emails} Email Accounts
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faLink} className="w-5" />
        {plan.subdomains} Subdomains
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} className="w-5" />
        {plan.databases} MySQL Databases
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px]">Starting at</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
      </div>
      <Link
        href={isPremium ? plan.linkpremium : plan.linkbasic}
        className="flex items-end"
      >
        <div
          className="rounded-full bg-teritiary p-5 hover:bg-primary hover:outline active:bg-secondary"
          style={{ outlineColor: plan.color }}
        >
          <FontAwesomeIcon icon={faGear} className="w-6" />
        </div>
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/web-hosting/banner.png')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            WEB HOSTING
          </h1>
          <p className="w-full text-lg md:w-[700px]">
          DirectAdmin web hosting with <b>premium NVMe storage, unlimited bandwidth, and tons of features</b>. You can host any website big or small. 
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} isPremium={isPremium} />
            ))}
          </div>

          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="h-12 text-blue-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Need help picking a plan?</h2>
                <p>
                  Our support team is available to answer any questions you may
                  have.
                </p>
              </div>
            </div>
            <Link href="https://billing.lodestone.host/submitticket.php">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Open Ticket
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat px-6"
        style={{
          backgroundImage: `linear-gradient(164deg, rgba(124, 58, 237, 0.9) 11.33%, rgba(124, 58, 237, 0.9) 88.67%), 
        url('/assets/images/games/minecraft-server-hosting/features.webp')`,
        }}
      >
        <div className="container relative mx-auto flex max-w-7xl flex-col gap-6 py-12">
          <div className="flex justify-center">
            <h2 className="text-center text-xl font-bold lg:text-3xl">
              Included With All Plans
            </h2>
          </div>
          <Image
            src="/assets/images/web-hosting/minecraft-characters.webp"
            alt="Web characters"
            width={250}
            height={0}
            className="-z-1 absolute bottom-0 left-40 hidden -translate-x-full scale-x-[-1] transform 2xl:block"
            priority
          />
          <Image
            src="/assets/images/games/minecraft-server-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute -right-80 bottom-0 hidden -translate-x-full 2xl:block"
            priority
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 rounded-xl bg-primary/60 px-5 py-2.5 backdrop-blur"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg> */}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Pricing;
