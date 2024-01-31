import { allBlogs } from 'contentlayer/generated';
import { sub } from 'date-fns/sub';
import Link from 'next/link';
import { useMemo } from 'react';
import { FaRss } from 'react-icons/fa6';

import SectionHeader from '../SectionHeader';
import SmallBlogCard from './RecentPost/SmallBlogCard';

import type { Blog } from 'contentlayer/generated';

export default function RecentPost() {
  const recentArticles = allBlogs.slice(0, 5);
  const isNewDates = useMemo(
    () =>
      recentArticles.map(
        (post) => sub(new Date(), { days: 30 }) < new Date(post.publishedAt),
      ),
    [recentArticles],
  );

  return (
    <>
      <SectionHeader title="Recent Posts">
        <Link
          href="/rss.xml"
          className="underlined inline-flex items-center gap-2 text-color-blue">
          <p>Subscribe to the RSS feed</p>
          <FaRss />
        </Link>
      </SectionHeader>
      <div className="flex flex-col gap-3">
        {recentArticles.map((post: Blog, index: number) => {
          return (
            <div key={index} className="post">
              <SmallBlogCard data={post} isNew={isNewDates[index]} />
            </div>
          );
        })}
      </div>
    </>
  );
}
