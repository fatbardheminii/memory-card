export default function ScoreBoard({score, bestScore}) {
    return (
      <div className="score-board">
        <p className="score-para">
          Score: <span className="score-sp">0 {score}</span>
        </p>
        <p className="best-score-para">
          Best Score: <span className="best-score-sp">0 {bestScore}</span>
        </p>
      </div>
    );
}