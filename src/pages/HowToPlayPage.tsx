
import Navbar from "@/components/Navbar";
import HowToPlay from "@/components/HowToPlay";
import Footer from "@/components/Footer";

const HowToPlayPage = () => {
  return (
    <div className="min-h-screen bg-tetris-bg text-white">
      <Navbar />
      <div className="pt-24">
        <HowToPlay />
      </div>
      <Footer />
    </div>
  );
};

export default HowToPlayPage;
