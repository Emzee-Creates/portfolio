"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";

export default function BlogCard({ post }) {
  const [likes, setLikes] = useState(87);
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
          {post.title}
        </h3>
        <span className="text-xs sm:text-sm text-gray-400">
          {new Date(post.date).toDateString()}
        </span>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Excerpt */}
      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
        {post.excerpt}
      </p>

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
            <span>23</span>
          </div>
        </div>
        <a
          href={`/blog/${post.slug}`}
          className="flex items-center space-x-1 hover:text-brand-accent"
        >
          <FaExternalLinkAlt />
          <span>Read More</span>
        </a>
      </div>
    </div>
  );
}
