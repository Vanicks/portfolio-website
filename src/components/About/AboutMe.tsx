import React from 'react';
import SectionHeader from '../SectionHeader';

export default function AboutMe() {
  return (
      <div className='leading-5'>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">A bit about me</h1>
        <div className='mb-6 text-[#1e2024] dark:text-[#dadde7] text-lg'>
          <p className='mb-6'>
            Hey, I'm Paul Andrew. I'm 17 years old and come from Philippines. I live in Naga 
            City and spend my free time watching anime, do sports or enjoying time with friends and family.
          </p>
          <p className='mb-6'>
            I'm into cars, which influenced my choice of the automotive strand in senior high school.
            After I graduated I plan to focus more on learning algorithms and data structures.
          </p>
          <p className='mb-6'>
            I'm currently learning Python and Algorithims but my favorite language is Typescript. In 
            the future I want to become a mechanic while still continue my tech journey.
          </p>
        </div>
      </div>
  )
}
