"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

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

      {/* ── Desktop ──
          pl-8 only (no right padding) so the Swiper extends to the section
          edge. Section overflow-x-hidden clips at the viewport boundary,
          letting the partial 3rd card peek out naturally. */}
      <div className="hidden md:flex items-start max-w-[1440px] mx-auto pl-8 py-[120px]">

        {/* Rotated title — height 712 wraps text into 2 vertical columns */}
        <div className="shrink-0 self-stretch flex items-center mr-6" style={{ width: 200 }}>
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

        {/*
          overflow-visible lets slides extend past the Swiper container edge.
          spaceBetween=56 leaves room for the 1px #ccc divider centered in the gap
          (absolute-positioned at left:-29px on each non-first slide).
        */}
        <div className="flex-1 min-w-0">
          <Swiper
            modules={[FreeMode]}
            freeMode={{ enabled: true, momentum: true }}
            slidesPerView={2.5}
            spaceBetween={56}
            grabCursor
            style={{ overflow: "visible" } as React.CSSProperties}
          >
            {POSTS.map((post, i) => (
              <SwiperSlide
                key={i}
                style={{ paddingTop: post.offsetTop, position: "relative" }}
              >
                {/* Divider in the gap between slides */}
                {i > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: -29,
                      width: 1,
                      background: "#ccc",
                    }}
                  />
                )}

                <a href={post.href} className="flex flex-col gap-4 block">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16">
        <p className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86] mb-8">
          Keep up with my latest news &amp; achievements
        </p>

        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          slidesPerView={1.15}
          spaceBetween={16}
          grabCursor
        >
          {POSTS.map((post, i) => (
            <SwiperSlide key={i}>
              <a href={post.href} className="flex flex-col gap-4 block">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
