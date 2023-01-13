import React from 'react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';


import Link from 'next/link';

const Contact = () => {
    return (
        <>
            <h3
                id="works"
                className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-left w-full text-white"
            >
                Find me
            </h3>
            <div className="flex text-6xl mb-5 justify-start">
                <a href="https://www.linkedin.com/in/adamhonvedo/" rel="noreferrer noopener" className='pr-5 hover:scale-105 text-gray-100 hover:text-white' target="_blank" >
                    <FaLinkedin />
                </a>
                <Link href="https://github.com/Homvi" rel="noreferrer noopener" className='hover:scale-105 text-gray-100 hover:text-white' target="_blank"  >
                    <FaGithubAlt />
                </Link>
            </div>
        </>
    )
}

export default Contact