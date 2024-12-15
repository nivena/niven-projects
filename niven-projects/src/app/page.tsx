import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar /> 
    <main className="container mx-auto p-6 space-y-12">
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

      {/* About Me Section */}
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi! I’m a developer passionate about creating responsive and dynamic web applications. I enjoy solving problems and learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript & TypeScript</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Feel free to reach out via email at <strong>niv.aldridge@gmail.com</strong>.</p>
      </section>

    </main>
    </>
  );
}
