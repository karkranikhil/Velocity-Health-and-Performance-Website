import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mobile AFL Coaching & Athletic Training Melbourne | Velocity Health & Performance",
  description:
    "Elite mobile AFL coaching, youth athletic development & adult strength conditioning in Melbourne & Epping. 1-on-1 personalised training by Dylan Jardas — we come to you.",
  alternates: {
    canonical: "https://velocityhp.com.au",
  },
  openGraph: {
    title:
      "Mobile AFL Coaching & Athletic Training Melbourne | Velocity Health & Performance",
    description:
      "Elite mobile AFL coaching, youth athletic development & strength conditioning in Melbourne & Epping. We come to you.",
    url: "https://velocityhp.com.au",
  },
};

const WHATSAPP_URL = "https://wa.me/61434398667";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Elite athlete sprinting during AFL coaching session in Melbourne"
            fill
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-fixed-dim font-headline font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Performance Engineered
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-bold text-on-surface leading-[0.9] tracking-tighter mb-6">
              TRAIN LIKE AN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                ELITE ATHLETE
              </span>
            </h1>
            <p className="text-outline text-base md:text-xl mb-10 max-w-lg leading-relaxed">
              Elevate Your Game: Elite Athletic Development &amp; AFL Coaching.
              Precision-milled programming for the next generation of pros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-container text-on-secondary px-8 py-4 text-base font-bold uppercase tracking-tighter flex items-center justify-center gap-2 rounded-sm hover:brightness-110 transition-all"
              >
                Message on WhatsApp
              </a>
              <Link
                href="/contact"
                className="border border-outline/20 text-primary px-8 py-4 text-base font-bold uppercase tracking-tighter hover:bg-surface-container-highest transition-all rounded-sm text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden sm:flex">
          <span className="text-xs uppercase tracking-widest font-bold">
            Scroll Down
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-fixed-dim to-transparent" />
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter uppercase mb-4">
                Elite Methodology
              </h2>
              <p className="text-base text-outline">
                Our training pillars are built on the same scientific rigor used
                by professional sporting organizations across Australia.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-outline-variant/15 mx-12 mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/afl-coaching"
              className="group bg-surface-container-low p-6 md:p-8 border-l-2 border-transparent hover:border-primary-fixed-dim transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim mb-4 md:mb-6 text-4xl">
                sports_football
              </span>
              <h3 className="text-xl font-headline font-bold uppercase mb-3 text-on-surface">
                AFL Specialist Coaching
              </h3>
              <p className="text-base text-outline leading-relaxed mb-4">
                1-on-1 focus targeting technical skill acquisition, decision
                making, and game-specific mechanics.
              </p>
              <ul className="text-sm space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Kick Mechanics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Contest Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Game IQ Analysis
                </li>
              </ul>
            </Link>
            <Link
              href="/athletic-development"
              className="group bg-surface-container-low p-6 md:p-8 border-l-2 border-transparent hover:border-primary-fixed-dim transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim mb-4 md:mb-6 text-4xl">
                speed
              </span>
              <h3 className="text-xl font-headline font-bold uppercase mb-3 text-on-surface">
                Youth Development
              </h3>
              <p className="text-base text-outline leading-relaxed mb-4">
                Foundational physical literacy focusing on linear speed,
                multidirectional agility, and core strength.
              </p>
              <ul className="text-sm space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Sprint Technique
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Change of Direction
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Power Output
                </li>
              </ul>
            </Link>
            <Link
              href="/athletic-development"
              className="group bg-surface-container-low p-6 md:p-8 border-l-2 border-transparent hover:border-primary-fixed-dim transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim mb-4 md:mb-6 text-4xl">
                fitness_center
              </span>
              <h3 className="text-xl font-headline font-bold uppercase mb-3 text-on-surface">
                Senior Performance
              </h3>
              <p className="text-base text-outline leading-relaxed mb-4">
                High-intensity strength &amp; conditioning tailored for
                established athletes looking for the 1% advantage.
              </p>
              <ul className="text-sm space-y-2 text-on-surface-variant font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Hypertrophy &amp; Power
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Injury Prevention
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />{" "}
                  Load Management
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter uppercase">
              The Process
            </h2>
            <div className="w-16 h-1 bg-primary-fixed-dim mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px border-t border-dashed border-outline-variant/30" />
            {[
              {
                num: "01",
                title: "Contact",
                desc: "Reach out via WhatsApp or our contact form to initiate your journey.",
              },
              {
                num: "02",
                title: "Discuss",
                desc: "We analyze your goals, current level, and specific performance needs.",
              },
              {
                num: "03",
                title: "Train",
                desc: "Enter the lab. Execute precision programming under elite supervision.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container flex items-center justify-center rounded-sm mb-6 md:mb-8 group-hover:bg-primary-fixed-dim group-hover:text-on-primary transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-headline font-bold">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold uppercase mb-2">
                  {step.title}
                </h4>
                <p className="text-base text-outline">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter uppercase mb-4 md:mb-6">
                Proven Results
              </h2>
              <p className="text-base text-outline mb-6 md:mb-8">
                Trusted by AFL prospects and dedicated athletes striving for
                professional standards.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    quote:
                      "The attention to detail in kicking mechanics was a game changer. I saw immediate improvement in my ball drop and power.",
                    name: "AFL Draft Prospect",
                    role: "Midfielder",
                  },
                  {
                    quote:
                      "As a parent, I wanted a program that was safe but effective. Velocity's youth program exceeded all expectations for my son's agility.",
                    name: "Parent Review",
                    role: "Epping Resident",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="p-6 md:p-8 bg-surface-container-high relative overflow-hidden"
                  >
                    <span className="absolute -top-4 -right-4 text-9xl text-white/5 font-serif italic">
                      &ldquo;
                    </span>
                    <div className="flex text-primary-fixed-dim mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-base text-on-surface leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <h5 className="font-bold text-base uppercase tracking-wider">
                        {t.name}
                      </h5>
                      <p className="text-xs text-outline uppercase tracking-widest mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 px-6 md:px-8 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-surface-container p-8 md:p-12 overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden md:block">
              <Image
                src="/images/service-area-bg.jpg"
                alt="Velocity Health and Performance mobile training service area Melbourne and Epping"
                fill
                sizes="50vw"
                className="object-cover grayscale"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase mb-4 md:mb-6">
                Operating in Melbourne &amp; Epping
              </h2>
              <p className="text-base text-outline mb-6 md:mb-8 leading-relaxed">
                Our elite performance labs are strategically located to serve the
                Northern Suburbs. We bring professional AFL standards to local
                talent, utilizing premium equipment and biomechanical analysis.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                <div>
                  <h6 className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest mb-2">
                    Region Alpha
                  </h6>
                  <p className="text-base">Epping Performance Hub</p>
                </div>
                <div>
                  <h6 className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest mb-2">
                    Region Beta
                  </h6>
                  <p className="text-base">Melbourne Central Elite Lab</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  location_on
                </span>
                <span className="text-sm uppercase tracking-[0.2em] font-bold">
                  North Melbourne / Epping Corridor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
