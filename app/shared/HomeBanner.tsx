import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiGitea } from "react-icons/si";

const HomeBanner = ({}) => {
  return (
    <section className={"content-fade-in"}>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-end">
          <div className="flex flex-row space-x-3 text-neutral-500 transition  animate fadeInRight">
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://git.sheetjs.com/asadbek064" aria-label="Gitea">
                <SiGitea className="h-5 w-5" />
              </a>
            </div>
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/asadbek064" aria-label="GitHub">
                <AiFillGithub className="h-5 w-5" />
              </a>
            </div>
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://ezy.ovh/asadk-dev" aria-label="DEV Community">
                <FaDev className="h-5 w-5" />
              </a>
            </div>
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bsky.app/profile/asabekkarimov.bsky.social"
                aria-label="Bluesky"
              >
                <FaBluesky className="h-5 w-5" />
              </a>
            </div>
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/realasadbek" aria-label="X (Twitter)">
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>
            <div className="hover:text-neutral-800 duration-100 dark:hover:text-blue-400 cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://mylinx.cc/asad" aria-label="Mylinx">
                <img
                  src="./images/mylinx-logo-square.svg"
                  alt="Mylinx logo"
                  className="h-5 w-5  rounded-sm cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="md:[font-size:var(--step-5)] [font-size:var(--step-3)] text-neutral-800 dark:text-neutral-200 font-semibold">
          👋 Asad
        </div>
        <div className="text-gray-600 dark:text-white font-light md:text-lg">
          <span>Lead Software Engineer at&nbsp;</span>
          <Link
            className="hover:text-blue-500"
            href={"https://sheetjs.com/"}
          >
            SheetJS
          </Link>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <div className="text-gray-600 dark:text-white font-light md:text-xl">
          Building spreadsheet engines, file-format tooling, and developer
          infrastructure for the web. Core contributor to &nbsp;
          <Link
            href="https://sheetjs.com/"
            className="underline hover:text-blue-500 font-bold transition"
          >
            SheetJS
          </Link>
          &nbsp; | Creator of{" "}
          <Link
            href="https://mylinx.cc"
            className="underline hover:text-blue-500 font-bold transition"
          >
            mylinx.cc
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
