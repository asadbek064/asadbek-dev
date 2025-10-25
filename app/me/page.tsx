// pages/index.tsx or your component file
'use client'

import {BsLinkedin, BsEnvelopePaper} from 'react-icons/bs';
import Link from 'next/link';
import {ArrowIcon, GitHubIcon} from "@/components/icons";

export default function MePage() {
    return (
        <section>
            <div className="animate ease-in">
                <h1 className="font-bold [font-size:var(--step-3)] text-neutral-800 dark:text-neutral-200">Me</h1>
            </div>
            <div
                className="content-fade-in prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 [font-size:var(--step-0)] animate fadeIn">
                <div className="w-full border-b border-gray-400"></div>
                <p>
                    I currently work as a Software Engineer at <a target='_blank' href='https://sheetjs.com'>SheetJS</a>,
                    where I manage documentation for developer tools, analyze data processing methods, and assist with
                    troubleshooting and resolving technical issues. Additionally, I am leading the complete development
                    of&nbsp;
                    <Link href={'/blog/Creating_Mylinx'}>
                        Mylinx
                    </Link>,
                    a Linktree-like platform that offers bio pages, URL shorteners, and QR codes.
                </p>

                <div className='relative my-12'>
                    <Link href={'https://mylinx.cc/'} target='_blank'><img src="https://mylinx.cc/logo.svg" className='absolute top-4 right-5 w-1/5 md:w-28'/></Link>
                    <div className={'aspect-[16/9] w-full'}>
                        <iframe className={'overflow-hidden min-h-full'} src="https://mylinx-player.pages.dev?provider=YOUTUBE&amp;id=3IDwtt090cY&amp;autoplay=false&amp;mute=false" allowFullScreen  width="100%" allow="autoplay" picture-in-picture="true" clipboard-write="true" loading="lazy" encrypted-media="true"></iframe>
                    </div>
                </div>
                <p className="mb-8">
                    Graduate of <a href='https://www.qc.cuny.edu/' target='_blank'>Queens College</a> with a major in Computer Science, proficient in TypeScript, Java,
                    and Python. Passionate about <b>Data Science</b> and enjoy developing <b>data toolkits</b>&nbsp;
                    and <b>scrapers</b> in my spare time.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2 stagger-child-animations">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://pub-5e5002a97ed346e5906448c5ab66c50b.r2.dev/Asadbek%20Resume%2010_2025.pdf"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <BsEnvelopePaper/>
                            <div className="ml-3">Resume</div>
                        </div>
                        <ArrowIcon/>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/asadbek064"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <GitHubIcon/>
                            <div className="ml-3">GitHub</div>
                        </div>
                        <ArrowIcon/>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/asadbekkarimov/"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <BsLinkedin/>
                            <div className="ml-3">LinkedIn</div>
                        </div>
                        <ArrowIcon/>
                    </a>
                </div>

            </div>
        </section>
    );
}
