"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [likes, setLikes] = useState(120);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-3 sm:p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-dark">
          {project.title}
        </h3>
        <span className="text-xs sm:text-sm text-gray-400">
          {new Date(project.createdDate).toDateString()}
        </span>
      </div>

      {/* Image */}
      {project.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm bg-brand-light text-brand-dark px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between text-gray-500 text-xs sm:text-sm">
        <div className="flex items-center space-x-4">
          <button onClick={toggleLike} className="flex items-center space-x-1 transition">
            <FaHeart
              className={`transition-transform ${
                liked ? "text-red-500 scale-125 animate-pulse" : "hover:text-red-400"
              }`}
            />
            <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1 text-blue-500">
            <FaComment />
            <span>15</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {project.gitHubLink && (
            <a
              href={project.gitHubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 hover:text-brand-accent"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-brand-accent"
          >
            <FaExternalLinkAlt />
            <span>View</span>
          </a>
        </div>
      </div>
    </div>
  );
}
