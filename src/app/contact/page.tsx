import type { Metadata } from 'next';
import Link from 'next/link';

import { contact } from '@/lib/config';
import Contact from '@/components/Contact';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact',
    openGraph: {
      images: [`/api/og?title=Contact`],
    },
    twitter: {
      images: [`/api/og?title=Contact`],
    },
  }
}

export default function page() {
  return (
    <main className='p-6 min-h-screen mb-[10px]'>
      <h2 className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none mt-6 text-center text-4xl">
          Contact me<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
      </h2>
      <p className="text-gray-700 dark:text-neutral-300 text-center">I'm always open to new opportunities and projects.</p>
      <div className="relative">
        <div className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative mx-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/15 bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
            <Contact />
          </div>
          <div className="space-y-4 p-4">
          <p className=" text-xl font-semibold">Or contact me with...</p>
          {contact.links.map((Element, index) => (
            <Link href={Element.href} key={index} target="_blank" className="group ml-auto mt-2 flex h-12 w-full items-center gap-3 rounded-md border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
              {<Element.Icon />} {Element.title}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </main>
  )
}
