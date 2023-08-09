import GetInfo from "./GetInfo";
import {getData} from "../get-data";
export default async function destination() {
  const data = await getData();
  const {destinations} = data;
  console.log(destinations)
  return (
    <main className="flex flex-col justify-center 
      items-center pt-[89px] md:pt-[136px]
      bg-[url('/destination/background-destination-mobile.jpg')]
      sm:bg-[url('/destination/background-destination-tablet.jpg')] 
      lg:bg-[url('/destination/background-destination-desktop.jpg')] 
      bg-cover bg-no-repeat w-full h-full 
      pb-[32px] md:pb-[48px]
      lg:pb-[118px] lg:items-end
      lg:flex-row lg:gap-[157px] lg:pt-[230px]
      
      ">
      <GetInfo destination={destinations}/>
    </main>
  )
}
