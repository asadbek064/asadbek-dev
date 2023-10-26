import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Discover my ideas about software development, design, and other topics.'
}

export default async function BlogPage() {
   return (
    <section className="space-y-4">
        <h1 className="font-bold [font-size:var(--step-3)]">Blog</h1>
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
    </section>
   ) 
}