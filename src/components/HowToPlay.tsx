
import { Card, CardContent } from "@/components/ui/card";

const HowToPlay = () => {
  const steps = [
    {
      number: "01",
      title: "Move the Blocks",
      description: "Use the arrow keys to move pieces left, right, or down. Press the up arrow to rotate pieces.",
      color: "bg-tetris-i"
    },
    {
      number: "02",
      title: "Complete Lines",
      description: "Fill horizontal lines with blocks to clear them and score points. The more lines you clear at once, the higher your score!",
      color: "bg-tetris-l"
    },
    {
      number: "03",
      title: "Prevent Overflow",
      description: "Don't let the blocks stack to the top! The game ends when the blocks reach the top of the playing field.",
      color: "bg-tetris-t"
    },
    {
      number: "04",
      title: "Level Up",
      description: "As you clear more lines, you'll advance to higher levels with increased speed and difficulty.",
      color: "bg-tetris-s"
    }
  ];

  return (
    <section id="how-to-play" className="py-24 bg-gradient-to-b from-tetris-bg to-tetris-bg/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-text">HOW TO PLAY</h2>
          <div className="h-1 w-24 tetris-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            New to Tetris? Don't worry! The game is easy to learn but challenging to master. 
            Follow these simple steps to get started on your journey to becoming a Tetris champion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-secondary/50 backdrop-blur-sm border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${step.color} text-tetris-bg font-pixel text-2xl p-3 rounded-lg`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-6 bg-secondary/30 backdrop-blur-sm border border-gray-800 rounded-lg">
          <h3 className="font-pixel text-center text-xl mb-4">CONTROLLER KEYS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 border border-gray-700 rounded bg-black/20">
              <div className="text-xl mb-1">⬅️</div>
              <div className="text-sm text-gray-400">Move Left</div>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-black/20">
              <div className="text-xl mb-1">➡️</div>
              <div className="text-sm text-gray-400">Move Right</div>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-black/20">
              <div className="text-xl mb-1">⬆️</div>
              <div className="text-sm text-gray-400">Rotate</div>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-black/20">
              <div className="text-xl mb-1">⬇️</div>
              <div className="text-sm text-gray-400">Soft Drop</div>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-black/20 md:col-span-2">
              <div className="text-xl mb-1">Spacebar</div>
              <div className="text-sm text-gray-400">Hard Drop</div>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-black/20 md:col-span-2">
              <div className="text-xl mb-1">P</div>
              <div className="text-sm text-gray-400">Pause Game</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
