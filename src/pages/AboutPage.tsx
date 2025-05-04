
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-tetris-bg text-white">
      <Navbar />
      <div className="pt-24">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
