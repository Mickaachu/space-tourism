'use client';
import Image from "next/image";
import { useState } from "react";
import { useAnimate, motion } from "framer-motion";

export default function GetInfo({destination}) {
const [planet, setPlanet] = useState(destination[0])
const [scope, animate] = useAnimate();

const animation = (ordinate) => {
    if (ordinate == "x") {
        return {
            visible: { opacity: 1, x: 0,
            },
            hidden: { opacity: 0, x: 100 }
        }
    }
    else {
        return {
            visible: { opacity: 1, y: 0,
            },
            hidden: { opacity: 0, y: 100 }
        }
    }
    };
    const transistion = (delay,duration) => {
    return {type: 'spring', delay : delay, duration: duration }
    }
    
    const planetSelection = (planetIndex) => {
    setPlanet(destination[planetIndex]);
    animate([
        [".planetImage",{x:[100,0], opacity:[0,1]},transistion(0,0.5) ],
        [".planetName",{x:[100,0], opacity:[0,1]},transistion(0,0.5) ],
        [".planetDistance",{y:[100,0], opacity:[0,1]},transistion(0,0.5) ],
        [".planetTravel",{y:[100,0], opacity:[0,1]},transistion(0,.5) ]


    ]);
    
    }

    return(
        <main className="flex flex-col justify-center 
        items-center pt-[89px] md:pt-[136px]
        bg-[url('/destination/background-destination-mobile.jpg')]
        sm:bg-[url('/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('/destination/background-destination-desktop.jpg')] 
        bg-cover bg-no-repeat w-full h-full 
        pb-[32px] md:pb-[48px]
        lg:pb-[118px] lg:items-end
        lg:flex-row lg:gap-[157px] lg:pt-[230px]
        overflow-y-auto
        " ref={scope}>
            <div className="mb-[100px] lg:mb-[0]">
                <div className='flex justify-center items-center
                md:justify-start md:pl-[38px] w-full '>
                <motion.p variants={animation("x")} animate="visible" initial="hidden" transition={transistion(0, 2)} className='font-barlow-condensed tracking-[2.7px] lg:text-[28px]'><span className='pr-[18px] font-bold opacity-[0.25]'>01</span> PICK YOUR DESTINATION</motion.p>
                </div>
                <motion.div  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(0.5, 2)}  className="planetImage relative w-[170px] sm:w-[300px]  ml-[15%] md:ml-[0]
                lg:w-[445px] h-[170px] sm:h-[300px] lg:h-[445px] ">
                    <Image src={planet.images.png} fill alt={planet.name} sizes="(max-width: 445px) 100vw"
                    className='mt-[32px] md:mt-[60px] mb-[26px] md:mb-[53px] '/>
                </motion.div>
            </div>
            <div>
                <div className="flex gap-[26px] justify-center items-center">
                <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(0.5, 2)} onClick={() => planetSelection(0)} disabled={planet == destination[0]}>MOON</motion.button>
                <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1, 2)} onClick={() => planetSelection(1)} disabled={planet == destination[1]}>MARS</motion.button>
                <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} onClick={() => planetSelection(2)} disabled={planet == destination[2]}>EUROPA</motion.button>
                <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(2, 2)} onClick={() => planetSelection(3)} disabled={planet == destination[3]}>TITAN</motion.button>

                </div>
                <div  className='text-center
                    mx-[24px] md:mx-[28px] border-b border-[#383B4B]
                    md:gap-[30px] lg:text-start
                    lg:pb-[54px] lg:m-0
                ' >
                    <motion.h1  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(2.5, 2)}  className='planetName font-belfair text-[56px] 
                    mt-[30px] md:text-[80px]  lg:text-start'>{planet.name}</motion.h1>
                    <motion.p variants={animation("x")} animate="visible" initial="hidden" transition={transistion(2.5, 2)} className="lg:max-w-[444px] planetName">{planet.description}</motion.p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-[102px] justify-center items-center">
                    <div className='pt-[32px] text-center '>
                        <motion.p variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1, 2)} className='text-[14px] font-barlow-condensed
                        text-[#D0D6F9] uppercase'>AVG. DISTANCE</motion.p>
                        <motion.p  variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} className='planetDistance font-belfair text-[28px] uppercase planet'>{planet.distance}</motion.p>
                    </div>
                    <div className='pt-[32px]'>
                        <motion.p  variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1, 2)}  className=' text-[14px] font-barlow-condensed
                        text-[#D0D6F9] uppercase'>Est. travel time</motion.p>
                        <motion.p variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} className='planetTravel font-belfair text-[28px] uppercase planet'>{planet.travel}</motion.p>
                    </div>
                </div>
            </div>
        </main>
    )
}