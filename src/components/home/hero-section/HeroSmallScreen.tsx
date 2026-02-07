import React from 'react';
import HeroContent from './HeroContent';
import { avatarDetails, featureDetails } from '../data';
import Image from 'next/image';

const HeroSmallScreen = () => {
    return (
        <React.Fragment>
            <section className="w-full relative bg-cover flex items-center justify-center pt-25" style={{ backgroundImage: "url('/assets/imageBg.png')" }}>
                <div className="w-full h-full py-16 flex flex-col lg:flex-row px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-10 xl:gap-20">
                    <HeroContent />
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
                                <p className="text-text font-semibold leading-[120%]">120K+</p>
                                <p className="text-muted leading-[150%]">Businesses Trust Payslate</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end lg:flex-1">
                            <div className="w-full max-w-75 bg-white h-fit p-5 rounded-lg mt-25
                        shadow-[-20.4px_20.4px_30.61px_0px_rgba(46,104,253,0.08),0px_-16.32px_20.4px_0px_rgba(46,104,253,0.04)]">
                                <p className="text-text font-semibold">Book Created</p>
                                <p className="text-primary font-bold">+1,35,890.00</p>
                                <div className="flex justify-between">
                                    <p className="text-muted text-[14px]">1th Jan, 2025</p>
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
            <section className="w-full relative flex items-center justify-center py-25" >
                <div className="w-full h-full flex flex-col px-4 2xl:px-0 2xl:w-360 items-center justify-between gap-10 xl:gap-20">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#932EFA] font-semibold leading-[150%]">Features</h1>
                        <div className="w-full flex flex-col gap-10 justify-between">
                            <div className="flex flex-col text-left">
                                <h2 className="font-bold text-[40px] text-text leading-[120%]">Your Data, Secured. Your Finances, Simplified.</h2>
                            </div>
                            <div>
                                <p className="text-muted text-[18px] leading-[150%]">Payslate ensures your financial records are accurate, auditable, and always protected with enterprise-grade security and real-time synchronization.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col gap-4 justify-between">
                            {
                                featureDetails.slice(0, 2).map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="p-10 rounded-[40px] flex flex-col gap-3"
                                        style={{ backgroundColor: feature.bg }}
                                    >
                                        <div className="flex flex-col gap-3">
                                            <div className="p-2 bg-primary w-16 h-16 flex items-center justify-center rounded-[20px]">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-text text-[18px] leading-6.25 font-bold">{feature.title}</h3>
                                        </div>
                                        <p className="text-[#0D0D0D] leading-6">{feature.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col gap-4 justify-between">
                            {
                                featureDetails.slice(2, 4).map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="p-10 rounded-[40px] flex flex-col gap-3"
                                        style={{ backgroundColor: feature.bg }}
                                    >
                                        <div className="flex flex-col gap-3">
                                            <div className="p-2 bg-primary w-16 h-16 flex items-center justify-center rounded-[20px]">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-text text-[18px] leading-6.25 font-bold">{feature.title}</h3>
                                        </div>
                                        <p className="text-[#0D0D0D] leading-6">{feature.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HeroSmallScreen;
