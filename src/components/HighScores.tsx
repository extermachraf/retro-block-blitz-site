import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HighScores = () => {
  // Placeholder for high scores data
  const highScores = [
    { id: 1, name: "Player1", score: 10000 },
    { id: 2, name: "Player2", score: 9000 },
    { id: 3, name: "Player3", score: 8000 },
    { id: 4, name: "Player4", score: 7000 },
    { id: 5, name: "Player5", score: 6000 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-4">High Scores</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-tetris-bg rounded shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 border-b">Rank</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Score</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score, index) => (
              <tr key={score.id} className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'} text-white`}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{score.name}</td>
                <td className="py-2 px-4 border-b text-center">{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default HighScores;
