import { allBlogs } from 'contentlayer/generated';
import { sub } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { FaRss } from 'react-icons/fa6';

import SectionHeader from '../SectionHeader';
import SmallPostCard from './AllBlogs/SmallPostCard';

import type { Blog } from 'contentlayer/generated';

export default function AllBlogs() {
  const recentArticles = allBlogs;
  return (
    <>
      <SectionHeader title="Recent Posts">
        <Link
          href="rss.xml"
          className="underlined inline-flex items-center gap-2 text-color-blue">
          <p>Subscribe to the RSS feed</p>
          <FaRss />
        </Link>
      </SectionHeader>
      <div className="flex flex-col gap-3">
        {recentArticles.map((post: Blog, index: number) => {
          const isNew =
            sub(new Date(), { days: 30 }) < new Date(post.publishedAt);

          return (
            <div key={index} className="post">
              <SmallPostCard data={post} isNew={isNew} />
            </div>
          );
        })}
      </div>
    </>
  );
}
