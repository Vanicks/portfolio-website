import React from 'react';

import SectionHeader from '../SectionHeader';
import RepoCard from './FeaturedProjects/RepoCard';

const projects = [
  {
    name: 'typescript-template',
    description: 'A project template for all my projects that use typescript',
    tags: ['nodejs', 'typescript'],
    repoLink: 'https://github.com/NotKaskus/typescript-template',
    url: 'https://github.com/NotKaskus/typescript-template',
    starGazerCount: 0,
    forkCount: 0,
  },
  {
    name: 'portfolio-website',
    description: 'My personal website made with nextjs and tailwindcss',
    tags: ['nextjs', 'tailwindcss', 'typescript'],
    repoLink: 'https://github.com/NotKaskus/portfolio-website',
    url: 'https://paul.is-a.dev',
    starGazerCount: 0,
    forkCount: 0,
  },
];

export default function FeaturedProjects() {
  return (
    <>
      <SectionHeader title="Featured Projects" />
      <div className="space-y-4 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {projects.map((project, index) => (
            <RepoCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
