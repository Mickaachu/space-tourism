import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-end items-center
      text-[#D0D6F9] pb-[48px] md:pb-[90px] pt-[112px] md:pt-[202px] px-[24px] md:pl-[162px] md:pr-[162px]
      bg-[url('/home/background-home-mobile.jpg')]
      sm:bg-[url('/home/background-home-tablet.jpg')]
      lg:bg-[url('/home/background-home-desktop.jpg')]
      bg-cover bg-no-repeat w-full h-full"
     >
      <p className='font-barlow-condensed md:text-[24px]' >SO, YOU WANT TO TRAVEL TO</p>
      <h1 className='text-white font-belfair text-[80px] md:text-[150px]'>SPACE</h1>
      <p className=' text-center'>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
      <div className='pt-[80px] md:pt-[156px]'>
      <button className='w-[150px] h-[150px] md:w-[242px] md:h-[242px] bg-white rounded-full text-black 
      font-belfair text-[20px]  font-normal tracking-[1.25px]'>EXPLORE</button>
      </div>
    </main>
  )
}
