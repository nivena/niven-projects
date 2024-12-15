import Navbar from "@/components/Navbar";

export default function Contact() {
    return (<>
    <Navbar/>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Feel free to reach out to me at:
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          yourname@example.com
        </a>
      </main>
      </>
    );
  }
  