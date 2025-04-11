"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#282a36]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] mb-8 leading-[1.2] pb-2">
                  Wei Zhang
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                  Open Source Contributor • Applied AI Engineer • Kubernetes Expert
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-[#bd93f9] hover:bg-[#a277f3] text-white">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild className="border-[#bd93f9] text-[#bd93f9] hover:bg-[#bd93f9]/10">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1c25]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#bd93f9]/10 px-3 py-1 text-sm text-[#bd93f9]">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Software Engineer & Open Source Contributor
                </h2>
                <p className="text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am a passionate software engineer with expertise in cloud-native technologies, 
                  Kubernetes, and systems programming. I actively contribute to several open source 
                  projects and am committed to building robust, scalable software solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#f1fa8c] text-[#f1fa8c]">Applied AI</Badge>
                  <Badge variant="outline" className="border-[#bd93f9] text-[#bd93f9]">Kubernetes</Badge>
                  <Badge variant="outline" className="border-[#ff79c6] text-[#ff79c6]">Rust</Badge>
                  <Badge variant="outline" className="border-[#8be9fd] text-[#8be9fd]">Go</Badge>
                  <Badge variant="outline" className="border-[#ffb86c] text-[#ffb86c]">LLM</Badge>
                  <Badge variant="outline" className="border-[#50fa7b] text-[#50fa7b]">Cloud Native</Badge>
                  <Badge variant="outline" className="border-[#ffb86c] text-[#ffb86c]">Open Source</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <Avatar className="h-64 w-64 border-4 border-[#bd93f9]">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/3764335" alt="Wei Zhang" />
                  <AvatarFallback className="bg-[#bd93f9]/20 text-[#bd93f9]">Wei Zhang</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-[#282a36]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#bd93f9]/20 px-3 py-1 text-sm text-[#bd93f9]">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Open Source Contributions
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the open source projects I actively contribute to and maintain.
                </p>
              </div>
            </div>

            {/* TabbyML/tabby */}
            <div id="tabby" className="mt-12">
              <Card className="bg-[#1e1f29] border-[#bd93f9]/20 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 flex items-center justify-center p-4 md:p-6 bg-[#21222c]">
                    <Image 
                      src="/images/tabby.png" 
                      alt="TabbyML/tabby" 
                      width={150} 
                      height={150}
                      className="rounded-lg max-w-full h-auto"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex items-center">
                        <span className="text-[#bd93f9] mr-2">TabbyML/tabby</span>
                        <Badge className="ml-2 bg-[#bd93f9]/20 text-[#bd93f9] hover:bg-[#bd93f9]/30">AI</Badge>
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        Self-hosted AI coding assistant
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-zinc-400">
                        Tabby is an open-source, self-hosted AI coding assistant that provides intelligent code 
                        completions directly in your editor, similar to GitHub Copilot but with the ability to 
                        run entirely on your own infrastructure.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="border-[#bd93f9] text-[#bd93f9]">AI</Badge>
                        <Badge variant="outline" className="border-[#ff79c6] text-[#ff79c6]">Coding Assistant</Badge>
                        <Badge variant="outline" className="border-[#8be9fd] text-[#8be9fd]">Self-hosted</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <Button asChild variant="outline" className="w-full border-[#bd93f9] text-[#bd93f9] bg-[#1a1c25] hover:bg-[#bd93f9]/10">
                        <Link href="https://github.com/TabbyML/tabby" target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>

            {/* lsd-rs/lsd */}
            <div id="lsd" className="mt-8">
              <Card className="bg-[#1e1f29] border-[#8be9fd]/20 overflow-hidden">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="w-full md:w-2/5 flex items-center justify-center p-4 md:p-6 bg-[#21222c]">
                    <Image 
                      src="/images/lsd.png" 
                      alt="lsd-rs/lsd" 
                      width={150} 
                      height={150}
                      className="rounded-lg max-w-full h-auto"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex items-center">
                        <span className="text-[#8be9fd] mr-2">lsd-rs/lsd</span>
                        <Badge className="ml-2 bg-[#8be9fd]/20 text-[#8be9fd] hover:bg-[#8be9fd]/30">CLI</Badge>
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        The next gen ls command
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-zinc-400">
                        LSD (LSDeluxe) is a modern replacement for the classic ls command in Unix/Linux systems. 
                        Written in Rust, it provides colorful output, icons, and various display options to make 
                        directory listings more informative and visually appealing.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="border-[#8be9fd] text-[#8be9fd]">Rust</Badge>
                        <Badge variant="outline" className="border-[#50fa7b] text-[#50fa7b]">CLI</Badge>
                        <Badge variant="outline" className="border-[#f1fa8c] text-[#f1fa8c]">Unix</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <Button asChild variant="outline" className="w-full border-[#8be9fd] text-[#8be9fd] bg-[#1a1c25] hover:bg-[#8be9fd]/10 mt-4">
                        <Link href="https://github.com/lsd-rs/lsd" target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>

            {/* Kubernetes Scheduler Plugins */}
            <div id="scheduler-plugins" className="mt-8">
              <Card className="bg-[#1e1f29] border-[#326ce5]/20 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 flex items-center justify-center p-4 md:p-6 bg-[#21222c]">
                    <Image 
                      src="/images/scheduler-plugins.svg" 
                      alt="Kubernetes Scheduler Plugins" 
                      width={150} 
                      height={150}
                      className="rounded-lg max-w-full h-auto"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <CardHeader>
                      <CardTitle className="text-xl text-white flex flex-wrap items-center">
                        <span className="text-[#326ce5] mr-2 break-all md:break-normal">Kubernetes SIGs/Scheduler Plugins</span>
                        <Badge className="ml-2 bg-[#326ce5]/20 text-[#326ce5] hover:bg-[#326ce5]/30">Kubernetes</Badge>
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        Advanced scheduling features for Kubernetes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-zinc-400">
                        The Kubernetes Scheduler Plugins project provides a framework to enable developers to write 
                        custom scheduling plugins and integrate them with the Kubernetes scheduler. As a reviewer 
                        for this project, I help evaluate and improve scheduling algorithms for better resource 
                        utilization and workload placement.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline" className="border-[#326ce5] text-[#326ce5]">Kubernetes</Badge>
                        <Badge variant="outline" className="border-[#50fa7b] text-[#50fa7b]">Scheduler</Badge>
                        <Badge variant="outline" className="border-[#ffb86c] text-[#ffb86c]">Resource Management</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-4">
                      <Button asChild variant="outline" className="w-full border-[#326ce5] text-[#326ce5] bg-[#1a1c25] hover:bg-[#326ce5]/10 mt-4">
                        <Link href="https://github.com/kubernetes-sigs/scheduler-plugins" target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#191b24]">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ff79c6]/10 px-3 py-1 text-sm text-[#ff79c6]">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in collaborating or have questions about my projects? Feel free to reach out.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <Card className="bg-[#21222c] border-[#ff79c6]/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#ff79c6]"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <p className="text-zinc-400">me@kweizh.com</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#ff79c6]"
                        >
                          <path d="M15 11h.01" />
                          <path d="M11 15h.01" />
                          <path d="M16 16h.01" />
                          <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
                          <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                        </svg>
                        <p className="text-zinc-400">Shenzhen, China</p>
                      </div>
                      <Separator className="bg-[#ff79c6]/20" />
                      <div className="flex justify-center space-x-4">
                        <Link href="https://github.com/zwpaper" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-400 hover:text-[#bd93f9] transition-colors"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </Link>
                        <Link href="https://x.com/kweizh" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-400 hover:text-[#8be9fd] transition-colors"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </Link>
                        <Link href="https://linkedin.com/in/kweizh" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-400 hover:text-[#50fa7b] transition-colors"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}