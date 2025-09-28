import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// ✅ Fetch projects
export async function getProjects() {
  const res = await client.getEntries({
    content_type: "portfolio", // matches your Contentful model
    order: "-fields.createdDate",
  });

  return res.items.map((item) => ({
    title: item.fields.title,
    description: item.fields.description,
    image: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : null,
    techStack: item.fields.techStack
      ? item.fields.techStack.split(",").map((t) => t.trim())
      : [],
    gitHubLink: item.fields.gitHubLink || null,
    createdDate: item.fields.createdDate,
    projectLink: item.fields.projectLink || null,
  }));
}

// ✅ Fetch all blog posts
export async function getBlogPosts() {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.date",
  });

  return res.items.map((item) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    date: item.fields.date,
    excerpt: item.fields.excerpt,
    coverImage: item.fields.coverImage?.fields?.file?.url
      ? `https:${item.fields.coverImage.fields.file.url}`
      : null,
  }));
}

// ✅ Fetch a single blog post by slug
export async function getBlogPost(slug) {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) return null;

  const post = res.items[0];

  return {
    title: post.fields.title,
    date: post.fields.date,
    coverImage: post.fields.coverImage?.fields?.file?.url
      ? `https:${post.fields.coverImage.fields.file.url}`
      : null,
    content: post.fields.content, // rich text JSON
  };
}
