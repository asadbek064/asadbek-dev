import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({}) => {
    return (
        <div>
            <div className="w-full"></div>

            <div className="flex flex-col space-y-8 md:space-y-2 md:flex-row md:justify-between my-6">
                <div className="flex flex-row space-x-4">
                    <div className="flex flex-row space-x-5 text-neutral-500  dark:text-neutral-200 transition">
                        <div className="hover:text-neutral-900 duration-100 cursor-pointer"> 
                            <a href="mailto:contact@asadbek.dev">
                                <MdEmail className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 cursor-pointer"> 
                            <a href="https://github.com/asadbek064">
                                <AiFillGithub className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="hover:text-neutral-900 duration-100 cursor-pointer">
                            <a href="https://twitter.com/realAsadbek">
                                <FaTwitter className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-neutral-800  dark:text-neutral-200 tracking-wide text-center">
                    © Copyright 2020 - 2024 Asadbek Karimov
                </div>
            </div>
        </div>
    );
}

export default Footer;