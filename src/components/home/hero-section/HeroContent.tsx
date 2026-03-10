import Link from "next/link";

import { DownloadOptionData } from "../data";

const HeroContent = () => {
  return (
    <section
      id="feat"
      className="scroll-mt-70 lg:w-1/2 flex flex-col md:gap-10 gap-4"
    >
      <div className="flex flex-col text-left">
        <h1 className="text-secondary font-semibold leading-[150%]">
          PAYSLATE
        </h1>
        <h2 className="chalkboard-heading font-bold md:text-6xl text-[32px] text-text">
          Your Business Financial Chalkboard
        </h2>
      </div>

      <p className="text-muted text-[16px] md:text-[18px] leading-[150%]">
        Payslate brings your cash flow, material tracking, vendor management,
        and transactions into one secure, real-time platform built for
        industrial businesses.
      </p>
      <div className="flex flex-row gap-4 sm:gap-6 lg:flex-col xl:flex-row w-fit">
        {DownloadOptionData.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black flex items-center px-3 py-2 border border-[#001F36] rounded-lg gap-2.5"
          >
            {item.icon}
            <div className="flex flex-col items-start font-medium text-white">
              <p className="m-0 text-[13px] sm:text-[13px] leading-none">
                {item.label}
              </p>
              <p className="m-0 text-[16px] sm:text-[23px] leading-none">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroContent;
