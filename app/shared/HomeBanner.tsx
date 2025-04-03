import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import {FaBluesky} from "react-icons/fa6";

const HomeBanner = ({}) => {
    return (
        <section className={"content-fade-in"}>
        <div className="flex flex-col space-y-5">
            <div className="flex justify-end">
                <div className="flex flex-row space-x-3 text-neutral-500 transition  animate fadeInRight">
                    <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
                        <a target="_blank" href="https://github.com/asadbek064">
                            <AiFillGithub className="h-5 w-5"/>
                        </a>
                    </div>
                    <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
                        <a target="_blank" href="https://ezy.ovh/asadk-dev">
                            <FaDev className="h-5 w-5"/>
                        </a>
                    </div>
                    <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
                        <a target="_blank" href="https://bsky.app/profile/asabekkarimov.bsky.social">
                            <FaBluesky className="h-5 w-5"/>
                        </a>
                    </div>
                    <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
                        <a target="_blank" href="https://x.com/realasadbek">
                            <FaTwitter className="h-5 w-5"/>
                        </a>
                    </div>

                </div>
            </div>

            <div
                className="md:[font-size:var(--step-5)] [font-size:var(--step-3)] text-neutral-800 dark:text-neutral-200 font-semibold">👋
                Asad Karimov
            </div>
            <div className="text-gray-600 dark:text-white font-light md:text-lg">
                <span>Writing code at&nbsp;</span>
                <Link className="underline hover:text-blue-500" href={'https://sheetjs.com/'}>SheetJS.</Link>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div className="text-gray-600 dark:text-white font-light md:text-lg ">Software Engineer 📊 at <Link href={'https://sheetjs.com/'} className="underline">sheetjs.com </Link>| R&D, docs & integrations | <Link href={'mylinx.cc'} className="underline">mylinx.cc</Link> creator 🔗 |  Sheetlang ·👨‍🔬 Architect. I am passionate about solving tricky problems, optimizing data, and working with <span className="font-bold">data toolkits.</span></div>
        </div>
        </section>
    );
}

export default HomeBanner;