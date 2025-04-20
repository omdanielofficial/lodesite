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
  faCircleExclamation,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "STONE",
    memory: "1GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£1.00",
    pricepremium: "£1.00",
    qtrbasic: "£2.70",
    qtrpremium: "£2.70",
    image: "/assets/images/minecraft-hosting/stone.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/stone",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/stone",
    color: "#7A8998",
  },
  {
    name: "COAL",
    memory: "2GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£2.00",
    pricepremium: "£2.00",
    qtrbasic: "£5.40",
    qtrpremium: "£5.40",
    image: "/assets/images/minecraft-hosting/coal.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/coal",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/coal",
    color: "#474747",
  },
  {
    name: "IRON",
    memory: "4GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£4.00",
    pricepremium: "£4.00",
    qtrbasic: "£10.80",
    qtrpremium: "£10.80",
    image: "/assets/images/minecraft-hosting/iron.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/iron",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/iron",
    color: "#FCB577",
  },
  {
    name: "GOLD",
    memory: "6GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£6.00",
    pricepremium: "£6.00",
    qtrbasic: "£16.20",
    qtrpremium: "£16.20",
    image: "/assets/images/minecraft-hosting/gold.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/gold",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/gold",
    color: "#DECD2E",
  },
  {
    name: "LAPIS",
    memory: "8GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£8.00",
    pricepremium: "£8.00",
    qtrbasic: "£21.60",
    qtrpremium: "£21.60",
    image: "/assets/images/minecraft-hosting/lapis.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/lapis",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/lapis",
    color: "#0063CD",
  },
  {
    name: "REDSTONE",
    memory: "10GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£10.00",
    pricepremium: "£10.00",
    qtrbasic: "£27.00",
    qtrpremium: "£27.00",
    image: "/assets/images/minecraft-hosting/redstone.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/redstone",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/redstone",
    color: "#DC362B",
  },
  {
    name: "DIAMOND",
    memory: "12GB RAM",
    storage: "100GB+",
    backups: "50GB+",
    pricebasic: "£12.00",
    pricepremium: "£12.00",
    qtrbasic: "£32.40",
    qtrpremium: "£32.40",
    image: "/assets/images/minecraft-hosting/diamond.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/diamond",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/diamond",
    color: "#1DCDE2",
  },
  {
    name: "EMERALD",
    memory: "16GB RAM",
    storage: "150GB+",
    backups: "100GB+",
    pricebasic: "£16.00",
    pricepremium: "£16.00",
    qtrbasic: "£43.20",
    qtrpremium: "£43.20",
    image: "/assets/images/minecraft-hosting/emerald.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/emerald",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/emerald",
    color: "#65E185",
  },
  {
    name: "AMETHYST",
    memory: "24GB RAM",
    storage: "150GB+",
    backups: "100GB+",
    pricebasic: "£24.00",
    pricepremium: "£24.00",
    qtrbasic: "£64.80",
    qtrpremium: "£64.80",
    image: "/assets/images/minecraft-hosting/amethyst.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/amethyst",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/amethyst",
    color: "#BD4CD8",
  },
  {
    name: "BEACON",
    memory: "32GB RAM",
    storage: "150GB+",
    backups: "100GB+",
    pricebasic: "£32.00",
    pricepremium: "£32.00",
    qtrbasic: "£86.40",
    qtrpremium: "£86.40",
    image: "/assets/images/minecraft-hosting/beacon.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/beacon",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/minecraft-hosting/beacon",
    color: "#09A9D7",
  },
];

const features = [
  "Bungeecord Support",
  "Bedrock Edition Support",
  "Java Version Switcher",
  "99.99% Uptime",
  "Task Scheduling",
  "Full SFTP Access",
  "1 Gbps Uplink",
  "All Modpacks",
  "Custom JAR Support",
  "Instant Setup",
  "Simple Server Customisation",
  "Free Subdomain",
  "Reliable Hardware",
  "Free MySQL Databases",
  "DDoS Protection",
  "Secure Backups",
  "Unlimited Slots",
  "Global Locations",
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
        {plan.storage} Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faServer} className="w-5" />
        {plan.backups} Backups
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} className="w-5" />
        3+ Databases
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUsers} className="w-5" />
        Unlimited Slots
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faWifi} className="w-5" />
        Online 24/7
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[12px]">Starting from</span>
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
        <span className="text-[12px]">
        {isPremium ? plan.qtrpremium : plan.qtrbasic}
        /qtr (10% off)
        </span>
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
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/minecraft-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            MINECRAFT HOSTING
          </h1>
          <p className="w-full text-lg md:w-[700px]">
          Easily host your very own Minecraft server or network with Lodestone. Enjoy <b>reliable, fully customisable and quick to set up</b> servers, perfect for playing with friends or starting a community. 
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMicrochip} className="w-5" />{" "}
                {isPremium ? "AMD Ryzen 9 5950X" : "AMD Ryzen 9 5950X"}
              </div>
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMemory} className="w-5" />{" "}
                {isPremium ? "DDR4 RAM" : "DDR4 RAM"}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faHardDrive} className="w-5" />{" "}
                {isPremium
                  ? "NVMe SSD"
                  : "NVMe SSD"}
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                Get in Touch
              </button>
            </Link>
          </div>
          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex gap-2 md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faSackDollar}
                className="h-12 text-green-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Free Tebex Plus</h2>
                <p>
                  Want to monetise your server? We offer all customers 30 free days of Tebex Plus.
                </p>
              </div>
            </div>
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
            src="/assets/images/minecraft-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
            width={250}
            height={0}
            className="-z-1 absolute bottom-0 left-40 hidden -translate-x-full scale-x-[-1] transform 2xl:block"
            priority
          />
          <Image
            src="/assets/images/minecraft-hosting/minecraft-characters.webp"
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
