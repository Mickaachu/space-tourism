import Image from "next/image";

function crew() {
    return (
      <main className="flex flex-col justify-center items-center pt-[89px]
      bg-[url('/crew/background-crew-mobile.jpg')] bg-cover bg-no-repeat">
        <p className='font-barlow-condensed tracking-[2.7px]'><span className='pr-[18px] font-bold opacity-[0.25]'>02</span> MEET YOUR CREW</p>
        <Image src='/crew/image-douglas-hurley.png' width={178} height={222} className='mt-[32px] mb-[75px]'/>
        
        <div className='text-center pb-[32px] mx-[24px] border-b border-[#313b77]'>
          <p className='font-belfair opacity-[0.5]'>COMMANDER</p>
          <h1 className='font-belfair text-[24px] mt-[8px] mb-[16px]'>DOUGLAS HURLEY</h1>
          <p className='text-[15px]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          
        </div>
       
      </main>
    )
  }

  export default crew;