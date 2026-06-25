const SOCIAL = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X.com", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-12 flex flex-col gap-12 md:gap-[120px]">

        {/* ── Top: CTA + socials + divider ── */}
        <div className="flex flex-col gap-6 md:gap-12">

          {/* Desktop: 3-column row — mobile: stacked */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <p className="text-[24px] text-white uppercase tracking-[-0.04em] leading-[1.1]">
                <span className="font-light italic">Have a </span>
                <span className="font-black not-italic">project</span>
                <span className="font-light italic"> in mind?</span>
              </p>
              <button className="self-start border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
                Let&apos;s talk
              </button>
            </div>

            {/* Mobile: social links in one column */}
            <div className="flex flex-col gap-1 md:hidden">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[18px] text-white uppercase tracking-[-0.04em] leading-[1.1] hover:opacity-70 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Desktop: center column (Facebook / Instagram) */}
            <div className="hidden md:block text-center">
              {SOCIAL.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="block text-[18px] text-white uppercase tracking-[-0.04em] leading-[1.1] hover:opacity-70 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Desktop: right column (X.com / LinkedIn) */}
            <div className="hidden md:block text-right">
              {SOCIAL.slice(2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="block text-[18px] text-white uppercase tracking-[-0.04em] leading-[1.1] hover:opacity-70 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white w-full" />
        </div>

        {/* ── Bottom: H.Studio + legal links ── */}

        {/* Desktop */}
        <div className="hidden md:flex items-end justify-between">

          {/* Clipped H.Studio container + vertical label */}
          <div
            className="relative flex-1 min-w-0 overflow-hidden shrink-0"
            style={{ height: 219 }}
          >
            {/* [ Coded By Claude ] — vertical, far left */}
            <div className="absolute left-0 top-0 bottom-0 w-[15px] flex items-center justify-center">
              <p className="font-mono text-[14px] text-white uppercase whitespace-nowrap leading-none -rotate-90">
                [ Coded By Claude ]
              </p>
            </div>

            {/* Large clipped text */}
            <p
              className="font-semibold text-white capitalize whitespace-nowrap select-none"
              style={{ fontSize: 290, lineHeight: 0.8, letterSpacing: "-0.06em" }}
            >
              H.Studio
            </p>
          </div>

          {/* Legal links */}
          <div className="flex gap-[34px] items-center pb-8 text-[12px] text-white uppercase tracking-[-0.04em] shrink-0">
            <a href="#" className="underline hover:opacity-70 transition-opacity">Licences</a>
            <a href="#" className="underline hover:opacity-70 transition-opacity">Privacy policy</a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-4 pb-8">
          <div className="flex gap-[34px] items-center text-[12px] text-white uppercase tracking-[-0.04em]">
            <a href="#" className="underline hover:opacity-70 transition-opacity">Licences</a>
            <a href="#" className="underline hover:opacity-70 transition-opacity">Privacy policy</a>
          </div>
          <p className="font-mono text-[10px] text-white uppercase leading-[1.1]">
            [ Coded By Claude ]
          </p>
          {/* Text overflows to the right — clipped at screen edge */}
          <div className="overflow-hidden w-full">
            <p
              className="font-semibold text-white capitalize whitespace-nowrap select-none"
              style={{ fontSize: 91, lineHeight: 0.8, letterSpacing: "-0.06em" }}
            >
              H.Studio
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
