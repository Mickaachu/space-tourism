import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-end items-center
      text-[#D0D6F9] pb-[48px] pt-[112px]
      bg-[url('/home/background-home-mobile.jpg')] bg-cover bg-no-repeat"
     >
      <p className='font-barlow-condensed '>SO, YOU WANT TO TRAVEL TO</p>
      <h1 className='text-white font-belfair text-[80px]'>SPACE</h1>
      <p className='px-[24px] text-center'>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
      <div className='pt-[80px]'>
      <button className='w-[150px] h-[150px] bg-white rounded-full text-black 
      font-belfair text-[20px]  font-normal tracking-[1.25px]'>EXPLORE</button>
      </div>
    </main>
  )
}
