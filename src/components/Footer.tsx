import Image from "next/image";

import { navLinks1, navLinks2, SocialMediaData } from "./home/data";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-primary mt-20 text-white flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative 2xl:w-360 z-0  p-4 md:p-24 2xl:px-0">
        <div className="absolute -top-8 -right-20 z-10 max-[837px]:hidden">
          <Image
            src="/assets/footerBg.gif"
            alt="Footer background"
            width={1100}
            height={100}
            priority
            className="object-contain"
          />
        </div>
        <div className="w-full flex justify-between items-center mb-10">
          <div className="md:text-4xl rekative z-50 text-2xl font-medium flex flex-row items-center">
            <span className="px-2">
              <Image
                src="/Brand.gif"
                alt="Payslate Logo"
                className="w-5 h-7 md:w-7.5 md:h-8"
                width={30}
                height={30}
                priority
              />
            </span>
            <span> Pay</span>
            <span className="text-primary">slate</span>
          </div>
          {/* <div className="flex flex-row gap-3 relative z-50">
            {SocialMediaData.map((item, index) => (
              <div
                key={index}
                className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-text-2 flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-4 h-4 md:w-[20px] md:h-[20px]"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-full relative z-10 flex flex-col lg:flex-row gap-[15vw]">
          <div className="flex-1 sm:w-full lg:w-1/3">
            <div className="lg:w-4/5 sm:w-full">
              <h2 className="text-[24px] font-bold uppercase tracking-wide mb-3">
                Menu
              </h2>
              <div className="border-b border-white-700 w-[30%] mb-10"></div>
              <nav className="w-full flex gap-20">
                <ul className="space-y-4">
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
                <ul className="space-y-4">
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
            <p className="mt-10 text-[18px] font-normal text-[#b4b2b2] flex items-start gap-1">
              <span className="text-sm mt-0.75">&copy;</span>
              <span>
                2026 Dotmite Technologies Private Limited. All Rights Reserved
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
