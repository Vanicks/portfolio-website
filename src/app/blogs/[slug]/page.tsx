import { allBlogs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import React, { cache } from 'react';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import PostHeader from '@/components/Blogs/Blog/PostHeader';

import type { Blog } from 'contentlayer/generated';
import type { Metadata } from 'next';

export function generateMetadata({ params }: BlogPageParams): Metadata {
  const blog = getBlogFromParams(params.slug);

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      images: [blog.bannerURL],
      type: 'article',
    },
    twitter: {
      images: [blog.bannerURL],
    },
  };
}

export function generateStaticParams() {
  const blogs = allBlogs;

  return blogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
}

const getBlogFromParams = cache((slug: string): Blog => {
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    notFound();
  }

  return blog;
});

const mdxComponent: MDXComponents = {
  img: ({src, alt, width, height}) =>
      <Image src={src!} alt={alt!} width={width as number} height={height as number} className='rounded-md shadow-md' />
};

export default function BlogPage({ params }: BlogPageParams) {
  const blog = getBlogFromParams(params.slug);
  const Content = getMDXComponent(blog.body.code);

  return (
    <article className="flex flex-col mx-auto prose max-w-full prose-code:before:content-none prose-code:after:content-none text-base w-full mt-[15%] md:mt-[5%]">
      <header className="w-full px-6 pt-6xl pb-3xl article-grid">
        <PostHeader content={blog} />
      </header>
      <main className="main-article text-[#1e2024] dark:text-[#dadde7] article-grid px-6 lg:px-0 larger-line-height text-xl lg:text-2xl leading-10 my-2xl leading-looser w-full">
        <Content components={{ ...mdxComponent }} />
      </main>
      <div className="w-full h-full relative">
        <hr className="mt-2 mb-2 border-top-1 w-full h-[1px] bg-[#f3f4f7] col-span-full transition-all" />
        <div className="article-grid relative z-2 py-12"></div>
        <div className="overlay rotate-180 z-0"></div>
      </div>
    </article>
  );
}

interface BlogPageParams {
  params: { slug: string };
}
