const TESTIMONIALS = [
  {
    logo: "/testimonial-logo-1.svg",
    logoWidth: 143,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    desktopTop: "15%",
    desktopLeft: "7%",
    desktopRotate: "-6.85deg",
    mobileRotate: "-3.5deg",
  },
  {
    logo: "/testimonial-logo-2.svg",
    logoWidth: 138,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    desktopTop: "28%",
    desktopLeft: "47%",
    desktopRotate: "2.9deg",
    mobileRotate: "2deg",
  },
  {
    logo: "/testimonial-logo-3.svg",
    logoWidth: 109,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    desktopTop: "57%",
    desktopLeft: "21%",
    desktopRotate: "2.23deg",
    mobileRotate: "-3deg",
  },
  {
    logo: "/testimonial-logo-4.svg",
    logoWidth: 81,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    desktopTop: "56%",
    desktopLeft: "68%",
    desktopRotate: "-4.15deg",
    mobileRotate: "2.5deg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] w-[353px]">
      <img
        src={testimonial.logo}
        alt=""
        aria-hidden="true"
        style={{ width: testimonial.logoWidth, height: "auto", display: "block" }}
      />
      <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
        {testimonial.quote}
      </p>
      <p className="font-black text-[16px] text-black uppercase tracking-[-0.04em] leading-[1.1]">
        {testimonial.author}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fafafa] w-full">

      {/* ── Desktop ── */}
      <div
        className="hidden md:block relative max-w-[1440px] mx-auto px-8"
        style={{ minHeight: 900 }}
      >
        {/* Title — absolutely centred so cards scatter around it */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2
            className="font-medium text-black text-center capitalize leading-[1.1] tracking-[-0.07em] w-full"
            style={{ fontSize: "clamp(80px, 13.75vw, 198px)" }}
          >
            Testimonials
          </h2>
        </div>

        {/* Cards */}
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="absolute"
            style={{
              top: t.desktopTop,
              left: t.desktopLeft,
              transform: `rotate(${t.desktopRotate})`,
            }}
          >
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>

      {/* ── Mobile: scroll-snap slider ── */}
      <div className="md:hidden pt-16 pb-4 px-4">
        <h2 className="font-medium text-[56px] text-black capitalize text-center tracking-[-0.07em] leading-[0.85] mb-10">
          Testimonials
        </h2>

        {/*
          Outer wrapper: overflow-x clips left/right, but we add py so
          rotated card corners aren't clipped vertically.
        */}
        <div
          className="flex gap-6 overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="shrink-0"
              style={{
                scrollSnapAlign: "center",
                transform: `rotate(${t.mobileRotate})`,
                width: "80vw",
                maxWidth: 353,
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
          {/* trailing spacer so the last card snaps to centre */}
          <div className="shrink-0 w-[10vw]" aria-hidden="true" />
        </div>
      </div>

    </section>
  );
}
