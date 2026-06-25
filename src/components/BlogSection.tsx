const POSTS = [
  {
    image: "/blog-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
  {
    image: "/blog-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: true, // desktop: starts 120px lower
  },
  {
    image: "/blog-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
];

function ReadMoreLink() {
  return (
    <a
      href="#"
      className="self-start flex items-center gap-[10px] border-b border-black pb-1 group"
    >
      <span className="font-medium text-[14px] text-black tracking-[-0.04em] leading-none">
        Read more
      </span>
      {/* Arrow ↗ at 18px */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
      >
        <circle cx="16" cy="16" r="15.5" stroke="#1f1f1f" />
        <path
          d="M10.5 21.5L21.5 10.5M21.5 10.5H13.5M21.5 10.5V18.5"
          stroke="#1f1f1f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-[#f3f3f3] w-full">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between gap-6 max-w-[1440px] mx-auto px-8 py-[120px]">

        {/* Rotated title — sits in a tall narrow column */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 110, alignSelf: "stretch" }}
        >
          <p
            className="font-light text-[64px] text-black uppercase tracking-[-0.08em] leading-[0.86] whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Keep up with my latest news &amp; achievements
          </p>
        </div>

        {/* 3 cards + vertical dividers */}
        <div className="flex items-start flex-1 min-w-0">
          {POSTS.map((post, i) => (
            <div key={i} className="flex items-start flex-1 min-w-0">
              {/* Card */}
              <div
                className="flex flex-col gap-4 w-[353px] shrink-0"
                style={{ paddingTop: post.offset ? 120 : 0 }}
              >
                <div className="h-[469px] w-full relative overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                  {post.excerpt}
                </p>
                <ReadMoreLink />
              </div>

              {/* Vertical divider — between cards, not after last */}
              {i < POSTS.length - 1 && (
                <div className="flex-1 self-stretch flex items-center justify-center min-w-[16px]">
                  <div className="w-px bg-black h-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16">
        <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86] mb-8">
          Keep up with my latest news &amp; achievements
        </p>

        {/* Horizontal scroll — same viewport-edge clip trick as testimonials */}
        <div
          className="overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {POSTS.map((post, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 shrink-0 w-[300px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="h-[398px] w-full relative overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                  {post.excerpt}
                </p>
                <ReadMoreLink />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
