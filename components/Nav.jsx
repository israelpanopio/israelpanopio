import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='sticky top-0 flex justify-between w-full pt-3'>
        <Link href='/' className='flex flex-row' >
            <div >
            <Image
                src='/logo.png'
                alt='logo'
                width={45}
                height={45}
                className='object-contain'
            /> </div>
            <span className='text-3xl pl-2'>
                MENU
            </span>
        </Link>
        <Link href="mailto:israelbrowser@gmail.com" className='text-2xl inline-block pr-2'>
            <span className='text-2xl pr-2'>
                Hire me
            </span>
            <FaEnvelope className='inline pb-1' /> 
        </Link>
    </nav>
  )
}

export default Nav