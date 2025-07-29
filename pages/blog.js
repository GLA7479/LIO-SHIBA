import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <VideoBackground src="/videos/background.mp4" poster="/images/poster.jpg" />
    <>
      
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl text-yellow-400 mb-6">Blog & Updates</h1>
        <p className="text-lg">Blog posts will be displayed here soon.</p>
      </main>
      <Footer />
    </>
  );
}