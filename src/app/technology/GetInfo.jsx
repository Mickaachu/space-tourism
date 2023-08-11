'use client';
import Image from 'next/image';
import { useState} from 'react';
import { motion, useAnimate } from 'framer-motion';

export default function GetInfo({technologies}) {
  const [technology, setTechnology] = useState(technologies[0]);
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
    const techSelection = (techIndex) => {
      setTechnology(technologies[techIndex]);
      animate([
        [".techImage",{x:[100,0], opacity:[0,1]},transistion(0,0.5) ],
        [".techName",{x:[100,0], opacity:[0,1]},transistion(0,0.5) ],
        [".techDescription",{y:[100,0], opacity:[0,1]},transistion(0,0.5) ],
      


    ]);
    
    };
    
    
    

    return(
      <main ref={scope} className="pt-[89px] md:pt-[136px] lg:pt-[212px]
        bg-[url('/technology/background-technology-mobile.jpg')]
        sm:bg-[url('/technology/background-technology-tablet.jpg')]
        lg:sm:bg-[url('/technology/background-technology-desktop.jpg')]
        bg-cover bg-no-repeat w-full h-full sm:pl-[38px] lg:pl-[166px] md:pb-[98px] lg:pb-[101px]">
        <motion.div variants={animation("x")} animate="visible" initial="hidden" transition={transistion(0, 2)} className='flex justify-center sm:justify-start w-full '><p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>03</span>SPACE LUNCH 101</p></motion.div>
        <div className='flex flex-col justify-center lg:justify-between lg:gap-[130px] items-center lg:flex-row-reverse '>
          <motion.div variants={animation("x")} animate="visible" initial="hidden" transition={transistion(0.5, 2)} className="techImage relative w-full max-w-[773px] h-[170px] sm:h-[310px] lg:h-[527px] lg:max-w-[552px] mt-[32px] mb-[34px] lg:m-0">            
              <Image src={technology.images.landscape} className='block lg:hidden' fill  alt={technology.name}/>
              <Image src={technology.images.portrait} fill className='hidden lg:block'  alt={technology.name}/>

          </motion.div>
          <div className='flex flex-col justify-center items-center gap-[26px] lg:gap-[66px] lg:flex-row'>
            <div className='flex gap-[16px] lg:flex-col'>
              <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(0.5, 2)} onClick={() => techSelection(0) } 
              className={technology === technologies[0] 
                  ? 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full bg-white text-black transition duration-150 ease-in-out' 
                  : 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4 transition duration-150 ease-in-out'} >
                  1
              </motion.button>
              <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1, 2)} onClick={() => techSelection(1)} 
              className={technology === technologies[1] 
                ? 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full bg-white text-black transition duration-150 ease-in-out' 
                : 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4 transition duration-150 ease-in-out'} >
                  2
              </motion.button>
              <motion.button variants={animation("y")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} onClick={() => techSelection(2)} 
              className={technology === technologies[2] 
                ? 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full bg-white text-black transition duration-150 ease-in-out' 
                : 'w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4 transition duration-150 ease-in-out'} >
                  3
              </motion.button>
    
            </div>
            <div className='text-center pb-[32px]  mx-[24px] lg:text-left'>
              <motion.p  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(1, 2)} className='font-belfair opacity-[0.5] sm:text-[16px]'>THE TERMINOLOGY…</motion.p>
              <motion.h1  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(1.5, 2)} className='techName font-belfair text-[24px] sm:text-[46px] mt-[8px] mb-[16px]'>{technology.name}</motion.h1>
              <motion.p  variants={animation("x")} animate="visible" initial="hidden" transition={transistion(2, 2)} className='techDescription text-[15px] sm:text-[16px] max-w-[458px]'>{technology.description}</motion.p>
              
            </div> 
          </div>
          
        </div>
        </main>
    )
}