
import { Button } from "@/components/ui/button";

const Feature = ({ icon, color, title, description }: { 
  icon: string, 
  color: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:translate-y-[-5px]">
      <div className={`w-12 h-12 mb-4 rounded flex items-center justify-center ${color}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "🎮",
      color: "bg-tetris-i/20",
      title: "Classic Gameplay",
      description: "Experience the original Tetris gameplay mechanics that made the game a worldwide phenomenon."
    },
    {
      icon: "🏆",
      color: "bg-tetris-j/20",
      title: "Global Leaderboards",
      description: "Compete with players worldwide and see your name climb to the top of the rankings."
    },
    {
      icon: "🎨",
      color: "bg-tetris-l/20",
      title: "Modern Graphics",
      description: "Enjoy stunning visual effects and smooth animations that enhance the classic experience."
    },
    {
      icon: "🔄",
      color: "bg-tetris-o/20",
      title: "Multiple Game Modes",
      description: "Challenge yourself with various game modes from sprint to marathon and battle royale."
    },
    {
      icon: "📱",
      color: "bg-tetris-s/20",
      title: "Play Anywhere",
      description: "Fully responsive design lets you enjoy Tetris on any device, from desktop to mobile."
    },
    {
      icon: "👥",
      color: "bg-tetris-t/20",
      title: "Multiplayer Battles",
      description: "Challenge friends to real-time Tetris battles and prove who's the ultimate block master."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-tetris-bg">
        <div className="tetris-grid h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-text">GAME FEATURES</h2>
          <div className="h-1 w-24 tetris-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our modern take on the classic Tetris game brings new exciting features 
            while preserving the addictive gameplay that made it a timeless masterpiece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold">
            Start Playing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
