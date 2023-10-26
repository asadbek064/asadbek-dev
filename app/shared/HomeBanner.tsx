import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const HomeBanner = ({}) => {
    return (
        <>
        <div className="flex flex-col space-y-5">
            <div className="flex justify-end">
                <div className="flex flex-row space-x-3 text-neutral-500 transition">
                    <div className="hover:text-neutral-900 duration-100 cursor-pointer"> 
                        <a>
                            <AiFillGithub className="h-5 w-5" />
                        </a>
                    </div>
                    <div className="hover:text-neutral-900 duration-100 cursor-pointer">
                        <a>
                            <FaTwitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="md:[font-size:var(--step-5)] [font-size:var(--step-3)] text-neutral-800 font-semibold">👋 Hey, I'm Asad!</div>
        </div>
        </>
    );
}

export default HomeBanner;