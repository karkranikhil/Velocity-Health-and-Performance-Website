"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PHONE_URL = "tel:+61434398667";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/afl-coaching", label: "AFL Coaching" },
  { href: "/athletic-development", label: "Athletic Development" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#11131c]/60 backdrop-blur-xl transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-6 md:px-8 py-4">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary-fixed-dim font-headline"
        >
          VELOCITY
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline tracking-tight text-sm uppercase font-bold transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1"
                    : "text-tertiary hover:text-primary-fixed-dim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={PHONE_URL}
            className="bg-secondary-container text-on-secondary px-5 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:scale-[0.98] transition-all font-headline"
          >
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-tertiary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-tertiary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-tertiary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-container-lowest/95 backdrop-blur-xl ${
          mobileOpen ? "max-h-96 border-t border-outline-variant/15" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-headline tracking-tight text-base uppercase font-bold py-3 transition-colors ${
                  isActive
                    ? "text-primary-fixed-dim"
                    : "text-tertiary hover:text-primary-fixed-dim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
