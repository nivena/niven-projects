import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Layout>
        <main className="container mx-auto p-6 flex flex-col items-center justify-center text-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Feel free to reach out to me at:
          </p>
          <a
            href="mailto:niv.aldridge@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Niv,%0D%0A%0D%0AI would like to discuss..."
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            niv.aldridge@gmail.com
          </a>
        </main>
      </Layout>
    </>
  );
}
