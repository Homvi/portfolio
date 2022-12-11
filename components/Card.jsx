import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';
import Link from 'next/link'

const Card = () => {
    return (
        <div className="rounded-xl shadow-xl shadow-cyan-500/30 hover:scale-[1.01] transition-all duration-75 w-60 h-80 mx-auto md:mx-3  mt-5 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <div className="flex flex-col justify-between h-full bg-black text-white rounded-lg p-4">
                <div className="">
                    <h4 className="text-lg py-2 font-bold">Wedding site</h4>
                    <h4 className="text-md py-1 font-bold">description</h4>
                    <p>
                        I created this site with the help of a designer friend.
                    </p>
                    <div className="">
                        <h4 className="text-md py-1 font-bold">Technologies</h4>
                        <p>
                            React, Next.js, Tailwind, Netlify
                        </p>
                    </div>

                </div>
                <div className="flex justify-around py-2">
                    <span className='w-5 text-2xl'>
                        <Link href="#git">
                            <AiFillGithub />
                        </Link>
                    </span>
                    <span className='w-5 text-2xl'>
                        <Link href="#git">
                            <AiFillLinkedin />
                        </Link>
                    </span>
                    <span className='w-5 text-2xl '>
                        <Link href="#git">
                            <MdWebAsset />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;