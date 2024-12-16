import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function Projects() {
  return (
    <>
    <Navbar/>
    <Layout>
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          title="Weather App"
          description="A weather forecasting app using React and an external API."
        />
      </div>
    </main>
    </Layout>
    </>
  );
}
