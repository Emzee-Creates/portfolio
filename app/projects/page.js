import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/contentful";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Layout>
      <div className="w-full text-left">
        <h1 className="text-3xl font-bold mb-6">All Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
