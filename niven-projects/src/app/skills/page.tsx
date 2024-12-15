import Navbar from "@/components/Navbar";

export default function Skills() {
    return (
        <>
        <Navbar/>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="p-2 border rounded-lg text-center shadow-sm">HTML & CSS</li>
          <li className="p-2 border rounded-lg text-center shadow-sm">JavaScript</li>
          <li className="p-2 border rounded-lg text-center shadow-sm">React</li>
          <li className="p-2 border rounded-lg text-center shadow-sm">Next.js</li>
          <li className="p-2 border rounded-lg text-center shadow-sm">Tailwind CSS</li>
        </ul>
      </main>
    </>);
  }
  