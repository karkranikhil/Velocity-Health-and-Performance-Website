import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold text-tertiary font-headline tracking-tighter"
        >
          VELOCITY
        </Link>

        <div className="flex flex-wrap justify-center gap-6 font-body text-xs tracking-widest uppercase">
          <a
            href="#"
            className="text-outline hover:text-primary-fixed-dim transition-opacity duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-outline hover:text-primary-fixed-dim transition-opacity duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-outline hover:text-primary-fixed-dim transition-opacity duration-200"
          >
            Disclaimer
          </a>
          <Link
            href="/contact"
            className="text-outline hover:text-primary-fixed-dim transition-opacity duration-200"
          >
            Contact Support
          </Link>
        </div>

        <div className="font-body text-xs tracking-widest uppercase text-outline text-center md:text-right">
          &copy; {new Date().getFullYear()} VELOCITY HEALTH &amp; PERFORMANCE.
          PRECISION ENGINEERED.
        </div>
      </div>
    </footer>
  );
}
