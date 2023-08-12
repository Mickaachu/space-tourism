'use client';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from 'next/navigation';
import {  motion, useCycle, AnimatePresence} from "framer-motion";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [mobileNav, ToggleMobileNav] = useCycle(false, true)
  const currentpath = usePathname();


  
  const handleNavButton = () => {
    ToggleMobileNav()
  }
  return (
    <div className='flex items-center justify-between fixed top-0 left-0 right-0 z-50 lg:pt-[64px]'>
        <div className='py-[24px] px-[24px] lg:pl-[55px]'>
          <Image src="/shared/logo.svg" width={48} height={48} />
        </div>
        
       {/*Desktop navbar */}
        <div className='hidden relative md:flex gap-[38px] px-[48px] text-[14px] uppercase backdrop-blur-2xl bg-navbar md:max-w-[830px] lg:gap-[50px] lg:pr-[167px] lg:pl-[123px]'>
          <div className='hidden xl:block max-w-[473px] bg-[#FFFFFF] 
            h-px w-full -mr-[300px] z-10 absolute top-2/4 -left-[60%]'>
          </div>
        <Link  className={currentpath === '/' ? 'py-[40px] border-b-[3px] active:border-white' : 'py-[40px] border-b-[3px] border-transparent'} href="/">Home</Link>
          <Link className={currentpath === '/destination' ? 'py-[40px] border-b-[3px] active:border-white' : 'py-[40px] border-b-[3px] border-transparent'} href="/destination">Destination</Link>
          <Link className={currentpath === '/crew' ? 'py-[40px] border-b-[3px] active:border-white' : 'py-[40px] border-b-[3px] border-transparent'} href="/crew">Crew</Link>
          <Link className={currentpath === '/technology' ? 'py-[40px] border-b-[3px] active:border-white' : 'py-[40px] border-b-[3px] border-transparent'} href="/technology">Technology</Link>
        </div>
        {/*Mobile navbar */}
        <div className='px-[24px] md:hidden'>
          <button  onClick={() => handleNavButton()}>
            <Image src="/shared/icon-hamburger.svg" width={24} height={21} />
          </button>
        </div>
        <AnimatePresence >
          {mobileNav && (
            <motion.div key='mobileNav'
            variants={{
              open: {x: '0%'},
              closed: {x:'100%'}
            }}
            animate='open'
            initial='closed'
            exit='closed'
            transition={{delay: 0.1,duration:1, ease:'circOut'}}
            
            className='fixed top-0 bottom-0 right-0 backdrop-blur-2xl bg-navbar
              flex flex-col w-[254px] gap-[64.95px] md:hidden'
            >
              <div className='flex justify-end pt-[34px] px-[26.45px]'>
                <button onClick={() => ToggleMobileNav()}>
                  <Image src="/shared/icon-close.svg" width={24} height={21} />
                </button>
              </div>
              <div className='flex flex-col px-[32px] gap-[32px] font-barlow-condensed text-[16px] tracking-[2.7px]'>
                <Link href="/" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>00</span>HOME</Link>
                <Link href="/destination" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>01</span>DESTINATION</Link>
                <Link href="/crew" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>02</span>CREW</Link>
                <Link href="/technology" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>03</span>TECHNOLOGY</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
          
      
    </div>
  )
}

export default Header