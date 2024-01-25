'use client';

import { 
  FaGithub,
  FaTwitter,
  FaInstagram
} from "react-icons/fa6";

import ExternalLink from '../../ExternalLink';

const socials = [
  {
      path: 'https://github.com/NotKaskus',
      icon: <FaGithub />
  },
  {
      path: 'https://twitter.com/not_kaskus',
      icon: <FaTwitter />
  },
  {
      path: 'https://instagram.com/not_kaskus',
      icon: <FaInstagram />
  }
]

export default function Socials() {
  return (
    <>
      {socials.map((socials: { path: string, icon: React.ReactNode }, index: number) => {
        return (
          <ExternalLink aria-label='socials-links' href={socials.path} key={index}>{socials.icon}</ExternalLink>
        )
      })}
    </>
  )
}
