import Image from "next/image"

function destination() {
  return (
    <main className="flex flex-col justify-center items-center pt-[89px] md:pt-[136px]
    bg-[url('/destination/background-destination-mobile.jpg')] bg-cover bg-no-repeat">
      <div className='flex justify-center items-center
       md:justify-start md:pl-[38px] w-full '>
      <p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>01</span> PICK YOUR DESTINATION</p>
      </div>
      <Image src='/destination/image-moon.png' width={170} height={170} className='mt-[32px] mb-[26px]'/>
      <div className="flex gap-[26px]">
        <button>MOON</button>
        <button>MARS</button>
        <button>EUROPA</button>
        <button>TITAN</button>

      </div>
      <div className='text-center pb-[32px] mx-[24px] border-b border-[#383B4B]'>
        <h1 className='font-belfair text-[56px] mt-[30px]'>MOON</h1>
        <p >See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      </div>
      <div className="md:flex md:gap-[102px]">
        <div className='pt-[32px] text-center'>
          <p className='text-[14px] font-barlow-condensed text-[#D0D6F9] uppercase'>AVG. DISTANCE</p>
          <p className='font-belfair text-[28px] uppercase'>384,400 km</p>
        </div>
        <div className='pt-[32px]'>
          <p className='text-[14px] font-barlow-condensed text-[#D0D6F9] uppercase'>Est. travel time</p>
          <p className='font-belfair text-[28px] uppercase'>3 days</p>
        </div>
      </div>
    </main>
  )
}

export default destination