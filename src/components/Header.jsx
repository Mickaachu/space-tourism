'use client';
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='flex items-center justify-between fixed top-0 left-0 right-0 z-50'>
        <div className='py-[24px] px-[24px]'>
          
          <Image src="/shared/logo.svg" width={48} height={48} />
        </div>
       {/*Desktop navbar */}
        <div className='hidden'>
          <Link href="/">Home</Link>
          <Link href="/destination">Destination</Link>
          <Link href="/crew">Crew</Link>
          <Link href="/technology">Technology</Link>
        </div>
        {/*Mobile navbar */}
        <div className='px-[24px]'>
          <button onClick={() => setNavbar(!navbar)}>
            <Image src="/shared/icon-hamburger.svg" width={24} height={21} />
          </button>
          
        </div>
        {navbar && (
            <div className='fixed top-0 bottom-0 right-0 backdrop-blur-2xl bg-navbar
              flex flex-col w-[254px] gap-[64.95px]'
            >
              <div className='flex justify-end pt-[34px] px-[26.45px]'>
                <button onClick={() => setNavbar(!navbar)}>
                  <Image src="/shared/icon-close.svg" width={24} height={21} />
                </button>
              </div>
              <div className='flex flex-col px-[32px] gap-[32px] font-barlow-condensed text-[16px] tracking-[2.7px]'>
                <Link href="/" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>00</span>HOME</Link>
                <Link href="/destination" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>01</span>DESTINATION</Link>
                <Link href="/crew" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>02</span>CREW</Link>
                <Link href="/technology" onClick={() => setNavbar(!navbar)}><span className='font-bold pr-[11px]'>03</span>TECHNOLOGY</Link>
              </div>
            </div>
          )}
          
      
    </div>
  )
}

export default Header