'use client'
import Image from 'next/image'
import { useState} from 'react';
import { LogosData } from './home/data';

export default function LogoScrolling() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <section className='px-4 flex-row gap-18 items-center justify-center hidden md:flex overflow-hidden pt-[41px]'>
        <div className='scroll-container '>
          {LogosData.concat(LogosData).map((customer, index) => (
            <Image 
            key={index} 
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
            src={hoveredIndex === index ? customer.coloredLogo : customer.logo}
            alt='customerIcon' 
            width={200} 
            height={100} />
          ))}
        </div>
      </section>
    </>
  )
}
