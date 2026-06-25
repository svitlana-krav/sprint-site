function Corner({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M0.5 15.5V0.5H15.5" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15.5" stroke="#1f1f1f" />
      <path d="M10.5 21.5L21.5 10.5M21.5 10.5H13.5M21.5 10.5V18.5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PROJECTS = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    image: "/works-surfers.jpg",
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    image: "/works-cyberpunk.jpg",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    image: "/works-agency.jpg",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    image: "/works-minimal.jpg",
  },
];

function ProjectCard({
  project,
  imageClassName,
}: {
  project: (typeof PROJECTS)[number];
  imageClassName?: string;
}) {
  return (
    <a href="#" className="flex flex-col gap-[10px] group">
      {/* Image */}
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tags — bottom-left */}
        <div className="absolute bottom-4 left-4 flex gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 text-[#111] text-[14px] font-medium tracking-[-0.04em] px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title + arrow */}
      <div className="flex items-center justify-between">
        <p className="font-black text-[24px] md:text-[36px] text-black uppercase tracking-[-0.04em] leading-[1.1] group-hover:underline underline-offset-2">
          {project.title}
        </p>
        <ArrowIcon />
      </div>
    </a>
  );
}

function CtaBox() {
  return (
    <div className="flex gap-3 items-center">
      {/* Left brackets */}
      <div className="flex flex-col justify-between self-stretch shrink-0">
        <Corner />
        <Corner className="-rotate-90" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[10px] py-3 flex-1">
        <p className="italic text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
          Let&apos;s talk
        </button>
      </div>

      {/* Right brackets */}
      <div className="flex flex-col justify-between self-stretch shrink-0">
        <Corner className="rotate-90" />
        <Corner className="rotate-180" />
      </div>
    </div>
  );
}

export default function WorksSection() {
  return (
    <section className="bg-[#fafafa] w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 py-12 md:px-8 md:py-20">

        {/* Header — mobile */}
        <div className="flex flex-col gap-3 mb-12 md:hidden">
          <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
            [ portfolio ]
          </span>
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
                Selected
              </p>
              <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
                Work
              </p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
              004
            </span>
          </div>
        </div>

        {/* Header — desktop */}
        <div className="hidden md:flex items-start justify-between mb-16">
          <div className="flex items-start gap-[10px]">
            <div className="flex flex-col">
              <p className="font-light text-[min(6.67vw,96px)] text-black uppercase tracking-[-0.08em] leading-[0.86]">
                Selected
              </p>
              <p className="font-light text-[min(6.67vw,96px)] text-black uppercase tracking-[-0.08em] leading-[0.86]">
                Work
              </p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
              004
            </span>
          </div>
          <div className="flex items-center justify-center w-[15px] h-[110px]">
            <p className="font-mono text-[14px] text-[#1f1f1f] uppercase whitespace-nowrap -rotate-90">
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} imageClassName="h-[390px]" />
          ))}
          <CtaBox />
        </div>

        {/* Desktop: 2-column staggered grid */}
        <div className="hidden md:flex gap-6 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <ProjectCard project={PROJECTS[0]} imageClassName="h-[744px]" />
            <ProjectCard project={PROJECTS[1]} imageClassName="h-[699px]" />
            <CtaBox />
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-[117px] flex-1 min-w-0 mt-[240px]">
            <ProjectCard project={PROJECTS[2]} imageClassName="h-[699px]" />
            <ProjectCard project={PROJECTS[3]} imageClassName="h-[744px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
