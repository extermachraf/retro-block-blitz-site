
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const PlayPage = () => {
  return (
    <div className="min-h-screen bg-tetris-bg text-white">
      <Navbar />
      <div className="pt-24 flex items-center justify-center min-h-[calc(100vh-180px)]">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default PlayPage;
