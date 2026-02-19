"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Better navigation
import { usePathname } from "next/navigation";
import {
  FaGithub, FaLinkedin, FaTwitter, FaPython, FaNodeJs, FaReact, FaDocker,
  FaHome, FaBlog, FaEnvelope, FaProjectDiagram, FaBars, FaTimes, FaCube, FaBrain
} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiSolidity, SiOpenai } from "react-icons/si"; 

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "/blog", label: "Articles", icon: <FaBlog /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-brand-dark">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full bg-brand-dark/90 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between md:hidden z-50 border-b border-slate-800">
        <h1 className="text-lg font-bold tracking-tighter">EMMANUEL<span className="text-brand-accent">.</span></h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-300">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-brand-dark text-slate-300 w-72 p-8 flex flex-col border-r border-slate-800/50 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={112}
              height={112}
              className="relative w-28 h-28 rounded-full border-2 border-slate-800 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-brand-dark"></span>
            </span>
          </div>

          <h1 className="mt-5 text-xl font-bold text-white tracking-tight text-center">Emoruwa Emmanuel</h1>
          <p className="text-brand-accent text-xs font-mono mt-1 uppercase tracking-widest font-semibold text-center">
             AI & Blockchain Engineer
          </p>

          {/* Socials */}
          <div className="flex space-x-5 mt-6">
            <a href="https://github.com/Emzee-Creates" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-12 space-y-2">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 ml-2">Menu</h2>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                    : "hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <span className={`${isActive ? "text-brand-blue" : "text-slate-500 group-hover:text-brand-blue"}`}>
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Tech Stack Pills */}
        <div className="mt-12">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 ml-2">Specialization</h2>
          <div className="grid grid-cols-4 gap-4 px-2 text-slate-500">
            <FaPython title="Python" className="hover:text-blue-400 transition-colors cursor-help" />
            <SiSolidity title="Solidity" className="hover:text-slate-100 transition-colors cursor-help" />
            <SiOpenai title="AI/ML" className="hover:text-green-400 transition-colors cursor-help" />
            <FaDocker title="Docker" className="hover:text-blue-500 transition-colors cursor-help" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 border-t border-slate-800/50">
           <Link href="/contact" className="flex justify-center items-center w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all border border-slate-700">
              Hire Me
           </Link>
           <p className="mt-6 text-slate-600 text-[10px] text-center font-mono">
            V2.0.26 // LOG_STABLE
           </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 md:ml-72 min-h-screen relative
        ${isOpen ? "blur-sm md:blur-none" : ""}`}>
        {/* Padding for content so it doesn't hit the edges */}
        <div className="p-6 md:p-12 lg:p-16 mt-16 md:mt-0 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
