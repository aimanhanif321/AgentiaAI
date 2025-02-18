"use client"; // ✅ Ensure client component

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger, // ✅ Ensure trigger is used
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-black text-white h-16 flex items-center px-2 md:px-6">
      {/* Logo & Text Container */}
      <div className="flex items-center justify-start ">
        <div className="w-8 h-8 md:w-12 md:h-12 relative">
          <Image
            src="/images/logoo.png"
            alt="logo"
            width={100}
            height={10}
            className=""
          />
        </div>
        <span className="text-white font-bold text-[10px] lg:text-xl">Agentia World</span>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        <Link href="#Third" className="text-white hover:text-gray-400">Features</Link>
        <Link href="#SecondSection" className="text-white hover:text-gray-400">Technology</Link>
        <Link href="#Forth" className="text-white hover:text-gray-400">Agents</Link>
        <Link href="#Fifth" className="text-white hover:text-gray-400">Pricing</Link>
        <Link href="#Last" className="text-white hover:text-gray-400">Contact</Link>

        <button type='submit' className =" bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600  text-white font-bold py-2 px-4 rounded-md">
          Launched console
        </button>
      </div>

      {/* Mobile Navbar Button (Visible Only on Mobile) */}
      <div className="md:hidden ml-auto">
        <Sheet >
          <SheetTrigger asChild>
            <button>
              <Menu className="w-4 h-4 p-0 text-white bg-black cursor-pointer" />
            </button>
          </SheetTrigger>

          <SheetContent side="top" className="p-0 m-0 bg-black text-white ">
            <SheetHeader className="p-0 m-0">
            <SheetTitle className="ml-2 mt-4">
            <div className="p-0 m-0 flex items-center justify-start">
    <div className="w-8 h-8 p-0 mt-0 ml-0 md:w-12 md:h-12 relative">
      <Image
        src="/images/logoo.png"
        alt="logo"
        width={100}
        height={100}
      />
    </div>
    <span className="text-white font-bold text-[10px] lg:text-xl">
      Agentia World 
    </span>
  </div>
</SheetTitle>

            </SheetHeader>
            <div className="flex flex-col space-y-4 bg-black">
              <Link href="#Third" className="text-white px-3 py-2 transition-colors duration-300 ease-in-out hover:text-gray-400 font-sans">Features</Link>
              <Link href="#SecondSection" className="text-white px-3 py-2 transition-colors duration-300 ease-in-out hover:text-gray-400 font-sans">Technology</Link>
              <Link href="#Forth" className="text-white px-3 py-2 transition-colors duration-300 ease-in-out hover:text-gray-400 font-sans">Agents</Link>
              <Link href="#Fifth" className="text-white px-3 py-2 transition-colors duration-300 ease-in-out hover:text-gray-400 font-sans">Pricing</Link>
              <Link href="#Last" className="text-white px-3 py-2 transition-colors duration-300 ease-in-out hover:text-gray-400 font-sans">Contact</Link>

              <button type='submit' className ="m-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600  text-white font-bold py-2 px-4 rounded-md">
          Launched console
        </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
