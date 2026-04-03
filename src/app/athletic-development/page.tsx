import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth & Senior Athletic Development Melbourne — Speed, Strength, Agility",
  description:
    "Youth athletic development & adult strength and conditioning in Melbourne & Epping. Speed, agility, power training for young athletes and seniors. Mobile sessions — we come to you.",
  alternates: {
    canonical: "https://velocityhp.com.au/athletic-development",
  },
  openGraph: {
    title: "Youth & Senior Athletic Development Melbourne | Velocity Health & Performance",
    description:
      "Youth athletic development & adult strength conditioning in Melbourne & Epping. Speed, agility, power training.",
    url: "https://velocityhp.com.au/athletic-development",
    images: [{ url: "/images/athletic-hero.jpg", width: 1200, height: 630, alt: "Athletic Development Melbourne" }],
  },
};

export default function AthleticDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center px-6 md:px-20 overflow-hidden border-b border-outline-variant/15 pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/athletic-hero.jpg"
            alt="Youth athlete sprint training — athletic development program Melbourne by Velocity Health and Performance"
            fill
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-highest rounded-sm border-l-2 border-primary-fixed-dim">
            <span className="material-symbols-outlined text-primary-fixed-dim text-sm">
              monitoring
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-primary-fixed-dim">
              Precision Engineered Performance
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            ATHLETIC <br />
            <span className="text-primary-fixed-dim">DEVELOPMENT</span>
          </h1>
          <p className="text-base md:text-lg text-outline max-w-xl leading-relaxed font-light">
            Where scientific methodology meets elite field performance. We
            don&apos;t just train; we engineer athletes through data-driven
            protocols.
          </p>
        </div>
      </section>

      {/* The Mobile Edge (Bento Style) */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          <div className="md:col-span-8 flex flex-col justify-end p-8 md:p-10 bg-surface-container relative overflow-hidden group min-h-[250px] md:min-h-[300px]">
            <Image
              src="/images/mobile-training.jpg"
              alt="Athletic trainer setting up timing gates in a local park during sunrise"
              fill
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
            />
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-4xl font-black mb-4">
                THE MOBILE EDGE
              </h2>
              <p className="text-base text-outline max-w-md">
                Dylan brings the laboratory experience directly to your
                environment. Local parks, home facilities, or team
                grounds&mdash;performance tracking goes wherever you are.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 aspect-square bg-surface-container-high p-8 flex flex-col items-center justify-center text-center border-t-2 border-secondary">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">
              distance
            </span>
            <h3 className="font-headline font-bold text-xl mb-2">
              ANY LOCATION
            </h3>
            <p className="text-base text-outline">
              High-end equipment, portable precision. Zero compromises on data
              quality.
            </p>
          </div>
          <div className="md:col-span-4 aspect-square bg-surface-container-high p-8 flex flex-col items-center justify-center text-center border-t-2 border-primary-fixed-dim">
            <span className="material-symbols-outlined text-primary-fixed-dim text-5xl mb-4">
              lab_research
            </span>
            <h3 className="font-headline font-bold text-xl mb-2">LAB GRADE</h3>
            <p className="text-base text-outline">
              Laser timing, force plates, and kinematic analysis in the field.
            </p>
          </div>
          <div className="md:col-span-8 bg-surface-container relative overflow-hidden flex items-center p-8 md:p-10">
            <div className="w-full">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
                  Velocity Threshold
                </span>
                <span className="font-headline font-black text-2xl">
                  98.2%
                </span>
              </div>
              <div className="velocity-meter w-full mb-6" />
              <p className="text-base text-outline font-medium uppercase tracking-tighter">
                Real-time feedback during field sessions for maximum adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4">
              ENGINEERED STAGES
            </h2>
            <p className="text-sm text-outline uppercase tracking-widest">
              Specialized pathways for every level of development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
            {/* Youth Program */}
            <div className="bg-surface p-8 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <span className="text-5xl md:text-6xl font-black text-outline/5 font-headline select-none">
                  01
                </span>
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-black mb-8 text-primary-fixed-dim">
                YOUTH PROGRAM
              </h3>
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    icon: "foundation",
                    title: "FOUNDATION",
                    desc: "Building robust biomechanical blueprints for long-term athletic success.",
                  },
                  {
                    icon: "security",
                    title: "SAFETY",
                    desc: "Movement quality prioritized over load. Injury prevention as a core metric.",
                  },
                  {
                    icon: "bolt",
                    title: "SPEED & AGILITY",
                    desc: 'Reactive drills and coordination work to develop explosive "game-speed".',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 md:gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                      <span className="material-symbols-outlined text-primary-fixed-dim">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base text-outline leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Senior Program */}
            <div className="bg-surface-container-low p-8 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <span className="text-5xl md:text-6xl font-black text-outline/5 font-headline select-none">
                  02
                </span>
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-black mb-8 text-secondary">
                SENIOR PROGRAM
              </h3>
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    icon: "speed",
                    title: "PERFORMANCE",
                    desc: "Optimization of specific physical outputs for competitive edge.",
                  },
                  {
                    icon: "flash_on",
                    title: "INTENSITY",
                    desc: "High-threshold metabolic and neurological demand training.",
                  },
                  {
                    icon: "fitness_center",
                    title: "STRENGTH & CONDITIONING",
                    desc: "Advanced periodization focused on peak power and endurance capacity.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 md:gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                      <span className="material-symbols-outlined text-secondary">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base text-outline leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Visualization */}
      <section className="py-8 md:py-12 border-y border-outline-variant/10 overflow-hidden">
        <div className="flex gap-12 md:gap-20 whitespace-nowrap px-6 md:px-8 overflow-x-auto">
          {[
            {
              label: "Force Velocity Profile",
              color: "text-primary-fixed-dim",
              barColor: "bg-primary-fixed-dim",
              width: "w-3/4",
            },
            {
              label: "Anaerobic Threshold",
              color: "text-secondary",
              barColor: "bg-secondary",
              width: "w-1/2",
            },
            {
              label: "Kinetic Chain Integrity",
              color: "text-primary-fixed-dim",
              barColor: "bg-primary-fixed-dim",
              width: "w-5/6",
            },
            {
              label: "Neuromuscular Latency",
              color: "text-outline",
              barColor: "bg-outline",
              width: "w-1/4",
            },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center gap-4">
              <span
                className={`text-sm font-bold tracking-[0.2em] uppercase ${metric.color}`}
              >
                {metric.label}
              </span>
              <div className="w-40 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className={`h-full ${metric.barColor} ${metric.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
