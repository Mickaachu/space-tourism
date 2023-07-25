import Image from 'next/image';
function technology() {
    return (
      <main className="flex flex-col justify-center items-center pt-[89px]
      bg-[url('/destination/background-destination-mobile.jpg')] bg-cover bg-no-repeat ">
        <p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>03</span>SPACE LUNCH 101</p>
        <div className="relative w-full max-w-[768px] h-[117px] md:h-[310px] mt-[32px] mb-[34px]">
          <Image src='/technology/image-launch-vehicle-landscape.jpg' fill />
        </div>
        <div className='text-center pb-[32px] mx-[24px] '>
          <p className='font-belfair opacity-[0.5]'>THE TERMINOLOGY…</p>
          <h1 className='font-belfair text-[24px] mt-[8px] mb-[16px]'>LAUNCH VEHICLE</h1>
          <p className='text-[15px]'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          
        </div>
       
      </main>
    )
  }
  
  export default technology;