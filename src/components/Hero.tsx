
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 tetris-grid relative overflow-hidden">
      {/* Background blocks */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array(10).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute w-10 h-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                '#00f0f0', '#0000f0', '#f0a000', 
                '#f0f000', '#00f000', '#a000f0', '#f00000'
              ][i % 7],
              opacity: 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `tetris-fall ${2 + Math.random() * 8}s linear ${Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-tetris-appear">
            <h1 className="font-pixel text-4xl md:text-5xl lg:text-6xl mb-6 neon-text">
              CLASSIC <br />
              <span className="text-tetris-i">TETRIS</span> <br />
              REIMAGINED
            </h1>
            <p className="text-gray-300 mb-8 text-lg md:max-w-lg">
              Experience the iconic block-stacking game with modern features, 
              competitive multiplayer, and stunning visuals. Challenge friends 
              or climb the global leaderboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold">
                Play Now
              </Button>
              <Button size="lg" variant="outline" className="border-tetris-t hover:bg-tetris-t/20 text-white">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] animate-tetris-appear">
            {/* Stylized Tetris game board */}
            <div className="absolute inset-0 border-2 border-gray-700 bg-tetris-bg/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="tetris-grid h-full w-full relative">
                {/* Tetromino pieces */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 grid grid-cols-4 grid-rows-4 animate-tetris-rotate origin-center">
                  {/* T piece */}
                  <div className="tetris-block bg-tetris-t"></div>
                  <div className="tetris-block bg-tetris-t"></div>
                  <div className="tetris-block bg-tetris-t"></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className="tetris-block bg-tetris-t"></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/4 animate-tetris-fall" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
                  {/* I piece */}
                  <div className="grid grid-rows-4 grid-cols-1">
                    <div className="tetris-block bg-tetris-i"></div>
                    <div className="tetris-block bg-tetris-i"></div>
                    <div className="tetris-block bg-tetris-i"></div>
                    <div className="tetris-block bg-tetris-i"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-10 animate-tetris-fall" style={{ animationDuration: '5s', animationIterationCount: 'infinite' }}>
                  {/* O piece */}
                  <div className="grid grid-cols-2 grid-rows-2">
                    <div className="tetris-block bg-tetris-o"></div>
                    <div className="tetris-block bg-tetris-o"></div>
                    <div className="tetris-block bg-tetris-o"></div>
                    <div className="tetris-block bg-tetris-o"></div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-10 animate-tetris-fall" style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}>
                  {/* S piece */}
                  <div className="grid grid-cols-3 grid-rows-2">
                    <div className=""></div>
                    <div className="tetris-block bg-tetris-s"></div>
                    <div className="tetris-block bg-tetris-s"></div>
                    <div className="tetris-block bg-tetris-s"></div>
                    <div className="tetris-block bg-tetris-s"></div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side panel */}
            <div className="absolute -right-4 top-10 bottom-10 w-24 border-2 border-gray-700 bg-tetris-bg/80 backdrop-blur-sm rounded-lg p-2">
              <div className="text-xs text-center font-pixel mb-2 text-tetris-i">NEXT</div>
              <div className="grid grid-cols-2 grid-rows-2 gap-0 justify-center mt-2">
                <div className="tetris-block bg-tetris-z"></div>
                <div className=""></div>
                <div className="tetris-block bg-tetris-z"></div>
                <div className="tetris-block bg-tetris-z"></div>
              </div>
              <div className="mt-8 text-xs text-center font-pixel text-white">SCORE</div>
              <div className="text-center font-pixel text-tetris-i">12500</div>
              <div className="mt-4 text-xs text-center font-pixel text-white">LEVEL</div>
              <div className="text-center font-pixel text-tetris-i">8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
