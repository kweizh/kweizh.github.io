Create a modern, visually striking personal homepage as a static website using cutting-edge front-end technologies.

The site must be built with **Next.js**, **pnpm**, **shadcn/ui**, and **TailwindCSS**,
and must be fully compatible with GitHub Pages deployment using the following CI steps:

```yaml
- name: Build with Next.js
  run: pnpm build

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./out
```

### Overall Style & Requirements

* Use **avant-garde front-end design**, bold color collisions, and fluid, futuristic interactive animations throughout the site.
* The layout should feel premium, sleek, and immersive.
* Follow strong UI/UX patterns with smooth transitions, parallax, micro-interactions, etc.
* Ensure the site exports correctly with `next export` to generate the `out/` directory for GitHub Pages.

### Page Structure

#### First Screen (Hero Section)

* A full-viewport hero section (`100vh`) featuring:

  * A stylish **header** with navigation.
  * My **name** in large, bold display typography.
  * A short personal **introduction** paragraph.
  * The design should visually fill the entire first screen with dynamic color, motion, and a strong personal brand.

#### Scroll-Down Content

* After scrolling past the hero section, display a list/grid of my personal projects.
* Each project card should use shadcn components combined with TailwindCSS styling.
* Include hover animations, subtle depth effects, and modern UI patterns.
* Consider including tags, brief descriptions, and links (GitHub / demo).

### Technical Requirements

* Use **pnpm** as the package manager.
* Use **Next.js App Router** (latest best practices).
* Use **shadcn/ui** components with TailwindCSS styling.
* Ensure strong responsiveness across devices.
* Include a theme toggle (light/dark) using shadcn/ui primitives.
* Produce clean, well-organized, production-ready code.

Generate the complete project structure, components, styling, and placeholder assets necessary to implement this homepage.

## Personal Info

Name: Wei Zhang
Intro: Open Source Contributor • Applied AI Engineer • Kubernetes Expert

About me:
I am a passionate software engineer with expertise in cloud-native technologies,
Kubernetes, and systems programming. I actively contribute to several open source
projects and am committed to building robust, scalable software solutions.

Blog: https://blog.kweizh.com/
GitHub: https://github.com/zwpaper
Email: blog@kweizh.com
Twitter: https://x.com/kweizh

### Projects

#### Pochi

AI Autonomous Coding Assistant
https://github.com/TabbyML/pochi

#### Tabby

Self Hosted AI Coding Assistant
https://github.com/TabbyML/tabby

Tabby is an open-source, self-hosted AI coding assistant that provides intelligent code
completions directly in your editor, similar to GitHub Copilot but with the ability to
run entirely on your own infrastructure.

#### lsd

A Next Generation UNIX ls Alternative

LSD (LSDeluxe) is a modern replacement for the classic ls command in Unix/Linux systems.
Written in Rust, it provides colorful output, icons, and various display options to make
directory listings more informative and visually appealing.

#### Kubernetes Scheduler Plugins

Advanced scheduling features for Kubernetes
https://github.com/kubernetes-sigs/scheduler-plugins

The Kubernetes Scheduler Plugins project provides a framework to enable developers to write
custom scheduling plugins and integrate them with the Kubernetes scheduler. As a reviewer
for this project, I help evaluate and improve scheduling algorithms for better resource
utilization and workload placement.