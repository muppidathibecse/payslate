import Image from "next/image";
import Button from "../../Button";
import AppleLogo from "@/src/icons/AppleLogo";
import PlayStoreLogo from "@/src/icons/PlayStoreLogo";
import { avatarDetails } from "../data";

const HeroSection = () => {
    return (
        <section className="w-full relative bg-cover flex items-center justify-center pt-[100px]" style={{ backgroundImage: "url('/assets/imageBg.png')" }}>
            <div className="w-full h-full py-16 flex flex-col lg:flex-row px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-10 xl:gap-20">
                <div className="lg:w-1/2 flex flex-col gap-10 ">
                    <div className="flex flex-col text-left">
                        <h1 className="text-[#932EFA] font-semibold leading-[150%]">PAYSLATE</h1>
                        <h2 className="font-bold text-6xl text-[#01081B] leading-[120%]">Your Business Financial Chalkboard</h2>
                    </div>
                    <p className="text-[#4D525F] w-[70%] text-[18px] leading-[150%]">Payslate brings all your finances together — from cash flow to materials and accounts — in one secure, real-time platform.</p>
                    <div className="flex gap-6 ">
                        <Button className="bg-black! flex items-start px-3! py-2! border border-[#001F36] rounded-lg" icon={<AppleLogo />}>
                            <div className="flex flex-col items-start font-medium gap-0.5">
                                <p className="leading-2.5 ">Download on the</p>
                                <p className="text-[20px] leading-[100%] ">App Store</p>
                            </div>
                        </Button>
                        <Button className="bg-black! flex items-start px-3! py-2! border border-[#001F36] rounded-lg" icon={<PlayStoreLogo />}>
                            <div className="flex flex-col items-start font-medium gap-0.5">
                                <p className="leading-2.5 ">GET IT ON</p>
                                <p className="text-[20px] leading-[100%] ">Google Play</p>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 hidden md:flex items-center justify-center gap-3.5 relative">
                    <div className="p-4 flex absolute top-5 gap-2 left-[5%] lg:right-75 bg-white rounded-lg ">
                        <div className="flex">
                            {
                                avatarDetails.map((avatar) => (
                                    <Image key={avatar.id} src={avatar.url} alt={`Avatar ${avatar.id}`} width={40} height={40} className="-ml-2 first:ml-0 rounded-full" />
                                ))
                            }
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#01081B] font-semibold leading-[120%]">120K+</p>
                            <p className="text-[#4D525F] leading-[150%]">Businesses Trust Payslate</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end lg:flex-1">
                        <div className="w-full max-w-[300px] bg-white h-fit p-5 rounded-lg mt-[100px]
                        shadow-[-20.4px_20.4px_30.61px_0px_rgba(46,104,253,0.08),0px_-16.32px_20.4px_0px_rgba(46,104,253,0.04)]">
                            <p className="text-[#01081B] font-semibold">Book Created</p>
                            <p className="text-[#804FB0] font-bold">+1,35,890.00</p>
                            <div className="flex justify-between">
                                <p className="text-[#4D525F] text-[14px]">1th Jan, 2025</p>
                                <p className="text-[#37C390] text-[14px]">Synced in Real-Time ✅</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit">
                        <Image src={'/assets/hero-section/Mobile.png'} alt="Mobile Image" width={280} height={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;