// components/ScoreBoard.jsx
export default function ScoreBoard({ score = 0, bestScore = 0, round = 1 }) {
  return (
    <div className="score-board">
      <p className="score-para">
        Score: <span className="score-sp">{score}</span>
      </p>
      <p className="best-score-para">
        Best Score: <span className="best-score-sp">{bestScore}</span>
      </p>
      <p className="round-para">
        Round: <span className="round-sp">{round}</span>
      </p>
    </div>
  );
}
