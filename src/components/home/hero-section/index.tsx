"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { avatarDetails, featureDetails } from "../data";
import HeroContent from "./HeroContent";
import HeroSmallScreen from "./HeroSmallScreen";

const HeroSection = () => {
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const [isMoveAnimation, setIsMoveAnimation] = useState(false);
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const element = featuresContainerRef.current;
      if (!element) return;
      let lastScrollY = window.scrollY;
      const observer = new IntersectionObserver(
        ([entry]) => {
          const ratio = entry.intersectionRatio;
          const scrollY = window.scrollY;
          if (ratio >= 0.5 && scrollY > lastScrollY) {
            setIsMoveAnimation(true);
          }
          if (ratio < 0.5 && scrollY < lastScrollY) {
            setIsMoveAnimation(false);
          }
          lastScrollY = scrollY;
        },
        {
          threshold: [0.5],
        },
      );
      observer.observe(element);
      return () => observer.disconnect();
    }
  }, [isLargeScreen]);

  useEffect(() => {
    if (isMoveAnimation) {
      const heroImage = heroImageRef.current;
      const featureImage = document.querySelector(
        ".feature-image",
      ) as HTMLDivElement;
      if (heroImage && featureImage) {
        const heroRect = heroImage.getBoundingClientRect();
        const featureRect = featureImage.getBoundingClientRect();

        const deltaX = heroRect.left - featureRect.left;
        const deltaY = heroRect.top - featureRect.top;
        setMove({ x: deltaX, y: deltaY });
      }
    }
  }, [isMoveAnimation]);

  return (
    <React.Fragment>
      <section  className="hidden lg:flex flex-col">
        <section
          className="w-full relative bg-cover flex items-center justify-center pt-25"
          style={{ backgroundImage: "url('/assets/imageBg.png')" }}
        >
          <div className="w-full h-full py-16 flex flex-col lg:flex-row px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-10 xl:gap-20">
            <HeroContent />
            <div className="w-full xl:w-1/2 hidden md:flex items-center justify-center gap-3.5 relative">
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: isMoveAnimation ? 20 : 0,
                  y: isMoveAnimation ? 20 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute top-5 left-4 sm:left-[5%] lg:left-auto lg:right-75 max-w-sm p-4 flex gap-2 bg-white rounded-lg"
              >
                <div className="flex">
                  {avatarDetails.map((avatar) => (
                    <Image
                      key={avatar.id}
                      src={avatar.url}
                      alt={`Avatar ${avatar.id}`}
                      width={40}
                      height={40}
                      className="-ml-2 first:ml-0 rounded-full lg:h-10 lg:w-10"
                    />
                  ))}
                </div>

                <div className="flex flex-col">
                  <p className="text-text font-semibold leading-[120%]">
                    120K+
                  </p>
                  <p className="text-muted leading-[150%]">
                    Businesses Trust Payslate
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center items-end lg:flex-1">
                <div
                  className="w-full max-w-75 bg-white h-fit p-5 rounded-lg mt-25
                        shadow-[-20.4px_20.4px_30.61px_0px_rgba(46,104,253,0.08),0px_-16.32px_20.4px_0px_rgba(46,104,253,0.04)]"
                >
                  <p className="text-text font-semibold">Book Created</p>
                  <p className="text-primary font-bold">+1,35,890.00</p>
                  <div className="flex justify-between">
                    <p className="text-muted text-[14px]">1th Jan, 2025</p>
                    <p className="text-[#37C390] text-[14px]">
                      Synced in Real-Time ✅
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                className="w-fit"
                animate={{
                  x: isMoveAnimation ? -move.x : 0,
                  y: isMoveAnimation ? -move.y : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                ref={heroImageRef}
              >
                <Image
                  src={"/assets/hero-section/Mobile.png"}
                  alt="Mobile Image"
                  width={280}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section
          className="w-full relative flex items-center justify-center py-10"
          ref={featuresContainerRef}
        >
          <div className="w-full h-full flex flex-col px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-10 xl:gap-20">
            <div className="flex flex-col gap-1">
              {isLargeScreen ? (
                <motion.h1
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: isMoveAnimation ? 0 : -40,
                    opacity: isMoveAnimation ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="text-[#932EFA] font-semibold leading-[150%]"
                >
                  Features
                </motion.h1>
              ) : (
                <h1 className="text-[#932EFA] font-semibold leading-[150%]">
                  Features
                </h1>
              )}
              <div className="w-full flex gap-10 justify-between">
                <motion.div
                  className="flex flex-col text-left w-[40%]"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: isMoveAnimation ? 0 : -40,
                    opacity: isMoveAnimation ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  <h2 className="font-bold text-[40px] text-text leading-[120%]">
                    Your Data, Secured. Your Finances, Simplified.
                  </h2>
                </motion.div>

                <motion.div
                  className="max-w-[30%]"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: isMoveAnimation ? 0 : -40,
                    opacity: isMoveAnimation ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  <p className="text-muted text-[18px] leading-[150%]">
                    Payslate ensures your financial records are accurate,
                    auditable, and always protected with enterprise-grade
                    security and real-time synchronization.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-[30%] flex flex-col justify-between">
                {featureDetails.slice(0, 2).map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="p-10 rounded-[40px] flex flex-col gap-3"
                    style={{ backgroundColor: feature.bg }}
                    initial={{ x: -move.x, opacity: 0 }}
                    animate={{
                      x: isMoveAnimation ? 0 : -move.x,
                      opacity: isMoveAnimation ? 1 : 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="p-2 bg-primary w-16 h-16 flex items-center justify-center rounded-[20px]">
                        {feature.icon}
                      </div>
                      <h3 className="text-text text-[18px] leading-6.25 font-bold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-[#0D0D0D] leading-6">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="w-[40%] relative flex items-center min-h-140 justify-center ">
                <Image
                  src="/assets/hero-section/Mobile.png"
                  alt="Mobile Image"
                  width={280}
                  height={500}
                  className="feature-image invisible pointer-events-none"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-between">
                {featureDetails.slice(2, 4).map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="p-10 rounded-[40px] flex flex-col gap-3"
                    style={{ backgroundColor: feature.bg }}
                    initial={{ x: move.x, opacity: 0 }}
                    animate={{
                      x: isMoveAnimation ? 0 : move.x,
                      opacity: isMoveAnimation ? 1 : 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="p-2 bg-primary w-16 h-16 flex items-center justify-center rounded-[20px]">
                        {feature.icon}
                      </div>
                      <h3 className="text-text text-[18px] leading-6.25 font-bold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-[#0D0D0D] leading-6">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="lg:hidden">
        <HeroSmallScreen />
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
