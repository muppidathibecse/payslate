"use client";
import { useState } from "react";
import { CardMovingIconColored } from "../icons/CardMovingIconColored";
import { CardMovingIcon } from "../icons/PreviousCardIcon";
import { RatingsStarIcon } from "../icons/RatingsStarIcon";
import { Logos, TestimonialData, TESTIMONIALS } from "./home/data";
import LogoScrolling from "./LogoScrolling";

function TestimonialCard({
  rating,
  text,
  name,
  role,
  avatar,
}: {
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <article className="w-full md:w-104.75 shrink-0 rounded-xl bg-white px-6 py-8 h-75 flex flex-col">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="space-y-4">
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>
                <RatingsStarIcon />
              </span>
            ))}
          </div>
          <p className="text-base font-normal text-muted">{text}</p>
        </div>
        <footer className="flex items-center gap-3">
          <div>
            <p className="text-[18px] font-semibold text-text">{name}</p>
            <p className="text-base font-normal text-muted">{role}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 419;
  const GAP = 24;
  const STEP = 1;
  const maxIndex = TESTIMONIALS.length - 1;

  const prev = () => {
    setIndex((i) => Math.max(i - STEP, 0));
  };

  const next = () => {
    setIndex((i) => Math.min(i + STEP, maxIndex));
  };

  return (
    <section
      id="testimonial"
      className="overflow-hidden bg-[#F6F6F6] p-6 md:p-12 w-full"
    >
      <div className="mx-auto 2xl:w-360">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <header className="max-w-120 shrink-0 space-y-3">
            <span className="text-sm md:text-base text-secondary font-semibold uppercase w-full">
              {TestimonialData.label}
            </span>
            <p className="mt-4 font-bold text-text text-4xl w-full">
              {TestimonialData.title}
            </p>
            <p className="text-base text-muted w-full md:w-1/2">
              {TestimonialData.paragraph}
            </p>

            <div className="mt-6 hidden md:flex gap-3">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`flex h-14 w-14 items-center justify-center rounded-full border transition border-feature-muted ${index === 0 ? "cursor-not-allowed opacity-40" : "bg-primary cursor-pointer"}`}
              >
                {index == 0 ? (
                  <CardMovingIcon />
                ) : (
                  <div className="rotate-180">
                    <CardMovingIconColored />
                  </div>
                )}
              </button>

              <button
                onClick={next}
                disabled={index == maxIndex}
                className={`flex h-14 w-14 items-center justify-center rounded-full transition 
                ${index == maxIndex ? "border border-feature-muted cursor-not-allowed opacity-40" : "bg-primary cursor-pointer"}`}
              >
                {index != maxIndex ? (
                  <CardMovingIconColored />
                ) : (
                  <div className="rotate-180">
                    <CardMovingIcon />
                  </div>
                )}
              </button>
            </div>
          </header>
          <div className="overflow-hidden w-full md:max-w-215">
            <ul
              className="flex flex-col md:flex-row gap-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
              }}
            >
              {TESTIMONIALS.map((item) => (
                <li key={item.id}>
                  <TestimonialCard {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-13 mt-20">
          <p className="font-medium text-[14px] md:text-2xl text-center text-feature-text">
            Trusted by teams turning ideas into impact with iwurk
          </p>
          <LogoScrolling />
        </div>
      </div>
    </section>
  );
}
