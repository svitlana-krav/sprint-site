import Navbar from "./Navbar";

const BG_IMAGE = "/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-[1000px] bg-[#c8d0d3] overflow-hidden">
      {/*
        Mobile  → object-cover fills the viewport (inset-0 w-full h-full).
        Desktop → absolute, anchored at top-0, centered horizontally, minimum
                  2440 px wide (scales wider on larger screens via w-full).
                  Overflow is clipped by the section's overflow-hidden.
      */}
      <img
        src={BG_IMAGE}
        alt=""
        aria-hidden="true"
        className="
          absolute pointer-events-none select-none
          inset-0 w-full h-full object-cover object-top
          md:inset-auto md:top-0 md:left-1/2 md:-translate-x-1/2
          md:w-full md:min-w-[2440px] md:h-auto
        "
      />

      {/* Blur overlay with soft gradient fade at the top edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%)",
        }}
      />

      {/*
        Content — max-w-[1440px] + mx-auto centres the layout on wide screens.
        No z-index here so mix-blend-overlay on the h1 blends with the image
        in the same stacking context.
      */}
      <div className="relative flex flex-col h-full w-full max-w-[1440px] mx-auto px-4 pb-6 md:px-8 md:pb-20">
        <Navbar />

        {/* Spacer pushes hero content down */}
        <div className="flex-1 md:flex-none md:h-[240px]" />

        {/* Hero block */}
        <div className="flex flex-col w-full">
          {/* Label + name */}
          <div className="w-full pb-[15px]">
            <div className="px-[18px] mb-[-15px]">
              <p className="font-mono text-[14px] text-white mix-blend-overlay uppercase leading-[1.1]">
                [ Hello i&apos;m ]
              </p>
            </div>

            <h1
              className="
                font-medium capitalize text-white mix-blend-overlay
                text-center w-full leading-[1.1] tracking-[-0.07em]
                text-[24vw] whitespace-normal
                md:text-[min(13.75vw,198px)] md:whitespace-pre
                mb-[-15px]
              "
            >
              {"Harvey   Specter"}
            </h1>
          </div>

          {/* Description + CTA */}
          <div className="flex md:justify-end w-full mt-4">
            <div className="flex flex-col gap-[17px] w-[293px]">
              <p className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.035em] uppercase leading-[1.1]">
                <span>H.Studio is a </span>
                <span className="font-normal not-italic">full-service</span>
                <span>
                  {" "}
                  creative studio creating beautiful digital experiences and
                  products. We are an{" "}
                </span>
                <span className="font-normal not-italic">award winning</span>
                <span>
                  {" "}
                  design and art group specializing in branding, web design and
                  engineering.
                </span>
              </p>
              <button className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.035em] px-4 py-3 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
