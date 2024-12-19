import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function About() {
    return (<>
      <Navbar />
      <Layout>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          Hello! I'm a Mathematics teacher who has developed a passion for web development and working on my dreams to build responsive and beautiful web applications.
        </p>
      </main>
      </Layout>
    </>);
  }
  