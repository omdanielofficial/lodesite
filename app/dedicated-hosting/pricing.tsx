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
  faLink,
  faLocationDot,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "Ryzen 9 5950X",
    cpu: "AMD Ryzen 9 5950X",
    cores: "16 Cores (32 Threads)",
    memory: "128GB DDR4",
    storage: "2x 2TB NVMe",
    pricebasic: "£140.00",
    pricepremium: "£140.00",
    image: "/assets/images/dedicated-hosting/ryzen9.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-5950x",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-5950x",
    color: "#7A8998",
  },
  {
    name: "Ryzen 9 7950X",
    cpu: "AMD Ryzen 9 7950X",
    cores: "16 Cores (32 Threads)",
    memory: "192GB DDR5",
    storage: "2x 4TB NVMe",
    pricebasic: "£205.00",
    pricepremium: "£205.00",
    image: "/assets/images/dedicated-hosting/ryzen9.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-7950x",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-7950x",
    color: "#7A8998",
  },
  {
    name: "Ryzen 9 9950X",
    cpu: "AMD Ryzen 9 9950X",
    cores: "16 Cores (32 Threads)",
    memory: "192GB DDR5",
    storage: "2x 4TB NVMe",
    pricebasic: "£230.00",
    pricepremium: "£230.00",
    image: "/assets/images/dedicated-hosting/ryzen9.webp",
    linkbasic: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-9950x",
    linkpremium: "https://billing.lodestone.host/index.php?rp=/store/dedicated-hosting/amd-ryzen-9-9950x",
    color: "#7A8998",
  },
];

const features = [
  "99.99% Uptime",
  "1 Gbps Uplink",
  "Quick Setup",
  "Reliable Hardware",
  "High Performance",
  "DDoS Protection",
  "Managed Services",
  "Full Root Access",
  "IPv6 Supported",
  "No Setup Fees",
  "Linux & Windows",
  "Dedicated Resources",
  "Worldwide Connectivity", 
  "NVMe SSDs",
];

const PlanCard = ({ plan, isPremium }: { plan: any; isPremium: boolean }) => (
  <div
    className="flex flex-col rounded-xl bg-primary px-6 py-10 hover:outline"
    style={{ outlineColor: plan.color }}
  >
    <div className="flex items-center justify-between">
      <div className="flex flex-col text-xl font-bold">
        <small style={{ color: plan.color }}></small>
        {plan.name}
      </div>
      <Image src={plan.image} alt={`${plan.name} Plan`} width={75} height={0} />
    </div>
    <ul className="mt-6">
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faServer} className="w-5" />
        {plan.cpu}
      </li>
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faMicrochip} className="w-5" />
        {plan.cores}
      </li>
    <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faMemory} className="w-5" />
        {plan.memory} RAM
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHardDrive} className="w-5" />
        {plan.storage} Storage
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faLink} className="w-5" />
        1x IPv4 & IPv6 Address
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faWifi} className="w-5" />
        Unmetered Bandwidth
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon icon={faLocationDot} className="w-5" />
        Located in New York City
      </li>
    </ul>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">
          {isPremium ? plan.pricepremium : plan.pricebasic}
          <small>/mo</small>
        </h3>
        <span className="text-[12px]">48-72h Setup Time (no fees)</span>
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
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/dedicated-hosting/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            DEDICATED HOSTING
          </h1>
          <p className="w-full text-lg md:w-[700px]">
          Managed bare metal dedicated servers with the latest <b>AMD Ryzen CPUs and full root access</b> to keep you in control. Our team will take care of software installs, security monitoring, updates, and more.
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
                Get in Touch
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
              Dedicated Hosting Features
            </h2>
          </div>

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
