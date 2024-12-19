import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Navbar /> 
    <Layout>
    <main className="container mx-auto p-6 space-y-12">
      {/* Hero Section */}
      
        <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/Backgroundhero.webp')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Adds a dark overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-lg md:text-2xl mb-8">Exploring the Future of Web Development</p>
    <Link href="/contact">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300">
    Contact Me
  </button>
    </Link>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="My Portfolio"
            description="A personal portfolio website built with Next.js and Tailwind CSS."
          />
          <ProjectCard
            title="Weather App"
            description="A weather forecasting app using React and an external API."
          />
          
        </div>
      </section>
     

    </main>
    </Layout>
    </>
  );
}
