import React from "react";

const POSTS = [
  {
    image: "/blog-1.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offsetTop: 0,
  },
  {
    image: "/blog-2.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offsetTop: 120,
  },
  {
    image: "/blog-3.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offsetTop: 0,
  },
];

function ReadMoreLink({ href }: { href: string }) {
  return (
    <a href={href} className="self-start flex items-center gap-[10px] border-b border-black pb-1">
      <span className="font-medium text-[14px] text-black tracking-[-0.04em] leading-none">
        Read more
      </span>
      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="shrink-0">
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
    <section className="bg-[#f3f3f3] w-full overflow-x-hidden">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-start gap-6 max-w-[1440px] mx-auto px-8 py-[120px]">

        {/* Rotated title — height 700 forces text to wrap into 2 columns */}
        <div className="shrink-0 self-stretch flex items-center" style={{ width: 200 }}>
          <p
            className="font-light text-[64px] text-black uppercase tracking-[-0.08em] leading-[0.86]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              height: 700,
            }}
          >
            Keep up with my latest news &amp; achievements
          </p>
        </div>

        {/*
          Posts slider: overflow-x-auto, cards at ~39vw - 120px each.
          On 1440px: card ≈ 442px → 2.5 cards visible in ~1200px container.
        */}
        <div
          className="flex-1 min-w-0 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex items-start" style={{ width: "max-content" }}>
            {POSTS.flatMap((post, i) => {
              const card = (
                <a
                  key={`card-${i}`}
                  href={post.href}
                  className="flex flex-col gap-4 group shrink-0"
                  style={{
                    width: "calc(39vw - 120px)",
                    minWidth: 280,
                    maxWidth: 450,
                    marginTop: post.offsetTop,
                  }}
                >
                  <div className="w-full relative overflow-hidden" style={{ height: 469 }}>
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                    {post.excerpt}
                  </p>
                  <ReadMoreLink href={post.href} />
                </a>
              );

              if (i === 0) return [card];

              const divider = (
                <div
                  key={`div-${i}`}
                  className="self-stretch shrink-0"
                  style={{ width: 1, background: "#ccc", margin: "0 28px" }}
                />
              );
              return [divider, card];
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16">
        <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86] mb-8">
          Keep up with my latest news &amp; achievements
        </p>

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
              <a
                key={i}
                href={post.href}
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
                <ReadMoreLink href={post.href} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
