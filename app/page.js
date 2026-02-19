import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import { getProjects, getBlogPosts } from "../lib/contentful";
import { FaTerminal, FaCode, FaMicrochip, FaCube } from "react-icons/fa6";

export default async function Page() {
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
      
      {/* --- HERO SECTION --- */}
      <section className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest">Available for hire</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            Emoruwa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Emmanuel
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Software Engineer specializing in <span className="text-slate-900 dark:text-white font-semibold underline decoration-cyan-500">AI Systems</span> and <span className="text-slate-900 dark:text-white font-semibold underline decoration-blue-500">Blockchain Infrastructure</span>. Building the decentralized future.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="#projects" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all">
              View Projects
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-medium hover:bg-slate-50 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Terminal/Visual Element */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl font-mono text-sm overflow-hidden">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              <p className="text-green-400">$ whoami</p>
              <p className="text-slate-300">emoruwa_emmanuel</p>
              <p className="text-cyan-400">$ stack --list</p>
              <p className="text-slate-300 text-xs">[React, Next.js, AI/ML, Solidity, Node.js]</p>
              <p className="text-purple-400">$ status</p>
              <p className="text-slate-300 italic">"Hacking on decentralized protocols..."</p>
              <p className="animate-pulse text-slate-500">_</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-slate-500 mt-2">Selected works from Hackathons and R&D.</p>
          </div>
          <Link href="/projects" className="hidden md:block text-blue-600 font-semibold hover:text-blue-700">
            All Projects &rarr;
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* --- QUICK ABOUT / STATS --- */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">The Engineer Behind the Code</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Participated in Google & Solana Hackathons where I honed the art of **rapid prototyping** and **high-scale architecture**. I don't just write code; I design systems that solve real-world accessibility issues.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-2">
                <FaCube className="text-blue-500" />
                <span className="text-sm font-semibold">Blockchain Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMicrochip className="text-cyan-500" />
                <span className="text-sm font-semibold">AI Researcher</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
             <Image src="/profile.jpg" alt="Profile" width={80} height={80} className="rounded-full mb-4 grayscale hover:grayscale-0 transition-all" />
             <p className="text-center font-bold">Emmanuel E.</p>
             <p className="text-xs text-slate-500">Software Engineer</p>
          </div>
        </div>
      </section>

      {/* --- BLOG --- */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">Recent Writings</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((b, i) => (
            <BlogCard key={i} post={b} />
          ))}
        </div>
      </section>

    </div>
  );
}
