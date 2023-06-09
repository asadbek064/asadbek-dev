import type { Metadata } from 'next';
import {
  GitHubIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';
import { BsLinkedin, BsEnvelopePaper } from 'react-icons/bs';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Full-stack developer Experience at Pieshares inc.',
};

export default function AboutPage() {
  return (
    <section>
      <div className="
        dark:bg-gradient-to-r dark:from-amber-200 dark:to-yellow-500 text-transparent bg-clip-text
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        ">
        <h1 className="font-bold text-3xl font-bold">About Me</h1>
      </div>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Asadbek. Most folks know me as <b>light</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently building <Link rel="noopener noreferrer" target='_blank' href="https://animet.site">AnimetTV</Link> a webapp for everything Anime medium.
        </p>
        <hr />
        <p>
         Previously, I worked as a Full-stack developer at the startup <Link rel="noopener noreferrer" target='_blank' href="https://pieshares.com">Pieshares, Inc</Link>. for two years before starting <Link rel="noopener noreferrer" target='_blank' href="https://animet.site">AnimetTV</Link>.
        </p>
        <p className="mb-8">
          As a college student at Queens College University majoring in Computer Science, I thrive in the world of development. My coding expertise spans multiple languages, with Python, TypeScript, and C++ being my top preferences. While I have a strong interest in <b>Data Science</b>, I also enjoy creating scrapers and developing web apps in my free time.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
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
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/ASADBEK_KARIMOV_Resume.pdf"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <BsEnvelopePaper />
              <div className="ml-3">View Resume</div>
            </div>
            <ArrowIcon />
          </a>
          
        </div>
      </div>
    </section>
  );
}
