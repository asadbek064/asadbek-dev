
import HomeBanner from './shared/HomeBanner';
import ProjectList from './project/project-list';
import { projects } from './project/projects';
import { allBlogs } from "contentlayer/generated";
import Link from 'next/link';
import { format } from 'date-fns';
import { Timeline } from './components/timeline';
import Image from "next/image";
import { Badge } from './components/Badge';
import { Card, CardContent } from './components/Card';

export const revalidate = 60;

export default async function HomePage() {

  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Software Engineer at SheetJS</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Revolutionizing data processing and documentation in the heart of NYC
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-6">
            <li>Improved integration time by 25% through enhanced documentation</li>
            <li>Resolved 50+ critical technical issues</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
          <Link href={'https://sheetjs.com/'} target='_blank'>
              <Image
                src="/images/timeline/shjs-banner.jpeg"
                alt="PieShares Banner"
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
          <h3 className="text-lg font-semibold mb-2">Software Engineer Intern at PieShares Inc</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Transforming user experiences and optimizing backend performance remotely
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-6">
            <li>Increased user interactions by 30% with engaging Angular interfaces</li>
            <li>Reduced load times by 15% and increased user retention by 20%</li>
            <li>Implemented smart caching for 20% faster load times</li>
          </ul>
          
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <Link className='hover:cursor-pointer' href={'https://mylinx.cc/'} target='_blank'>
                <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-white ease-in-out duration-200 hover:text-blue-400">Mylinx.cc</h3>
              </Link>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Revolutionizing bio pages, URL shorteners, and QR codes
              </p>
              <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
                <li>Achieved over 1,000 users and 750,000 page hits</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Link className='hover:cursor-pointer' href={'https://www.anitrek.com/'} target='_blank'>
                <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-white ease-in-out duration-200 hover:text-blue-400">Anitrek.com</h3>
              </Link>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Innovative anime platform for content discovery and community engagement
              </p>
              <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
                <li>Reduced content search time by 30% with AI-powered search</li>
                <li>Attracted 3,000+ users and 1.2 million searches in 6 months</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Queens College, CUNY</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Bachelor of Arts in Computer Science (Graduated: January 2024)
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link href={'https://www.qc.cuny.edu/'} target='_blank'>
              <Image
                src="/images/timeline/qc.webp"
                alt="Queens College Campus"
                width={360}
                height={240}
                className="rounded-lg object-cover h-28 w-full shadow-lg hover:cursor-pointer"
              />
            </Link>
            <Link href={'https://www.qc.cuny.edu/'} target='_blank'>
              <Image
                src="/images/timeline/qc-logo.webp"
                alt="Graduation Ceremony"
                width={360}
                height={240}
                className="rounded-lg object-cover h-28 w-full shadow-lg"
              />
            </Link>
          </div>
          <h4 className="text-md font-semibold mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {['Distributed Systems', 'Data Structures & Algorithms', 'Operating Systems', 'Software Engineering', 'Big Data Analytics'].map((lang) => (
              <Badge key={lang} variant="outline">{lang}</Badge>
            ))}
          </div>
          <h4 className="text-md font-semibold mb-2">Notable Achievements</h4>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <li>Dean's List for 4 consecutive semesters</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Skills & Awards",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-4">Technical Proficiencies</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-md font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Java', 'Python', 'C', 'CSS', 'HTML'].map((lang) => (
                  <Badge key={lang} variant="outline">{lang}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Angular', 'Node.js', 'Kafka', 'Prisma', 'TailwindCSS', 'Chakra UI'].map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-4">Awards & Recognitions</h3>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-4">
            <li>Acknowledged Contributor for CVE-2024-22363 (SheetJS CE)</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <section className='space-y-16'> 
      <HomeBanner/>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        
      </div>

      
      <div className='flex flex-col my-12 animate fadeIn'>
        <div className="space-y-4">
          <h1 className="font-bold [font-size:var(--step-2)] mb-4 text-neutral-800  dark:text-neutral-200">Blog</h1>
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
                className="flex flex-col space-y-2 mb-6 p-6 bg-white rounded-md hover:shadow-md border border-transparent duration-200 ease-in  hover:border-gray-400 hover:bg-gray-100  dark:bg-transparent dark:hover:bg-neutral-900 transition"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <div className="text-neutral-900 dark:text-neutral-100 tracking-tight [font-size:var(--step-1)]">
                    {post.title}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
              </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="flex flex-col mt-8">
      <Timeline data={data} />
        {/* <div className="[font-size:var(--step-2)] font-bold mb-4 text-neutral-800  dark:text-neutral-200 ">Check These Out!</div>
        <ProjectList projects={projects} /> */}
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400"></ul>
    </section>
  );
}


