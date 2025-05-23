import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiGitea } from "react-icons/si";

const Footer = ({ }) => {
    return (
        <div className="mt-2">
            <div className="w-full"></div>

            <div className="flex flex-col space-y-8 md:space-y-2 md:flex-row md:justify-between my-6">
                <div className="flex flex-row space-x-4">
                    <div className="flex flex-row space-x-5 text-neutral-500  dark:text-neutral-200 transition">
                        <div className="hover:text-neutral-900 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a href="mailto:contact@asadk.dev">
                                <MdEmail className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a href="https://git.sheetjs.com/asadbek064">
                                <SiGitea className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a href="https://github.com/asadbek064">
                                <AiFillGithub className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a href="https://twitter.com/realAsadbek">
                                <FaXTwitter className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a href="https://bsky.app/profile/asabekkarimov.bsky.social">
                                <FaBluesky className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
                            <a target="_blank" href="https://mylinx.cc/asad">
                                <img src="./images/mylinx-logo-square.svg" className='h-8 w-8  rounded-sm cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-neutral-800  dark:text-neutral-200 tracking-wide text-center">
                    © Copyright 2025 Asadbek Karimov
                </div>
            </div>
        </div>
    );
}

export default Footer;