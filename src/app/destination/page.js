import Image from "next/image"

function destination() {
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
      <div>
        <div className='flex justify-center items-center 
        md:justify-start md:pl-[38px] w-full '>
          <p className='font-barlow-condensed tracking-[2.7px] lg:text-[28px]'><span className='pr-[18px] font-bold opacity-[0.25]'>01</span> PICK YOUR DESTINATION</p>
        </div>
        <div className="relative w-[170px] sm:w-[300px] 
          lg:w-[445px] h-[170px] sm:h-[300px] lg:h-[445px]">
          <Image src='/destination/image-moon.png' fill
          className='mt-[32px] md:mt-[60px] mb-[26px] md:mb-[53px] '/>
        </div>
      </div>
      <div>
        <div className="flex gap-[26px]">
          <button>MOON</button>
          <button>MARS</button>
          <button>EUROPA</button>
          <button>TITAN</button>

        </div>
        <div className='text-center 
            mx-[24px] md:mx-[28px] border-b border-[#383B4B]
            md:gap-[30px] lg:text-start
            lg:pb-[54px] lg:m-0
           ' >
          <h1 className='font-belfair text-[56px]
           mt-[30px] md:text-[80px]  lg:text-start'>MOON</h1>
          <p className="lg:max-w-[444px]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </div>
        <div className="md:flex md:gap-[102px]">
          <div className='pt-[32px] text-center'>
            <p className='text-[14px] font-barlow-condensed
            text-[#D0D6F9] uppercase'>AVG. DISTANCE</p>
            <p className='font-belfair text-[28px] uppercase'>384,400 km</p>
          </div>
          <div className='pt-[32px]'>
            <p className='text-[14px] font-barlow-condensed
            text-[#D0D6F9] uppercase'>Est. travel time</p>
            <p className='font-belfair text-[28px] uppercase'>3 days</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default destination