import React from 'react';
import SectionHeader from '../SectionHeader';
import RepoCard from './FeaturedProjects/RepoCard';

const projects = [
  {
    name: 'Saber-Chan',
    description: 'An advance discord-bot made with typescript and sapphirejs',
    tags: ['sapphirejs', 'typescript', 'discord-bot'],
    repoLink: 'https://github.com/NotKaskus/saber-chan',
    url: 'https://saber-chan.com',
    starGazerCount: 100,
    forkCount: 68
  },
  {
    name: 'notkaskus.github.io',
    description: 'My personal website made iwht nextjs and tailwindcss',
    tags: ['nextjs', 'tailwindcss', 'typescript'],
    repoLink: 'https://github.com/NotKaskus/notkaskus.github.io',
    url: 'https://paul.is-a.dev',
    starGazerCount: 24,
    forkCount: 10
  }
]

export default function FeaturedProjects() {
  return (
    <>
      <SectionHeader title='Featured Projects' />
      <div className='space-y-4 mt-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
          {projects.map((project, index) => (
              <RepoCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
