import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ isBorder }) => {
    return (
        <div className={isBorder ? 'transition-all  duration-75 border-b-[1px] border-white/20 flex justify-between fixed top-0 left-0 w-screen backdrop-blur-sm z-50' : 'border-white/0 flex border-b-[1px] justify-between transition-all duration-75 fixed top-0 left-0 w-screen backdrop-blur-sm z-50'} >
            <div className='flex'>
                <div id="logo" className='p-3  '>
                    <Link href="/">
                        <Image alt='logo' height={50} width={50} src="/img/logo-grey.svg" />
                    </Link>
                </div>
                <div id="menu" className='flex max-w-2xl items-center justify-center'>
                    <a href="#" className="text-gray-400 p-3 hover:text-white" >Intro</a>
                    <a href="#works" className="text-gray-400 p-3 hover:text-white" >Works</a>
                </div>
            </div>
            <div className="flex items-center">
                <a href="/assets/CV/HonvedoAdam_Frontend_CV.pdf" download="Adam_Honvedo_CV_Frontend">
                    <div className="cursor-pointer flex items-center justify-center text-gray-400 text-center rounded-lg border-2 border-gray-600 h-9 w-16 mr-4 md:mr-8 ">
                        CV
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar