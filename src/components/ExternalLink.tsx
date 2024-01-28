import Link from 'next/link';
import React from 'react';

export default function ExternalLink(props: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={props.href} target="_blank">
      {props.children}
    </Link>
  );
}
