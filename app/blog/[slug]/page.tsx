import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { Suspense } from 'react';
import {allBlogs} from "@/.contentlayer/generated";
import {Mdx} from "@/app/components/mdx";
import Comments from '@/app/components/Comments';

export async function generateMetadata({
  params,
}: { params: any }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post: any) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://asadk.dev${image}`
    : `https://asadk.dev/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://asadk.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }: { params: any }) {
  const post = allBlogs.find((post: any) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <h1 className="font-bold text-2xl md:text-3xl tracking-tighter w-full text-neutral-800 dark:text-neutral-100">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm w-full">
        <p className="text-sm text-neutral-950 dark:text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className="bg-white dark:bg-neutral-900 px-4 sm:px-6 lg:px-8 py-6 rounded-lg shadow-sm w-full">
        <Mdx code={post.body.code} />
        
        <Comments slug={post.slug} />
      </div>
    </section>
  );
}
