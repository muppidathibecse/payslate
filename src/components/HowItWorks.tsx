import Image from "next/image";
import Button from "./Button";
import CameraIcon from "../icons/CameraIcon";
import DownloadIcon from "../icons/DownloadIcon";
import FileDataIcon from "../icons/FileDataIcon";

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
      className="bg-[#FAFAFA] py-24 2xl:px-20 flex items-center justify-center"
    >
      <div className="mx-auto w-full 2xl:w-[1440px] px-4 sm:px-6 lg:px-8">
        <header className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-primary">
              How it works
            </span>
            <h2 className="font-bold text-text sm:text-5xl lg:text-4xl">
              Manage your company finances in 3 simple steps
            </h2>
          </div>
          <div>
            <Button label="Get Started Now" />
          </div>
        </header>

        <div className="rounded-[20px] bg-white px-8 py-12 shadow-sm ring-1 ring-gray-100 sm:px-12 sm:py-16 max-h-[296px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start px-4 first:pl-0 last:pr-0 md:px-8 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[90%] md:after:w-[1px] md:after:bg-gradient-to-b md:after:from-transparent md:after:via-[#D2D2D2] md:after:to-transparent last:after:hidden"
              >
                <div className="relative mb-12">
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

        <div className="mt-4 w-full overflow-hidden rounded-3xl bg-[#EBEBEB]">
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-purple-50 to-blue-50 relative flex items-center justify-center">
            <Image
              src="/assets/howItWorks.gif"
              alt="How it works demo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
