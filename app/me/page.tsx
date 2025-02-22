// pages/index.tsx or your component file
'use client'

import {useState} from 'react';
import Script from 'next/script';
import {AiOutlineCalendar} from 'react-icons/ai';
import {FiArrowRight} from 'react-icons/fi';
import {BsLinkedin, BsEnvelopePaper} from 'react-icons/bs';
import Link from 'next/link';
import {ArrowIcon, GitHubIcon} from "@/components/icons";

export default function MePage() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    return (
        <section>
            <div className="animate ease-in">
                <h1 className="font-bold [font-size:var(--step-3)]">Me</h1>
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
                <p className="mb-8">
                    Recent graduate of Queens College with a major in Computer Science, proficient in TypeScript, Java,
                    and Python. Passionate about <b>Data Science</b> and enjoys developing web apps
                    and <b>scrapers</b> in spare time.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2 stagger-child-animations">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/Asadbek-Karimov-Resume.pdf"
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
                <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-4 animate ease-in">
                    <a
                        onClick={openModal}
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between cursor-pointer"
                    >
                        <div className="flex items-center">
                            <AiOutlineCalendar className="text-xl"/>
                            <div className="ml-3">Book a Meeting</div>
                        </div>
                        <FiArrowRight className="text-xl"/>
                    </a>

                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
                            onClick={closeModal}
                        >
                            <div
                                className="bg-white p-0 rounded-lg shadow-md h-4/5 max-h-4/5 w-full max-w-full  md:w-1/2 md:max-w-1/2 md:h-3/4 md:max-h-3/4 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="text-2xl font-bold absolute top-4 right-6 text-gray-600 hover:text-gray-700 z-10"
                                >
                                    &times;
                                </button>
                                <iframe
                                    src="https://calendly.com/asadbekkarimov/30min"
                                    className="w-full h-full"
                                    title="Booking Calendar"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Inject Calendly stylesheet and script */}
            {/*     <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log('Calendly script loaded successfully')}
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      /> */}
        </section>
    );
}
