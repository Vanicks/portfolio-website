import AboutMe from '@/components/About/AboutMe';
import AboutMeBanner from '@/components/About/AboutMeBanner';
import AnimeWatchList from '@/components/About/AnimeWatchList';
import TechStack from '@/components/About/TechStack';
import Timeline from '@/components/About/Timeline';

import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'About',
    openGraph: {
      images: [`/api/og?title=About`],
    },
    twitter: {
      images: [`/api/og?title=About`],
    },
  };
}

export default function About() {
  return (
    <main className="flex justify-center w-full mt-[13%] my-7xl lg:my-[4%]">
      <div className="flex flex-col gap-8 mx-auto max-w-7xl w-full px-8 md:px-10 mt-5">
        <div className="relative mb-2 inline-block overflow-hidden w-full h-full select-none">
          <AboutMeBanner />
        </div>
        <div className="mb-2">
          <AboutMe />
        </div>
        <div className="mb-9">
          <TechStack />
        </div>
        <div className="mb-2">
          <Timeline />
        </div>
        <div className="grid gap-4">
          <AnimeWatchList />
        </div>
      </div>
    </main>
  );
}
