import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/61434398667";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1-on-1 AFL Coaching Melbourne & Epping — Skills, Kicking, Game IQ",
  description:
    "Private AFL coaching in Melbourne & Epping. Expert 1-on-1 sessions for kicking technique, game intelligence, contest skills & draft preparation. Mobile — we come to you.",
  alternates: {
    canonical: "https://velocityhp.com.au/afl-coaching",
  },
  openGraph: {
    title: "1-on-1 AFL Coaching Melbourne & Epping | Velocity Health & Performance",
    description:
      "Private AFL coaching for kicking technique, game intelligence & draft preparation. Mobile sessions in Melbourne & Epping.",
    url: "https://velocityhp.com.au/afl-coaching",
    images: [{ url: "/images/afl-hero.jpg", width: 1200, height: 630, alt: "AFL Specialist Coaching Melbourne" }],
  },
};

export default function AflCoachingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/afl-hero.jpg"
            alt="AFL player performing a specky mark — private AFL coaching Melbourne by Velocity Health and Performance"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-block bg-primary-fixed-dim/10 border-l-2 border-primary-fixed-dim px-4 py-1 mb-6">
              <span className="text-primary-fixed-dim font-headline font-bold text-sm tracking-[0.2em] uppercase">
                Specialist 1-on-1 Division
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none mb-6">
              ELITE <span className="text-primary-fixed-dim">KINETIC</span>
              <br />
              AFL PERFORMANCE
            </h1>
            <p className="text-base md:text-xl text-outline max-w-2xl mb-10 leading-relaxed">
              Precision-engineered coaching for athletes who demand more than
              generic drills. We dissect the game into mechanical components,
              optimizing your tactical engine and technical execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-container text-on-secondary px-8 md:px-10 py-4 font-headline font-black text-base uppercase tracking-wider rounded-sm hover:scale-[0.98] transition-all"
              >
                Message for AFL Coaching
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-surface-bright/60 backdrop-blur-xl p-1 border-l border-primary-fixed-dim/30">
              <div className="bg-surface-container p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-primary-fixed-dim font-headline font-bold text-xs tracking-widest uppercase">
                    Live Metric Track
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs mb-2 font-bold uppercase tracking-tighter text-outline">
                      Decision Latency
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary-fixed-dim w-[88%]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-2 font-bold uppercase tracking-tighter text-outline">
                      Kick Precision %
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest">
                      <div className="h-full bg-secondary w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For: Bento Grid */}
      <section className="py-16 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">
            THE RECIPIENTS
          </h2>
          <div className="w-20 h-1 bg-primary-fixed-dim" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container p-8 md:p-10 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-primary-fixed-dim font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
                AFL/AFLW PROS
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">
                THE 1% MARGIN
              </h3>
              <p className="text-base text-outline leading-relaxed max-w-md">
                Fine-tuning the mechanics of elite performance. We provide the
                technical diagnostic that club environments often overlook in the
                heat of a season.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">
                analytics
              </span>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 md:p-10 flex flex-col justify-end border-t-4 border-secondary">
            <span className="text-secondary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              DRAFT PROSPECTS
            </span>
            <h3 className="text-xl md:text-2xl font-headline font-bold mb-4">
              DRAFT-READY ENGINE
            </h3>
            <p className="text-sm text-outline leading-relaxed">
              Systematic preparation for the combine and high-pressure talent
              pathways.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 md:p-10 border-r border-outline-variant/20">
            <span
              className="material-symbols-outlined text-primary-fixed-dim mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield
            </span>
            <h3 className="text-xl font-headline font-bold mb-4 uppercase">
              Regional Champions
            </h3>
            <p className="text-sm text-outline leading-relaxed">
              Dominating local leagues through superior technical skill and
              professional-grade game intelligence.
            </p>
          </div>
          <div className="md:col-span-2 bg-surface-container p-1 relative min-h-[250px] md:min-h-[300px]">
            <Image
              src="/images/afl-kick.jpg"
              alt="AFL football being kicked with dirt and water droplets flying"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-xl md:text-2xl font-headline font-bold uppercase italic tracking-tighter">
                Engineered for Impact
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Trained: Technical Domains */}
      <section className="bg-surface-container-lowest py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter leading-none mb-6">
                TECHNICAL
                <br />
                DOMAINS
              </h2>
              <p className="text-base text-outline border-l-2 border-primary-fixed-dim pl-6 py-2">
                Our coaching curriculum is modular, designed to isolate and
                optimize the specific variables that dictate match-day outcomes.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-primary-fixed-dim font-headline font-bold text-6xl tracking-tighter">
                03
              </span>
              <span className="text-outline font-headline font-bold text-sm uppercase tracking-widest block">
                Core Pillars
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {[
              {
                icon: "psychology",
                title: "Tactical Awareness",
                color: "text-primary-fixed-dim",
                items: [
                  "Visual scanning & spatial mapping",
                  "High-pressure decision making",
                  "Transition defense positioning",
                ],
              },
              {
                icon: "sports_football",
                title: "Ball Mechanics",
                color: "text-secondary",
                items: [
                  "Kick biomechanics under fatigue",
                  "Clean hands & contested ground balls",
                  "Precision handballing under pressure",
                ],
              },
              {
                icon: "timer",
                title: "Game-Day Prep",
                color: "text-primary-fixed-dim",
                items: [
                  "Situational awareness drills",
                  "Opposition analysis application",
                  "Psychological priming & focus",
                ],
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`p-8 md:p-12 border-l border-outline-variant/10 ${
                  idx === 2 ? "border-r" : ""
                } ${
                  idx === 1 ? "bg-surface-container/30" : ""
                } hover:bg-surface-container transition-colors group`}
              >
                <div className="mb-8 md:mb-12 flex items-center gap-4">
                  <span
                    className={`material-symbols-outlined ${pillar.color} text-4xl`}
                  >
                    {pillar.icon}
                  </span>
                  <div className="h-[1px] flex-grow bg-outline-variant/20" />
                </div>
                <h4 className="text-xl font-headline font-bold mb-4 md:mb-6 tracking-tight uppercase">
                  {pillar.title}
                </h4>
                <ul className="space-y-4 text-base text-outline">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`${pillar.color} text-xs mt-1.5`}
                      >
                        ●
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed-dim/5 rounded-full blur-3xl" />
            <div className="relative bg-surface-container p-2">
              <Image
                src="/images/afl-results.jpg"
                alt="Athletes doing high-intensity sprints with scientific data overlays"
                width={800}
                height={600}
                className="w-full grayscale contrast-125 opacity-80"
              />
              <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-background/80 backdrop-blur-md p-3 md:p-4 border-l border-primary-fixed-dim">
                <div className="text-3xl md:text-4xl font-headline font-black text-primary-fixed-dim">
                  -14%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-outline">
                  Decision Latency
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-8">
              LAB-VERIFIED
              <br />
              RESULTS
            </h2>
            <div className="space-y-10 md:space-y-12">
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-4 gap-1">
                  <h5 className="font-headline font-bold text-lg uppercase tracking-tight">
                    Kicking Efficiency
                  </h5>
                  <span className="text-primary-fixed-dim font-headline font-bold text-base">
                    +22% Avg Increase
                  </span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest">
                  <div className="h-full bg-primary-fixed-dim w-[78%]" />
                </div>
                <p className="mt-4 text-base text-outline leading-relaxed">
                  Measured through consistent 40m target acquisition under
                  simulated 90% aerobic load.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-4 gap-1">
                  <h5 className="font-headline font-bold text-lg uppercase tracking-tight">
                    Game Intelligence
                  </h5>
                  <span className="text-secondary font-headline font-bold text-base">
                    Quantifiably Sharper
                  </span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest">
                  <div className="h-full bg-secondary w-[92%]" />
                </div>
                <p className="mt-4 text-base text-outline leading-relaxed">
                  Proprietary video review scoring shows significant reduction in
                  turnovers due to &lsquo;poor choice&rsquo; identifiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-high py-16 md:py-24 text-center px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-6 md:mb-8 uppercase">
            Ready for the Next Level?
          </h2>
          <p className="text-base md:text-lg text-outline mb-8 md:mb-12">
            Our specialist slots are strictly limited to ensure uncompromising
            focus on individual athletes.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary-container text-on-secondary px-10 md:px-12 py-5 font-headline font-black text-base uppercase tracking-wider rounded-sm hover:scale-105 transition-all"
          >
            Message for AFL Coaching
          </a>
        </div>
      </section>
    </>
  );
}
