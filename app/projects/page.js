import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/contentful";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-12">
      {/* Projects Header */}
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Build Registry</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Works</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A collection of systems ranging from autonomous AI agents to decentralized finance protocols. 
          Focusing on <span className="text-slate-900 dark:text-white font-medium">scalability, security, and impact.</span>
        </p>
      </header>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard key={project.slug || i} project={project} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-slate-500 font-mono italic">Initializing project gallery... (No data found)</p>
          </div>
        )}
      </div>

      {/* Bottom Technical Scope Footer */}
      <section className="mt-20 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Have a complex technical challenge?</h3>
            <p className="text-slate-400 text-sm mt-1">I'm currently open to collaborations on AI and Web3 infrastructure.</p>
          </div>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-brand-accent text-slate-950 font-bold rounded-xl hover:bg-white transition-colors whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -mr-32 -mt-32"></div>
      </section>
    </div>
  );
}
