'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const fromLeft = {
    visible: { opacity: 1, x: 0,
    },
    hidden: { opacity: 0, x: -10 }
  };
  const transistion = (delay,duration) => {
    return {type: 'spring', delay : delay, duration: duration }
  }
  const buttonAnimate = {
    visible: { opacity: 1, scale: 1
    },
    hidden: { opacity: 0, scale: 0.5 }
  }

  return (
    <main className="flex flex-col justify-end items-center
      text-[#D0D6F9] pb-[48px] md:pb-[90px] pt-[112px] md:pt-[202px] px-[24px] md:pl-[162px] md:pr-[162px]
      bg-[url('/home/background-home-mobile.jpg')]
      sm:bg-[url('/home/background-home-tablet.jpg')]
      lg:bg-[url('/home/background-home-desktop.jpg')]
      bg-cover bg-no-repeat w-full h-full
      lg:flex-row lg:justify-between
      "
     >
      <div>
        <motion.p transition={transistion(0.5,2)}  variants={fromLeft} initial="hidden" animate="visible" className='font-barlow-condensed md:text-[24px] lg:text-[28px] ' >SO, YOU WANT TO TRAVEL TO</motion.p>
        <motion.h1 transition={transistion(1,2)}  variants={fromLeft} initial="hidden" animate="visible" className='text-white font-belfair text-[80px] md:text-[150px]'>SPACE</motion.h1>
        <motion.p transition={transistion(1.5,2)}  variants={fromLeft} initial="hidden" animate="visible" className=' text-center lg:max-w-[444px] lg:text-left lg:text-[18px]'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </motion.p>
      </div>
      <div className='pt-[80px] md:pt-[156px] lg:pt-[74px]'>
        <motion.button 
        transition={transistion(0.5,2)}  variants={buttonAnimate} initial="hidden" 
        animate="visible" 
        className='w-[150px]  h-[150px] md:w-[242px] md:h-[242px] lg:w-[274] 
        lg:h-[274] bg-white rounded-full text-black 
        font-belfair text-[20px] lg:text-[32px]  font-normal tracking-[1.25px]'
        onClick={() => router.push('/destination')}
        >EXPLORE</motion.button>
        </div>
    </main>
  )
}
