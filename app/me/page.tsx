import type { Metadata } from 'next';
import {
  GitHubIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';
import { BsLinkedin, BsEnvelopePaper } from 'react-icons/bs';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Me',
  description: 'Full-stack developer Experience at Pieshares inc.',
};

export default function MePage() {
  return (
    <section>
      <div className="
        
        animate fadeIn
        ">
        <h1 className="font-bold [font-size:var(--step-3)]">Me</h1>
      </div>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 [font-size:var(--step-0)] animate fadeIn">
        {/* <p>
          I'm currently building <Link rel="noopener noreferrer" target='_blank' href="https://anitrek.co">AniTrek</Link> a webapp for everything Anime medium.
        </p> */}
        <div className="w-full border-b border-gray-400"></div>
        <p>
         Previously, I worked as a software engineer intern at the startup <a target='_blank' href='https://pieshares.com'>Pieshares, Inc</a>.
         Currently, I am leading the complete development of <a target='_blank' href='https://mylinx.cc'>mylinx.cc.</a>
        </p>
        <p className="mb-8">
        Recent graduate of Queens College with a major in Computer Science, proficient in TypeScript, Java, and Python. Passionate about <b>Data Science</b> and enjoys developing web apps and <b>scrapers</b> in spare time.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/Asad Karimov Resume_v1.pdf"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <BsEnvelopePaper />
              <div className="ml-3">Resume</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/asadbek064"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/asadbekkarimov/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <BsLinkedin />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          
        </div>
      </div>
    </section>
  );
}
