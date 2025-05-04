
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tetris-bg/90 to-tetris-bg"></div>
        <div className="tetris-grid h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur-md p-10 rounded-xl border border-gray-800 shadow-lg neon-border text-center">
          <h2 className="font-pixel text-3xl md:text-4xl mb-6 neon-text">READY TO PLAY?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join millions of players worldwide in the ultimate Tetris experience. 
            Start playing now for free and see if you can become the next Tetris champion!
          </p>
          <Button size="lg" className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold px-8 py-6 text-lg">
            PLAY TETRIS NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
