import Image from "next/image";

import { ExploreAppData } from "./home/data";

export default function ExploreApp() {
  return (
    <section className="w-full md:px-0">
      <div className="relative 2xl:w-360 mx-auto bg-primary px-6 md:px-10 max-[1340px]:py-10 min-[1340px]:pt-24 rounded-[20px] overflow-visible">
        <div className="text-white z-10">
          <h1 className="text-[28px] md:text-[42px] font-bold leading-tight mb-6 md:max-w-135">
            {ExploreAppData.title}
          </h1>

          <p className="text-white font-normal text-[16px] md:text-[18px] mb-8 leading-7 md:leading-[32px] max-w-full md:max-w-105">
           {ExploreAppData.description}
          </p>

          <a href="#download">
            <button className="bg-white uppercase cursor-pointer text-primary px-6 min-[1340px]:mb-24 max-[1220px]:mb-0 md:px-8 py-4 md:py-6 rounded-[80px] text-[14px] md:text-[16px] font-bold tracking-[1.6px]">
             {ExploreAppData.buttonLabel}
            </button>
          </a>
        </div>
        <div className="mt-12 max-[1340px]:hidden min-[1340px]:absolute min-[1340px]:right-1.25 min-[1340px]:bottom-0">
          <Image
            src="/assets/ExplorePhones.png"
            alt="App screens"
            width={700}
            height={300}
            priority
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}