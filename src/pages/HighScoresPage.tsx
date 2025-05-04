
import Navbar from "@/components/Navbar";
import HighScores from "@/components/HighScores";
import Footer from "@/components/Footer";

const HighScoresPage = () => {
  return (
    <div className="min-h-screen bg-tetris-bg text-white">
      <Navbar />
      <div className="pt-24">
        <HighScores />
      </div>
      <Footer />
    </div>
  );
};

export default HighScoresPage;
