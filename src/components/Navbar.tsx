"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonial" },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  return (
    <nav
      aria-label="Main navigation"
      className="flex justify-center items-center"
    >
      <div
        className="
        absolute top-5 z-50 justify-center flex flex-col items-center gap-4
        rounded-[60px] bg-white border border-[#E5E5E5] px-4 py-3 max-w-204 
        md:flex-row md:justify-center md:gap-0 md:px-6
      "
      >
        <Link href="/" className="flex items-center gap-2 md:pr-6">
          <Image src="/Brand.gif" alt="Brand" width={30} height={30} priority />
          <span className="text-black font-medium text-5">
            Pay
            <span className="text-primary font-medium">
              s<span className="text-primary font-bold">late</span>
            </span>
          </span>
        </Link>

        <ul
          className="
          flex flex-wrap items-center justify-center gap-4 text-4 font-medium
          md:ml-6 md:flex-nowrap md:gap-8
        "
        >
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                onClick={() => setActiveButton(link.label)}
                className={`hover:text-text transition-colors duration-200  ${
                  activeButton === link.label
                    ? "text-text font-semibold"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={"#download"}
              onClick={() => setActiveButton("Download App")}
            >
              <Button label="Download APP" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
