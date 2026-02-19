"use client";
import { FaGithub, FaArrowRight, FaCode } from "react-icons/fa6";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      
      {/* Decorative Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Project Image with Zoom Effect */}
      {project.image && (
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Tech Stack Overlay (Mobile Friendly) */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-md px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-tighter">
            {new Date(project.createdDate).getFullYear()}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Action Buttons - Pushed to Bottom */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex gap-4">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <FaGithub className="text-lg" />
                <span>Source</span>
              </a>
            )}
          </div>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
          >
            Live Demo
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
