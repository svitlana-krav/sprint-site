"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const POSTS = [
  {
    image: "/blog-1.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desktopOffsetClass: "",
  },
  {
    image: "/blog-2.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desktopOffsetClass: "md:pt-[120px]",
  },
  {
    image: "/blog-3.jpg",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desktopOffsetClass: "",
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

      {/* Mobile title — hidden on desktop */}
      <div className="md:hidden max-w-[1440px] mx-auto px-4 pt-16 pb-8">
        <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
          Keep up with my latest news &amp; achievements
        </p>
      </div>

      {/*
        max-w-[1440px] mx-auto keeps the title within the design grid.
        pl-8 only (no right padding) so the overflow trick reaches the section edge.

        Overflow trick:
          flex-1 resolves to width W (section content width minus title)
          outer = calc(W − 50vw)
          inner = calc(W − 50vw + 50vw) = W, overflow:hidden
          → inner right edge = section left offset + W = viewport right edge (on ≤1440px)
          → Swiper overflow:visible renders slides past Swiper bounds; inner clips them
      */}
      <div className="flex items-start max-w-[1440px] mx-auto pl-4 md:pl-8 pb-16 md:py-[120px]">

        {/* Desktop title — vertical rotated, hidden on mobile */}
        <div
          className="hidden md:flex shrink-0 self-stretch items-center mr-6"
          style={{ width: 200 }}
        >
          <p
            className="font-light text-[64px] text-black uppercase tracking-[-0.08em] leading-[0.86]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              height: 712,
            }}
          >
            Keep up with my latest news &amp; achievements
          </p>
        </div>

        {/* Slider wrapper — flex-1 provides the W reference */}
        <div className="flex-1 min-w-0">
          {/* outer: W − 50vw */}
          <div style={{ width: "calc(100% - 50vw)" }}>
            {/* inner: W, overflow:hidden clips at viewport right edge */}
            <div style={{ width: "calc(100% + 50vw)", overflow: "hidden" }}>
              <Swiper
                grabCursor
                slidesPerView={1.15}
                spaceBetween={16}
                breakpoints={{
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 56,
                  },
                }}
                style={{ overflow: "visible" } as React.CSSProperties}
              >
                {POSTS.map((post, i) => (
                  <SwiperSlide key={i} style={{ position: "relative" }}>

                    {/* Divider — desktop only, centered in the 56px spaceBetween gap */}
                    {i > 0 && (
                      <div
                        className="hidden md:block absolute top-0 bottom-0 bg-[#ccc]"
                        style={{ width: 1, left: -29 }}
                      />
                    )}

                    {/*
                      offsetTop only on desktop via md: prefix.
                      On mobile all slides are at the same vertical level.
                    */}
                    <div className={post.desktopOffsetClass}>
                      <a href={post.href} className="flex flex-col gap-4">
                        <div
                          className="w-full relative overflow-hidden"
                          style={{ height: 469 }}
                        >
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
                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
