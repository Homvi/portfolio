import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='border-b-[1px] border-white/20 flex justify-start fixed top-0 left-0 w-screen backdrop-blur-sm z-50' >
            <div id="logo" className='p-3 w-[33vw]'>
                <Link href="/">
                    <Image alt='logo' height={18} width={18} src="/img/luxcode-logo.svg" />
                </Link>
            </div>
            <div id="menu" className='flex w-[33vw] items-center justify-center'>
                <a href="#" className="text-gray-400 p-3 hover:text-white" >Intro</a>
                <a href="#works" className="text-gray-400 p-3 hover:text-white" >Works</a>
            </div>
        </div>
    )
}

export default Navbar