
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToPlay from "@/components/HowToPlay";
import HighScores from "@/components/HighScores";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tetris-bg text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowToPlay />
      <HighScores />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
