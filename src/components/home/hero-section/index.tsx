import Image from "next/image";
import Button from "../../Button";

const HeroSection = () => {
    return (
        <section className="w-full relative bg-cover flex items-center justify-center" style={{ backgroundImage: "url('/assets/imageBg.png')" }}>
            <div className="w-full h-full py-16 flex px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-20">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col">
                        <h1 className="text-[#932EFA] font-semibold leading-[150%]">PAYSLATE</h1>
                        <h2 className="font-bold text-6xl text-[#01081B] leading-[120%]">Your Business Financial Chalkboard</h2>
                    </div>
                    <p className="text-[#4D525F] w-[70%] text-[18px] leading-[150%]">Payslate brings all your finances together — from cash flow to materials and accounts — in one secure, real-time platform.</p>
                    <div className="flex gap-6 ">
                        <Button className="!bg-black flex flex-col items-start px-3! py-2! border border-[#001F36] rounded-lg">
                            <div className="flex flex-col items-start font-medium gap-0.5">
                                <p className="leading-2.5 ">Download on the</p>
                                <p className="text-[20px] leading-[100%] ">App Store</p>
                            </div>
                        </Button>
                        <Button className="!bg-black flex flex-col items-start px-3! py-2! border border-[#001F36] rounded-lg">
                            <div className="flex flex-col items-start font-medium gap-0.5">
                                <p className="leading-2.5 ">GET IT ON</p>
                                <p className="text-[20px] leading-[100%] ">Google Play</p>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="md:1/2">
                    <Image src={'/assets/hero-section/Mobile.png'} alt="Mobile Image" width={280} height={500} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;