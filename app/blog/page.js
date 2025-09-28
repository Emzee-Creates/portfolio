import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";
import { getBlogPosts } from "../../lib/contentful";

export default async function BlogIndexPage() {
  const blogPosts = await getBlogPosts();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">All Articles</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </div>
    </Layout>
  );
}
