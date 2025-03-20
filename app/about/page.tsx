import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | About Us",
  description:
    "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  keywords:
    "game server hosting, Minecraft hosting, web hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone, about us, company, mission statement",
  openGraph: {
    title: "Lodestone | About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  },
  twitter: {
    title: "Lodestone | About Us",
    description:
      "Discover the story behind Lodestone's success. Learn about our mission, values, and the dedicated team that makes it all possible. Join us in shaping the future of game hosting.",
  },
};

const About = () => {
  return (
    <>
      <section
        className="flex min-h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(35, 39, 46, 0.7), #23272E), url('/assets/images/about/banner.webp')`,
        }}
      >
        <div className="p-10 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">
            About Lodestone
          </h1>
          <p className="w-full text-gray-300 md:w-[700px]">
          We&apos;re committed to providing top-tier hosting solutions that prioritise performance, sustainability, and genuine customer relationships.
          </p>
        </div>
      </section>
      <section className="overflow-hidden bg-secondary p-5 lg:p-16">
        <div className="mx-auto max-w-7xl">
          <div className="bg relative w-full px-6 py-[3.75rem]">
            <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 mx-auto flex w-full flex-col sm:max-w-[28rem] lg:order-1 lg:mx-0 lg:block">
                <div className="flex gap-x-4 text-center lg:text-left">
                  <div className="w-full">
                    <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem]">
                      Our Company
                    </h2>
                  </div>
                </div>
                <div className="text-dark-n-300 mt-3 flex flex-col gap-3 text-center text-base leading-6 lg:text-left">
                  <p>
                  At Lodestone, we recognised the critical gaps in hosting providers - from unreliable infrastructure to poor customer support. Born from a desire to deliver exceptional service, we&apos;re committed to providing top-tier hosting solutions that prioritise performance, sustainability, and genuine customer relationships.
                  </p>
                </div>
              </div>
              <div className="order-1 flex items-center justify-center overflow-hidden rounded-xl lg:order-2">
                <Image
                  alt="Company"
                  src="/assets/images/about/about1.webp"
                  className="h-[16.75rem] w-[25rem] object-cover sm:h-[27rem] sm:w-[40rem]"
                  width={1280}
                  height={0}
                />
              </div>
            </div>
          </div>

          <section className="bg-dark-n-0 relative w-full px-6 py-[3.75rem]">
            <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="order-2 mx-auto flex w-full flex-col sm:max-w-[28rem] lg:mx-0 lg:block lg:pl-10">
                <div className="flex gap-x-4 text-center lg:text-left">
                  <div className="w-full">
                    <h2 className="text-xl font-black sm:text-4xl sm:leading-[2.75rem]">
                      Our Values
                    </h2>
                  </div>
                </div>
                <div className="text-dark-n-300 mt-3 flex flex-col gap-3 text-center text-base leading-6 lg:text-left">
                  <p>
                  <li>We prioritse our customers and provide outstanding support at every step of the way.</li>
                  </p>
                  <p>
                  <li>We&apos;re continuously evolving our technology to stay ahead in the hosting industry.</li>
                  </p>
                  <p>
                  <li>We&apos;ve built our infrastructure with maximum performance and uptime in mind.</li>
                  </p>
                  <p>
                  <li>We strive for excellence in everything we do, from support to service delivery.</li>
                  </p>
                </div>
              </div>
              <div className="order-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image
                  width={1280}
                  height={0}
                  alt="Mission"
                  src="/assets/images/about/about2.jpg"
                  className="h-[16.75rem] w-[25rem] object-cover sm:h-[27rem] sm:w-[40rem]"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
