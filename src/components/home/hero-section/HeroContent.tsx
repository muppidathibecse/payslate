import AppleLogo from "@/src/icons/AppleLogo";
import PlayStoreLogo from "@/src/icons/PlayStoreLogo";
import { label } from "framer-motion/client";
import Link from "next/link";

const DownloadOptionData = [
  {
    label: "Download on the",
    name: "App Store",
    link: "https://apps.apple.com/in/app/payslate/id6737227735",
  },
  {
    label: "GET IT ON",
    name: "Google Play",
    link: "https://play.google.com/store/apps/details?id=com.dotmite.payslate",
  },
];

const HeroContent = () => {
  return (
    <section 
      id="feat" className="scroll-mt-70 lg:w-1/2 flex flex-col md:gap-10 gap-4">
      <div className="flex flex-col text-left">
        <h1 className="text-secondary font-semibold leading-[150%]">
          PAYSLATE
        </h1>
        <h2 className="font-bold md:text-6xl text-[32px]  text-[#01081B]">
          Your Business Financial Chalkboard
        </h2>
      </div>

      <p className="text-[#4D525F] text-[16px] md:text-[18px] leading-[150%]">
        Payslate brings your cash flow, material tracking, vendor management,
        and transactions into one secure, real-time platform built for
        industrial businesses.
      </p>

      <div className="flex flex-row gap-4 sm:gap-6 lg:flex-col xl:flex-row">
        <Link
          href="https://apps.apple.com/in/app/payslate/id6737227735"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black flex items-center px-3 py-2 border border-[#001F36] rounded-lg gap-2.5 w-full md:w-53"
        >
          <AppleLogo />
          <div className="flex flex-col items-start font-medium gap-0.5">
            <p className="text-[13px] sm:text-[19px]">Download on the</p>
            <p className="text-[16px] sm:text-[20px]">App Store</p>
          </div>
        </Link>

        <Link
          href="https://play.google.com/store/apps/details?id=com.dotmite.payslate"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black flex items-center px-3 py-2 border border-[#001F36] rounded-lg gap-2.5 md:w-53 w-full"
        >
          <PlayStoreLogo />
          <div className="flex flex-col items-star font-medium gap-0.5">
            <p className="text-[13px] sm:text-[19px]">GET IT ON</p>
            <p className="text-[16px] sm:text-[20px]">Google Play</p>
          </div>
        </Link>
      </div>
      {/* <div className="flex flex-row gap-4 sm:gap-6 lg:flex-col xl:flex-row">
        <Link
          href="https://apps.apple.com/in/app/payslate/id6737227735"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black flex items-center px-3 py-2 border border-[#001F36] rounded-lg gap-2.5 w-full md:w-53"
        >
          <AppleLogo />
          <div className="flex flex-col items-start font-medium gap-0.5">
            <p className="text-[13px] sm:text-[19px]">Download on the</p>
            <p className="text-[16px] sm:text-[20px]">App Store</p>
          </div>
        </Link>
      </div> */}
    </section>
  );
};

export default HeroContent;
