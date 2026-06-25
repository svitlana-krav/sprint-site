const SERVICES = [
  {
    number: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-brand.jpg",
  },
  {
    number: "[ 2 ]",
    title: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-web.jpg",
  },
  {
    number: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-marketing.jpg",
  },
  {
    number: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-photography.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-20">

        {/* Label */}
        <p className="font-mono text-[14px] text-white uppercase leading-[1.1] mb-12 md:mb-12">
          [ services ]
        </p>

        {/* Count + title row */}
        <div className="flex items-baseline justify-between mb-12 md:mb-12">
          <span className="font-light text-[32px] md:text-[min(6.67vw,96px)] text-white uppercase tracking-[-0.08em] leading-[1]">
            [4]
          </span>
          <span className="font-light text-[32px] md:text-[min(6.67vw,96px)] text-white uppercase tracking-[-0.08em] leading-[1]">
            Deliverables
          </span>
        </div>

        {/* Service items */}
        <div className="flex flex-col gap-12">
          {SERVICES.map((service) => (
            <div key={service.number} className="flex flex-col gap-[9px]">
              {/* Number + divider */}
              <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
                {service.number}
              </p>
              <div className="border-t border-white w-full" />

              {/* Content row (desktop) / stack (mobile) */}
              <div className="flex flex-col gap-4 pt-1 md:flex-row md:items-start md:justify-between">
                {/* Title */}
                <p className="font-bold italic text-[36px] text-white uppercase tracking-[-0.04em] leading-[1.1] md:shrink-0">
                  {service.title}
                </p>

                {/* Description + image */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  <p className="font-normal text-[14px] text-white leading-[1.3] tracking-[-0.04em] md:w-[393px]">
                    {service.description}
                  </p>
                  <div className="w-[151px] h-[151px] overflow-hidden relative shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
