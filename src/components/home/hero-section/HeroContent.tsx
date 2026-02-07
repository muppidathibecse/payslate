import AppleLogo from "@/src/icons/AppleLogo";
import PlayStoreLogo from "@/src/icons/PlayStoreLogo";
import Link from "next/link";

const HeroContent = () => {
    return (
        <div className="lg:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col text-left">
                <h1 className="text-secondary font-semibold leading-[150%]">
                    PAYSLATE
                </h1>
                <h2 className="font-bold text-6xl text-[#01081B] leading-[120%]">
                    Your Business Financial Chalkboard
                </h2>
            </div>

            <p className="text-[#4D525F] w-[70%] text-[18px] leading-[150%]">
                Payslate brings all your finances together — from cash flow to
                materials and accounts — in one secure, real-time platform.
            </p>

            <div className="flex gap-6">
                <Link
                    className="bg-black! flex items-start px-3! py-2! border border-[#001F36] rounded-lg gap-2.5"
                    href="#"
                >
                    <AppleLogo />
                    <div className="flex flex-col items-start font-medium gap-0.5">
                        <p className="leading-2.5">Download on the</p>
                        <p className="text-[20px] leading-[100%]">App Store</p>
                    </div>
                </Link>

                <Link
                    className="bg-black! flex items-start px-3! py-2! border border-[#001F36] rounded-lg gap-2.5"
                    href="#"
                >   
                    <PlayStoreLogo />
                    <div className="flex flex-col items-start font-medium gap-0.5">
                        <p className="leading-2.5">GET IT ON</p>
                        <p className="text-[20px] leading-[100%]">Google Play</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeroContent;