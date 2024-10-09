import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const HomeBanner = ({}) => {
    return (
        <>
        <div className="flex flex-col space-y-5">
            <div className="flex justify-end">
                <div className="flex flex-row space-x-3 text-neutral-500 transition  animate fadeInRight">
                    <div className="hover:text-neutral-800 duration-100 cursor-pointer"> 
                        <a target="_blank" href="https://github.com/asadbek064">
                            <AiFillGithub className="h-5 w-5" />
                        </a>
                    </div>
                    <div className="hover:text-neutral-800 duration-100 cursor-pointer">
                        <a target="_blank" href="https://x.com/realasadbek">
                            <FaTwitter className="h-5 w-5" />
                        </a>
                    </div>
                    <div className="hover:text-neutral-800 duration-100 cursor-pointer">
                        <a target="_blank" href="https://ezy.ovh/asadk-dev">
                            <FaDev  className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="md:[font-size:var(--step-5)] [font-size:var(--step-3)] text-neutral-800 dark:text-neutral-200 font-semibold">👋 Hey, I'm Asad!</div>
            <div className="text-gray-600 dark:text-white font-light">I’m all about diving into data science and scraping big datasets for easy access. I love solving tricky problems, optimizing data, and <span className="font-bold">building tools that everyone can use.</span></div>
        </div>
        </>
    );
}

export default HomeBanner;