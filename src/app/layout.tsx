import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://velocityhp.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Velocity Health & Performance | Mobile AFL Coaching & Athletic Training Melbourne",
    template: "%s | Velocity Health & Performance Melbourne",
  },
  description:
    "Elite mobile AFL coaching, youth athletic development & adult strength and conditioning in Melbourne & Epping. Personalised 1-on-1 training — we come to you. Contact Dylan Jardas today.",
  keywords: [
    "AFL coaching Melbourne",
    "AFL coaching Epping",
    "mobile personal trainer Melbourne",
    "youth athletic development Melbourne",
    "strength and conditioning Melbourne",
    "AFL skills coaching",
    "mobile fitness trainer Epping",
    "athletic development northern suburbs",
    "1 on 1 AFL coaching",
    "youth sports training Melbourne",
    "adult strength training Epping",
    "Dylan Jardas trainer",
    "Velocity Health and Performance",
  ],
  authors: [{ name: "Dylan Jardas" }],
  creator: "Velocity Health & Performance",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Velocity Health & Performance",
    title:
      "Velocity Health & Performance | Mobile AFL Coaching & Athletic Training Melbourne",
    description:
      "Elite mobile AFL coaching, youth athletic development & strength conditioning in Melbourne & Epping. We come to you.",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Velocity Health & Performance — Elite Athletic Training Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Health & Performance | Mobile AFL Coaching Melbourne",
    description:
      "Elite mobile AFL coaching, youth athletic development & strength conditioning in Melbourne & Epping.",
    images: ["/images/hero-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Velocity Health & Performance",
  description:
    "Elite mobile AFL coaching, youth athletic development and adult strength & conditioning in Melbourne and Epping.",
  url: siteUrl,
  telephone: "+61434398667",
  email: "dylanjardas@gmail.com",
  image: `${siteUrl}/images/hero-home.jpg`,
  founder: {
    "@type": "Person",
    name: "Dylan Jardas",
    jobTitle: "Head Performance Coach",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Melbourne",
      containedInPlace: { "@type": "State", name: "Victoria" },
    },
    {
      "@type": "City",
      name: "Epping",
      containedInPlace: { "@type": "State", name: "Victoria" },
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.65,
    longitude: 145.03,
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -37.65,
      longitude: 145.03,
    },
    geoRadius: "35000",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "06:00",
    closes: "20:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AFL Specialist Coaching",
          description:
            "1-on-1 AFL coaching targeting technical skill acquisition, decision making, and game-specific mechanics.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Youth Athletic Development",
          description:
            "Foundational physical literacy focusing on speed, agility, and core strength for young athletes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adult Strength & Conditioning",
          description:
            "High-intensity strength and conditioning for established athletes seeking peak performance.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${publicSans.variable} bg-background text-on-background font-body selection:bg-primary-fixed-dim selection:text-on-primary`}
      >
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
