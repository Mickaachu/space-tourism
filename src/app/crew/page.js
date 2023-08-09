import GetInfo from "./GetInfo";
import {getData} from "../get-data";
export default async function crew() {
  const data = await getData();
  const {crew} = data;
  
  
return (
  <main className=" pt-[89px] md:pt-[136px]
    bg-[url('/crew/background-crew-mobile.jpg')]
    sm:bg-[url('/crew/background-crew-tablet.jpg')]
    lg:bg-[url('/crew/background-crew-desktop.jpg')]
    bg-cover bg-no-repeat text-center
    md:text-left md:px-[24px] w-full h-full
    lg:pl-[166px] lg:pr-[137px]
    ">
  
    <p className='font-barlow-condensed tracking-[2.7px] md:pl-[14px]'>
      <span className='pr-[18px] font-bold opacity-[0.25]'>02</span> MEET YOUR CREW
    </p>
    
    <GetInfo crew={crew}/>
  </main>
)
  }
