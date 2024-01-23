'use client'

import React from 'react';


export default function LocationCard() {
  return (
    <div className='group relative flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-xl'>
      <img 
        alt="A map locating roughly where I am right now"
        src={`https://dev.virtualearth.net/REST/V1/Imagery/Map/CanvasLight/42.6564%2C-73.7638/13?mapSize=600%2C300&format=png&key=${process.env.BING_STATIC_MAP_API_KEY}`} 
        loading='lazy'
        className='absolute inset-0 h-full w-full scale-[1.25] bg-black object-cover object-center' 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute left-1/2 top-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
				<div aria-hidden className="absolute translate-y-[14px]">
					<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
				</div>
				<img
					src='/avatar.webp' 
					alt="Photo of me above a map of my current location"
          loading='lazy'
					height={60}
					width={60}
					className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
				/>
				<p className="rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
					📍 Naga City
				</p>
			</div>
    </div>
  )
}
