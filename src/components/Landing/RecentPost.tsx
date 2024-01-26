import React from 'react';
import Link from 'next/link';
import { sub } from "date-fns/sub";
import { FaRss } from "react-icons/fa6";
import { allBlogs, type Blog } from 'contentlayer/generated';

import SectionHeader from '../SectionHeader';
import SmallBlogCard from './RecentPost/SmallBlogCard';

export default async function RecentPost() {
  const recentArticles = allBlogs.slice(0, 5);
  return (
    <>
      <SectionHeader title='Recent Posts'>
        <Link href='rss.xml' className='underlined inline-flex items-center gap-2 text-color-blue'>
          <p>Subscribe to the RSS feed</p>
          <FaRss />
        </Link>
      </SectionHeader>
      <div className='flex flex-col gap-3'>
        {recentArticles.map((post: Blog, index: number) => {
          const isNew = sub(new Date(), { days: 30 }) < new Date(post.publishedAt);

          return (
            <div key={index} className='post'>
              <SmallBlogCard data={post} isNew={isNew} />
            </div>
          )
        })}
      </div>
    </>
  )
}
