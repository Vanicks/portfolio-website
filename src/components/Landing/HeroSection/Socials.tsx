import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';

import { meta } from '@/lib/config';
import ExternalLink from '../../ExternalLink';

const socials = [
  {
    name: 'Github',
    path: `https://github.com/${meta.accounts.github.username}`,
    icon: <FaGithub />,
  },
  {
    name: 'Twitter',
    path: `https://twitter.com/${meta.accounts.twitter.username}`,
    icon: <FaTwitter />,
  },
  {
    name: 'Instagram',
    path: `https://instagram.com/${meta.accounts.instagram.username}`,
    icon: <FaInstagram />,
  },
];

export default function Socials() {
  return (
    <>
      {socials.map((social: Social, index: number) => {
        return (
          <ExternalLink href={social.path} key={index}>
            {social.icon}
            <span className="sr-only">{social.name}</span>
          </ExternalLink>
        );
      })}
    </>
  );
}

interface Social {
  name: string;
  path: string;
  icon: React.ReactNode;
}
