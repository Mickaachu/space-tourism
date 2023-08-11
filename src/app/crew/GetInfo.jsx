'use client';
import Image from "next/image";
import { useState } from "react";
import { useAnimate, motion } from "framer-motion";

export default function GetInfo({crew}) {
    const [member, setMember] = useState(crew[0]);
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
    const handleClick = (personIndex) => {
        setMember(crew[personIndex])
        animate([
                [".crewImage",{y:[100,0], opacity:[0,1]},transistion(0.2,0.5) ],
                [".crewRole",{y:[100,0], opacity:[0,1]},transistion(0,0.5) ],
                [".crewName",{x:[100,0], opacity:[0,1]},transistion(0,0.5) ],
                [".crewBio",{y:[100,0], opacity:[0,1]},transistion(0,0.5) ],
                
            ]);
    }
return(
    <main className=" pt-[89px] md:pt-[136px]
    bg-[url('/crew/background-crew-mobile.jpg')]
    sm:bg-[url('/crew/background-crew-tablet.jpg')]
    lg:bg-[url('/crew/background-crew-desktop.jpg')]
    bg-cover bg-no-repeat text-center
    md:text-left md:px-[24px] w-full h-full
    lg:pl-[166px] lg:pr-[137px]
    " ref={scope}>
  
        <motion.p  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(0.5, 2)}  className='font-barlow-condensed tracking-[2.7px] md:pl-[14px]'>
            <span className='pr-[18px] font-bold opacity-[0.25]'>02</span> MEET YOUR CREW
        </motion.p>
        
        <div className="flex flex-col justify-center 
        items-center md:flex-col-reverse 
        lg:flex-row-reverse lg:justify-left lg:gap-[81px]">
            <div className="border-b border-[#313b77] flex justify-center md:align-bottom sm:w-[327px] md:border-none mt-[32px] 
            mb-[75px] md:mb-[0px] lg:w-auto">
                <motion.div variants={animation("y")} animate="visible" initial="hidden" transition={transistion(0.5, 2)}  className='crewImage relative  w-[177px] md:w-[456px]
                h-[222px] md:h-[572px]'>
                    <Image src={member.images?.png} priority fill alt={member.name} sizes="(max-width: 768px) 100vw"/>
                </motion.div>

            </div>

            <div className="flex flex-col md:flex-col-reverse">
                <div className="flex gap-[16px]">
                    <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(0, 2)} onClick={() => handleClick(0)} className="w-[5px] h-[5px] bg-white border-1/2" disabled={member == crew[0]}></motion.button>
                    <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(0.5, 2)} onClick={() => handleClick(1)}   className="w-[5px] h-[5px] bg-white" disabled={member == crew[1]}></motion.button>
                    <motionbutton variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1, 2)} onClick={() => handleClick(2)}  className="w-[5px] h-[5px] bg-white" disabled={member == crew[2]} ></motionbutton>
                    <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} onClick={() => handleClick(3)}  className="w-[5px] h-[5px] bg-white" disabled={member == crew[3]}></motion.button>
                </div>
                <div className='text-center pb-[32px] mx-[24px] lg:text-left lg:mx-0'>
                    <motion.p  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(1.8, 2)} className=' crewRole font-belfair opacity-[0.5] md:text-[24px]'>{member.role}</motion.p>
                    <motion.h1  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(2.0, 2)} className='crewName font-belfair text-[24px] md:text-[40px] mt-[8px] mb-[16px]'>{member.name}</motion.h1>
                    <motion.p  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(2.2, 2)} className='crewBio text-[15px] md:text-[16px] max-w-[458px]'>{member.bio}</motion.p>
                </div>
            </div>
        </div>
    </main>
)}