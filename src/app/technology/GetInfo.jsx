'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function GetInfo({technologies}) {
    
    const [technology, setTechnology] = useState(technologies[0]);
    const techSelection = (techIndex) => {
      setTechnology(technologies[techIndex]);
    };

    return(
        <div className='flex flex-col justify-center lg:justify-between lg:gap-[130px] items-center lg:flex-row-reverse '>
          <div className="relative w-full max-w-[773px] h-[170px] sm:h-[310px] lg:h-[527px] lg:max-w-[552px] mt-[32px] mb-[34px] lg:m-0">            
              <Image src={technology.images.landscape} className='block lg:hidden' fill  alt={technology.name}/>
              <Image src={technology.images.portrait} fill className='hidden lg:block'  alt={technology.name}/>

          </div>
          <div className='flex flex-col justify-center items-center gap-[26px] lg:gap-[80px]'>
            <div className='flex gap-[16px]'>
            <button onClick={() => techSelection(0)} 
            className='w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4'>
                1
            </button>
            <button onClick={() => techSelection(1)} 
            className='w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4'>
                2
            </button>
            <button onClick={() => techSelection(2)} 
            className='w-[40px] h-[40px] md:w-[58px] md:h-[58px] lg:w-[80px] lg:h-[80px] border rounded-full hover:border-4'>
                3
            </button>
    
            </div>
            <div className='text-center pb-[32px]  mx-[24px] lg:text-left'>
              <p className='font-belfair opacity-[0.5] sm:text-[16px]'>{technology.name}</p>
              <h1 className='font-belfair text-[24px] sm:text-[46px] mt-[8px] mb-[16px]'>{technology.name}</h1>
              <p className='text-[15px] sm:text-[16px] max-w-[458px]'>{technology.description}</p>
              
            </div> 
          </div>
          
        </div>
    )
}