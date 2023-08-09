'use client';
import Image from "next/image";
import { useState } from "react";

export default function GetInfo({crew}) {
    const [member, setMember] = useState(crew[0]);

    const handleClick = (personIndex) => {
        setMember(crew[personIndex])
    }

return(
    <div className="flex flex-col justify-center 
    items-center md:flex-col-reverse 
    lg:flex-row-reverse lg:justify-left lg:gap-[81px]">
        <div className="border-b border-[#313b77] flex justify-center md:align-bottom sm:w-[327px] md:border-none mt-[32px] 
        mb-[75px] md:mb-[0px] lg:w-auto">
            <div className=' relative  w-[177px] md:w-[456px]
            h-[222px] md:h-[572px]'>
                <Image src={member.images?.png} priority fill alt={member.name} sizes="(max-width: 768px) 100vw"/>
            </div>

        </div>

        <div className="flex flex-col md:flex-col-reverse">
            <div className="flex gap-[16px]">
                <button onClick={() => handleClick(0)} className="w-[5px] h-[5px] bg-white border-1/2" disabled={member == crew[0]}></button>
                <button onClick={() => handleClick(1)}   className="w-[5px] h-[5px] bg-white" disabled={member == crew[1]}></button>
                <button onClick={() => handleClick(2)}  className="w-[5px] h-[5px] bg-white" disabled={member == crew[2]} ></button>
                <button onClick={() => handleClick(3)}  className="w-[5px] h-[5px] bg-white" disabled={member == crew[3]}></button>
            </div>
            <div className='text-center pb-[32px] mx-[24px] lg:text-left lg:mx-0'>
                <p className='font-belfair opacity-[0.5] md:text-[24px]'>{member.role}</p>
                <h1 className='font-belfair text-[24px] md:text-[40px] mt-[8px] mb-[16px]'>{member.name}</h1>
                <p className='text-[15px] md:text-[16px] max-w-[458px]'>{member.bio}</p>
            </div>
        </div>
    </div>
)}