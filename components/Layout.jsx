"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaHome,
  FaBlog,
  FaEnvelope,
  FaProjectDiagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiHtml5, SiCss3, SiGithub, SiMongodb, SiTypescript } from "react-icons/si"; 
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: <FaHome className="text-lg" /> },
    { href: "/projects", label: "Projects", icon: <FaProjectDiagram className="text-lg" /> },
    { href: "/blog", label: "Blog", icon: <FaBlog className="text-lg" /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope className="text-lg" /> },
  ];

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="flex">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full bg-brand-dark text-white px-4 py-3 flex items-center justify-between md:hidden z-50">
        <h1 className="text-base sm:text-lg font-bold">Emmanuel.portfolio</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-brand-dark text-white w-64 sm:w-72 p-6 flex flex-col overflow-y-auto transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center mt-14 md:mt-0">
          <div className="relative">
            {/* ✅ Optimized profile image */}
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={112} // ~ w-28
              height={112} // ~ h-28
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-brand-accent object-cover"
              priority // Preloads image for better LCP
            />
            {/* Online Status Dot */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-brand-dark"></span>
            </span>
          </div>

          <h1 className="mt-3 text-lg sm:text-xl font-bold">Emoruwa Emmanuel</h1>
          <p className="text-gray-400 text-sm sm:text-base">Full-Stack Developer</p>

          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Emzee-Creates" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl sm:text-2xl hover:text-brand-accent" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl sm:text-2xl hover:text-brand-accent" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-xl sm:text-2xl hover:text-brand-accent" />
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="/contact"
            className="mt-6 px-4 py-2 bg-blue-400 text-brand-dark rounded-full text-sm sm:text-base font-semibold hover:bg-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h2 className="text-xs sm:text-sm font-bold text-gray-400 tracking-wide">TECH STACK</h2>
          <div className="grid grid-cols-3 gap-6 mt-4 text-2xl sm:text-3xl text-gray-300">
            <FaPython title="Python" />
            <FaNodeJs title="Node.js" />
            <SiMongodb title="MongoDB" /> 
            <FaReact title="React" />
            <SiHtml5 title="HTML" />
            <SiCss3 title="CSS" />
            <SiTypescript title="Typescript" />
            <FaDocker title="Docker" />
            <SiGithub title="GitHub" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-10">
          <h2 className="text-xs sm:text-sm font-bold text-gray-400 tracking-wide">QUICK LINKS</h2>
          <ul className="mt-4 space-y-3 text-gray-300 text-sm sm:text-base">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-2 py-1 rounded-md transition ${
                      isActive
                        ? "text-brand-accent font-semibold bg-brand-light/10"
                        : "hover:text-brand-accent"
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-gray-500 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Emoruwa Emmanuel
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-brand-light text-brand-dark p-4 sm:p-6 md:p-10 md:ml-72 mt-14 md:mt-0">
        {children}
      </main>
    </div>
  );
}
