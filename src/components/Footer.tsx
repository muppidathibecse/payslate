import Image from "next/image";
import Facebook from "../icons/Facebook";
import Insta from "../icons/Insta";
import LinkedIn from "../icons/LinkedIn";
import Button from "./Button";
import { buttons, navLinks1, navLinks2 } from "./home/data";

export default function Footer() {
  return (
    <footer className="bg-footer-primary text-white p-6 md:p-12 flex flex-col justify-center items-center">
      <div className=" w-full 2xl:w-360">
        <div className="w-full flex justify-between mb-10">
          <div className="text-4xl font-medium flex flex-row">
            <span className="px-2">
              <Image
                src="/Brand.gif"
                alt="Payslate Logo"
                width={30}
                height={30}
                priority
              />
            </span>
            <span> Pay</span>
            <span className="text-primary">slate</span>
          </div>
          <div className="flex flex-row">
            <span>
              <Insta />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <LinkedIn />
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-[15vw]">
          <div className="flex-1 sm:w-full lg:w-1/3">
            <div className="lg:w-4/5 sm:w-full">
              <h2 className="text-base font-bold mb-6 uppercase tracking-wide border-b border-white-700">
                Menu
              </h2>
              <nav className="w-full flex gap-x-12">
                <ul className="space-y-4 flex-1">
                  {navLinks1.map((link) => (
                    <li key={link.href} className="whitespace-nowrap">
                      <a
                        href={link.href}
                        className="text-sm hover:text-gray-300 transition-colors uppercase"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 flex-1">
                  {navLinks2.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-gray-300 transition-colors uppercase"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col bg-footer-secondary p-8 rounded-3xl flex-1 sm:w-full w-[clamp(320px,33vw,420px)] md:w-full ">
            <h2 className="text-base font-semibold mb-4 uppercase tracking-wide">
              Download Our Application
            </h2>
            <p className="text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="flex lg:flex-nowrap gap-4">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download Payslate app on ${btn.label === "Play Store" ? "Google Play Store" : "Apple App Store"}`}
                >
                  <Button
                    label={btn.label}
                    className="uppercase font-medium text-sm"
                    icon={btn.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <p className="text-center text-white-400 text-normal">Payslate @2025</p>
      </div>
    </footer>
  );
}
