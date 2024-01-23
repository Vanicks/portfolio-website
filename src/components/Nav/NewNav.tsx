'use client';

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { nav, meta } from "@/lib/config";
import { cn } from "@/lib/utils"

import NavPopover from './NavPopover';
import Logo from './Logo';

function NavItem({ path, text, target }: { path: string, text: string, target?: string }) {
  let pathname = usePathname() || "/";
  let isActive = pathname.split("/")[1].trim() === path.split("/")[1].trim();

  if (path.startsWith("https://") || path.startsWith("http://")) {
    isActive = false;
    target = "_blank";
  }
 
  return (
    <Link
      key={path}
      href={path}
      className={cn(
        "relative rounded-md p-1 transition-all text-md font-medium hover:bg-black/10 hover:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-200 sm:px-3 sm:py-2",
        isActive
          ? "bg-black/10 dark:bg-white/10 dark:text-neutral-200"
          : "text-gray-700 dark:text-neutral-400"
      )}
    >
      {text}
    </Link>
  );
}

export default function NewNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo />
        <span className="hidden font-bold text-xl sm:inline-block">
          {meta.siteName}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {nav.left.map((item: NavItemsLeft, index: number) => {
          return <NavItem path={item.href} text={item.title} key={index} />;
        })}
        <NavPopover/>
      </nav>
    </div>
  )
}

type NavItemsLeft = {
  title: string;
  href: string;
}