'use client';

import Image from 'next/image';

export default function DiscordProfile() {
  return (
    <div className="flex flex-col bg-red">
      <Image
        alt="My shiny discord profile card"
        src="https://lanyard.kyrie25.me/api/738748102311280681?imgStyle=square&bg=#292b2f&gradient=645CBB-A084DC-BFACE2-EBC7E6"
        loading="lazy"
        width={400}
        height={200}
      />
    </div>
  );
}
