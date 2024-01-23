import React from 'react';
import SectionHeader from '../SectionHeader';
import TeachIcons from './TechstackSection/TeachIcons';


export default function TechStack() {
  return (
    <>
      <div className='mb-7'>
        <h2 className="text-primary text-2xl lg:text-3xl font-semibold flex gap-2 items-center mb-2">Technologies</h2>
        <p className='text-muted-foreground text-leading-6 text-lg tracking-wide'>
          I use a variety of tools to streamline my development process and increase the quality 
          of both my code, and my projects. Below is a list of technologies and languages I've 
          had experience with in the past, or use currently.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-5'>
        <TeachIcons />
      </div>
    </>
  )
}