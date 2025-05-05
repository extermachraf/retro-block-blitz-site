
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerOverlay,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-tetris-bg/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-pixel text-tetris-i neon-text text-xl">TETRIS</Link>
        </div>
        
        <button
          className="text-white hover:text-tetris-i z-50 transition-all hover:rotate-180 duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Side menu with improved animation */}
      <div 
        className={`fixed top-0 right-0 h-full bg-tetris-bg/95 backdrop-blur-md w-64 shadow-lg 
                   transition-all duration-300 ease-in-out z-40 transform
                   ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                   border-l-2 border-tetris-i/20`}
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
                className="text-white hover:text-tetris-i py-2 text-lg transition-all duration-200 border-b border-gray-800 hover:border-tetris-i/50 group flex items-center"
                onClick={closeMenu}
              >
                <span className="w-2 h-2 rounded-full bg-tetris-i mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-10">
            <Link to="/play" onClick={closeMenu}>
              <Button className="w-full bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold py-6 neon-border">
                Play Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Improved overlay with fade animation */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 animate-fade-in"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
