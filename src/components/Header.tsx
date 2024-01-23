import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa6";

import NewNav from './Nav/NewNav';
import NewMobileNav from './Nav/NewMobileNav';
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    // <header className='py-4 sm:py-8'>
    //   <NewNav />
    // </header>
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[73px] max-w-screen-2xl items-center">
        <NewNav />
        <NewMobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none" />
          <nav className="flex items-center">
            <Link
              href='/test'
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href='/test'
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggler />
          </nav>
        </div>
      </div>
    </header>
  )
}
