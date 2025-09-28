import { getBlogPost } from "../../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.coverImage || "/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
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
      <h1 className="text-xl sm:text-2xl font-bold text-center mt-10">
        Post not found
      </h1>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-brand-dark leading-snug">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 text-xs sm:text-sm mb-5">
        {new Date(post.date).toDateString()}
      </p>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative w-full max-h-72 mb-6 overflow-hidden rounded-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={true}
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-sm sm:prose-base md:prose-lg prose-slate max-w-none">
        {documentToReactComponents(post.content)}
      </div>
    </article>
  );
}
