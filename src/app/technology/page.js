import { getData } from "../get-data";
import GetInfo from "./GetInfo";
export default async function technology() {
  const data = await getData();
  const {technologies} = data;
  
    return (
      <main className="pt-[89px] md:pt-[136px] lg:pt-[212px]
        bg-[url('/technology/background-technology-mobile.jpg')]
        sm:bg-[url('/technology/background-technology-tablet.jpg')]
        lg:sm:bg-[url('/technology/background-technology-desktop.jpg')]
        bg-cover bg-no-repeat w-full h-full sm:pl-[38px] lg:pl-[166px] md:pb-[98px] lg:pb-[101px]">
        <div className='flex justify-center sm:justify-start w-full '><p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>03</span>SPACE LUNCH 101</p></div>
        <GetInfo technologies={technologies}/>
      </main>
    )
  }
