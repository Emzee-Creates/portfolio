import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import { getProjects, getBlogPosts } from "../lib/contentful";

export default async function Page() {
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8">
      {/* About Me */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-brand-dark tracking-tight">
          About Me
        </h2>
        <div className="bg-white shadow-md rounded-2xl p-6 md:p-8">
          {/* Profile Image - only visible on mobile */}
          <div className="flex justify-center mb-4 md:hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full border-4 border-brand-accent object-cover"
            />
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-left">
            Hi there! My name is Emoruwa Emmanuel and I’m a Tech enthusiast with a deep passion for Artificial Intelligence and Blockchain Systems.
            I’m driven by the belief that emerging technologies have the power 
            to reshape the world and solve some of the most pressing challenges 
            we face today.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3 text-left">
            Over the past year, I’ve had the opportunity to participate in two hackathons, one hosted by Solana and the other by Google. 
            These experiences have helped in sharpening my skills in problem-solving, rapid prototyping, and collaborative teamwork, while reinforcing my passion for building impactful, real-world solutions.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3 text-left">
            My goal is to become a software engineer who can harness the power of AI to create innovative solutions that
            drive meaningful change. I’m especially interested in how AI can be applied to improve accessibility, efficiency, and sustainability in everyday life.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3 text-left">
            When I’m not coding, you’ll probably find me listening to music, gaming, or enjoying sports. 
            These hobbies give me a sense of balance, creativity, and teamwork that I carry into my technical projects as well.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-brand-dark tracking-tight">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-6 inline-block text-brand-accent font-semibold hover:underline"
        >
          View All Projects →
        </Link>
      </section>

      {/* Blog Posts */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-brand-dark tracking-tight">
          Recent Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((b, i) => (
            <BlogCard key={i} post={b} />
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-6 inline-block text-brand-accent font-semibold hover:underline"
        >
          View All Articles →
        </Link>
      </section>
    </div>
  );
}
