import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <header className='w-full h-[67px] flex justify-end items-center bg-[#faf5f5] mx-auto px-16'>
        <nav className='h-[24px] w-[283px] flex justify-end items-center fixed top-6 gap-8 '>
            <Link href= '' className='text-[20px] font-medium text-[#000]'>Works</Link>
            <Link href= '/blog' className='text-[20px] font-medium text-[#000]'>Blog</Link>
            <Link href= '/contact' className='text-[20px] font-medium text-[#000]'>Contact</Link>
        </nav>

    </header>
  )
}

export default Navbar