
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, RotateCw, ArrowDown, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowToPlay = () => {
  const steps = [
    {
      number: "01",
      title: "Move the Blocks",
      description: "Use the arrow keys to move pieces left, right, or down. Press the up arrow to rotate pieces.",
      color: "bg-tetris-i",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      number: "02",
      title: "Complete Lines",
      description: "Fill horizontal lines with blocks to clear them and score points. The more lines you clear at once, the higher your score!",
      color: "bg-tetris-l",
      icon: <Layers className="h-5 w-5" />
    },
    {
      number: "03",
      title: "Prevent Overflow",
      description: "Don't let the blocks stack to the top! The game ends when the blocks reach the top of the playing field.",
      color: "bg-tetris-t",
      icon: <ArrowDown className="h-5 w-5" />
    },
    {
      number: "04",
      title: "Level Up",
      description: "As you clear more lines, you'll advance to higher levels with increased speed and difficulty.",
      color: "bg-tetris-s",
      icon: <RotateCw className="h-5 w-5" />
    }
  ];

  return (
    <section id="how-to-play" className="py-24 bg-gradient-to-b from-tetris-bg to-tetris-bg/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-4 neon-text">HOW TO PLAY</h2>
          <div className="h-1 w-36 tetris-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            New to Tetris? Don't worry! The game is easy to learn but challenging to master. 
            Follow these simple steps to get started on your journey to becoming a Tetris champion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Decorative tetris pieces */}
          <div className="absolute -left-10 -top-10 w-20 h-10 bg-tetris-i/10 rotate-45"></div>
          <div className="absolute -right-10 -bottom-10 w-20 h-10 bg-tetris-t/10 -rotate-12"></div>
          
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-sm border-gray-800 hover:shadow-[0_0_15px_rgba(0,240,240,0.3)] transition-all hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`${step.color} text-tetris-bg font-pixel text-2xl p-4 rounded-lg flex flex-col items-center justify-center shadow-lg min-w-[4rem]`}>
                    {step.number}
                    <div className="mt-2 text-tetris-bg/70">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 font-pixel text-white">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-sm border border-gray-800 rounded-lg shadow-[0_0_15px_rgba(0,240,240,0.2)]">
          <h3 className="font-pixel text-center text-2xl mb-6 text-tetris-i">CONTROLLER KEYS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors">
              <div className="text-2xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">⬅️</div>
              <div className="text-sm text-gray-300">Move Left</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors">
              <div className="text-2xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">➡️</div>
              <div className="text-sm text-gray-300">Move Right</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors">
              <div className="text-2xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">⬆️</div>
              <div className="text-sm text-gray-300">Rotate</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors">
              <div className="text-2xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">⬇️</div>
              <div className="text-sm text-gray-300">Soft Drop</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors md:col-span-2">
              <div className="text-xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">Spacebar</div>
              <div className="text-sm text-gray-300">Hard Drop</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 hover:border-tetris-i/50 transition-colors md:col-span-2">
              <div className="text-xl mb-3 bg-tetris-i/20 rounded-full p-3 inline-flex items-center justify-center">P</div>
              <div className="text-sm text-gray-300">Pause Game</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-lg">Ready to test your skills? Start playing now!</p>
          <Link to="/play">
            <Button className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 shadow-[0_0_10px_rgba(0,240,240,0.5)]">
              Play Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
