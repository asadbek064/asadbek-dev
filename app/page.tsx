import Image from 'next/image';

/* import {getTweetCount, getStarCount } from 'lib/metrics'; */
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, avatar } from 'lib/info';
import HomeBanner from './shared/HomeBanner';
import ProjectList from './project/project-list';
import { projects } from './project/projects';
import { allBlogs } from "contentlayer/generated";
import Link from 'next/link';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section className='space-y-16'>
      <HomeBanner/>

      {/* <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 [font-size:var(--step-0)]">
        {about()}
      </p> */}

      {/* <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-lg grayscale-[70%]"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <div>Full-stack Developer at Pieshares, Inc</div>
          <div>Student at Queens College</div>

        </div>
      </div> */}

      
      <div className='flex flex-col my-12'>
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
                className="flex flex-col space-y-1 mb-4 hover:bg-neutral-100 py-2 px-4 duration-100 transition ease-in"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <div className="text-neutral-900 dark:text-neutral-100 tracking-tight [font-size:var(--step-1)]">
                    {post.title}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="[font-size:var(--step-2)] font-bold mb-4 text-neutral-800  dark:text-neutral-200">Notable Projects</div>
        <ProjectList projects={projects} />
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400"></ul>
    </section>
  );
}
