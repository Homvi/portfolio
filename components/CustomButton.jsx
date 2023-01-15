import React from 'react'
import Link from 'next/link'

const Button = ({ linkTo }) => {

    const gadientColors = {
        orange: {
            start: "#ff4d4d",
            end: "#f9cb28"
        },
        blue: {
            start: "#007cf0",
            end: "#00dfd8"
        }
    }

    return (
        <>
            <div className="flex px-3  py-1  relative hover:opacity-95 transition-all duration-300 cursor-pointer flex-col  justify-center  items-center">
                <div className="flex pb-1">
                    <a href="/assets/CV/HonvedoAdam_Frontend_CV.pdf" download="Adam_Honvedo_CV_Frontend">
                        Download CV
                    </a>
                </div>
                <div className='flex h-[1px] absolute bottom-1  rounded-xl transition-all duration-300 justify-center cursor-pointer  items-center bg-gradient-to-r pb-[1px] from-[#00dfd800] via-[#007cf07c] to-[#00dfd800]' >
                    <div className="felx  rounded-sm px-8  bg-[#ffffff] text-md   justify-center items-center">
                        <Link href={linkTo}></Link>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Button