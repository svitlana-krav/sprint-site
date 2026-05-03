"use client";

import { useState } from "react";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between py-6 w-full">
        <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black select-none">
          H.Studio
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-14 font-semibold text-base tracking-[-0.04em] capitalize">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full hover:bg-zinc-800 transition-colors"
        >
          Let&apos;s talk
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col px-6 pt-6 pb-8 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-12 shrink-0">
          <span className="font-semibold text-base tracking-[-0.04em] capitalize">
            H.Studio
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-semibold text-4xl tracking-[-0.04em] capitalize text-black"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  );
}
