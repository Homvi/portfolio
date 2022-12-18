import { AiFillGithub } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';
import { SiPagespeedinsights } from 'react-icons/si';

const Card = ({ name, desc, technologies, git, live, speed }) => {
    return (
        <div className="rounded-xl  m-5 mr-0 ml-5 mb-10 shadow-xl hover:shadow-cyan-500/40 shadow-cyan-500/30 hover:scale-[1.01] transition-all duration-75 w-60 h-80 mx-auto md:mx-3  mt-5 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <div className="flex flex-col justify-between h-full bg-black text-white rounded-lg p-4">
                <div className="">
                    <h4 className="text-lg py-2 font-bold">{name}</h4>
                    <h4 className="text-md py-1 font-bold">Description</h4>
                    <p>
                        {desc}
                    </p>
                    <div className="">
                        <h4 className="text-md py-1 font-bold">Technologies</h4>
                        <p>
                            {technologies}
                        </p>
                    </div>

                </div>
                <div className="flex justify-between items-center py-2">
                    <span className='w-5 mx-3 text-3xl'>
                        <a target="_blank" rel="noopener noreferrer" href={git}>
                            <AiFillGithub />
                        </a>
                    </span>
                    <span className='w-5 mx-3 text-3xl '>
                        <a target="_blank" rel="noopener noreferrer" href={live}>
                            <MdWebAsset />
                        </a>
                    </span>
                    <span className='w-5  mx-3 text-2xl'>
                        <a target="_blank" rel="noopener noreferrer" href={speed}>
                            <SiPagespeedinsights />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;