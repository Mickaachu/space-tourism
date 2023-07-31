import Image from "next/image";

function crew() {
    return (
      <main className=" pt-[89px] md:pt-[136px] 
        bg-[url('/crew/background-crew-mobile.jpg')]
        sm:bg-[url('/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/crew/background-crew-desktop.jpg')]
        bg-cover bg-no-repeat text-center
        md:text-left md:px-[24px] w-full h-full
        lg:pl-[166px] lg:pr-[137px]
        ">
        <p className='font-barlow-condensed tracking-[2.7px] md:pl-[14px]'><span className='pr-[18px] font-bold opacity-[0.25]'>02</span> MEET YOUR CREW</p>
        <div className="flex flex-col justify-center 
        items-center md:flex-col-reverse 
        lg:flex-row-reverse lg:justify-left lg:gap-[81px]">
          <div className="border-b border-[#313b77]
            flex justify-center md:align-bottom
            sm:w-[327px] md:border-none mt-[32px] 
            mb-[75px] md:mb-[0px] lg:w-auto">
            <div className=' relative  w-[177px] md:w-[456px]
             h-[222px] md:h-[572px]'>
              <Image src='/crew/image-douglas-hurley.png' fill />
            </div>
          </div>
          <div className='text-center pb-[32px] mx-[24px] lg:text-left lg:mx-0'>
            <p className='font-belfair opacity-[0.5] md:text-[24px]'>COMMANDER</p>
            <h1 className='font-belfair text-[24px] md:text-[40px] mt-[8px] mb-[16px]'>DOUGLAS HURLEY</h1>
            <p className='text-[15px] md:text-[16px] max-w-[458px]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            
          </div>
        </div>
       
      </main>
    )
  }

  export default crew;