import Image from 'next/image';
function technology() {
    return (
      <main className="pt-[89px] md:pt-[136px] lg:pt-[212px]
        bg-[url('/technology/background-technology-mobile.jpg')]
        sm:bg-[url('/technology/background-technology-tablet.jpg')]
        lg:sm:bg-[url('/technology/background-technology-desktop.jpg')]
        bg-cover bg-no-repeat w-full h-full sm:pl-[38px] lg:pl-[166px] md:pb-[98px] lg:pb-[101px]">
        <div className='flex justify-center sm:justify-start w-full '><p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>03</span>SPACE LUNCH 101</p></div>
        <div className='flex flex-col justify-center lg:justify-between lg:gap-[130px] items-center lg:flex-row-reverse '>
          <div className="relative w-full max-w-[773px] h-[170px] sm:h-[310px] lg:h-[527px] lg:max-w-[552px] mt-[32px] mb-[34px] lg:m-0">
            <Image src='/technology/image-launch-vehicle-landscape.jpg' fill />
          </div>
          <div className='flex lg:gap-[80px]'>
            <div></div>
            <div className='text-center pb-[32px]  mx-[24px] lg:text-left'>
              <p className='font-belfair opacity-[0.5] sm:text-[16px]'>THE TERMINOLOGY…</p>
              <h1 className='font-belfair text-[24px] sm:text-[46px] mt-[8px] mb-[16px]'>LAUNCH VEHICLE</h1>
              <p className='text-[15px] sm:text-[16px] max-w-[458px]'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
              
            </div> 
          </div>
          
        </div>
       
      </main>
    )
  }
  
  export default technology;