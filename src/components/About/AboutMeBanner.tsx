import Image from 'next/image';

export default function AboutMeBanner() {
  return (
    <>
        <Image 
          src='/about_me_banner.webp' 
          width='3392'
          height='1080'
          alt='About Me Banner'
          loading='eager'
          decoding='async'
          className='w-full h-full rounded-md object-cover' 
        />
    </>
  )
}
