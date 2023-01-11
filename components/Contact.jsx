import React from 'react'
import Image from 'next/image'
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from 'react-icons/ti';

import Link from 'next/link';

const Contact = () => {
    return (
        <>
            <h3
                id="works"
                className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-left w-full text-white"
            >
                Contact
            </h3>
            <div className="flex text-8xl mb-5 justify-start">
                <a href="https://www.linkedin.com/in/adamhonvedo/" rel="noreferrer noopener"  target="_blank" >
                    <TiSocialLinkedinCircular />
                </a>
                <Link href="https://github.com/Homvi" rel="noreferrer noopener" target="_blank"  >
                    <TiSocialGithubCircular />
                </Link>
            </div>
        </>
    )
}

export default Contact