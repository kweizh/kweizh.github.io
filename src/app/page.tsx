"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

const tagColors: Record<string, string> = {
  AI: "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20",
  TypeScript: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  LLM: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  Rust: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
  "Self-hosted": "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  CLI: "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20",
  Unix: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
  Go: "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20",
  Kubernetes: "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20",
  "Cloud Native": "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20",
};

const projects = [
  {
    title: "Pochi",
    description: "AI Autonomous Coding Assistant. A powerful tool that helps developers automate coding tasks and improve productivity.",
    tags: ["AI", "TypeScript", "LLM", "VSCode", "CLI"],
    link: "https://github.com/TabbyML/pochi",
    image: "./images/pochi.png",
    demo: ""
  },
  {
    title: "Tabby",
    description: "Self Hosted AI Coding Assistant. Intelligent code completions directly in your editor, running entirely on your own infrastructure.",
    tags: ["Rust", "AI", "Self-hosted", "VSCode", "CLI"],
    link: "https://github.com/TabbyML/tabby",
    image: "./images/tabby.png",
    demo: ""
  },
  {
    title: "lsd",
    description: "A Next Generation UNIX ls Alternative. Modern replacement for ls command with colorful output, icons, and various display options.",
    tags: ["Rust", "CLI", "Unix"],
    link: "https://github.com/lsd-rs/lsd",
    image: "./images/lsd.png",
    demo: ""
  },
  {
    title: "Kubernetes Scheduler Plugins",
    description: "Advanced scheduling features for Kubernetes. Framework to enable developers to write custom scheduling plugins.",
    tags: ["Go", "Kubernetes", "Cloud Native"],
    link: "https://github.com/kubernetes-sigs/scheduler-plugins",
    image: "./images/scheduler-plugins.svg",
    demo: ""
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent"
          >
            Wei Zhang
          </motion.div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="https://blog.kweizh.com" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

        <div className="container px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16 relative w-64 h-64 mx-auto"
          >
            <Image
              src="./images/logo.png"
              alt="Logo"
              fill
              className="object-cover rounded-full border-4 border-background shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              Wei Zhang
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-1xl mx-auto">
              Open Source Contributor • Applied AI Engineer • Kubernetes Expert
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center mb-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/zwpaper" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://x.com/kweizh" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:blog@kweizh.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Applied AI Engineer currently focused on building next-generation
              AI Coding Assistants. With deep expertise in cloud-native technologies, Kubernetes,
              and systems programming, I bridge the gap between scalable infrastructure and
              advanced AI applications. I actively contribute to open source projects and am
              dedicated to creating robust, intelligent software solutions that empower developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden">
                <div className="relative h-48 w-full bg-muted/50 flex items-center justify-center p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`mr-2 mb-2 ${tagColors[tag] || "bg-secondary text-secondary-foreground"}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Wei Zhang. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}