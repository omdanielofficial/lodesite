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
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "1GB PLAN",
    memory: "1GB RAM",
    pricebasic: "£1.00",
    pricepremium: "£2.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/stone.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/1gb",
    linkpremium: "",
    color: "#7A8998",
  },
  {
    name: "2GB PLAN",
    memory: "2GB RAM",
    pricebasic: "£2.00",
    pricepremium: "£4.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/coal.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/2gb",
    linkpremium: "",
    color: "#474747",
  },
  {
    name: "4GB PLAN",
    memory: "4GB RAM",
    pricebasic: "£4.00",
    pricepremium: "£8.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/iron.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/4gb",
    linkpremium: "",
    color: "#FCB577",
  },
  {
    name: "6GB PLAN",
    memory: "6GB RAM",
    pricebasic: "£6.00",
    pricepremium: "£18.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/gold.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/6gb",
    linkpremium: "",
    color: "#DECD2E",
  },
  {
    name: "8GB PLAN",
    memory: "8GB RAM",
    pricebasic: "£8.00",
    pricepremium: "£16.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/lapis.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/8gb",
    linkpremium: "",
    color: "#0063CD",
  },
  {
    name: "10GB PLAN",
    memory: "10GB RAM",
    pricebasic: "£10.00",
    pricepremium: "£20.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/redstone.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/10gb",
    linkpremium: "",
    color: "#DC362B",
  },
  {
    name: "12GB PLAN",
    memory: "12GB RAM",
    pricebasic: "£12.00",
    pricepremium: "£24.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/diamond.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/12gb",
    linkpremium: "",
    color: "#1DCDE2",
  },
  {
    name: "16GB PLAN",
    memory: "16GB RAM",
    pricebasic: "£16.00",
    pricepremium: "£32.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/emerald.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/16gb",
    linkpremium: "",
    color: "#65E185",
  },
  {
    name: "24GB PLAN",
    memory: "24GB RAM",
    pricebasic: "£24.00",
    pricepremium: "£48.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/amethyst.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/24gb",
    linkpremium: "",
    color: "#BD4CD8",
  },
  {
    name: "32GB PLAN",
    memory: "32GB RAM",
    pricebasic: "£32.00",
    pricepremium: "£64.00",
    playerSlots: "",
    image: "/assets/images/games/minecraft-server-hosting/beacon.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/game-hosting-basic/32gb",
    linkpremium: "",
    color: "#09A9D7",
  },
];

const features = [
  "99.99% Uptime",
  "Task Scheduling",
  "Full SFTP Access",
  "1 Gbps Uplink",
  "Instant Setup",
  "Simple Server Customisation",
  "Free Subdomain",
  "Reliable Hardware",
  "Free MySQL Databases",
  "DDoS Protection",
  "Secure Backups",
  "Unlimited Slots",
  "Global Locations",
  "Mobile/PC Crossplay",
  "SMAPI Mod Support",
  "Freeze Time",
  "Multiple Farms",
  "Auto-Pause",
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
        100GB+ Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faServer} className="w-5" />
        50GB+ Backups
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDatabase} className="w-5" />
        3+ Databases
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUsers} className="w-5" />
        Unlimited Players
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faWifi} className="w-5" />
        Online 24/7
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
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/games/other-games/banner-stardewvalley.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            STARDEW VALLEY SERVER HOSTING
          </h1>
          <p className="w-full text-lg md:w-[700px]">
          Our Stardew Valley server hosting ensures smooth, fun multiplayer farming. Plant, harvest, and explore with friends anytime.</p>
          <br></br>
          <p className="w-full text-lg md:w-[700px]">
          <b>Important:</b> Premium plans are coming soon.
          
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex flex-row gap-1 text-center md:mb-0">
              {["Basic", "Premium"].map((label, index) => {
                const isActive = (label === "Premium") === isPremium;
                return (
                  <button
                    key={label}
                    className={`w-40 rounded-xl py-4 hover:cursor-pointer ${
                      isActive
                        ? "bg-secondary"
                        : "bg-none hover:outline hover:outline-teritiary"
                    }`}
                    onClick={() => setIsPremium(label === "Premium")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-4 text-center md:flex-row">
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMicrochip} className="w-5" />{" "}
                {isPremium ? "AMD Ryzen 9 7950X" : "Intel Core i9-9900K"}
              </div>
              <div className="mb-2 flex items-center gap-1 md:mb-0">
                <FontAwesomeIcon icon={faMemory} className="w-5" />{" "}
                {isPremium ? "DDR5 RAM" : "DDR4 RAM"}
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faHardDrive} className="w-5" />{" "}
                {isPremium
                  ? "NVMe SSDs"
                  : "NVMe SSDs"}
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
                icon={faCircleExclamation}
                className="h-12 text-orange-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Minimum RAM Required</h2>
                <p>
                  Stardew Valley requires at least 2GB RAM.
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
            src="/assets/images/games/minecraft-server-hosting/minecraft-characters.webp"
            alt="Minecraft characters"
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
