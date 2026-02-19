import BlogCard from "../../components/BlogCard";
import { getBlogPosts } from "../../lib/contentful";

export default async function BlogIndexPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="space-y-12">
      {/* Blog Header */}
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Engineering Journal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Articles & <span className="text-brand-blue">Insights</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Deep dives into AI architecture, blockchain protocols, and the future of decentralized systems.
        </p>
      </header>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, i) => (
            <BlogCard key={post.slug || i} post={post} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-500 font-mono">No articles found in the system. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
