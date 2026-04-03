import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/61434398667";
const PHONE_URL = "tel:+61434398667";
const PHONE_DISPLAY = "0434 398 667";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Velocity Health & Performance — Melbourne & Epping",
  description:
    "Get in touch with Velocity Health & Performance in Melbourne & Epping. Message on WhatsApp, call 0434 398 667, or submit an inquiry for AFL coaching & athletic training.",
  alternates: {
    canonical: "https://velocityhp.com.au/contact",
  },
  openGraph: {
    title: "Contact Velocity Health & Performance Melbourne",
    description:
      "Message on WhatsApp, call 0434 398 667, or enquire online for AFL coaching & athletic training in Melbourne & Epping.",
    url: "https://velocityhp.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Hero / WhatsApp CTA */}
      <section className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 leading-none">
            ENGINEERED <br />
            <span className="text-primary-fixed-dim">RESPONSE.</span>
          </h1>
          <p className="text-base md:text-lg text-outline max-w-lg mb-8 font-light">
            Direct access to elite performance protocols. Message our team on
            WhatsApp for immediate triage and training inquiries.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-secondary-container text-on-secondary px-8 md:px-10 py-4 md:py-5 rounded-sm group transition-all hover:pr-12"
          >
            <span className="font-headline font-bold text-lg md:text-xl uppercase tracking-tighter">
              Message on WhatsApp
            </span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="md:col-span-5 relative h-56 md:h-96">
          <div className="absolute inset-0 bg-surface-container rounded-sm overflow-hidden border-l-4 border-primary-fixed-dim">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact Velocity Health and Performance — elite athletic coaching Melbourne"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Inquiry Form + Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary-fixed-dim uppercase mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary-fixed-dim" /> Intake
              Protocol
            </h2>
            <h3 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-4 md:mb-6">
              ATHLETE PROFILE
            </h3>
            <p className="text-base text-outline leading-relaxed">
              Complete the diagnostic inquiry below. Our coaching staff reviews
              all data to determine performance capacity and program fit within
              24 hours.
            </p>
          </div>

          {/* Phone */}
          <div className="bg-surface-container p-6 md:p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">call</span>
            </div>
            <p className="text-sm font-bold text-outline tracking-widest uppercase mb-2">
              Direct Line
            </p>
            <a
              href={PHONE_URL}
              className="text-xl md:text-2xl font-headline font-bold text-on-background hover:text-primary-fixed-dim transition-colors flex items-center gap-3"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Map */}
          <div className="h-56 md:h-64 bg-surface-container rounded-sm overflow-hidden relative border border-outline-variant/15">
            <Image
              src="/images/contact-map.jpg"
              alt="Velocity Health and Performance location — Melbourne and Epping training area"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-2">
                  location_on
                </span>
                <p className="font-headline font-bold uppercase tracking-widest text-sm">
                  Melbourne HQ &amp; Region
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form className="bg-surface-container-low p-6 md:p-12 border-t-2 border-secondary-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-outline">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="w-full bg-surface-container border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-background text-base px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-outline">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="ATHLETE@EMAIL.COM"
                  className="w-full bg-surface-container border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-background text-base px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-outline">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="YEARS"
                  className="w-full bg-surface-container border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-background text-base px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-outline">
                  Primary Sport
                </label>
                <select className="w-full bg-surface-container border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-background text-base px-4 py-4 transition-all appearance-none uppercase font-bold">
                  <option>AFL</option>
                  <option>SOCCER</option>
                  <option>RUGBY</option>
                  <option>ENDURANCE</option>
                  <option>OTHER</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-outline">
                  Main Goal / Objectives
                </label>
                <textarea
                  placeholder="DESCRIBE YOUR PERFORMANCE DEFICITS OR OBJECTIVES..."
                  rows={4}
                  className="w-full bg-surface-container border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-background text-base px-4 py-4 transition-all"
                />
              </div>
            </div>
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary-fixed-dim/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    verified_user
                  </span>
                </div>
                <p className="text-xs text-outline uppercase tracking-tight leading-tight">
                  Data handled via <br /> secure lab protocol
                </p>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-fixed-dim text-on-primary px-10 md:px-12 py-4 md:py-5 font-headline font-black text-base uppercase tracking-wider hover:bg-primary-container transition-all flex items-center justify-center gap-3"
              >
                Submit Inquiry{" "}
                <span className="material-symbols-outlined">bolt</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
