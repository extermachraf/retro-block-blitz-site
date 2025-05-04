
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
          <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-text">HIGH SCORES</h2>
          <div className="h-1 w-24 tetris-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The best Tetris players from around the world. Can you make it to the top?
            Clear lines, score points, and see your name on the leaderboard.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-800 rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow className="bg-tetris-i/10 border-b border-gray-800">
                    <TableHead className="font-pixel">RANK</TableHead>
                    <TableHead className="font-pixel">PLAYER</TableHead>
                    <TableHead className="font-pixel text-right">SCORE</TableHead>
                    <TableHead className="font-pixel text-right">LEVEL</TableHead>
                    <TableHead className="font-pixel text-right">LINES</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scores.map((score) => (
                    <TableRow 
                      key={score.rank}
                      className="bg-secondary/30 backdrop-blur-sm border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                    >
                      <TableCell className="font-bold">
                        {score.rank === 1 && (
                          <span className="text-yellow-500">🏆 </span>
                        )}
                        {score.rank === 2 && (
                          <span className="text-gray-400">🥈 </span>
                        )}
                        {score.rank === 3 && (
                          <span className="text-amber-700">🥉 </span>
                        )}
                        {score.rank}
                      </TableCell>
                      <TableCell>{score.player}</TableCell>
                      <TableCell className="text-right font-mono text-tetris-i">{score.score.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{score.level}</TableCell>
                      <TableCell className="text-right">{score.lines}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-6">Think you can beat these scores? Start playing now and prove your skills!</p>
          <button className="bg-tetris-i hover:bg-tetris-i/80 text-tetris-bg font-bold py-3 px-6 rounded-lg transition-colors">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighScores;
