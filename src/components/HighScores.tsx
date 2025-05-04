
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal, Award } from "lucide-react";

const HighScores = () => {
  const scores = [
    { rank: 1, player: "TetrisMaster", score: 999999, level: 30, lines: 400 },
    { rank: 2, player: "BlockWizard", score: 875450, level: 27, lines: 367 },
    { rank: 3, player: "LineCleared", score: 743200, level: 25, lines: 320 },
    { rank: 4, player: "TetrisKing", score: 687900, level: 23, lines: 298 },
    { rank: 5, player: "PixelStacker", score: 586750, level: 22, lines: 278 }
  ];

  return (
    <section id="high-scores" className="py-24 bg-tetris-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-4 neon-text relative inline-block">
            <span className="absolute -left-8 -top-8 text-yellow-500 animate-pulse">
              <Trophy size={32} />
            </span>
            HIGH SCORES
            <span className="absolute -right-8 -top-8 text-yellow-500 animate-pulse">
              <Trophy size={32} />
            </span>
          </h2>
          <div className="h-1 w-36 tetris-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            The best Tetris players from around the world. Can you make it to the top?
            Clear lines, score points, and see your name on the leaderboard.
          </p>
        </div>

        <div className="relative">
          {/* Tetris block decorations */}
          <div className="absolute -left-10 top-10 w-8 h-8 bg-tetris-i rotate-12 opacity-20"></div>
          <div className="absolute -right-10 bottom-10 w-12 h-12 bg-tetris-t -rotate-12 opacity-20"></div>
          <div className="absolute left-1/4 -top-6 w-6 h-6 bg-tetris-l rotate-45 opacity-20"></div>
          <div className="absolute right-1/4 -bottom-6 w-6 h-6 bg-tetris-o -rotate-45 opacity-20"></div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-2 border-gray-800 rounded-lg shadow-[0_0_15px_rgba(0,240,240,0.3)]">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-tetris-i/20 border-b border-gray-800">
                      <TableHead className="font-pixel text-tetris-i">RANK</TableHead>
                      <TableHead className="font-pixel text-tetris-i">PLAYER</TableHead>
                      <TableHead className="font-pixel text-tetris-i text-right">SCORE</TableHead>
                      <TableHead className="font-pixel text-tetris-i text-right">LEVEL</TableHead>
                      <TableHead className="font-pixel text-tetris-i text-right">LINES</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scores.map((score) => (
                      <TableRow 
                        key={score.rank}
                        className="bg-tetris-bg/80 backdrop-blur-sm border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                      >
                        <TableCell className="font-bold">
                          {score.rank === 1 && (
                            <span className="flex items-center text-yellow-500">
                              <Trophy className="mr-2" /> 1
                            </span>
                          )}
                          {score.rank === 2 && (
                            <span className="flex items-center text-gray-400">
                              <Medal className="mr-2" /> 2
                            </span>
                          )}
                          {score.rank === 3 && (
                            <span className="flex items-center text-amber-700">
                              <Award className="mr-2" /> 3
                            </span>
                          )}
                          {score.rank > 3 && score.rank}
                        </TableCell>
                        <TableCell className="font-pixel">{score.player}</TableCell>
                        <TableCell className="text-right font-mono text-tetris-i">{score.score.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <span className="inline-flex items-center justify-center bg-tetris-i/20 px-2 py-1 rounded text-tetris-i">
                            {score.level}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">{score.lines}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-8 text-lg">Think you can beat these scores? Start playing now and prove your skills!</p>
          <Link to="/play" className="inline-block">
            <Button className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 shadow-[0_0_10px_rgba(0,240,240,0.5)]">
              Play Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighScores;
