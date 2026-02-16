"use client";

import Image from "next/image";
import { useState } from "react";

import { LogosData } from "./home/data";

export default function LogoScrolling() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <section className="px-4 md:flex overflow-hidden">
        <div className="scroll-container ">
          {LogosData.concat(LogosData).map((customer, index) => (
            <Image
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              src={
                hoveredIndex === index ? customer.coloredLogo : customer.logo
              }
              alt="customerIcon"
              width={300}
              height={300}
              className={`${
                customer.customerName === "NIKE"
                  ? "md:w-32 w-15"
                  : "md:w-50 w-25"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
