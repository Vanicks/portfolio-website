import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
    return (
      <Avatar className={cn("flex items-center rounded-md", className)}>
          {/* <Image src='/sukuna_logo.png' width={64} height={64} className='mr-3 h-full' priority alt='' /> */}
          <AvatarImage src='/avatar.webp' alt='My cute avatar' />
          <AvatarFallback>KS</AvatarFallback>
      </Avatar>
    )
}