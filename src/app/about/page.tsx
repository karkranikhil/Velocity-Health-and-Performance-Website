import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dylan Jardas — Mobile Personal Trainer Melbourne & Epping",
  description:
    "Meet Dylan Jardas, Head Performance Coach at Velocity Health & Performance. 10+ years experience in AFL coaching & athletic development across Melbourne & Epping. Science-based, mobile training.",
  alternates: {
    canonical: "https://velocityhp.com.au/about",
  },
  openGraph: {
    title: "About Dylan Jardas | Velocity Health & Performance Melbourne",
    description:
      "Meet Dylan Jardas — 10+ years coaching experience, 500+ athletes trained. Science-based mobile training in Melbourne & Epping.",
    url: "https://velocityhp.com.au/about",
    images: [{ url: "/images/coach-portrait.jpg", width: 1200, height: 630, alt: "Dylan Jardas — Performance Coach Melbourne" }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section: The Architect */}
      <section className="relative px-6 md:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kinetic-grid -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border-l-2 border-primary-fixed-dim mb-6">
              <span className="text-primary-fixed-dim font-headline font-bold text-sm tracking-[0.2em] uppercase">
                Head Performance Coach
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-headline font-bold text-on-background tracking-tighter mb-6 md:mb-8 leading-[0.9]">
              DYLAN <br />
              <span className="text-primary-fixed-dim">JARDAS</span>
            </h1>
            <p className="text-base md:text-lg text-outline leading-relaxed max-w-xl mb-8 md:mb-12">
              Specializing in high-performance strength and conditioning, Dylan
              Jardas bridges the gap between raw athleticism and tactical
              execution. With a background forged in elite sport environments,
              his approach is defined by precision, data, and relentless
              discipline.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-outline-variant/30 pt-8">
              <div>
                <div className="text-primary-fixed-dim text-3xl font-headline font-bold">
                  10+
                </div>
                <div className="text-sm uppercase tracking-widest text-outline">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-primary-fixed-dim text-3xl font-headline font-bold">
                  500+
                </div>
                <div className="text-sm uppercase tracking-widest text-outline">
                  Athletes Coached
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] bg-surface-container-high relative overflow-hidden group">
              <Image
                src="/images/coach-portrait.jpg"
                alt="Dylan Jardas — Head Performance Coach at Velocity Health and Performance Melbourne"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container px-6 md:px-8 py-4 md:py-6 hidden md:block">
              <span className="text-on-secondary font-headline font-black text-2xl md:text-4xl tracking-tighter uppercase italic">
                Precision Driven.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: The Velocity Method */}
      <section className="bg-surface-container-lowest py-16 md:py-24 px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-sm font-headline font-bold text-secondary tracking-[0.4em] uppercase mb-4">
              Core Philosophy
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-bold text-on-background tracking-tighter">
              THE VELOCITY METHOD
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-outline-variant/15">
            {[
              {
                icon: "biotech",
                title: "Science-Based",
                desc: "We eliminate guesswork. Every program is built on biomechanical principles and physiological data, ensuring every rep serves a specific performance outcome.",
                bg: "bg-surface-container-low hover:bg-surface-container",
              },
              {
                icon: "query_stats",
                title: "Data Integrity",
                desc: "Generic workouts produce generic results. We track velocity, output, and recovery to pivot your training in real-time based on how your body is actually responding.",
                bg: "bg-surface-container-high",
              },
              {
                icon: "bolt",
                title: "Kinetic Power",
                desc: "Our focus is on the expression of force. Whether it's AFL field speed or athletic longevity, we build athletes who are explosive, durable, and elite.",
                bg: "bg-surface-container-low hover:bg-surface-container",
              },
            ].map((col, idx) => (
              <div
                key={col.title}
                className={`p-8 md:p-12 ${
                  idx < 2
                    ? "border-b md:border-b-0 md:border-r border-outline-variant/15"
                    : ""
                } ${col.bg} transition-colors duration-300`}
              >
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 md:mb-8">
                  {col.icon}
                </span>
                <h4 className="text-xl font-headline font-bold text-on-background mb-4 uppercase">
                  {col.title}
                </h4>
                <p className="text-base text-outline leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Training Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-on-background tracking-tighter mb-6 md:mb-8">
              THE MOBILE LAB: <br />
              <span className="text-primary-fixed-dim">WE COME TO YOU</span>
            </h2>
            <p className="text-base md:text-lg text-outline mb-8 leading-relaxed">
              Velocity Health &amp; Performance isn&apos;t confined to four
              walls. Dylan brings the high-performance lab environment directly
              to your home, local park, or club facility across Melbourne.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Elite Equipment Provided",
                  desc: "GPS tracking, velocity transducers, and pro-grade strength tools.",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "Training that fits around the demanding lives of athletes and professionals.",
                },
                {
                  title: "Environment Optimization",
                  desc: "Developing performance in the contexts where you actually compete.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-sm">
                      check
                    </span>
                  </div>
                  <div>
                    <h5 className="font-headline font-bold text-base uppercase text-on-background">
                      {item.title}
                    </h5>
                    <p className="text-sm text-outline">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map UI Component */}
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-square bg-surface-container rounded-sm border border-outline-variant/30 overflow-hidden relative group">
              <Image
                src="/images/melbourne-map.jpg"
                alt="Velocity Health and Performance service area map — Melbourne northern suburbs and Epping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-40 grayscale contrast-150"
              />
              <div className="absolute inset-0 bg-background/20" />
              {/* Melbourne/Epping Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-primary-fixed-dim animate-ping opacity-20" />
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-2 border-dashed border-primary-fixed-dim/40 rounded-full bg-primary-fixed-dim/5 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-primary-fixed-dim text-on-primary px-3 py-1 font-headline font-bold text-xs uppercase tracking-widest">
                      Service Zone
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span
                      className="material-symbols-outlined text-secondary text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                    <div className="bg-surface-bright/90 backdrop-blur-md px-3 py-1 mt-2 border border-outline-variant/30">
                      <span className="text-xs font-headline font-bold text-on-surface tracking-tighter">
                        MELBOURNE / EPPING HQ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Data Overlay */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col sm:flex-row justify-between gap-3 md:gap-4">
                <div className="bg-surface-container-highest/80 backdrop-blur-md p-3 md:p-4 border-l-2 border-primary-fixed-dim flex-1">
                  <p className="text-xs text-outline uppercase tracking-widest mb-1">
                    Coverage Radius
                  </p>
                  <p className="text-lg md:text-xl font-headline font-bold text-on-background">
                    35KM
                  </p>
                </div>
                <div className="bg-surface-container-highest/80 backdrop-blur-md p-3 md:p-4 border-l-2 border-secondary flex-1">
                  <p className="text-xs text-outline uppercase tracking-widest mb-1">
                    Primary Region
                  </p>
                  <p className="text-lg md:text-xl font-headline font-bold text-on-background">
                    NORTHERN SUBURBS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
