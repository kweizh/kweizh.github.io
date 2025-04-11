"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#bd93f9]/10 bg-[#1a1c25] backdrop-blur supports-[backdrop-filter]:bg-[#1a1c25]">
      <div className="container px-4 flex h-16 items-center justify-center">
        <div className="flex w-full justify-between items-center">
          <div className="hidden md:flex md:flex-1"></div>
          <div className="flex justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">Wei Zhang</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#bd93f9]"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#bd93f9]"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#bd93f9]"
              >
                Contact
              </Link>
              <Button asChild variant="default" size="sm" className="bg-[#5b2c6f] hover:bg-[#76448a] text-white">
                <Link href="https://github.com/zwpaper" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
