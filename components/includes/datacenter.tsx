"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface DataCenter {
  name: string;
  flagUrl: string;
  latitude: number;
  longitude: number;
  locationCode?: string;
  testIp?: string;
  uplink?: string;
  services?: string;
}

const DataCenter = () => {
  const [hoveredDataCenter, setHoveredDataCenter] = useState<DataCenter | null>(
    null,
  );
  const tooltipRef = useRef<HTMLDivElement>(null);

  const dataCenters = [
    {
      name: "New York City",
      flagUrl: "/assets/images/worldmap/us.webp",
      latitude: 20.8,
      longitude: -48.6,
      locationCode: "NYC",
      testIp: "104.243.42.233",
      uplink: "1 Gbps",
      services: "Minecraft & Dedicated",
    },
    {
      name: "Falkenstein (Coming Soon)",
      flagUrl: "/assets/images/worldmap/de.webp",
      latitude: 20.8,
      longitude: -4,
      locationCode: "FSN",
      testIp: "",
      uplink: "1 Gbps",
      services: "Minecraft",
    },
    {
      name: "Singapore (Coming Soon)",
      flagUrl: "/assets/images/worldmap/sg.webp",
      latitude: -43,
      longitude: 52,
    },
  ];

  useEffect(() => {
    if (hoveredDataCenter && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      tooltip.style.top = `${50 + hoveredDataCenter.latitude * -0.5}%`;
      tooltip.style.left = `${50 + hoveredDataCenter.longitude * 0.5}%`;
      tooltip.style.transform = "translate(-50%, -120%)";
    }
  }, [hoveredDataCenter]);

  return (
    <>
      <section className="overflow-hidden bg-primary p-5 lg:p-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center sm:mb-8 md:mb-10">
            <div className="mb-2 text-xl font-bold sm:mb-4 lg:text-3xl">
              Our Global Reach
            </div>
            <p className="text-gray-300">
              With server locations around the world, we&apos;re always close to
              you.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/worldmap/world-map.webp"
              alt="World Map"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            {dataCenters.map((dataCenter, index) => (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  top: `${50 + dataCenter.latitude * -0.5}%`,
                  left: `${50 + dataCenter.longitude * 0.5}%`,
                  transform: "translate(-50%, -50%)",
                  willChange: "transform",
                }}
                onMouseEnter={() => setHoveredDataCenter(dataCenter)}
                onMouseLeave={() => setHoveredDataCenter(null)}
              >
                <div className="relative">
                  <div
                    id="animate"
                    className="absolute h-1 w-1 animate-wave rounded-full bg-violet-600 lg:h-4 lg:w-4"
                    style={{ pointerEvents: "none" }}
                  ></div>
                  <div
                    id="stand"
                    className="relative h-1 w-1 rounded-full bg-violet-600 lg:h-4 lg:w-4"
                  ></div>
                </div>
              </div>
            ))}
            {hoveredDataCenter && (
              <div
                ref={tooltipRef}
                className="absolute flex items-center rounded-xl bg-secondary p-2 shadow-lg"
                style={{
                  whiteSpace: "nowrap",
                  willChange: "transform",
                  transition: "top 0.1s ease, left 0.1s ease",
                }}
              >
                <Image
                  src={hoveredDataCenter.flagUrl}
                  alt={`${hoveredDataCenter.name} Flag`}
                  width={25}
                  height={0}
                  className="mr-2 rounded-full"
                />
                <span>{hoveredDataCenter.name}</span>
              </div>
            )}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/worldmap/us.webp"
                  alt="Chicago, Illinois, USA Flag"
                  width={30}
                  height={20}
                  className="mr-3 rounded-full"
                />
                <h3 className="text-lg font-semibold">New York City, United States</h3>
              </div>
              <p className="text-gray-300 mb-4">
                New York City is one of the largest internet hubs in the United States,
                ultimately providing amazing connectivity to the rest of North &
                South America, Europe, and parts of Asia.
              </p>
              <div>
                <p><b>Location Code:</b> NYC</p>
                <p><b>Test IP:</b> 104.243.42.233</p>
                <p><b>Uplink:</b> 1 Gbps</p>
                <p><b>Services:</b> Minecraft & Dedicated</p>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/images/worldmap/de.webp"
                  alt="London, United Kingdom Flag"
                  width={30}
                  height={20}
                  className="mr-3 rounded-full"
                />
                <h3 className="text-lg font-semibold">Falkenstein, Germany</h3>
              </div>
              <p className="text-gray-300 mb-4">
              Falkenstein is a crucial global internet hub, connecting Europe, North America, and Asia. Its robust infrastructure facilitates significant international data exchange.
              </p>
              <div>
                <p><b>Location Code:</b> FSN</p>
                <p><b>Test IP:</b> Coming Soon</p>
                <p><b>Uplink:</b> 1 Gbps</p>
                <p><b>Services:</b> Minecraft</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DataCenter;
