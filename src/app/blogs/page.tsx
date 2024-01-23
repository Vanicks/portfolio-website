import React from 'react';
import RecentPost from '@/components/Landing/RecentPost';

export default function Blogs() {
  return (
    <main className='flex justify-center w-full mt-[15%] my-7xl lg:my-[2%]'>
      <div className='flex flex-col gap-8 mx-auto max-w-7xl w-full px-8 md:px-10 mt-5'>
        <div className='col-span-full lg:col-span-2 gap-8 flex flex-col'>
          <div className='flex flex-col gap-4'>
            <RecentPost />
          </div>
        </div>
      </div>
    </main>
  )
}
