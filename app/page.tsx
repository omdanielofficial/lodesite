"use client";
import { useState, useEffect } from "react";

const defaultBackground = "/assets/images/homepage/default.png";

const HomePage = () => {
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-secondary p-5 lg:p-16"
      style={{ minHeight: "40rem" }} // Reduced height here
    >
      {/* Background with fade effect */}
      <div
        className={`absolute inset-0 w-full bg-cover bg-center transition-opacity duration-200 ease-in-out`}
        style={{
          height: "40rem", // Reduced height here
          opacity: fade ? 1 : 0.1,
          backgroundImage:
            "radial-gradient(closest-side, rgba(35, 39, 46, .70), #23272E), url(" +
            defaultBackground +
            ")",
        }}
      ></div>

      <div className="container relative mx-auto flex max-w-7xl flex-col items-center justify-start pt-32 gap-6 text-center">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl max-w-[48rem]">
          Powerful, reliable, and affordable game hosting
        </h1>
        <p className="max-w-xl">
          Whether you&apos;re hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime. Start your adventure in minutes from as little as £1/mo!
        </p>
      </div>
    </section>
  );
};

export default HomePage;
