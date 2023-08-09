'use client';
import Image from "next/image";
import { useState } from "react";

export default function GetInfo({destination}) {
    const [planet, setPlanet] = useState(destination[0])
    const planetSelection = (planetIndex) => {
        setPlanet(destination[planetIndex]);
    }
    return(
        <>
        <div>
            <div className='flex justify-center items-center 
            md:justify-start md:pl-[38px] w-full '>
            <p className='font-barlow-condensed tracking-[2.7px] lg:text-[28px]'><span className='pr-[18px] font-bold opacity-[0.25]'>01</span> PICK YOUR DESTINATION</p>
            </div>
            <div className="relative w-[170px] sm:w-[300px] 
            lg:w-[445px] h-[170px] sm:h-[300px] lg:h-[445px]">
                <Image src={planet.images.png} fill alt={planet.name} sizes="(max-width: 445px) 100vw"
                className='mt-[32px] md:mt-[60px] mb-[26px] md:mb-[53px] '/>
            </div>
        </div>
        <div>
            <div className="flex gap-[26px]">
            <button onClick={() => planetSelection(0)} disabled={planet == destination[0]}>MOON</button>
            <button onClick={() => planetSelection(1)} disabled={planet == destination[1]}>MARS</button>
            <button onClick={() => planetSelection(2)} disabled={planet == destination[2]}>EUROPA</button>
            <button onClick={() => planetSelection(3)} disabled={planet == destination[3]}>TITAN</button>

            </div>
            <div className='text-center 
                mx-[24px] md:mx-[28px] border-b border-[#383B4B]
                md:gap-[30px] lg:text-start
                lg:pb-[54px] lg:m-0
            ' >
            <h1 className='font-belfair text-[56px]
            mt-[30px] md:text-[80px]  lg:text-start'>{planet.name}</h1>
            <p className="lg:max-w-[444px]">{planet.description}</p>
            </div>
            <div className="md:flex md:gap-[102px]">
            <div className='pt-[32px] text-center'>
                <p className='text-[14px] font-barlow-condensed
                text-[#D0D6F9] uppercase'>AVG. DISTANCE</p>
                <p className='font-belfair text-[28px] uppercase'>{planet.distance}</p>
            </div>
            <div className='pt-[32px]'>
                <p className='text-[14px] font-barlow-condensed
                text-[#D0D6F9] uppercase'>Est. travel time</p>
                <p className='font-belfair text-[28px] uppercase'>{planet.travel}</p>
            </div>
            </div>
        </div>
        </>
    )
}