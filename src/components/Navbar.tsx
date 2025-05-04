
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
          <span className="font-pixel text-tetris-i neon-text text-xl">TETRIS</span>
          <div className="hidden md:flex ml-8 space-x-4">
            {["Home", "About", "How to Play", "High Scores"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-tetris-i transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold">
            Play Now
          </Button>
        </div>
        
        <button
          className="md:hidden text-white hover:text-tetris-i"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-tetris-bg/95 backdrop-blur-md absolute w-full py-4 shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {["Home", "About", "How to Play", "High Scores"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white hover:text-tetris-i py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold w-full mt-2">
            Play Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
