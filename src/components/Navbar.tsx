"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import Button from "./Button";
import { navbarLinks } from "./home/data";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
  ) => {
    setActiveButton(label);
    
    // Check if it's a hash link pointing to the current page
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback for missing elements or scroll to top for /#
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      // If we are not on the homepage (e.g. /privacy-policy), let normal navigation happen
      // However, for file:// protocols, normal navigation to /#something will break.
      // A better approach for purely static file:// usage is to go to index.html#something,
      // but modifying window.location is safer.
      if (window.location.protocol === "file:") {
        e.preventDefault();
        // Extract the directory up to 'out' and append index.html
        const currentPath = window.location.pathname;
        const outIndex = currentPath.lastIndexOf("/out/");
        if (outIndex !== -1) {
          const basePath = currentPath.substring(0, outIndex + 5);
          window.location.assign(`file://${basePath}index.html${href.replace("/", "")}`);
        }
      }
    } else if (window.location.protocol === "file:") {
      // Intercept normal links (e.g. /privacy-policy) for file:// protocol
      e.preventDefault();
      const currentPath = window.location.pathname;
      const outIndex = currentPath.lastIndexOf("/out/");
      if (outIndex !== -1) {
        const basePath = currentPath.substring(0, outIndex + 4); // Include '/out'
        // Example: href = '/privacy-policy' -> loads file://.../out/privacy-policy/index.html
        window.location.assign(`file://${basePath}${href}/index.html`);
      }
    }

  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow/backdrop when scrolled past the top
      setHasScrolled(currentScrollY > 10);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`md:top-5 mt-0 md:mt-5 flex flex-row items-center gap-4 rounded-none md:rounded-[60px] bg-white md:border md:border-white-6 md:px-4 py-3 max-w-170 w-full px-4 md:flex-row md:justify-center md:gap-0 transition-shadow duration-300 ${
          hasScrolled ? "shadow-lg" : ""
        }`}
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

        <ul className="hidden md:flex items-center justify-center gap-8 text-4 font-medium md:ml-6">
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                onClick={(e) => handleScrollClick(e, link.href, link.label)}
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
              onClick={(e) => handleScrollClick(e, "/#download", "Download App")}
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
            src="/assets/icons/mobileViewMenuIcon.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white fixed top-14 left-0 right-0 z-40 w-full px-6 py-6 space-y-5 shadow-lg">
          {navbarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleScrollClick(e, link.href, link.label);
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

          <Link href="/#download" onClick={(e) => {
            handleScrollClick(e, "/#download", "Download App");
            setIsMobileMenuOpen(false);
          }}>
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
