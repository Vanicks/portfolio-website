'use client';

import { Suspense } from 'react';
import { Skeleton } from '../../ui/skeleton'

function LoadingSkeleton() {
  return (
    <>
      <Skeleton className='h-60 w-60 bg-black rounded-md'></Skeleton>
    </>
  )
}

export default function DiscordProfile() {
  return (
    <div className='flex flex-col bg-red'>
      <img 
        alt="My shiny discord profile card"
        src='https://lanyard.kyrie25.me/api/738748102311280681?imgStyle=square&bg=#292b2f&gradient=645CBB-A084DC-BFACE2-EBC7E6'
        loading='lazy'
      />
    </div>
  )
}