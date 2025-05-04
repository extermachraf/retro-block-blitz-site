
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-tetris-bg/90 backdrop-blur-md shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-pixel text-tetris-i neon-text text-xl">TETRIS</Link>
        </div>
        
        <button
          className="text-white hover:text-tetris-i z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Side menu for all screen sizes */}
      <div 
        className={`fixed top-0 right-0 h-full bg-tetris-bg/95 backdrop-blur-md w-64 shadow-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "How to Play", path: "/how-to-play" },
              { name: "High Scores", path: "/high-scores" }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-white hover:text-tetris-i py-2 text-lg transition-colors duration-200 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-10">
            <Link to="/play">
              <Button className="w-full bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold py-6">
                Play Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
