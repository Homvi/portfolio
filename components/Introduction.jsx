import React from 'react'
import Image from "next/image";

const Introduction = () => {
    return (
        <div  className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                    Adam Honvedo
                </h1>
                <h2 className="text-gray-200 mb-4">Front-end developer</h2>
                <div className="text-gray-400 mb-16">
                    I build and deploy fast and responsive websites with the
                    help of React, Next.js, Tailwind and Vercel.
                </div>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                    height={156}
                    width={158}
                    src="/img/profile.png"
                    alt="adam"
                    className="rounded-full filter grayscale"
                />
            </div>
        </div>
    )
}

export default Introduction