import Link from 'next/link';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';

import { Badge } from '../../ui/badge';

export default function RepoCard({ project }: { project: Project }) {
  return (
    <div className="p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]">
      <article className="flex flex-col justify-between h-[7.5rem]">
        <header className="flex justify-between items-center mb-2">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in">
            {project.name}
          </Link>
          <div className="flex items-center gap-2 cursor-default">
            <div className="flex items-center">
              <BiStar />
              <span className="ml-1">{project.starGazerCount}</span>
            </div>
            <div className="flex items-center">
              <BiGitRepoForked />
              <span className="ml-1">{project.forkCount}</span>
            </div>
          </div>
        </header>
        <p className="text-sh-white-500 overflow-hidden h-12">
          {project.description}
        </p>
        <div className="flex gap-2 mt-3 cursor-default">
          {project.tags.map((tag: string, index: number) => (
            <Badge
              className="rounded-3xl px-2 text-sm overflow-hidden truncate"
              key={index}>
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </div>
  );
}

interface Project {
  name: string;
  description: string;
  tags: string[];
  repoLink: string;
  url: string;
  starGazerCount: number;
  forkCount: number;
};
