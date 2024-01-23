import React from 'react';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaTwitter, FaInstagram   } from "react-icons/fa6";

import { contact } from '@/lib/config';
import Contact from '@/components/Contact';

export default function page() {
  return (
    // <main className='flex justify-center w-full my-7xl lg:my-[4%]'>
    //   <div className='flex flex-col gap-8 mx-auto max-w-7xl w-full px-8 md:px-10 mt-5'>
    //     <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl text-[#333] font-[sans-serif]">
    //       <div>
    //         <h1 className="text-3xl text-primary font-extrabold">Let's Talk</h1>
    //         <p className="text-sm text-muted-foreground mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
    //         <div className="mt-12">
    //             <h2 className="text-lg text-primary font-extrabold">Email</h2>
    //             <ul className="mt-3">
    //                 <li className="flex items-center">
    //                     <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
    //                             viewBox="0 0 479.058 479.058">
    //                             <path
    //                                 d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
    //                                 data-original="#000000" />
    //                         </svg>
    //                     </div>
    //                     <a href="/test" className="text-[#007bff] text-sm ml-3">
    //                         <small className="block">Mail</small>
    //                         <strong>info@example.com</strong>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //         <div className="mt-12">
    //             <h2 className="text-lg text-primary font-extrabold">Socials</h2>
    //             <ul className="flex mt-3 space-x-4">
    //                 <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    //                     <a href="/test">
    //                         <FaGithub />
    //                     </a>
    //                 </li>
    //                 <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    //                     <a href="/test">
    //                         <FaInstagram />
    //                     </a>
    //                 </li>
    //                 <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    //                     <a href="/test">
    //                         <FaTwitter />
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //       </div>
    //       <form className="ml-auo space-y-4">
    //           <input type='text' placeholder='Name'
    //               className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]" />
    //           <input type='email' placeholder='Email'
    //               className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]" />
    //           <input type='text' placeholder='Subject'
    //               className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]" />
    //           <textarea placeholder='Message' rows={6}
    //               className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"></textarea>
    //           <button type='button'
    //               className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
    //       </form>
    //     </div>
    //   </div>
    // </main>
    <main className='p-6'>
      <h2 className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none mt-6 text-center text-4xl">
          Contact me<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
      </h2>
      <p className="text-gray-700 dark:text-neutral-300 text-center">I'm always open to new opportunities and projects.</p>
      <div className="relative">
        <div className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative mx-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/15 bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
            <Contact />
          </div>
          <div className="space-y-4 p-4">
          <p className=" text-xl font-semibold">Or contact me with...</p>
          {contact.links.map((Element, index) => (
            <Link href={Element.href} key={index} target="_blank" className="group ml-auto mt-2 flex h-12 w-full items-center gap-3 rounded-md border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
            <>
              {<Element.Icon />} {Element.title}
            </>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </main>
  )
}
