import { getBlogPost } from "../../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaRegClock, FaCalendarAlt } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.coverImage || "/og-image.png"],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Post not found</h1>
        <Link href="/blog" className="mt-4 text-brand-blue hover:underline flex items-center gap-2">
          <FaArrowLeft size={12} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Back Button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors mb-8 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Articles
      </Link>

      {/* Header Info */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-mono">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-brand-accent" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-2">
            <FaRegClock className="text-brand-accent" />
            8 min read
          </span>
        </div>
      </header>

      {/* Hero Image */}
      {post.coverImage && (
        <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      )}

      {/* Content Area */}
      <div className="prose prose-slate dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
        prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800
        prose-img:rounded-2xl prose-img:shadow-lg
        sm:prose-lg md:prose-xl">
        
        {documentToReactComponents(post.content)}
      </div>

      {/* Footer / Newsletter Placeholder */}
      <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-slate-100 dark:bg-slate-900/50 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-2">Enjoyed this technical dive?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
            I write about AI architecture and Web3 infrastructure twice a month.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
            Let's discuss this project
          </Link>
        </div>
      </footer>
    </article>
  );
}
