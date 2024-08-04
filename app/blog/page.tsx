import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover my ideas about software development, design, and other topics.",
};

export default async function BlogPage() {
  return (
    <section className="space-y-4 p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4" >
        Blog
      </h1>
      {allBlogs
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .map((post) => (
          <div key={post.slug}>
            <Link
              className="flex flex-col space-y-2 mb-6 p-4 bg-transparent rounded-lg hover:shadow-md border border-transparent  duration-200 ease-in hover:border-gray-400 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-neutral-900 transition"
              href={`/blog/${post.slug}`}
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </section>
  );
}
