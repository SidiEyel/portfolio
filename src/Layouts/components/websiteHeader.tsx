import Link from "next/link";
import { WEBSITE_MENU } from "./website-menu";
import { Earth } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo.jpeg"

export function WebsiteHeader() {

  return (
    <header className="flex items-center justify-around bg-[#1A0B2E] text-white h-[60px]" >
        <Link href="/" className="text-xl font-semibold">
          <Image src={logo} alt='logo' className='w-[14px] h-[10px]' />   
        </Link>
        <nav className="hidden md:flex gap-8">
          {WEBSITE_MENU.map((item, index) => {               
              return (
                <Link href={item.href} key={index} className="text-[11px] hover:text-blue-600">
                    {item.title}
                </Link>
              )
          })}
        </nav>
        <Earth className="w-3 md:w-4 h-3 md:h-4"/>
    </header>
  );
}
