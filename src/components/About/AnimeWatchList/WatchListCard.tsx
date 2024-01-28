import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { type FavAnimeInfo } from '@/lib/anime';

export default function WatchListCard({
  animeInfo,
}: {
  animeInfo: FavAnimeInfo;
}) {
  return (
    <>
      <Link href={animeInfo.siteUrl} target="_blank">
        <article className="book-item rounded relative group">
          <div className="z-2 rounded outline outline-1 outline-body-600 group-hover:-translate-y-6 transition-250 overflow-hidden group-hover:shadow-xl">
            <Image
              src={animeInfo.coverImage}
              alt="Anime cover image for current watchlist"
              sizes=""
              loading="lazy"
              width={500}
              height={750}
              decoding="async"
              className="z-2 w-full h-full object-cover aspect-[2/3] opacity-100 outline outline-1 outline-body-800"
            />
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end text-sm bg-gray-200 text-black font-semibold">
              {animeInfo.title}
            </div>
          </div>
          <div className="z-0 flex text-sm w-full color-text-400 justify-between items-baseline absolute opacity-0 bottom-0 transition-300 ease-in-out group-hover:opacity-100">
            <p className="mr-2 color-text-200 font-semibold text-xs">
              {' '}
              {/* TODO: Fix the formating here is ugly and the animation its static make it smooth */}
              Episode
            </p>
            <p>EP {animeInfo.progress}</p>
          </div>
        </article>
      </Link>
    </>
  );
}
