import Image from "next/image";
import Button from "./Button";
import CameraIcon from "../icons/CameraIcon";
import DownloadIcon from "../icons/DownloadIcon";
import FileDataIcon from "../icons/FileDataIcon";
import { KEY_FEATUURES_CARD_STYLE } from "./home/data";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create Your Business Profile",
    description:
      "Set up your business in Payslate and add business details in minutes.",
    icon: <DownloadIcon />,
  },
  {
    number: "02",
    title: "Add Books and Types",
    description:
      "Organize finances with dedicated books for cash flow, stock/materials, and accounts.",
    icon: <FileDataIcon />,
  },
  {
    number: "03",
    title: "Track, Collaborate & Analyze",
    description:
      "Track transactions, share access, and get real-time insights.",
    icon: <CameraIcon />,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#F6F6F6] flex items-center justify-center p-6 md:p-12 2xl:px-0"
    >
      <div className="mx-auto w-full 2xl:w-360">
        <header className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm md:text-base text-secondary font-semibold uppercase w-full">
              How it works
            </span>
            <p className="mt-1 font-bold text-text text-4xl w-full md:w-137">
              Make payments, transfers, and more in 3 simple steps
            </p>
          </div>
          <div>
            <Link href="#download">
              <Button label="Get Started Now" />
            </Link>
          </div>
        </header>

        <div className="rounded-3xl bg-white px-8 py-12 shadow-sm ring-1 ring-gray-100 sm:px-12 sm:py-16 ">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-start md:px-15 ${KEY_FEATUURES_CARD_STYLE}`}
              >
                <div className="relative">
                  <span className="absolute -top-4 -left-1 select-none text-7xl font-bold leading-none text-gray-100">
                    {step.number}
                  </span>
                  <div className="relative z-10 ml-1 mt-7 text-text">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-bold text-text">
                  {step.title}
                </h3>
                <p className="max-w-xs font-semibold text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full overflow-hidden rounded-3xl bg-[#EBEBEB]">
          <div className="aspect-video w-full bg-linear-to-br from-purple-50 to-blue-50 relative flex items-center justify-center">
            <video
              src="/How It Works.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
