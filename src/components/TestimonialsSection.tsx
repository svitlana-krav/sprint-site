const TESTIMONIALS = [
  {
    logo: "/testimonial-logo-1.png",
    logoWidth: 143,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    // Desktop: absolute position (% of 1440px wide, 900px tall section)
    desktopTop: "15%",
    desktopLeft: "7%",
    desktopRotate: "-6.85deg",
    // Mobile slider rotation
    mobileRotate: "-3.5deg",
  },
  {
    logo: "/testimonial-logo-2.png",
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
    logo: "/testimonial-logo-3.png",
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
    logo: "/testimonial-logo-4.png",
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

function TestimonialCard({
  testimonial,
  style,
  className,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] w-[353px] shrink-0 ${className ?? ""}`}
      style={style}
    >
      <img
        src={testimonial.logo}
        alt=""
        aria-hidden="true"
        style={{ width: testimonial.logoWidth, height: "auto" }}
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
    <section className="bg-[#fafafa] w-full overflow-hidden">

      {/* ── Desktop ── */}
      <div className="hidden md:block relative min-h-[900px] max-w-[1440px] mx-auto px-8 py-[120px]">
        {/* Big title — in-flow, centered, cards layer on top */}
        <h2
          className="font-medium text-black text-center uppercase leading-[1.1] tracking-[-0.07em] w-full"
          style={{ fontSize: "clamp(80px, 13.75vw, 198px)" }}
        >
          Testimonials
        </h2>

        {/* Absolutely positioned cards */}
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
      <div className="md:hidden py-16 px-4">
        <h2 className="font-medium text-[64px] text-black capitalize text-center tracking-[-0.07em] leading-[0.8] mb-8">
          Testimonials
        </h2>

        {/* Slider track */}
        <div
          className="flex gap-4 overflow-x-auto pb-6"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
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
                maxWidth: "353px",
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
          {/* End padding so last card centres properly */}
          <div className="shrink-0 w-[10vw]" />
        </div>
      </div>

    </section>
  );
}
