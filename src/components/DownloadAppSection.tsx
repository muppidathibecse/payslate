import Image from "next/image";
import Button from "./Button";
import { AppleStoreIcon } from "../icons/AppleStoreIcon";
import { PlayStoreIcon } from "../icons/PlayStoreIcon";
import { appDownloadOptions, DownloadAppSectionData } from "./home/data";
import ExploreApp from "./ExploreApp";

enum DownloadPlatform {
  ANDROID = "android",
  IOS = "ios",
}

const DownloadSectionCard = ({
  className,
  label,
  subheading,
  ctaLabel,
  ctaLink,
  icon,
}: {
  className?: string;
  label?: string;
  subheading?: string;
  ctaLabel?: string;
  icon?: DownloadPlatform;
  ctaLink?: string;
}) => {
  return (
    <section
      className={`flex flex-col justify-between items-start relative text-text px-6 pt-6 pb-0 rounded-[40px] flex-1 h-120 xl:h-150 min-w-62.5 overflow-hidden ${className}`}
    >
      <div aria-labelledby="download-app-section-title">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{label}</h2>
        <p className="text-base md:text-lg mb-4">{subheading}</p>
        {ctaLabel && (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download Payslate app on ${icon === DownloadPlatform.ANDROID ? "Google Play Store" : "Apple App Store"}`}
          >
            <Button
              type="button"
              label={ctaLabel}
              className="flex mt-4 self-start justify-center items-center py-3 px-5 uppercase text-sm sm:text-base font-bold"
              icon={
                icon === DownloadPlatform.ANDROID ? (
                  <PlayStoreIcon />
                ) : (
                  <AppleStoreIcon />
                )
              }
            />
          </a>
        )}
      </div>
      <div className="relative bottom-[-137] flex self-center ">
        <Image
          src={icon === "ios" ? "/Samsung Ios.png" : "/Samsung Android.png"}
          alt="App Preview"
          className="mt-4 w-full h-auto transition-transform duration-300 ease-in-out hover:-translate-y-32"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

const DownloadAppSection = () => {
  return (
    <section
      id="download"
      className="flex flex-col items-center gap-56.75 justify-center w-full p-6 md:p-12 2xl:px-0"
    >
      <div
        className="flex flex-col items-center 2xl:w-360"
        id="download-app-section"
      >
        <span className="text-sm md:text-base text-secondary font-semibold uppercase w-full">
          {DownloadAppSectionData.label}
        </span>
        <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 mt-4">
          <p className="font-bold text-text text-4xl w-full md:w-1/2">
            {DownloadAppSectionData.subheading}
          </p>
          <p className="text-base text-muted w-full md:w-1/2 mt-2 md:mt-0">
            {DownloadAppSectionData.paragraph}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-20 mt-6 md:mt-20 w-full">
          {appDownloadOptions.map((option, index) => (
            <DownloadSectionCard
              key={option.platform}
              label={option.title}
              icon={option.platform as DownloadPlatform}
              subheading={option.description}
              ctaLabel={option.ctaLabel}
              ctaLink={option.storeUrl}
              className={`border border-[#D8D8D8] ${
                index % 2 === 0 ? "bg-[#F7F8FD]" : "bg-[#FEFCF9]"
              }`}
            />
          ))}
        </div>
      </div>
      <ExploreApp />
    </section>
  );
};

export default DownloadAppSection;
