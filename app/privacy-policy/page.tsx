import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodestone | Privacy Policy",
  description:
  "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  keywords:
  "game server hosting, Minecraft hosting, web hosting, game hosting, 99.99% uptime, cheap Minecraft hosting, high-performance hosting, 24/7 support, affordable hosting plans, lodestone",
  openGraph: {
    title: "Lodestone | Privacy Policy",
    description:
    "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  },
  twitter: {
    title: "Lodestone | Privacy Policy",
    description:
    "Providing powerful, reliable, and affordable game hosting across the world. Whether you're hosting a server for a few friends or a large community, you can trust us to maintain performance and uptime.",
  },
};

const PrivacyPolicy = () => {
  return (
    <section className="bg-secondary p-5 lg:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="sticky top-20 max-w-[250px] rounded-xl border border-gray-200 p-5">
              <span className="text-secondary-200 mb-1 block text-sm font-medium">
                Table of Contents
              </span>
              <ul className="ml-5 flex list-decimal flex-col gap-2">
                {[
                  { id: "privacy-notice-updates", label: "Privacy Notice Updates" },
                  { id: "information-usage-purposes", label: "Information Usage Purposes" },
                  { id: "data-sharing", label: "Data Sharing" },
                  { id: "international-data-transfers", label: "International Data Transfers" },
                  { id: "your-privacy-rights", label: "Your Privacy Rights" },
                  { id: "general-data-protection-regulation", label: "General Data Protection Regulation (GDPR)" },
                  { id: "third-parties", label: "Third Parties" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="documentStyling col-span-4 lg:col-span-3">
            <h1>Privacy Policy</h1>
            <p>
              Last Updated: <strong>17 February 2025</strong>
            </p>
            <br></br>
            <p>
              Please send all legal enquiries to: contact@lodestone.host
            </p>
<br></br>
            <Section
              id="privacy-notice-updates"
              title="Privacy Notice Updates"
              content={
                <p>
We will update this notice as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by a revised date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                </p>
              }
            />

            <Section
              id="information-usage-purposes"
              title="Information Usage Purposes"
              content={
                <ul className="ml-5 list-decimal">
                  {[
                    "We may use your information to request feedback and to contact you about your use of our website.",
                    "We may use your information in order to enable user-to-user communications with each user's consent.",
                    "We may use your information for the purposes of managing your account and keeping it in working order.",
                    "We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.",
                    "We may use your information as part of our efforts to keep our website safe and secure (for example, for fraud monitoring and prevention).",
                    "We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the website.",
                    "We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our services.",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            />

            <Section
              id="data-sharing"
              title="Data Sharing"
              content={
                <ul className="ml-5 list-decimal">
                  {[
                    "We may process your data if you have given us specific consent to use your personal information for a specific purpose.",
                    "We may process your data when it is reasonably necessary to achieve our legitimate business interests.",
                    "Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            />

<Section
              id="international-data-transfers"
              title="Privacy Notice Updates"
              content={
                <p>
We may transfer, store, and process your information in countries other than your own. If you are a not resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>
              }
            />

<Section
              id="your-privacy-rights"
              title="Privacy Notice Updates"
              content={
                <p>
You may review, change, or terminate your account at any time. If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. If you have questions or comments about your privacy rights, you may email us at contact@lodestone.host.</p>
              }
            />

            <Section
              id="general-data-protection-regulation"
              title="General Data Protection Regulation (GDPR)"
              content={
                <>
                  <ul className="ml-5 list-decimal">
                    {[
                      "We will only handle your data where you have given us permission to do so.",
                      "We will only handle your data where processing your personal information is in Lodestone's legitimate interests.",
                      "We will retain your personal information only for as long as is necessary (idefinitely) for the purposes set out in this privacy notice.",
                      "We will retain and use your information to the extent necessary to comply with legal obligations, resolve disputes, and enforce our policies.",
                      "You have the right to access, update or to delete the information we have on you.",
                      "You have the rights of rectification, objection, restriction and data portability.",
                      "You have the right to withdraw consent.",
                      "If you wish to be informed what personal information we hold about you and if you want it to be removed from our systems, please contact us via email at contact@lodestone.host.",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              }
            />

<Section
              id="third-parties"
              title="Privacy Notice Updates"
              content={
                <p>
Your data may be provided to any trusted third parties, at any time. Only information strictly required will be provided, to be used only in their legitimate interests. Personal data will be used solely to process your order, and deliver our services. We reserve the right to provide your data to any external collection agencies, in the event of overdue payments, as specified in our Terms of Service.</p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => (
  <>
    <h2 id={id}>{title}</h2>
    {content}
    <br />
  </>
);

interface SubsectionProps {
  number: string;
  title: string;
  items: string[];
}

const Subsection: React.FC<SubsectionProps> = ({ number, title, items }) => (
  <>
    <strong>{`${number}. `}</strong>
    {title}
    <ul className="ml-5 list-decimal">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <br />
  </>
);

export default PrivacyPolicy;
