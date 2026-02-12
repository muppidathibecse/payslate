"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { navbarLinks } from "./home/data";



const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="flex justify-center items-center"
    >
      <div className="absolute md:top-5 -top-1 z-50 flex flex-row items-center gap-4 rounded-[60px] bg-white md:border md:border-white-6 md:px-4 py-4 max-w-204 w-full px-4 md:flex-row md:justify-center md:gap-0">
        <Link href="/" className="flex items-center gap-2 md:pr-6">
          <Image src="/Brand.gif" alt="Brand" width={30} height={30} priority />
          <span className="text-black font-medium text-5">
            Pay
            <span className="text-primary font-medium">
              s<span className="text-primary font-bold">late</span>
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-8 text-4 font-medium md:ml-6">
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                onClick={() => setActiveButton(link.label)}
                className={`hover:text-text transition-colors duration-200 ${
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
            <Link
              href="/#download"
              onClick={() => setActiveButton("Download App")}
            >
              <Button label="Download APP" />
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden ml-auto p-2"
          aria-label="Toggle menu"
        >
          <Image
            src="assets/icons/mobileViewMenuIcon.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-12 z-40 w-full px-6 py-6 space-y-5">
          {navbarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveButton(link.label);
                setIsMobileMenuOpen(false);
              }}
              className={`block text-base font-medium ${
                activeButton === link.label
                  ? "text-text font-semibold"
                  : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link href="#download" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              label="Download App"
              className="w-full flex justify-center items-center"
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;