import HomeBanner from "./shared/HomeBanner";
import Link from "next/link";
import { format } from "date-fns";
import { Timeline } from "./components/timeline";
import Image from "next/image";
import { Badge } from "./components/Badge";
import { Card, CardContent } from "./components/Card";
import { allBlogs } from "@/.contentlayer/generated";

export const revalidate = 60;

export default async function HomePage() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Software Engineer at SheetJS
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
            Improving data processing and documentation solutions in the heart
            of NYC
          </p>
          <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-6">
            <li>Working on R&D, technical documentation, integrations, and customer support.</li>
            <li>
              <span className="list-disc">Developed a custom&nbsp;</span>
              <Link
                className="underline hover:text-blue-400 ease-in duration-100"
                href={
                  "https://git.sheetjs.com/sheetjs/sheetjs/src/branch/master/packages/dta"
                }
                target="_blank"
              >
                codec
              </Link>
              <span>
                &nbsp;to read and write Stata .DTA files, enabling CSF workbook
                object generation.
              </span>
            </li>
            <li>
              Boosted Gitea server performance by 50% through smart caching and
              solving archive overfill issues.
            </li>
            <li>Resolved 50+ critical technical issues, improving system reliability and uptime.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Link href={"https://sheetjs.com/"} target="_blank">
              <Image
                src="/images/timeline/shjs-banner.jpeg"
                alt="Sheetjs logo"
                width={360}
                height={240}
                className="rounded-lg object-cover h-28 w-full shadow-lg"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Software Engineer Intern at PieShares Inc
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
            Transforming user experiences and optimizing backend performance
            remotely
          </p>
          <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-6">
            <li>
              Increased user interactions by 30% with engaging Angular
              interfaces
            </li>
            <li>
              Reduced load times by 15% and increased user retention by 20%
            </li>
            <li>Implemented smart caching for 20% faster load times</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <Card className="mb-6 transition-shadow duration-250">
            <CardContent className="p-4">
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <Link
                    className="hover:cursor-pointer"
                    href={"https://mylinx.cc/"}
                    target="_blank"
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-neutral-800 dark:text-white ease-in-out duration-200 hover:text-blue-400 hover:underline">
                      Mylinx.cc
                    </h3>
                  </Link>

                  <div className="flex gap-3">
                    <a
                      href="https://mylinx.cc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                    >
                      Live
                    </a>
                  </div>

                </div>
              </div>

              <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
                Revolutionizing bio pages, URL shorteners, and QR codes.
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-4">
                <li>Achieved over 2K users and 750K visits</li>
                <li>Achieved $700+MRR</li>
                <li>
                  <span className="list-disc">Features -&nbsp;</span>
                  <Link
                    className="underline hover:text-blue-400 ease-in duration-100"
                    href={"https://mylinx.cc/features"}
                    target="_blank"
                  >
                    See for yourself!
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6 transition-shadow duration-250">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      <a
                        href="https://bincode.asadk.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-semibold hover:text-blue-500 transition-colors flex items-center gap-1 hover:underline"
                      >
                        BinCode
                      </a>
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://bincode.asadk.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/asadbek064/bincode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
                    Lightweight self-hosted tool for simple, reliable team code sharing without external dependencies.
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg">
                    <li>A Complete Self-Hostable JSFiddle Alternative</li>
                    <li>No signups just create users manually and they can start committing snippets to share</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-6 transition-shadow duration-250">
            <CardContent className="p-4">
              <Link
                className="hover:cursor-pointer"
                href={"https://www.anitrek.com/"}
                target="_blank"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-neutral-800 dark:text-white ease-in-out duration-200 hover:text-blue-400 hover:underline">
                  Anitrek.com
                </h3>
              </Link>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
                Innovative anime platform for content discovery and community
                engagement.
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-4">
                <li>Attracted 3K+ users and 1.2M searches in 3 months</li>
                <li>
                  🔍 <b>Advanced Search</b> Find anime, manga, voices,
                  characters, and scenes with AI-powered search
                </li>
                <li>
                  📅 <b>Unified Watchlists</b> - Consolidate watchlists across
                  multiple providers
                </li>
                <li>
                  💬 <b>Interactive Community</b> - Comment engine with
                  reactions, nested replies, and markdown
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6 transition-shadow duration-250">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      <a
                        href="https://sheetsense.asadk.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-semibold hover:text-blue-500 transition-colors flex items-center gap-1 hover:underline"
                      >
                        SheetSense
                      </a>
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://sheetsense.asadk.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Demo
                      </a>
                      <a
                        href="https://ezy.ovh/bmicX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300">
                    <li>Excel workbook validation engine that detects quality issues, ensures consistency and makes your spreadsheets bulletproof.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-6 transition-shadow duration-250">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      <a
                        href="https://reactallplayer.asadk.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-semibold hover:text-blue-500 transition-colors flex items-center gap-1 hover:underline"
                      >
                        ReactAllPlayer
                      </a>
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://reactallplayer.asadk.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/asadbek064/react-all-player"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-200 hover:text-blue-500 transition-colors flex items-center gap-1"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
                    Customizable React video player with multi-resolution,
                    streaming, and accessibility support.
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-4">
                    <li>
                      💪 <b>Accessible</b> – Full support for VTT captions and
                      screen readers
                    </li>
                    <li>
                      🔧 <b>Customizable</b> – Design your player with flexible
                      markup
                    </li>
                    <li>
                      📱 <b>Responsive</b> – Adapts seamlessly to any screen size
                    </li>
                    <li>
                      📹 <b>Streaming</b> – Supports hls.js and dash.js playback
                    </li>
                    <li>
                      🔎 <b>Fullscreen</b> – Native fullscreen with "full window"
                      fallback
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Queens College, CUNY</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-4">
            Bachelor of Arts in Computer Science (Graduated: January 2024)
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link href={"https://www.qc.cuny.edu/"} target="_blank">
              <Image
                src="/images/timeline/qc.webp"
                alt="Queens College Campus"
                width={360}
                height={240}
                className="rounded-lg object-cover h-28 w-full shadow-lg hover:cursor-pointer"
              />
            </Link>
            <Link href={"https://www.qc.cuny.edu/"} target="_blank">
              <Image
                src="/images/timeline/qc-logo.webp"
                alt="Graduation Ceremony"
                width={360}
                height={240}
                className="rounded-lg object-cover h-28 w-full shadow-lg"
              />
            </Link>
          </div>
          <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Distributed Systems",
              "Data Structures & Algorithms",
              "Operating Systems",
              "Software Engineering",
              "Big Data Analytics",
            ].map((lang) => (
              <Badge className="text-xs sm:text-sm md:text-base" key={lang} variant="outline">
                {lang}
              </Badge>
            ))}
          </div>
          <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Notable Achievements</h4>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg">
            <li>Dean's List for 4 consecutive semesters</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Skills & Awards",
      content: (
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Technical Proficiencies
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "Java",
                  "Python",
                  "C",
                  "CSS",
                  "HTML",
                ].map((lang) => (
                  <Badge className="text-xs sm:text-sm md:text-base" key={lang} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Angular",
                  "Node.js",
                  "Kafka",
                  "Prisma",
                  "TailwindCSS",
                  "Chakra UI",
                ].map((tool) => (
                  <Badge className="text-xs sm:text-sm md:text-base" key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4">Awards & Recognitions</h3>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mb-4">
            <li><Link href={'https://cdn.sheetjs.com/advisories/CVE-2024-22363'} target="_blank">Acknowledged Contributor for <span className="underline hover:text-blue-400 ease-in duration-100">CVE-2024-22363 (SheetJS CE)</span></Link></li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <section className="space-y-16">
      <HomeBanner />
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row"></div>

      <div className="flex flex-col my-12">
        <div className="space-y-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-neutral-800 dark:text-neutral-200 animate ease-in">
            Blog
          </h1>

          <div className={"stagger-child-animations"}>
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .map((post) => (
                <Link
                  key={post.slug}
                  className="flex flex-col space-y-2 mb-6 p-6 bg-white/70 dark:bg-[#111010]/70
                  rounded-md hover:shadow-md border border-transparent
                  duration-200 ease-in  hover:border-gray-400
                  hover:bg-gray-100 dark:hover:bg-neutral-900 transition"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <div className="text-neutral-900 dark:text-neutral-100 tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl">
                      {post.title}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400">
                      {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <Timeline data={data} />
        {/* <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-neutral-800  dark:text-neutral-200 ">Check These Out!</div>
        <ProjectList projects={projects} /> */}
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400"></ul>
    </section>
  );
}