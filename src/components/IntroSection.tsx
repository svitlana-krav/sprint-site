export default function IntroSection() {
  return (
    <section className="bg-[#fafafa] w-full">
      {/* Desktop */}
      <div className="hidden md:block py-[120px] px-[32px] max-w-[1440px] mx-auto">
        {/* Top row: years label + divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#1f1f1f]" />
          <p className="font-mono text-[14px] uppercase tracking-[-0.035em] text-[#1f1f1f] shrink-0">
            [ 8+ years in industry ]
          </p>
        </div>

        {/* Staircase text block */}
        <div className="flex flex-col">
          {/* Line 1 — left-aligned + "001" pushed to far right */}
          <div className="flex items-baseline justify-between">
            <p
              className="font-light text-[min(6.67vw,96px)] leading-[1] tracking-[-0.08em] text-[#1f1f1f] uppercase"
            >
              A creative director&nbsp;&nbsp;&nbsp;/
            </p>
            <span className="font-mono text-[14px] uppercase tracking-[-0.035em] text-[#1f1f1f] self-end pb-1">
              001
            </span>
          </div>

          {/* Line 2 — indented ~15.5% */}
          <p
            className="font-light text-[min(6.67vw,96px)] leading-[1] tracking-[-0.08em] text-[#1f1f1f] uppercase"
            style={{ paddingLeft: "15.5%" }}
          >
            Photographer
          </p>

          {/* Line 3 — indented ~44% */}
          <p
            className="font-light text-[min(6.67vw,96px)] leading-[1] tracking-[-0.08em] text-[#1f1f1f] uppercase"
            style={{ paddingLeft: "44%" }}
          >
            Born{" "}
            <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400 }}>
              &amp;
            </span>{" "}
            raised
          </p>

          {/* Line 4 — left-aligned */}
          <p
            className="font-light text-[min(6.67vw,96px)] leading-[1] tracking-[-0.08em] text-[#1f1f1f] uppercase"
          >
            on the south side
          </p>

          {/* Line 5 — "of chicago." indented ~44% + inline label */}
          <div className="flex items-baseline gap-6" style={{ paddingLeft: "44%" }}>
            <p
              className="font-light text-[min(6.67vw,96px)] leading-[1] tracking-[-0.08em] text-[#1f1f1f] uppercase"
            >
              of chicago.
            </p>
            <span className="font-mono text-[14px] uppercase tracking-[-0.035em] text-[#1f1f1f] self-end pb-1 whitespace-nowrap">
              [ creative freelancer ]
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden py-[48px] px-[16px] flex flex-col items-center text-center gap-4">
        <span className="font-mono text-[14px] uppercase tracking-[-0.035em] text-[#1f1f1f]">
          001
        </span>

        <div className="flex flex-col items-center gap-0">
          <p className="font-light text-[32px] leading-[1.1] tracking-[-0.08em] text-[#1f1f1f] uppercase">
            A creative director /
          </p>
          <p className="font-light text-[32px] leading-[1.1] tracking-[-0.08em] text-[#1f1f1f] uppercase">
            Photographer
          </p>
          <p className="font-light text-[32px] leading-[1.1] tracking-[-0.08em] text-[#1f1f1f] uppercase">
            Born{" "}
            <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400 }}>
              &amp;
            </span>{" "}
            raised
          </p>
          <p className="font-light text-[32px] leading-[1.1] tracking-[-0.08em] text-[#1f1f1f] uppercase">
            on the south side
          </p>
          <p className="font-light text-[32px] leading-[1.1] tracking-[-0.08em] text-[#1f1f1f] uppercase">
            of chicago.
          </p>
        </div>

        <span className="font-mono text-[14px] uppercase tracking-[-0.035em] text-[#1f1f1f]">
          [ creative freelancer ]
        </span>
      </div>
    </section>
  );
}
