"use client";
import Link from "next/link"; // ✅ Better navigation
import Image from "next/image";
import { FaArrowRight, FaClock } from "react-icons/fa6";

export default function BlogCard({ post }) {
  // We're pivoting from social metrics to "Engineering Authority"
  // If you want to keep likes/comments, I recommend pulling real data from an API
  
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-accent/50 flex flex-col h-full">
      
      {/* Cover Image with subtle overlay */}
      {post.coverImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* Date & Reading Time */}
        <div className="flex items-center gap-4 mb-3 text-[10px] font-mono uppercase tracking-widest text-slate-500">
          <span className="flex items-center gap-1">
            <FaClock className="text-brand-accent" />
            5 min read
          </span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer Action */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-200 group/link"
          >
            Read Article
            <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 group-hover/link:bg-brand-accent group-hover/link:text-white transition-all">
              <FaArrowRight size={10} className="-rotate-45 group-hover/link:rotate-0 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
