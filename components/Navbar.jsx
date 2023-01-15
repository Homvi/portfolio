import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from "../components/CustomButton"
import { useState } from "react"

const Navbar = ({ isBorder }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (

        <nav className={isBorder ? 'w-screen fixed top-0 left-0  border-box backdrop-blur-sm transition-all  duration-75 border-b-[1px] border-white/20 z-50' : 'w-screen fixed top-0 left-0  border-box backdrop-blur-sm border-white/20 z-50'}>
            {/* mobile nav until md*/}
            <div className="md:hidden flex h-10 justify-between items-center pl-2">

                {/* logo */}
                <Link href="/" >
                    <Image alt='logo' height={30} width={30} src="/img/logo-grey.svg" />
                </Link>
                {/* burger */}
                <div onClick={toggleMenu} className={isMenuOpen ? "border-slate-300 m-3  transition-all duration-100 cursor-pointer flex justify-center relative rounded-md flex-col  h-7 w-7 items-center" : "m-3 transition-all duration-100 cursor-pointer relative flex justify-center rounded-md border-slate-300 flex-col h-7 w-8 items-center"}>
                    <div className={isMenuOpen ? " border-slate-300  transition-all duration-300 border-b-2 rotate-45 h-0 w-5 translate-y-[-1px] translate-x-[0px]" : " border-slate-300 transition-all duration-300 border-b-2 h-2 w-5"} ></div>
                    <div className={isMenuOpen ? " border-slate-300 h-0 scale-0" : " border-slate-300 transition-all duration-300 h-2 w-7"}></div>
                    <div className={isMenuOpen ? " border-slate-300 transition-all duration-300 border-t-2 rotate-[-45deg] translate-x-[-4px] translate-y-[0px] absolute right-0 top-3 h-0 w-5" : " border-slate-300 transition-all duration-300 border-t-2 h-2 w-5"}></div>
                </div>
            </div>
            {/* mobile menu */}

            <div className={isMenuOpen ? "bg-black/95 transition-opacity duration-100 w-screen absolute text-lg flex flex-col justify-center text-white/95 items-center opacity-100 h-screen backdrop-blur-lg" : "  transition-all  duration-100 w-screen absolute m-0 p-0  flex-col justify-start  items-center opacity-0 scale-0 "}>
                <Link onClick={toggleMenu} href={"/"} className={isMenuOpen ? ' ease-in  delay-100 opacity-100 p-3   w-full text-center translate-x-0  ' : '   p-2   w-full text-center opacity-0'} >Home</Link>
                <a onClick={toggleMenu} href={"#works"} className={isMenuOpen ? ' ease-in  delay-200 opacity-100 p-3   w-full text-center' : ' p-2   w-full text-center opacity-0'} >Works</a>
                <a onClick={toggleMenu} href={"#contact"} className={isMenuOpen ? ' ease-in  delay-300 opacity-100 p-3   w-full text-center' : '  p-2   w-full text-center opacity-0'} >Contact</a>
                <a onClick={toggleMenu} href="/assets/CV/HonvedoAdam_Frontend_CV.pdf" download="Adam_Honvedo_CV_Frontend" className={isMenuOpen ? 'ease-in delay-300 opacity-100 p-3  w-full text-center' : 'p-2  w-full text-center opacity-0'} >Download CV</a>
            </div>

            {/* desktop nav above md*/}
            <div className="hidden md:grid grid-rows-1 grid-cols-3 h-14 justify-between items-center pl-2 pr-10">

                {/* logo */}
                <Link href="/" className='p-3'>
                    <Image alt='logo' height={40} width={40} src="/img/logo-grey.svg" />
                </Link>

                {/* menu items */}
                <div className="justify-around grid grid-cols-3 grid-rows-1 text-gray-400">
                    <Link href={"/"} className=" text-center hover:text-white/95 opacity-90 felx justify-center hover:opacity-100" >
                        About me
                    </Link>
                    <a href={"#works"} className=" text-center hover:text-white/95 border-l-2 border-r-2 border-white/20 felx justify-center px-4 opacity-90 hover:opacity-100" >
                        Works
                    </a>
                    <a href={"#contact"} className=" text-center hover:text-white/95 felx justify-center   opacity-90 hover:opacity-100" >
                        Contact
                    </a>
                </div>
                <div className="flex justify-end">
                    <CustomButton linkTo={"/contact"} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

