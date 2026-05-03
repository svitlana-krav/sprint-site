function Corner({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M0.5 15.5V0.5H15.5" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

const TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

export default function AboutSection() {
  return (
    <section className="bg-[#fafafa] w-full">
      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between gap-8 py-[80px] px-[32px] max-w-[1440px] mx-auto">
        <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f] shrink-0">
          [ About ]
        </p>

        <div className="flex gap-[32px] items-end flex-1 min-w-0">
          {/* Text block with corner-bracket frame */}
          <div className="flex ml-auto gap-[12px] max-w-[465px] min-w-0 flex-1">
            <div className="flex flex-col justify-between self-stretch shrink-0">
              <Corner />
              <Corner className="-rotate-90" />
            </div>
            <p className="flex-1 font-normal text-[14px] leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] py-[12px]">
              {TEXT}
            </p>
            <div className="flex flex-col justify-between self-stretch shrink-0">
              <Corner className="rotate-90" />
              <Corner className="rotate-180" />
            </div>
          </div>

          {/* 002 + portrait photo */}
          <div className="flex gap-[24px] items-start shrink-0">
            <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">002</p>
            <div className="w-[436px] h-[614px] overflow-hidden relative shrink-0">
              <img
                src="/about-portrait.jpg"
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[20px] py-[48px] px-[16px]">
        <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">002</p>
        <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ About ]</p>

        {/* Text block with corner-bracket frame */}
        <div className="flex gap-[12px] w-full">
          <div className="flex flex-col justify-between self-stretch shrink-0">
            <Corner />
            <Corner className="-rotate-90" />
          </div>
          <p className="flex-1 font-normal text-[14px] leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] py-[12px]">
            {TEXT}
          </p>
          <div className="flex flex-col justify-between self-stretch shrink-0">
            <Corner className="rotate-90" />
            <Corner className="rotate-180" />
          </div>
        </div>

        {/* Portrait photo */}
        <div className="aspect-[422/594] w-full overflow-hidden relative">
          <img
            src="/about-portrait.jpg"
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
