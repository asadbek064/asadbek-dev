import Link from 'next/link';
import Image from 'next/image';
import {getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let starCount, tweetCount;

  try {
    [starCount, tweetCount] = await Promise.all([
      getStarCount(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <div className="
        dark:bg-gradient-to-r dark:from-amber-200 dark:to-yellow-500 text-transparent bg-clip-text
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        ">
        <h1 className="[font-size:var(--step-4)] font-bold">{name}</h1>
      </div>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 [font-size:var(--step-0)]">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
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
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/realAsadbek"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
