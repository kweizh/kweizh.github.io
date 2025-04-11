"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#bd93f9]/10 bg-[#282a36]">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl py-8 md:py-12">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">Wei Zhang</span>
          </Link>
          <p className="mt-4 text-sm text-zinc-400 max-w-md">
          Open Source Contributor • Applied AI Engineer • Kubernetes Expert
          </p>
          
          <div className="mt-8 grid grid-cols-3 gap-8 sm:grid-cols-3 w-full max-w-2xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#tabby"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#bd93f9]"
                  >
                    TabbyML/tabby
                  </Link>
                </li>
                <li>
                  <Link
                    href="#lsd"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#8be9fd]"
                  >
                    lsd-rs/lsd
                  </Link>
                </li>
                <li>
                  <Link
                    href="#scheduler-plugins"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#326ce5]"
                  >
                    scheduler-plugins
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/zwpaper"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#bd93f9]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/kweizh"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#8be9fd]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/in/kweizh"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#50fa7b]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:me@kweizh.com"
                    className="text-sm text-zinc-400 transition-colors hover:text-[#ff79c6]"
                  >
                    me@kweizh.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#bd93f9]/10 pt-8 flex justify-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Wei Zhang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}